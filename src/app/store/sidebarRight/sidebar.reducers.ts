import { createReducer, on } from '@ngrx/store';
import * as SidebarRightActions from './sidebar.actions';

export interface State {
  hasSidebar: boolean;
  opened: boolean;
  collapsible: boolean;
  title?: string;
  mode: string;
  selectedModule?: string;
}

const initialState: State = {
  hasSidebar: true,
  collapsible: true,
  opened: false,
  title: undefined,
  mode: 'over',
  selectedModule: undefined
};

export const sidebarRightReducer = createReducer(
  initialState,
  on(SidebarRightActions.toggle, (state, action) => ({ ...state, opened: !state.opened })),
  on(SidebarRightActions.setHasSidebar, (state, action) => ({ ...state, hasSidebar: action.payload })),
  on(SidebarRightActions.setMode, (state, action) => ({ ...state, mode: action.payload })),
  on(SidebarRightActions.setCollapsible, (state, action) => ({ ...state, collapsible: action.payload })),
  on(SidebarRightActions.setOpened, (state, action) => ({ ...state, opened: action.payload })),
  on(SidebarRightActions.setTitle, (state, action) => ({ ...state, title: action.payload })),
  on(SidebarRightActions.setSelectedModule, (state, action) => ({ ...state, selectedModule: action.payload }))
);
