import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { take } from 'rxjs/operators';
import * as ImageIndexActions from '../../../store/image-index/image-index.actions';
import * as PageStateActions from '../../../store/page-state/page-state.actions';
import * as fromStore from '../../../store/store.reducers';
import { Hearing } from '../../classes/hearing';
import { BoardPage } from '../../models/pages.model';
import { EventsService } from '../../services/events.service';
import { LinkService } from '../../services/link.service';
import { slideshowAnimation } from '../../util/animations';
import { ModalComponent } from '../elements/modal.component';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-board-page',
  styleUrls: ['./board-page.component.scss'],
  templateUrl: './board-page.component.html'
})

export class BoardPageComponent implements OnDestroy {
  link: string;
  boardPage$: Observable<BoardPage>;
  currentLanguage$: Observable<string>;
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  live: boolean;
  boardPageButtons: Array<any> = [];
  nextevents: Observable<Array<Hearing>>;
  constructor(
    readonly router: Router,
    readonly store: Store<fromStore.StoreState>,
    readonly route: ActivatedRoute,
    readonly linker: LinkService,
    public dialog: MatDialog,
    readonly events: EventsService
  ) {
    this.boardPage$ = this.store.select(state => state.pageState.boardPage);
    this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
    this.expansionOpen$ = this.store.select(state => state.homePanel.open);
    this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
    this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.link = params.get('id') || 'zba';
      this.nextevents = new Observable((observer: Observer<Array<Hearing>>) => {
        setTimeout(() => {
          if (this.events.hearings.filter(h => h.board === params.get('id')!.toUpperCase() && h.timeUntil >= 0).length < 0) {
            observer.next([]);
          } else {
            observer.next(this.events.hearings.filter(h =>  h.board === params.get('id')!.toUpperCase() && h.timeUntil >= 0)
            .slice(0, 2));
            observer.complete();
          }
        }, 100);
      });
      this.boardPageButtons = [{
        text: 'Virtual Hearing Dashboard',
        icon: this.live ? 'live_tv' : 'tv_off',
        parent: '/planningzoning',
        link: 'virtualhearing',
        param: this.link
      }];
      this.store
      .select(state => state.i18n.currentLanguage)
      .pipe(take(1))
      .subscribe(currentLang => {
        if (currentLang) {
          this.linker.getPage(this.link, currentLang)
          .subscribe(p => {
            this.store.dispatch(new PageStateActions.SetPageBoard(p));
          });
        }
      });
    });
  }
  ngOnDestroy(): void {
    this.store.dispatch(new ImageIndexActions.ResetImageIndex(0));
  }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
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
