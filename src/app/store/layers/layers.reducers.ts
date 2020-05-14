import { MapLayer } from '../../shared/classes/maplayer';
import { LegendItem } from '../../shared/interfaces/config-layers.inteface';
import * as LayersActions from './layers.actions';

export interface State {
  basemap: boolean;
  geoLayer: string;
  geoOpacity: number;
  geoVisible: boolean;
  geoColor?: string;
  parcelLayers: Array<MapLayer>;
  overlays: Array<MapLayer>;
  legend: Array<LegendItem>;
}

const initialState: State = {
  basemap: false,
  geoLayer: 'wards',
  geoOpacity: 1,
  geoVisible: true,
  geoColor: undefined,
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
    case LayersActions.SET_LEGEND:
      return { ...state, legend: action.payload };
    default:
      return state;
  }
};
