import { Action } from '@ngrx/store';
import { ArcFeature, SearchItem } from '../../shared/models';
// tslint:disable: max-classes-per-file

export const TOGGLE = '[Prop Pane] Toggle';
export const SET_OPENED = '[Prop Pane] Set Opened';
export const SET_TITLE = '[Prop Pane] Set Title';
export const SET_SELECTED_PROP = '[Prop Pane] Set Selected Property';
export const SET_SELECTED_GEO = '[Prop Pane] Set Selected Geo Feature';
export const SET_PROP_INFO = '[Prop Pane] Set Property Data';

export class Toggle implements Action {
  readonly type = TOGGLE;
}
export class SetOpened implements Action {
  readonly type = SET_OPENED;
  constructor(public payload: boolean) {}
}
export class SetTitle implements Action {
  readonly type = SET_TITLE;
  constructor(public payload: string) {}
}
export class SetSelectedProp implements Action {
  readonly type = SET_SELECTED_PROP;
  constructor(public payload: SearchItem) { }
}
export class SetSelectedGeo implements Action {
  readonly type = SET_SELECTED_GEO;
  constructor(public payload: any) { }
}
export class SetPropInfo implements Action {
  readonly type = SET_PROP_INFO;
  constructor(public payload: ArcFeature) { }
}

export type PropPaneActions =
  | Toggle
  | SetOpened
  | SetTitle
  | SetSelectedProp
  | SetSelectedGeo
  | SetPropInfo;
