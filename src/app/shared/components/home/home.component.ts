import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import * as HomePanelActions from '../../../store/home-panels/home-panels.actions';
import * as ImageIndexActions from '../../../store/image-index/image-index.actions';
import * as fromStore from '../../../store/store.reducers';
import { Hearing } from '../../classes/hearing';
import { HomePage } from '../../models';
import { EventsService } from '../../services/events.service';
import { slideshowAnimation } from '../../util/animations';
import { ModalComponent } from '../elements/modal.component';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, OnDestroy {
  @Input() homePage: HomePage;
  nextevents: Observable<Array<Hearing>>;
  constructor(
    readonly router: Router,
    public breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    readonly store: Store<fromStore.StoreState>,
    readonly events: EventsService
    ) {
      this.expansionOpen$ = this.store.select(state => state.homePanel.open);
      this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
      this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
      this.slideshowIndex$ = this.store.select(state => state.imageIndex.currentIndex);
      this.nextevents = new Observable((observer: Observer<Array<Hearing>>) => {
        setTimeout(() => {
          if (this.events.hearings.filter(h => h.timeUntil >= 0).length < 0) {
            observer.next([]);
          } else {
            observer.next(this.events.hearings.filter(h => h.timeUntil >= 0)
            .slice(0, 2));
            observer.complete();
          }
        }, 100);
      });
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
