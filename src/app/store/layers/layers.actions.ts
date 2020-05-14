import { Action } from '@ngrx/store';
import { MapLayer } from '../../shared/classes/maplayer';
import { LegendItem } from '../../shared/interfaces/config-layers.inteface';

export const SET_GEOGRAPHY_LAYER = '[Layers] Set Geography Layer';
export const SET_GEOGRAPHY_OPACITY = '[Layers] Set Geography Opacity';
export const SET_GEOGRAPHY_VISIBLE = '[Layers] Set Geography Visible';
export const SET_GEOGRAPHY_COLOR = '[Layers] Set Geography Color';
export const SET_PARCEL_LAYERS = '[Layers] Set Parcels Layer';
export const SET_OVERLAY_LAYERS = '[Layers] Set Overlay Layers';
export const SET_BASEMAP = '[Layers] Set Basemap';
export const SET_LEGEND = '[Layers] Set Legend';

// tslint:disable: max-classes-per-file
export class SetGeoLayer implements Action {
  readonly type = SET_GEOGRAPHY_LAYER;
  constructor(public payload: string) {}
}
export class SetGeoOpacity implements Action {
  readonly type = SET_GEOGRAPHY_OPACITY;
  constructor(public payload: number) {}
}
export class SetGeoVisible implements Action {
  readonly type = SET_GEOGRAPHY_VISIBLE;
  constructor(public payload: boolean) {}
}
export class SetGeoColor implements Action {
  readonly type = SET_GEOGRAPHY_COLOR;
  constructor(public payload: string) {}
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
| SetGeoOpacity
| SetGeoVisible
| SetGeoColor
| SetParcelLayers
| SetOverlayLayers
| ToggleBasemap
| SetLegend;
