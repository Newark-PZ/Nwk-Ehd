import { Action } from '@ngrx/store';
import { MapLayer } from '../../shared/classes/maplayer';
import { LegendItem } from '../../shared/models/layers.interface';

export const SET_GEOGRAPHY_LAYER = '[Layers] Set Geography Layer';
export const SET_PARCEL_LAYERS = '[Layers] Set Parcels Layer';
export const SET_OVERLAY_LAYERS = '[Layers] Set Overlay Layers';
export const SET_BASEMAP = '[Layers] Set Basemap';
export const SET_LEGEND = '[Layers] Set Legend';

// tslint:disable: max-classes-per-file
export class SetGeoLayer implements Action {
  readonly type = SET_GEOGRAPHY_LAYER;
  constructor(public payload: Array<MapLayer>) {}
}
export class SetParcelLayers implements Action {
  readonly type = SET_PARCEL_LAYERS;
  constructor(public payload: Array<MapLayer>) {}
}
export class SetOverlayLayers implements Action {
  readonly type = SET_OVERLAY_LAYERS;
  constructor(public payload: Array<MapLayer>) {}
}
export class ToggleBasemap implements Action {
  readonly type = SET_BASEMAP;
}
export class SetLegend implements Action {
  readonly type = SET_LEGEND;
  constructor(public payload: Array<LegendItem>) {}
}

export type LayersActions =
| SetGeoLayer
| SetParcelLayers
| SetOverlayLayers
| ToggleBasemap
| SetLegend;
