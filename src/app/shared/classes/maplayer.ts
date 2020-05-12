import BaseLayer from 'ol/layer/Base';
import Layer from 'ol/layer/Layer';
import { MapLayerOptions } from '../interfaces/config-layers.inteface';

export class MapLayer extends BaseLayer {
    attributions: Array<string>;
    name: string;
    description: string;
    cartoCols: string;
    layer: Layer;
    expanded: boolean;

    constructor(options: MapLayerOptions) {
        super(options);
        this.attributions = options.attributions || [''];
        this.layer = options.layer;
        this.name = options.name || 'Layer Name';
        this.description = options.description || `Layer ${this.name}`;
        this.cartoCols = options.cartoCols || '';
        this.expanded = options.expanded || false;
    }
}
