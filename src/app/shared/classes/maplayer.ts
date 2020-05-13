import BaseLayer from 'ol/layer/Base';
import Layer from 'ol/layer/Layer';
import { MapLayerOptions } from '../interfaces/config-layers.inteface';

export class MapLayer extends BaseLayer implements MapLayerOptions {
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
        this.name = options.name || '';
        this.description = options.description || '';
        this.cartoCols = options.cartoCols || '';
        this.expanded = options.expanded || false;
    }
}
