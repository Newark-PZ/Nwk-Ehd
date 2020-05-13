import { MapLayer } from '../../shared/classes/maplayer';
import * as LayersActions from './layers.actions';

export interface State {
  basemap: boolean;
  geoLayer: string;
  geoOpacity: number;
  geoVisible: boolean;
  geoColor?: string;
  parcelLayers: Array<MapLayer>;
  overlays: Array<MapLayer>;
}

const initialState: State = {
  basemap: false,
  geoLayer: 'wards',
  geoOpacity: 1,
  geoVisible: true,
  geoColor: undefined,
  parcelLayers: [],
  overlays: []
};

export const layersReducer = (
  state = initialState,
  action: LayersActions.LayersActions
) => {
  switch (action.type) {
    case LayersActions.SET_GEOGRAPHY_LAYER:
      return { ...state, geoLayer: action.payload };
    case LayersActions.SET_GEOGRAPHY_OPACITY:
      return { ...state, geoOpacity: action.payload };
    case LayersActions.SET_GEOGRAPHY_VISIBLE:
      return { ...state, geoVisible: action.payload };
    case LayersActions.SET_GEOGRAPHY_COLOR:
      return { ...state, geoColor: action.payload };
    case LayersActions.SET_PARCEL_LAYERS:
      return { ...state, parcelLayers: action.payload };
    case LayersActions.SET_OVERLAY_LAYERS:
      return { ...state, overlays: action.payload };
    case LayersActions.SET_BASEMAP:
      return { ...state, basemap: !state.basemap };
    default:
      return state;
  }
};
