import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureLike } from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style, Text } from 'ol/style';
import { Observable } from 'rxjs';
import * as fromStore from '../../store/store.reducers';
import { StoreService } from '../../store/store.service';
import { MapLayer } from '../classes/maplayer';
/**
 * Service to query data from NZLUR Carto
 * @method initOverlayLayers() Set the initial overlay layers as empty in the store, and add them to target layer group
 */
@Injectable({
    providedIn: 'root'
})
export class LayersService {
    overlays: Array<MapLayer> = [];
    overlayLayers: Observable<Array<MapLayer>>;
    overlayStyle: Style;

    constructor(
        readonly store: Store<fromStore.StoreState>,
        readonly storeService: StoreService
    ) {
        this.overlayLayers = this.store.select(state => state.layers.overlays);
    }
    /**
     * Set the initial overlay layers as empty in the store, and add them to target layer group
     * @param overlayGroup layergroup component target for the layers to initialize inside
     */
    initOverlayLayers(): Array<MapLayer> {
        this.overlayStyle = new Style({
            stroke: new Stroke({color: 'black', lineDash: [5, 0, 0, 5], width: 3}),
            fill: new Fill({color: 'rgba(0,0,0,.25)'}),
            text: new Text({
                font: 'bold 1rem Segoe UI,sans-serif',
                overflow: true,
                scale: 0.85,
                padding: [5, 5, 5, 5],
                fill: new Fill({
                  color: 'black'
                }),
                stroke: new Stroke({
                  color: 'white',
                  width: 3
                })
            })
        });
        // tslint:disable: max-line-length newline-before-return newline-per-chained-call
        this.overlays = [
            new MapLayer({name: 'Historic Districts', cartoCols: 'name',
                          layer: new VectorLayer({className: 'landmarkdistricts_160203',  zIndex: 7, opacity: 1, visible: false,
                                                  style: feature => this.styleFunction(feature)  })
            }),
            new MapLayer({name: 'Redevelopment Plans', cartoCols: 'name',
                          layer: new VectorLayer({
                              className: 'redevelopmentplanareas_170208', zIndex: 8, opacity: 1, visible: false, style: feature => this.styleFunction(feature) })
            }),
            new MapLayer({name: 'Opportunity Zones', cartoCols: 'name',
                          layer: new VectorLayer({ className: 'opertunity_zones', zIndex: 9, opacity: 1, visible: false, style: feature => this.styleFunction(feature) })
            }),
            new MapLayer({name: 'Urban Enterprise Zone', cartoCols: 'uez_name',
                          layer: new VectorLayer({ className: 'uez', zIndex: 10, opacity: 1, visible: false, style: feature => this.styleFunction(feature, 'uez_name')  })
            }),
            new MapLayer({name: 'West Ward MNI', cartoCols: 'column_1571935764873',
                          layer: new VectorLayer({ className: 'west_wardmni_copy', zIndex: 11, opacity: 1, visible: false, style: feature => this.styleFunction(feature, 'column_1571935764873') })
            })
        ];
        this.overlays.forEach(
            ol => {
                ol.layer.setSource(
                    new VectorSource({
                        url: this.getCartoUrl(ol.cartoCols, ol.layer.getClassName()),
                        format: new GeoJSON()
                        })
                );
        });
        this.storeService.setOverlayLayers(this.overlays);

        return this.overlays;
    }
    /**
     * Set the initial overlay layers as empty in the store, and add them to target layer group
     * @param overlayGroup layergroup component target for the layers to initialize inside
     */
    updateOverlayLayer(
        layer: string,
        propset: {name: 'opacity' | 'zIndex', propVal: number } | {name: 'visible', propVal: boolean}
        ): void {
            // tslint:disable: no-non-null-assertion
            if (this.overlays.find(ol => ol.name === layer)!.layer) {
                this.overlays.find(ol => ol.name === layer)!.layer
                    .set(propset.name, propset.propVal);
                this.storeService.setOverlayLayers(this.overlays);
            }
    }
    getCartoUrl(columns, className): string {
        return 'https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,' +
                                            `${columns}%20from%20public.${className}`;
    }
    findCols = (layer: string) => {
        switch (layer) {
            case 'landmarkdistricts_160203': return 'name';
            case 'newarktractpolygon_1': return 'name';
            case 'nwkneighborhoods': return 'name';
            case 'opertunity_zones': return 'name';
            case 'redevelopmentplanareas_170208': return 'name';
            case 'uez': return 'uez_name';
            case 'ward_wardmni_copy': return 'column_1571935764873';
            case 'wards': return 'WARD_NAME';
            default: return '*';
        }
    };
    stringDivider = (str: string, width: number, spaceReplacer): string => {
        if (str.length > width) {
          let p = width;
          while (p > 0 && (str[p] !== ' ' && str[p] !== '-')) {
            p--;
          }
          if (p > 0) {
            let left;
            left = (str.substring(p, p + 1) === '-') ? str.substring(0, p + 1) : str.substring(0, p);
            const right = str.substring(p + 1);

            return `${left}${spaceReplacer}${this.stringDivider(right, width, spaceReplacer)}`;
          }
        }
        return str.replace('Redevelopment Plan', '').replace('District Plan', '').replace('Plan', '');
      };
    styleFunction(feature: FeatureLike, labelProp = 'name'): Style {
        this.overlayStyle.getText().setText(
            this.stringDivider(feature.get(labelProp), 20, '\n'));

        return this.overlayStyle;
    }
    resetService(): void {
        this.storeService.setOverlayLayers([]);
        this.overlays = [];
    }
}
