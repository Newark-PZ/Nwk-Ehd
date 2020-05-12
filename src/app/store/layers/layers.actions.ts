import { Action } from '@ngrx/store';
import { MapLayer } from '../../shared/classes/maplayer';

export const SET_GEOGRAPHY_LAYER = '[Layers] Set Geography Layer';
export const SET_GEOGRAPHY_OPACITY = '[Layers] Set Geography Opacity';
export const SET_GEOGRAPHY_VISIBLE = '[Layers] Set Geography Visible';
export const SET_GEOGRAPHY_COLOR = '[Layers] Set Geography Color';
export const SET_PARCELS_LAYER = '[Layers] Set Parcels Layer';
export const SET_PARCELS_OPACITY = '[Layers] Set Parcels Opacity';
export const SET_PARCELS_VISIBLE = '[Layers] Set Parcels Visible';
export const SET_PARCELS_COLOR = '[Layers] Set Parcels Color';
export const SET_OVERLAY_GROUP = '[Layers] Set Overlay Group';
export const SET_OVERLAY_LAYERS = '[Layers] Set Overlay Layers';
export const SET_BASEMAP = '[Layers] Set Basemap';

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
export class SetParcelsLayer implements Action {
  readonly type = SET_PARCELS_LAYER;
  constructor(public payload: string) {}
}
export class SetParcelsOpacity implements Action {
  readonly type = SET_PARCELS_OPACITY;
  constructor(public payload: number) {}
}
export class SetParcelsVisible implements Action {
  readonly type = SET_PARCELS_VISIBLE;
  constructor(public payload: boolean) {}
}
export class SetParcelsColor implements Action {
  readonly type = SET_PARCELS_COLOR;
  constructor(public payload: string) {}
}
export class SetOverlayLayers implements Action {
  readonly type = SET_OVERLAY_LAYERS;
  constructor(public payload: Array<MapLayer>) {}
}
export class ToggleBasemap implements Action {
  readonly type = SET_BASEMAP;
}

export type LayersActions =
| SetGeoLayer
| SetGeoOpacity
| SetGeoVisible
| SetGeoColor
| SetParcelsLayer
| SetParcelsOpacity
| SetParcelsVisible
| SetParcelsColor
| SetOverlayLayers
| ToggleBasemap;
