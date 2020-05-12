import Map from 'ol/Map';

import * as MapActions from './map.actions';

export interface State {
  map: Map | undefined;
}

const initialState: State = {
  map: undefined
};

export const mapReducer = (
  state = initialState,
  action: MapActions.MapActions
) => {
  switch (action.type) {
    case MapActions.SET_MAP:
      return { ...state, map: action.payload };
    default:
      return state;
  }
};
