import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Link } from './shared/classes/link.class';
import { EventsService } from './shared/services/events.service';
import * as SidebarActions from './store/sidebar/sidebar.actions';
import * as RightSidebarActions from './store/sidebarRight/sidebar.actions';
import * as fromStoreActions from './store/store.actions';
import * as fromStore from './store/store.reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    readonly events: EventsService
  ) {
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
    this.sidebarMode$ = this.store.select(state => state.sidebar.mode);
    this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
    this.sidebarRightMode$ = this.store.select(state => state.sidebarRight.mode);
    this.routesArray$ = this.store.select(state => state.routesArray.routesArray);
    this.events.initHearings();
  }
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {this.mayorDisplay = true; this.deptDisplay = true;
        } else {this.mayorDisplay = false; this.deptDisplay = false; }
    });
    this.store.dispatch(new fromStoreActions.ClearState());
  }
  toggleSidebar(): void {
    this.store.dispatch(new SidebarActions.Toggle());
  }

  toggleRightSidebar(): void {
    this.store.dispatch(new RightSidebarActions.Toggle());
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
          this.store.dispatch(new SidebarActions.Toggle());
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
          this.store.dispatch(new RightSidebarActions.Toggle());
        }
      });
  }
  goTo(url): void {
    window.open(url, '_self');
  }
}
