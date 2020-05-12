import { Action } from '@ngrx/store';

export const CLEAR_STATE = '[Store] Clear State';

export class ClearState implements Action {
  readonly type = CLEAR_STATE;
}

export type StoreActions = ClearState;
