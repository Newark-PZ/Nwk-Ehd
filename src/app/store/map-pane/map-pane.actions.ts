import { Action } from '@ngrx/store';
// tslint:disable: max-classes-per-file

export const TOGGLE = '[Map Pane] Toggle';
export const SET_OPENED = '[Map Pane] Set Opened';
export const SET_TITLE = '[Map Pane] Set Title';
export const SET_SELECTED_MODULE = '[Map Pane] Set Selected Module';

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
export class SetSelectedModule implements Action {
  readonly type = SET_SELECTED_MODULE;
  constructor(public payload: number) {}
}

export type MapPaneActions =
  | Toggle
  | SetOpened
  | SetTitle
  | SetSelectedModule;
