import { Action } from '@ngrx/store';
import { SidebarLink } from '../../shared/interfaces/other.interface';

export const SET_ROUTE_ARRAY = '[Routes] Set Route Array';

export class SetRouteArray implements Action {
  readonly type = SET_ROUTE_ARRAY;
  constructor(public payload: Array<SidebarLink>) {}
}

export type routesActions =
  | SetRouteArray;
