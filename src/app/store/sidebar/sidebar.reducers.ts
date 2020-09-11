import { createReducer, on } from '@ngrx/store';
import * as SidebarActions from './sidebar.actions';

export interface State {
  hasSidebar: boolean;
  opened: boolean;
  collapsible: boolean;
  title?: string;
  mode: string;
  selectedModule?: string;
}

const initialState: State = {
  hasSidebar: false,
  collapsible: true,
  opened: false,
  title: undefined,
  mode: 'side',
  selectedModule: undefined
};

export const sidebarReducer = createReducer(
  initialState,
  on(SidebarActions.toggle, (state, action) => ({ ...state, opened: !state.opened })),
  on(SidebarActions.setHasSidebar, (state, action) => ({ ...state, hasSidebar: action.payload })),
  on(SidebarActions.setMode, (state, action) => ({ ...state, mode: action.payload })),
  on(SidebarActions.setCollapsible, (state, action) => ({ ...state, collapsible: action.payload })),
  on(SidebarActions.setOpened, (state, action) => ({ ...state, opened: action.payload })),
  on(SidebarActions.setTitle, (state, action) => ({ ...state, title: action.payload })),
  on(SidebarActions.setSelectedModule, (state, action) => ({ ...state, selectedModule: action.payload }))
);
