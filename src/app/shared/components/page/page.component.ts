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
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.link = params.get('id') || '';
        if (this.link === 'cpb' || this.link === 'ec' || this.link === 'lhpc' || this.link === 'zba') {
          this.nextevents = new Observable((observer: Observer<Array<Hearing>>) => {
            setTimeout(() => {
              if (this.events.hearings.filter(h => h.board === this.link.toUpperCase() && h.timeUntil >= 0).length < 0) {
                observer.next([]);
              } else {
                observer.next(this.events.hearings.filter(h =>  h.board === this.link.toUpperCase() && h.timeUntil >= 0)
                .slice(0, 2));
                observer.complete();
              }
            }, 100);
          });
          this.store
          .select(state => state.i18n.currentLanguage)
          .pipe(take(1))
          .subscribe(currentLang => {
            if (currentLang) {
              this.linker.getPage(this.link, currentLang)
              .subscribe(p => {
                this.storeService.setPageBoard(p);
                this.page = p;
              });
            }
          });
        } else if (this.link === 'doremus' || this.link === 'newarkgo' ) {
          this.store
          .select(state => state.i18n.currentLanguage)
          .pipe(take(1))
          .subscribe(currentLang => {
            if (currentLang) {
              this.linker.getPage(this.link, currentLang)
              .subscribe(p => {
                this.storeService.setPageCurrent(p);
                this.page = p;
                this.iframeUrl = this.link === 'doremus'
                ? this.linkSanitizer('https://drive.google.com/file/d/1SI-_ztwQtuW_Ghwlx71eVaIzysB54Ixt/preview')
                : this.linkSanitizer('https://drive.google.com/file/d/1qsHYhH8xK67uNLGmYjzyvE5bbG5r0uLD/view?usp=sharing');
              });
            }
          });
        }
      });
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
        header: `<b>${evt.title}</b><br><span>${evt.start.toLocaleDateString()}</span>`,
        message: 'event',
        event: evt
      }
    });
  }
}
