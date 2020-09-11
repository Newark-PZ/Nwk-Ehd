import { createReducer, on } from '@ngrx/store';
import Map from 'ol/Map';
import { MapLayer } from '../../shared/classes/maplayer';
import { LegendItem } from '../../shared/models/layers.interface';
import * as MapActions from './map.actions';

export interface State {
  map: Map | undefined;
  basemap: boolean;
  geoLayer: Array<MapLayer>;
  parcelLayers: Array<MapLayer>;
  overlays: Array<MapLayer>;
  legend: Array<LegendItem>;
}

const initialState: State = {
  map: undefined,
  basemap: false,
  geoLayer: [],
  parcelLayers: [],
  overlays: [],
  legend: []
};

export const mapReducer = createReducer(
  initialState,
  on(MapActions.setMap, (state, action) => ({...state, map: action.payload })),
  on(MapActions.setGeoLayer, (state, action) => ({...state, geoLayer: action.payload })),
  on(MapActions.setParcelLayers, (state, action) => ({...state, parcelLayers: action.payload })),
  on(MapActions.setOverlayLayers, (state, action) => ({...state, overlays: action.payload })),
  on(MapActions.toggleBasemap, state => ({...state, basemap: !state.basemap })),
  on(MapActions.setLegend, (state, action) => ({...state, legend: action.payload }))
);
