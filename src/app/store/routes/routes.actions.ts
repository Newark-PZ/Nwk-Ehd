import { Action } from '@ngrx/store';
import { Link } from '../../shared/classes/link.class';

export const SET_ROUTE_ARRAY = '[Routes] Set Route Array';
export const SET_OFFICE = '[Routes] Set Current Office';

export class SetRouteArray implements Action {
  readonly type = SET_ROUTE_ARRAY;
  constructor(public payload: Array<Link>) {}
}
// tslint:disable-next-line: max-classes-per-file
export class SetCurrentOffice implements Action {
  readonly type = SET_OFFICE;
  constructor(public payload: string) {}
}

export type routesActions =
  | SetCurrentOffice
  | SetRouteArray;
