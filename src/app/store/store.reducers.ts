import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as fromHomePanels from './home-panels/home-panels.reducers';
import * as fromI18n from './i18n/i18n.reducers';
import * as fromImageIndex from './image-index/image-index.reducers';
import * as fromLayers from './layers/layers.reducers';
import * as fromLayerTree from './layertree/layertree.reducers';
import * as fromMapPane from './map-pane/map-pane.reducers';
import * as fromMap from './map/map.reducers';
import * as fromPageState from './page-state/page-state.reducers';
import * as fromPropPane from './prop-pane/prop-pane.reducers';
import * as fromRoutesArray from './routes/routes.reducers';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as fromSidebarRight from './sidebarRight/sidebar.reducers';
import * as StoreActions from './store.actions';

export interface StoreState {
  homePanel: fromHomePanels.State;
  i18n: fromI18n.State;
  imageIndex: fromImageIndex.State;
  layers: fromLayers.State;
  layerTree: fromLayerTree.State;
  map: fromMap.State;
  mapPane: fromMapPane.State;
  pageState: fromPageState.State;
  propPane: fromPropPane.State;
  routesArray: fromRoutesArray.State;
  sidebar: fromSidebar.State;
  sidebarRight: fromSidebarRight.State;
}

export const storeReducers: ActionReducerMap<StoreState> = {
  homePanel: fromHomePanels.homePanelReducer,
  i18n: fromI18n.i18nReducer,
  imageIndex: fromImageIndex.imageIndexReducer,
  layers: fromLayers.layersReducer,
  layerTree: fromLayerTree.layertreeReducer,
  map: fromMap.mapReducer,
  mapPane: fromMapPane.mapPaneReducer,
  pageState: fromPageState.pageStateReducer,
  propPane: fromPropPane.propPaneReducer,
  routesArray: fromRoutesArray.routesReducer,
  sidebar: fromSidebar.sidebarReducer,
  sidebarRight: fromSidebarRight.sidebarRightReducer
};
// tslint:disable: no-parameter-reassignment only-arrow-functions
export function clearState(
  reducer: ActionReducer<StoreState>
): ActionReducer<StoreState> {
  return (
    state: StoreState | undefined,
    action: StoreActions.StoreActions
  ): StoreState => {
    switch (action.type) {
      case StoreActions.CLEAR_STATE:
        state = undefined;
        break;
      default:
        break;
    }

    return reducer(state, action);
  };
}
