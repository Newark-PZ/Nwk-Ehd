import { createReducer, on } from '@ngrx/store';
import { Hearing } from '../../shared/classes/hearing';
import { BoardPage, FooterList, HomeCard, HomePage, Page, StaffPage } from '../../shared/models';
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
  footer: FooterList;
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
  hearingsZBA: [],
  footer: {
    text: 'EHD Main Office',
    path: ['/', 'ehd'],
    children: [
      {
        text: 'Home',
        path: ['/', 'ehd', 'home']
      }
    ]
  }
};

export const pageStateReducer = createReducer(
  initialState,
    on(PageStateActions.setPageHome, (state, action) => ({...state, home: action.payload })),
    on(PageStateActions.setPageCurrent, (state, action) => ({...state, currentPage: action.payload  })),
    on(PageStateActions.setPageBoard, (state, action) => ({...state, boardPage: action.payload  })),
    on(PageStateActions.setPageStaff, (state, action) => ({...state, staffPage: action.payload  })),
    on(PageStateActions.setBoardCPB, (state, action) => ({...state, boardCPB: action.payload  })),
    on(PageStateActions.setBoardEC, (state, action) => ({...state, boardEC: action.payload  })),
    on(PageStateActions.setBoardLHPC, (state, action) => ({...state, boardLHPC: action.payload  })),
    on(PageStateActions.setBoardZBA, (state, action) => ({...state, boardZBA: action.payload  })),
    on(PageStateActions.setCPBHearings, (state, action) => ({...state, hearingsCPB: action.payload  })),
    on(PageStateActions.setECHearings, (state, action) => ({...state, hearingsEC: action.payload  })),
    on(PageStateActions.setLHCPHearings, (state, action) => ({...state, hearingsLHPC: action.payload  })),
    on(PageStateActions.setZBAHearings, (state, action) => ({...state, hearingsZBA: action.payload  })),
    on(PageStateActions.setFooter, (state, action) => ({...state, footer: action.payload }))
);
