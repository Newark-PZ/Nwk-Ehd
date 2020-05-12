import { Collection } from 'ol';
import { Layer } from 'ol/layer';
import LayerGroup from 'ol/layer/Group';
import { MapLayerGroupOptions } from '../interfaces/config-layers.inteface';
import { MapLayer } from './maplayer';

export class MapLayerGroup {
  name: string;
  details: string;
  children: Array<MapLayer>;
  collection: Collection<Layer>;
  layerGroup: LayerGroup;

  constructor(options: MapLayerGroupOptions) {
    this.name = options.name || 'overlays';
    this.children = options.children || [];
    this.details = options.details || '';
    this.layerGroup = new LayerGroup({layers: this.collection});
  }
}
