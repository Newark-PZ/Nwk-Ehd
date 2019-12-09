import { DOCUMENT, Location, PlatformLocation, PopStateEvent, ViewportScroller } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

type ScrollPosition = [number, number];
interface ScrollPositionPopStateEvent extends PopStateEvent {
    // If there is history state, it should always include `scrollPosition`.
    state?: { scrollPosition: ScrollPosition };
}

export const topMargin = 16;
/**
 * A service that scrolls document elements into view
 */
@Injectable()
export class ScrollService implements OnDestroy {

    readonly onDestroy = new Subject<any>();
    readonly storage: Storage;

    // The scroll position which has to be restored, after a `popstate` event.
    poppedStateScrollPosition: ScrollPosition | undefined = undefined;
    // Whether the browser supports the necessary features for manual scroll restoration.
    supportManualScrollRestoration: boolean =
        !!window && ('scrollTo' in window) && ('scrollX' in window) && ('scrollY' in window) &&
        !!history && ('scrollRestoration' in history);

    private _topOffset: number | undefined;
    private _topOfPageElement: Element;

    // Offset from the top of the document to bottom of any static elements
    // at the top (e.g. toolbar) + some margin
    get topOffset(): any {
        if (!this._topOffset) {
            const toolbar = this.document.querySelector('.app-toolbar');
            // tslint:disable-next-line: restrict-plus-operands
            this._topOffset = (toolbar && toolbar.clientHeight || 0) + topMargin;
        }

        // tslint:disable-next-line: no-non-null-assertion
        return this._topOffset!;
    }

    get topOfPageElement(): any {
        if (!this._topOfPageElement) {
            this._topOfPageElement = this.document.getElementById('top-of-page') || this.document.body;
        }

        return this._topOfPageElement;
    }

    constructor(
        @Inject(DOCUMENT) readonly document: any,
        readonly platformLocation: PlatformLocation,
        readonly viewportScroller: ViewportScroller,
        readonly location: Location) {
        try {
            this.storage = window.sessionStorage;
        } catch {
            // When cookies are disabled in the browser, even trying to access
            // `window.sessionStorage` throws an error. Use a no-op storage.
            this.storage = {
                clear: () => undefined,
                // tslint:disable-next-line: no-null-keyword
                getItem: () => null,
                // tslint:disable-next-line: no-null-keyword
                key: () => null,
                length: 0,
                removeItem: () => undefined,
                setItem: () => undefined
            };
        }

        // On resize, the toolbar might change height, so "invalidate" the top offset.
        fromEvent(window, 'resize')
            .pipe(takeUntil(this.onDestroy))
            .subscribe(() => this._topOffset = undefined);

        fromEvent(window, 'scroll')
            .pipe(debounceTime(250), takeUntil(this.onDestroy))
            // tslint:disable-next-line: no-void-expression
            .subscribe(() => this.updateScrollPositionInHistory());

        fromEvent(window, 'beforeunload')
            .pipe(takeUntil(this.onDestroy))
            // tslint:disable-next-line: no-void-expression
            .subscribe(() => this.updateScrollLocationHref());

        // Change scroll restoration strategy to `manual` if it's supported.
        if (this.supportManualScrollRestoration) {
            history.scrollRestoration = 'manual';

            // We have to detect forward and back navigation thanks to popState event.
            const locationSubscription = this.location.subscribe((event: ScrollPositionPopStateEvent) => {
                // The type is `hashchange` when the fragment identifier of the URL has changed. It allows
                // us to go to position just before a click on an anchor.
                if (event.type === 'hashchange') {
                    this.scrollToPosition();
                } else {
                    // Navigating with the forward/back button, we have to remove the position from the
                    // session storage in order to avoid a race-condition.
                    this.removeStoredScrollInfo();
                    // The `popstate` event is always triggered by a browser action such as clicking the
                    // forward/back button. It can be followed by a `hashchange` event.
                    this.poppedStateScrollPosition = event.state ? event.state.scrollPosition : undefined;
                }
            });

            // tslint:disable-next-line: no-void-expression
            this.onDestroy.subscribe(() => locationSubscription.unsubscribe());
        }

        // If this was not a reload, discard the stored scroll info.
        if (window.location.href !== this.getStoredScrollLocationHref()) {
            this.removeStoredScrollInfo();
        }
    }

    ngOnDestroy(): void {
        this.onDestroy.next();
    }

