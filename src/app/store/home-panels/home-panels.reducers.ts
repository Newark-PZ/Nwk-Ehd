import { createReducer, on } from '@ngrx/store';
import * as HomePanelActions from './home-panels.actions';

export interface State {
  open: boolean;
  multi: boolean;
  toggleDisabled: boolean;
}

const initialState: State = {
  open: true,
  multi: true,
  toggleDisabled: false
};

export const homePanelReducer = createReducer(
  initialState,
  on(HomePanelActions.setOpen, (state, action) => ({ ...state, open: action.payload })),
  on(HomePanelActions.setMulti, (state, action) => ({ ...state, multi: action.payload })),
  on(HomePanelActions.setToggle, (state, action) => ({ ...state, toggleDisabled: action.payload }))
);
