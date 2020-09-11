import { createAction, props } from '@ngrx/store';
import Map from 'ol/Map';
import { MapLayer } from '../../shared/classes/maplayer';
import { LegendItem } from '../../shared/models/layers.interface';

export const setMap = createAction(
  '[Map]',
  props<{payload: Map}>()
);
export const setGeoLayer = createAction(
 '[Map] Set Geography Layer',
  props<{ payload: Array<MapLayer> }>()
);
export const setParcelLayers = createAction(
 '[Map] Set Parcels Layer',
  props<{ payload: Array<MapLayer> }>()
);
export const setOverlayLayers = createAction(
 '[Map] Set Overlay Layers',
  props<{ payload: Array<MapLayer> }>()
);
export const toggleBasemap = createAction(
 '[Map] Set Basemap'
);
export const setLegend = createAction(
 '[Map] Set Legend',
  props<{ payload: Array<LegendItem> }>()
);
