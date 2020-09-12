import { createAction, props } from '@ngrx/store';
import { Hearing } from '../../shared/classes/hearing';
import { BoardPage, FooterList, HomeCard, HomePage, Page } from '../../shared/models';

export const setPageHome = createAction(
  '[Page State] Set Page Home',
  props<{ payload: HomePage }>()
);
export const setPageCurrent = createAction(
  '[Page State] Set Page Current',
  props<{ payload: Page }>()
);
export const setPageBoard = createAction(
  '[Page State] Set Page Board',
  props<{ payload: BoardPage }>()
);
export const setBoardCPB = createAction(
  '[Page State] Set Board CPB',
  props<{ payload: Array<HomeCard>}>()
);
export const setBoardEC = createAction(
  '[Page State] Set Board EC',
  props<{ payload: Array<HomeCard>}>()
);
export const setBoardLHPC = createAction(
  '[Page State] Set Board LHPC',
  props<{ payload: Array<HomeCard> }>()
);
export const setBoardZBA = createAction(
  '[Page State] Set Board ZBA',
  props<{ payload: Array<HomeCard> }>()
);
export const setCPBHearings = createAction(
  '[Page State] Set CPB Hearings',
  props<{ payload: Array<Hearing> }>()
);
export const setECHearings = createAction(
  '[Page State] Set EC Hearings',
  props<{ payload: Array<Hearing> }>()
);
export const setLHCPHearings = createAction(
  '[Page State] Set LHCP Hearings',
  props<{ payload: Array<Hearing> }>()
);
export const setZBAHearings = createAction(
  '[Page State] Set ZBA Hearings',
  props<{ payload: Array<Hearing> }>()
);
export const setFooter = createAction(
  '[Page State] Set Footer',
  props<{ payload: FooterList}>()
);