    /**
     * Scroll to the element with id extracted from the current location hash fragment.
     * Scroll to top if no hash.
     * Don't scroll if hash not found.
     */
    scroll(): void {
        const hash = this.getCurrentHash();
        const element: HTMLElement = hash
            ? this.document.getElementById(hash)
            : this.topOfPageElement;
        this.scrollToElement(element);
    }

    /**
     * test if the current location has a hash
     */
    isLocationWithHash(): boolean {
        return !!this.getCurrentHash();
    }

    /**
     * When we load a document, we have to scroll to the correct position depending on whether this is a new location,
     * a back/forward in the history, or a refresh
     * @param delay before we scroll to the good position
     */
    scrollAfterRender(delay: number): any {
        // If we do rendering following a refresh, we use the scroll position from the storage.
        const storedScrollPosition = this.getStoredScrollPosition();
        if (storedScrollPosition) {
            this.viewportScroller.scrollToPosition(storedScrollPosition);
        } else {
            if (this.needToFixScrollPosition()) {
                // The document was reloaded following a `popstate` event (triggered by clicking the
                // forward/back button), so we manage the scroll position.
                this.scrollToPosition();
            } else {
                // The document was loaded as a result of one of the following cases:
                // - Typing the URL in the address bar (direct navigation).
                // - Clicking on a link.
                // (If the location contains a hash, we have to wait for async layout.)
                if (this.isLocationWithHash()) {
                    // Delay scrolling by the specified amount to allow time for async layout to complete.
                    // tslint:disable-next-line: no-void-expression
                    setTimeout(() => this.scroll(), delay);
                } else {
                    // If the location doesn't contain a hash, we scroll to the top of the page.
                    this.scrollToTop();
                }
            }
        }
    }

    /**
     * Scroll to the element.
     * Don't scroll if no element.
     */
    scrollToElement(element: Element | undefined): void {
        if (element) {
            element.scrollIntoView();

            if (window && window.scrollBy) {
                // Scroll as much as necessary to align the top of `element` at `topOffset`.
                // (Usually, `.top` will be 0, except for cases where the element cannot be scrolled all the
                //  way to the top, because the viewport is larger than the height of the content after the
                //  element.)
                window.scrollBy(0, element.getBoundingClientRect().top - this.topOffset);

                // If we are very close to the top (<20px), then scroll all the way up.
                // (This can happen if `element` is at the top of the page, but has a small top-margin.)
                if (window.pageYOffset < 20) {
                    window.scrollBy(0, -window.pageYOffset);
                }
            }
        }
    }

    /** Scroll to the top of the document. */
    scrollToTop(): void {
        this.scrollToElement(this.topOfPageElement);
    }

    scrollToPosition(): void {
        if (this.poppedStateScrollPosition) {
            this.viewportScroller.scrollToPosition(this.poppedStateScrollPosition);
            this.poppedStateScrollPosition = undefined;
        }
    }

    updateScrollLocationHref(): void {
        this.storage.setItem('scrollLocationHref', window.location.href);
    }

    /**
     * Update the state with scroll position into history.
     */
    updateScrollPositionInHistory(): void {
        if (this.supportManualScrollRestoration) {
            const currentScrollPosition = this.viewportScroller.getScrollPosition();
            this.location.replaceState(this.location.path(true), undefined, { scrollPosition: currentScrollPosition });
            this.storage.setItem('scrollPosition', currentScrollPosition.join(','));
        }
    }

    getStoredScrollLocationHref(): string | undefined {
        const href = this.storage.getItem('scrollLocationHref');

        return href || undefined;
    }

    getStoredScrollPosition(): ScrollPosition | null {
        const position = this.storage.getItem('scrollPosition');
        // tslint:disable-next-line: no-null-keyword
        if (!position) { return null; }

        const [x, y] = position.split(',');

        return [+x, +y];
    }

    removeStoredScrollInfo(): void {
        this.storage.removeItem('scrollLocationHref');
        this.storage.removeItem('scrollPosition');
    }

    /**
     * Check if the scroll position need to be manually fixed after popState event
     */
    needToFixScrollPosition(): boolean {
        return this.supportManualScrollRestoration && !!this.poppedStateScrollPosition;
    }

    /**
     * Return the hash fragment from the `PlatformLocation`, minus the leading `#`.
     */
    private getCurrentHash(): any {
        return decodeURIComponent(this.platformLocation.hash.replace(/^#/, ''));
    }
}
