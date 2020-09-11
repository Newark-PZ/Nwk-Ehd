import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
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
    readonly store: Store<fromStore.StoreState>,
    readonly breakpointObserver: BreakpointObserver,
    readonly events: EventsService,
    public storeService: StoreService
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
      .subscribe((state: BreakpointState) => {
        if (state.matches) {this.mayorDisplay = true; this.deptDisplay = true;
        } else {this.mayorDisplay = false; this.deptDisplay = false; }
    });
    this.storeService.resetStoreState();
    this.events.initHearings();
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
      .subscribe(opened => {
        if (opened !== evt) {
          this.storeService.toggleSidebar();
          this.treeControl.collapseAll();
        }
      });
  }
  onRightOpenedChange(evt: boolean): void {
    this.store
      .select(state => state.sidebarRight.opened)
      .pipe(take(1))
      .subscribe(opened => {
        if (opened !== evt) {
          this.storeService.toggleRightSidebar();
        }
      });
  }
  goTo(url): void {
    window.open(url, '_self');
  }
}
