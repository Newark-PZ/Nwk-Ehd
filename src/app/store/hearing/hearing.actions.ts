import { createAction, props } from '@ngrx/store';
import { Hearing } from '../../shared/classes/hearing';
import { DataRow } from '../../shared/models/interfaces';

export const setTabCPB = createAction(
  '[Hearing] Set Tab CPB',
  props<{
    agenda: string | '',
    event: Hearing,
    upcomingHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | [],
    prevHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | []
  }>()
);
export const setTabEC = createAction(
  '[Hearing] Set Tab EC',
  props<{
    agenda: string | '',
    event: Hearing,
    upcomingHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | [],
    prevHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | []
  }>()
);
export const setTabLHPC = createAction(
  '[Hearing] Set Tab LHPC',
  props<{
    agenda: string | '',
    event: Hearing,
    upcomingHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | [],
    prevHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | []
  }>()
);
export const setTabRC = createAction(
  '[Hearing] Set Tab RC',
  props<{
    agenda: string | '',
    event: Hearing, prevHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | [],
    upcomingHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | []
  }>()
);
export const setTabZBA = createAction(
  '[Hearing] Set Tab ZBA',
  props<{
    agenda: string | '',
    event: Hearing,
    fofId: string | '',
    upcomingHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | [],
    prevHearings: Array<{ event: Hearing; data: Array<DataRow> | [] }> | []
  }>()
);
