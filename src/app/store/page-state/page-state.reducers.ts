import { Hearing } from '../../shared/classes/hearing';
import { BoardPage, HomeCard, HomePage, Page, StaffPage } from '../../shared/models';
import * as PageStateActions from './page-state.actions';

export interface State {
  home: HomePage;
  currentPage: Page;
  boardPage: BoardPage;
  staffPage: StaffPage;
  boardCPB: Array<HomeCard>;
  boardEC: Array<HomeCard>;
  boardLHPC: Array<HomeCard>;
  boardZBA: Array<HomeCard>;
  hearingsCPB: Array<Hearing>;
  hearingsEC: Array<Hearing>;
  hearingsLHPC: Array<Hearing>;
  hearingsZBA: Array<Hearing>;
}

const initialState: State = {
  home: {id: 'home', buttonCategories: [], contentIntro: { text: ''}},
  currentPage: {id: 'home', buttonCategories: [], contentIntro: { text: ''}, hideBottomBar: true, title: ''},
  boardPage: {id: 'home', buttonCategories: [], contentIntro: { text: ''}, title: '', buttons: []},
  staffPage: {id: 'home', contentIntro: { text: ''}, buttons: [], title: ''},
  boardCPB: [],
  boardEC: [],
  boardLHPC: [],
  boardZBA: [],
  hearingsCPB: [],
  hearingsEC: [],
  hearingsLHPC: [],
  hearingsZBA: []
};

export const pageStateReducer = (
  state = initialState,
  action: PageStateActions.PageStateActions
) => {
  switch (action.type) {
    case PageStateActions.SET_PAGE_HOME:
      return { ...state, home: action.payload };
    case PageStateActions.SET_PAGE_CURRENT:
      return { ...state, currentPage: action.payload };
    case PageStateActions.SET_PAGE_BOARD:
      return { ...state, boardPage: action.payload };
    case PageStateActions.SET_PAGE_STAFF:
      return { ...state, staffPage: action.payload };
    case PageStateActions.SET_BOARD_CPB:
      return { ...state, boardCPB: action.payload };
    case PageStateActions.SET_BOARD_EC:
      return { ...state, boardEC: action.payload };
    case PageStateActions.SET_BOARD_LHPC:
      return { ...state, boardLHPC: action.payload };
    case PageStateActions.SET_BOARD_ZBA:
      return { ...state, boardZBA: action.payload };
    case PageStateActions.SET_CPB_HEARINGS:
      return { ...state, hearingsCPB: action.payload };
    case PageStateActions.SET_EC_HEARINGS:
      return { ...state, hearingsEC: action.payload };
    case PageStateActions.SET_LHCP_HEARINGS:
      return { ...state, hearingsLHPC: action.payload };
    case PageStateActions.SET_ZBA_HEARINGS:
      return { ...state, hearingsZBA: action.payload };
    default:
      return state;
  }
};
