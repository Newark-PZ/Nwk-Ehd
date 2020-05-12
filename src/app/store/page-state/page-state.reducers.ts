import { HomeCard } from '../../shared/models';
import * as PageStateActions from './page-state.actions';

export interface State {
  boardCPB: Array<HomeCard>;
  boardEC: Array<HomeCard>;
  boardLHPC: Array<HomeCard>;
  boardZBA: Array<HomeCard>;
}

const initialState: State = {
  boardCPB: [],
  boardEC: [],
  boardLHPC: [],
  boardZBA: []
};

export const pageStateReducer = (
  state = initialState,
  action: PageStateActions.PageStateActions
) => {
  switch (action.type) {
    case PageStateActions.SET_BOARD_CPB:
      return { ...state, boardCPB: action.payload };
    case PageStateActions.SET_BOARD_EC:
      return { ...state, boardEC: action.payload };
    case PageStateActions.SET_BOARD_LHPC:
      return { ...state, boardLHPC: action.payload };
    case PageStateActions.SET_BOARD_ZBA:
      return { ...state, boardZBA: action.payload };
    default:
      return state;
  }
};
