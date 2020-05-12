import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as HomePanelActions from '../../../store/home-panels/home-panels.actions';
import * as ImageIndexActions from '../../../store/image-index/image-index.actions';
import * as fromStore from '../../../store/store.reducers';
import { BoardPage } from '../../models/pages.model';
import { AirService } from '../../services/air.service';
import { slideshowAnimation } from '../../util/animations';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-board-page',
  styleUrls: ['./board-page.component.scss'],
  templateUrl: './board-page.component.html'
})

export class BoardPageComponent implements OnInit, OnChanges, OnDestroy {
  @Input() page: BoardPage;
  @Input() view: string;
  constructor(
    public airData: AirService,
    readonly router: Router,
    public breakpointObserver: BreakpointObserver,
    readonly store: Store<fromStore.StoreState>
    ) {
      this.expansionOpen$ = this.store.select(state => state.homePanel.open);
      this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
      this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
      this.slideshowIndex$ = this.store.select(state => state.imageIndex.currentIndex);
    }
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  slideshowIndex$: Observable<number>;
  slideshowIndex = 0;
  slideshowEnd = false;
  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.store.dispatch(new HomePanelActions.SetMulti(false));
        this.store.dispatch(new HomePanelActions.SetOpen(false));
        this.store.dispatch(new HomePanelActions.SetToggle(false));
      } else {
        this.store.dispatch(new HomePanelActions.SetMulti(true));
        this.store.dispatch(new HomePanelActions.SetOpen(true));
        this.store.dispatch(new HomePanelActions.SetToggle(true));
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.page = changes.page.currentValue;
    this.view = changes.view.currentValue;
  }
  ngOnDestroy(): void {
    this.store.dispatch(new ImageIndexActions.ResetImageIndex(0));
  }
  filterCat(category): void {
    return category;
  }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
}
