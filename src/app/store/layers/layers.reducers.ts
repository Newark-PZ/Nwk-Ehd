import { MapLayer } from '../../shared/classes/maplayer';
import * as LayersActions from './layers.actions';

export interface State {
  basemap: boolean;
  geoLayer: string;
  geoOpacity: number;
  geoVisible: boolean;
  geoColor?: string;
  parcelsLayer: string;
  parcelsOpacity: number;
  parcelsVisible: boolean;
  parcelsColor?: string;
  overlays: Array<MapLayer>;
}

const initialState: State = {
  basemap: false,
  geoLayer: 'wards',
  geoOpacity: 1,
  geoVisible: true,
  geoColor: undefined,
  parcelsLayer: 'zoning',
  parcelsOpacity: 1,
  parcelsVisible: true,
  parcelsColor: undefined,
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
    case LayersActions.SET_PARCELS_LAYER:
      return { ...state, parcelsLayer: action.payload };
    case LayersActions.SET_PARCELS_OPACITY:
      return { ...state, parcelsOpacity: action.payload };
    case LayersActions.SET_PARCELS_VISIBLE:
      return { ...state, parcelsVisible: action.payload };
    case LayersActions.SET_PARCELS_COLOR:
      return { ...state, parcelsColor: action.payload };
    case LayersActions.SET_OVERLAY_LAYERS:
      return { ...state, overlays: action.payload };
    case LayersActions.SET_BASEMAP:
      return { ...state, basemap: !state.basemap };
    default:
      return state;
  }
};
