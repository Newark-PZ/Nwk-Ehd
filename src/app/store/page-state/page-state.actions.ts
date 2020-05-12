import { Action } from '@ngrx/store';
import { HomeCard } from '../../shared/models';

export const SET_BOARD_CPB = '[page-state] Set Board CPB';
export const SET_BOARD_EC = '[page-state] Set Board EC';
export const SET_BOARD_LHPC = '[page-state] Set Board LHPC';
export const SET_BOARD_ZBA = '[page-state] Set Board ZBA';

// tslint:disable: max-classes-per-file
export class SetBoardCPB implements Action {
  readonly type = SET_BOARD_CPB;
  constructor(public payload: Array<HomeCard>) {}
}
export class SetBoardEC implements Action {
  readonly type = SET_BOARD_EC;
  constructor(public payload: Array<HomeCard>) {}
}
export class SetBoardLHPC implements Action {
  readonly type = SET_BOARD_LHPC;
  constructor(public payload: Array<HomeCard>) {}
}
export class SetBoardZBA implements Action {
  readonly type = SET_BOARD_ZBA;
  constructor(public payload: Array<HomeCard>) {}
}

export type PageStateActions =
  | SetBoardCPB
  | SetBoardEC
  | SetBoardLHPC
  | SetBoardZBA;
