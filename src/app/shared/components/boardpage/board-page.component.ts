import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as ImageIndexActions from '../../../store/image-index/image-index.actions';
import * as PageStateActions from '../../../store/page-state/page-state.actions';
import * as fromStore from '../../../store/store.reducers';
import { BoardPage, CalEvent } from '../../models/pages.model';
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
  constructor(
    readonly router: Router,
    readonly store: Store<fromStore.StoreState>,
    readonly route: ActivatedRoute,
    readonly linker: LinkService,
    public dialog: MatDialog
  ) {
    this.boardPage$ = this.store.select(state => state.pageState.boardPage);
    this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
    this.expansionOpen$ = this.store.select(state => state.homePanel.open);
    this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
    this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.link = params.get('id') || 'zba';
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
  openEvent(evt: CalEvent): void {
    this.dialog.open(ModalComponent, {
      maxWidth: '90vw',
      data: {
        header: `<b>${evt.event}</b><br><span>${evt.date}</span>`,
        message: 'event',
        event: evt
      }
    });
  }
}
