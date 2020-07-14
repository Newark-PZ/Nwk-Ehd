import { Layer } from 'ol/layer';
import { Source } from 'ol/source';
import { MapLayer } from '../classes/maplayer';

export interface MapLayerOptions {
  attributions?: Array<string>;
  name?: string;
  cartoCols?: string;
  layer: Layer;
  expanded?: boolean;
  description?: string;
  legendColor?: [number, number, number];
  legendInfo?: LegendItem;
  group: 'Parcels' | 'Geographies' | 'Overlays';
  opacity?: number;
  source?: Source;
  visible?: boolean;
  extent?: [number, number, number, number];
  zIndex?: number;
  minResolution?: number;
  maxResolution?: number;
}
export interface MapLayerGroupOptions {
  name: string;
  details?: string;
  children: Array<MapLayer>;
}
export interface LegendItem {
  layer: string;
  group: any;
  items: Array<{
    name: string;
    background: string;
    desc: string;
    borderColor?: string;
  }>;
}
