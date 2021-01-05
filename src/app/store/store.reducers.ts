import { ActionReducerMap, createAction, createReducer, on } from '@ngrx/store';

import * as fromHearing from './hearing/hearing.reducers';
import * as fromHomePanels from './home-panels/home-panels.reducers';
import * as fromI18n from './i18n/i18n.reducers';
import * as fromMapPane from './map-pane/map-pane.reducers';
import * as fromPageState from './page-state/page-state.reducers';
import * as fromPropPane from './prop-pane/prop-pane.reducers';
import * as fromRoutesArray from './routes/routes.reducers';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as fromSidebarRight from './sidebarRight/sidebar.reducers';

export const clearStateAction = createAction(
  '[Store] Clear State'
);

export interface StoreState {
  hearing: fromHearing.State;
  homePanel: fromHomePanels.State;
  i18n: fromI18n.State;
  mapPane: fromMapPane.State;
  pageState: fromPageState.State;
  propPane: fromPropPane.State;
  routesArray: fromRoutesArray.State;
  sidebar: fromSidebar.State;
  sidebarRight: fromSidebarRight.State;
}

export const storeReducers: ActionReducerMap<StoreState> = {
  hearing: fromHearing.hearingReducer,
  homePanel: fromHomePanels.homePanelReducer,
  i18n: fromI18n.i18nReducer,
  mapPane: fromMapPane.mapPaneReducer,
  pageState: fromPageState.pageStateReducer,
  propPane: fromPropPane.propPaneReducer,
  routesArray: fromRoutesArray.routesReducer,
  sidebar: fromSidebar.sidebarReducer,
  sidebarRight: fromSidebarRight.sidebarRightReducer
};

export const clearStateReducer = createReducer(
  storeReducers,
  on(clearStateAction, state => ({ ...state, state: undefined }))
);
