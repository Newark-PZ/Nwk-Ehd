import { Action } from '@ngrx/store';
import { Hearing } from '../../shared/classes/hearing';
import { BoardPage, FooterList, HomeCard, HomePage, Page, StaffPage } from '../../shared/models';

export const SET_PAGE_HOME = '[page-state] Set Home Page';
export const SET_PAGE_CURRENT = '[page-state] Set Current Page';
export const SET_PAGE_BOARD = '[page-state] Set Board Page';
export const SET_PAGE_STAFF = '[page-state] Set Staff Page';
export const SET_BOARD_CPB = '[page-state] Set Board CPB';
export const SET_BOARD_EC = '[page-state] Set Board EC';
export const SET_BOARD_LHPC = '[page-state] Set Board LHPC';
export const SET_BOARD_ZBA = '[page-state] Set Board ZBA';
export const SET_CPB_HEARINGS = '[page-state] Set CPB Hearings';
export const SET_EC_HEARINGS = '[page-state] Set EC Hearings';
export const SET_LHCP_HEARINGS = '[page-state] Set LHCP Hearings';
export const SET_ZBA_HEARINGS = '[page-state] Set ZBA Hearings';
export const SET_FOOTER = '[page-state] Set Footer';
// tslint:disable: max-classes-per-file
export class SetPageHome implements Action {
  readonly type = SET_PAGE_HOME;
  constructor(public payload: HomePage) {}
}
export class SetPageCurrent implements Action {
  readonly type = SET_PAGE_CURRENT;
  constructor(public payload: Page) {}
}
export class SetPageBoard implements Action {
  readonly type = SET_PAGE_BOARD;
  constructor(public payload: BoardPage) {}
}
export class SetPageStaff implements Action {
  readonly type = SET_PAGE_STAFF;
  constructor(public payload: StaffPage) {}
}
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
export class SetCPBHearings implements Action {
  readonly type = SET_CPB_HEARINGS;
  constructor(public payload: Array<Hearing>) {}
}
export class SetECHearings implements Action {
  readonly type = SET_EC_HEARINGS;
  constructor(public payload: Array<Hearing>) {}
}
export class SetLHCPHearings implements Action {
  readonly type = SET_LHCP_HEARINGS;
  constructor(public payload: Array<Hearing>) {}
}
export class SetZBAHearings implements Action {
  readonly type = SET_ZBA_HEARINGS;
  constructor(public payload: Array<Hearing>) {}
}
export class SetFooter implements Action {
  readonly type = SET_FOOTER;
  constructor(public payload: FooterList) {}
}

export type PageStateActions =
  | SetPageHome
  | SetPageCurrent
  | SetPageBoard
  | SetPageStaff
  | SetBoardCPB
  | SetBoardEC
  | SetBoardLHPC
  | SetBoardZBA
  | SetCPBHearings
  | SetECHearings
  | SetLHCPHearings
  | SetZBAHearings
  | SetFooter;
