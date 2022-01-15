import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromStore from '../../../store/store.reducers';
import { StoreService } from '../../../store/store.service';
import { Hearing } from '../../classes/hearing';
import { Page } from '../../models/pages.model';
import { EventsService } from '../../services/events.service';
import { LinkService } from '../../services/link.service';
import { ModalComponent } from '../elements/modal.component';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html'
})

export class PageComponent implements OnChanges {
  @Input() page: Page;
  link: string;
  iframeUrl: SafeResourceUrl;
  boardPage$: Observable<Page>;
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  nextevents: Observable<Array<Hearing>>;
  constructor(
    public dialog: MatDialog,
    public storeService: StoreService,
    readonly events: EventsService,
    readonly linker: LinkService,
    readonly route: ActivatedRoute,
    readonly store: Store<fromStore.StoreState>,
    readonly sanitizer: DomSanitizer
    ) {
      this.boardPage$ = this.store.select(state => state.pageState.boardPage);
      this.route.paramMap.subscribe({
        next: (params: ParamMap) => {
        this.link = params.get('id') || '';
        if (this.link === 'cpb' || this.link === 'ec' || this.link === 'lhpc' || this.link === 'zba') {
          this.nextevents = new Observable((observer: Observer<Array<Hearing>>) => {
            setTimeout(() => {
              if (this.events.hearings.filter(h => h.board === this.link.toUpperCase() && h.timeUntil >= -19800000).length < 0) {
                observer.next([]);
              } else {
                observer.next(this.events.hearings.filter(h =>  h.board === this.link.toUpperCase() && h.timeUntil >= -19800000)
                .slice(0, 2));
                observer.complete();
              }
            }, 100);
          });
          this.store
          .select(state => state.i18n.currentLanguage)
          .pipe(take(1))
          .subscribe({next: currentLang => {
            if (currentLang) {
              this.linker.getPage(this.link, currentLang)
              .subscribe({
                next: p => {
                this.storeService.setPageBoard(p);
                this.page = p;
                this.iframeUrl = this.setIframeUrl(this.link);
              }});
            }
          }});
        } else if (['doremus', 'newarkgo', 'newarkgo-application', 'corrals'].includes(this.link) ) {
          this.store
          .select(state => state.i18n.currentLanguage)
          .pipe(take(1))
          .subscribe({
            next: currentLang => {
            if (currentLang) {
              this.linker.getPage(this.link, currentLang)
              .subscribe({
                next: p => {
                this.storeService.setPageCurrent(p);
                this.page = p;
                this.iframeUrl = this.setIframeUrl(this.link);
              }});
            }
          }});
        }
      }});
    }
  ngOnChanges(changes: SimpleChanges): void {
    this.page = changes.page.currentValue;
  }
  filterCat(category): void {
    return category;
  }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
  linkSanitizer(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  openEvent(evt: Hearing): void {
    this.dialog.open(ModalComponent, {
      maxWidth: '90vw',
      data: {
        header: `<b>${evt.title}</b><br><span>${evt.type} Meeting ${evt.start.toLocaleDateString()}</span>`,
        message: 'event',
        event: evt
      }
    });
  }
  setIframeUrl(link: string): SafeResourceUrl {
    const baseCalUrl = (calid: string): string => `https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=${calid}&color=%23F6BF26&mode=MONTH&showNav=1&showTitle=1&showDate=0&showPrint=1&showTabs=0&showCalendars=0`;
    const sanitizeThis = (baseLink: string): SafeResourceUrl => this.sanitizer.bypassSecurityTrustResourceUrl(baseLink);
    const linkObj = {
      doremus: 'https://drive.google.com/file/d/1SI-_ztwQtuW_Ghwlx71eVaIzysB54Ixt/preview',
      cpb: baseCalUrl('5m4bft5sgjam972q5kdh012e9c%40group.calendar.google.com'),
      ec: baseCalUrl('js98ihsearqv8vkrdmrtp1tins%40group.calendar.google.com'),
      lhpc: baseCalUrl('4289ve9sqomikgnqa0nt6e5ga0@group.calendar.google.com'),
      zba: baseCalUrl('k8vtrg27dk7dbvegtcdo0f9mno@group.calendar.google.com')
    };

    return Object.keys(linkObj)
      .includes(link) ? sanitizeThis(linkObj[link]) : sanitizeThis('https://drive.google.com/file/d/1qsHYhH8xK67uNLGmYjzyvE5bbG5r0uLD/view?usp=sharing');
  }
}
