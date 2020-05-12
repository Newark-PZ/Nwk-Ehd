import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidebarLink } from '../shared/interfaces/other.interface';
import * as RoutesArrayActions from '../store/routes/routes.actions';
import * as fromStore from '../store/store.reducers';
import { EHD_ROUTES } from './ehd-main.routing';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ehd-container',
  template: '<router-outlet></router-outlet>'
})

export class EhdMainComponent implements OnInit {
  routes: Array<SidebarLink>;
  constructor(
    private readonly store: Store<fromStore.StoreState>
  ) {
    // tslint:disable: no-non-null-assertion
    this.routes = EHD_ROUTES.filter(r => r.title && r.title.length > 0)
    .map(r =>
      ({
          title: r.title,
          icon: r.icon,
          parentFragment: r.parentFragment,
          path: r.path,
          children: r.children ?  r.children.filter(child => child.title && child.title.length > 0) : undefined
        })
      );
  }
  @HostBinding('class.content-container') clas = true;
  ngOnInit(): void {
    this.store.dispatch(new RoutesArrayActions.SetRouteArray(this.routes));
  }
}
