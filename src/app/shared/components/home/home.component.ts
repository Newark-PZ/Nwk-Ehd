import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as HomePanelActions from '../../../store/home-panels/home-panels.actions';
import * as ImageIndexActions from '../../../store/image-index/image-index.actions';
import * as fromStore from '../../../store/store.reducers';
import { HomePage, PageCompsFields } from '../../models';
import { AirService } from '../../services/air.service';
import { slideshowAnimation } from '../../util/animations';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, OnDestroy {
  @Input() homePage: HomePage;
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
    if (this.homePage.splashImgs) { this.carouselStart(); }
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
    if (!this.homePage.splashTitle) {
      this.airData.getRecords('PageComps', `filterByFormula=%7BName%7D%3D'${this.router.url.substr(1, 3)}+Homepage+Splash+Title'`)
        .subscribe(
          data => this.homePage.splashTitle = (data.records[0].fields as PageCompsFields).content,
          err => { console.error(err); } );
    }
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
    // tslint:disable: no-non-null-assertion
  carouselStart(): void {
      setTimeout(() => {
        this.slideshow(this.homePage.splashImgs!.length);
        if (!this.slideshowEnd) {this.carouselStart(); }
      }, 7000);
  }
  slideshow(imgsLength: number): void {
    this.slideshowIndex++;
    if (this.slideshowIndex > imgsLength - 1) { this.slideshowIndex = 0; }
    this.store.dispatch(new ImageIndexActions.SetImageIndex(this.slideshowIndex));
  }
}
