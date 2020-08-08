import { MapLayer } from '../../shared/classes/maplayer';
import { LegendItem } from '../../shared/models/layers.interface';
import * as LayersActions from './layers.actions';

export interface State {
  basemap: boolean;
  geoLayer: Array<MapLayer>;
  parcelLayers: Array<MapLayer>;
  overlays: Array<MapLayer>;
  legend: Array<LegendItem>;
}

const initialState: State = {
  basemap: false,
  geoLayer: [],
  parcelLayers: [],
  overlays: [],
  legend: []
};

export const layersReducer = (
  state = initialState,
  action: LayersActions.LayersActions
) => {
  switch (action.type) {
    case LayersActions.SET_GEOGRAPHY_LAYER:
      return { ...state, geoLayer: action.payload };
    case LayersActions.SET_PARCEL_LAYERS:
      return { ...state, parcelLayers: action.payload };
    case LayersActions.SET_OVERLAY_LAYERS:
      return { ...state, overlays: action.payload };
    case LayersActions.SET_BASEMAP:
      return { ...state, basemap: !state.basemap };
    case LayersActions.SET_LEGEND:
      return { ...state, legend: action.payload };
    default:
      return state;
  }
};
