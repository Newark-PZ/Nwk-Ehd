import { Action } from '@ngrx/store';
import { Hearing } from '../../shared/classes/hearing';
import { DataRow } from '../../shared/interfaces/other.interface';

export const SET_TAB_CPB = '[Hearing] Set Tab CPB';
export const SET_TAB_EC = '[Hearing] Set Tab EC';
export const SET_TAB_LHPC = '[Hearing] Set Tab LHPC';
export const SET_TAB_ZBA = '[Hearing] Set Tab ZBA';

// tslint:disable: max-classes-per-file
export class SetTabCPB implements Action {
  readonly type = SET_TAB_CPB;
  constructor(public payload: {
    agenda: string | '', data: Array<DataRow> | [], event: Hearing, prevHearings: Array<{event: Hearing; data: Array<DataRow> | []}> | []
  }) {}
}
export class SetTabEC implements Action {
  readonly type = SET_TAB_EC;
  constructor(public payload: {
    agenda: string | '', data: Array<DataRow> | [], event: Hearing, prevHearings: Array<{event: Hearing; data: Array<DataRow> | []}> | []
  }) {}
}
export class SetTabLHPC implements Action {
  readonly type = SET_TAB_LHPC;
  constructor(public payload: {
    agenda: string | '', data: Array<DataRow> | [], event: Hearing, prevHearings: Array<{event: Hearing; data: Array<DataRow> | []}> | []
  }) {}
}
export class SetTabZBA implements Action {
  readonly type = SET_TAB_ZBA;
  constructor(public payload: {
      agenda: string | '', data: Array<DataRow> | [], event: Hearing, fofId: string | '',
      prevHearings: Array<{event: Hearing; data: Array<DataRow> | []}> | []
  }) {}
}

export type HearingActions =
  | SetTabCPB
  | SetTabEC
  | SetTabLHPC
  | SetTabZBA;
