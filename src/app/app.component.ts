import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Link } from './shared/classes/link.class';
import { EventsService } from './shared/services/events.service';
import * as fromStore from './store/store.reducers';
import { StoreService } from './store/store.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  sidebarOpenedSubscription: Subscription;
  deptDisplay: boolean;
  mayorDisplay: boolean;
  sidebarOpened$: Observable<boolean>;
  sidebarMode$: Observable<string>;
  sidebarRightOpened$: Observable<boolean>;
  sidebarRightMode$: Observable<string>;
  routesArray$: Observable<Array<Link> | undefined>;
  treeControl = new NestedTreeControl<Link>(node => node.children);
  hasChild = (_: number, node: Link) => !!node.children && node.children.length > 0;
  constructor(
    public storeService: StoreService,
    readonly store: Store<fromStore.StoreState>,
    readonly breakpointObserver: BreakpointObserver,
    readonly events: EventsService,
    private readonly titleService: Title,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
    this.sidebarMode$ = this.store.select(state => state.sidebar.mode);
    this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
    this.sidebarRightMode$ = this.store.select(state => state.sidebarRight.mode);
    this.routesArray$ = this.store.select(state => state.routesArray.routesArray);
  }
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe({ next: (state: BreakpointState) => { this.setMayorDeptDisplay(state.matches); }});
    this.storeService.resetStoreState();
    this.events.initHearings();
    window.addEventListener('resize', () => { this.appHeight(); });
    this.appHeight();
    const appTitle = this.titleService.getTitle();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child && child.firstChild) { child = child.firstChild; }
          if (child && child.snapshot.data.title) {
            const childData = child.snapshot.data;

            return `${childData.title}${
              ['Boards', 'Virtual Hearings', 'Program'].includes(childData.title) ? `: ${String(child.snapshot.params.id).replace(/\b[a-z]/g, (x) => x.toUpperCase())
              }` : ''
            }${childData.parent ? ` - ${childData.parent}` : ''} - Newark EHD`;
          }

          return appTitle;
        })
      )
      .subscribe({ next: (ttl: string) => { this.titleService.setTitle(ttl); }});
  }
  setMayorDeptDisplay(state: boolean): void {
    this.mayorDisplay = state;
    this.deptDisplay = state;
  }
  appHeight(): void {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', `${String(window.innerHeight * 0.01)}px`);
  }
  toggleSidebar(): void {
    this.storeService.toggleSidebar();
  }

  toggleRightSidebar(): void {
    this.storeService.toggleRightSidebar();
  }

  ngOnDestroy(): void {
    if (this.sidebarOpenedSubscription) {
      this.sidebarOpenedSubscription.unsubscribe();
    }
  }
  onOpenedChange(evt: boolean): void {
    this.store
      .select(state => state.sidebar.opened)
      .pipe(take(1))
      .subscribe({next: opened => { if (opened !== evt) { this.storeService.toggleSidebar(); this.treeControl.collapseAll(); }}});
  }
  onRightOpenedChange(evt: boolean): void {
    this.store
      .select(state => state.sidebarRight.opened)
      .pipe(take(1))
      .subscribe({ next: opened => { if (opened !== evt) { this.storeService.toggleRightSidebar(); }}});
  }
  goTo(url): void {
    window.open(url, '_self');
  }
}
