import BaseLayer from 'ol/layer/Base';
import Layer from 'ol/layer/Layer';
import { LegendItem, MapLayerOptions } from '../interfaces/config-layers.inteface';

export class MapLayer extends BaseLayer implements MapLayerOptions {
    attributions: Array<string>;
    name: string;
    description: string;
    cartoCols: string;
    layer: Layer;
    group: 'Parcels' | 'Geographies' | 'Overlays';
    expanded: boolean;
    legendInfo: LegendItem;
    legendColor: [number, number, number];
    constructor(options: MapLayerOptions) {
        super(options);
        this.attributions = options.attributions || [''];
        this.layer = options.layer;
        this.group = options.group || 'Geographies';
        this.name = options.name || '';
        this.description = options.description || '';
        this.cartoCols = options.cartoCols || '';
        this.expanded = options.expanded || false;
        this.legendColor = options.legendColor || [0, 0, 0];
        this.legendInfo = options.legendInfo || this.setLegendInfo(this.name);
    }
    setLegendInfo(name: string): LegendItem {
        return this.legendInfo = ({
            layer: name, group: this.group, items: [{
            name: name.slice(0, name.length - 1),
            borderColor: `rgba(${this.legendColor.join(',')},1)`,
            background: `rgba(${this.legendColor.join(',')},.25)`,
            desc: `${name.slice(0, name.length - 1)} Boundaries`
            }]
        });
    }
}
