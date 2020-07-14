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
        // tslint:disable: max-line-length newline-before-return
        this.overlays = [
            new MapLayer({name: 'Historic Districts', group: 'Overlays', cartoCols: 'name', legendColor: [128, 147, 241],
                          layer: new VectorLayer({className: 'landmarkdistricts_160203',  zIndex: 11, opacity: 1, visible: false,
                                                  style: feature => this.styleFunction(feature, 'name', [128, 147, 241])  })
            }),
            new MapLayer({name: 'Redevelopment Plans', group: 'Overlays', cartoCols: 'name',
                          layer: new VectorLayer({
                              className: 'redevelopmentplanareas_170208', zIndex: 10, opacity: 1, visible: false, style: feature => this.styleFunction(feature) })
            }),
            new MapLayer({name: 'Opportunity Zones', group: 'Overlays', cartoCols: 'name', legendColor: [106, 88, 55],
                          layer: new VectorLayer({ className: 'opertunity_zones', zIndex: 9, opacity: 1, visible: false, style: feature => this.styleFunction(feature, 'name', [106, 88, 55]) })
            }),
            new MapLayer({name: 'Urban Enterprise Zone', group: 'Overlays', cartoCols: 'uez_name', legendColor: [226, 157, 227],
                          layer: new VectorLayer({ className: 'uez', zIndex: 8, opacity: 1, visible: false, style: feature => this.styleFunction(feature, 'uez_name', [226, 157, 227])  })
            }),
            new MapLayer({name: 'West Ward MNI', group: 'Overlays', cartoCols: 'column_1571935764873', legendColor: [254, 95, 0],
                          layer: new VectorLayer({ className: 'west_wardmni_copy', zIndex: 7, opacity: 1, visible: false, style: feature => this.styleFunction(feature, 'column_1571935764873',  [254, 95, 0]) })
            })
        ];
        this.overlays.forEach(
            ol => {
                ol.layer.setSource(
                    new VectorSource({
                        url: this.getCartoUrl(ol.cartoCols, ol.layer.getClassName()),
                        format: new GeoJSON(),
                        attributions: [`<div class="legend-graphic" style="border-color:rgb(${ol.legendColor.join(',')})"></div><span class="legend-item">${ol.name}</span>`]
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
        propset: {name: 'opacity', propVal: number } | {name: 'visible', propVal: boolean}
        ): void {
            // tslint:disable: no-non-null-assertion
            this.overlays.forEach(
                (ol, i) => {
                    if ( ol.name === layer) {
                        ol.layer.set(propset.name, propset.propVal);
                    }
            });
            this.storeService.setOverlayLayers(this.overlays);
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
        return str.replace('Redevelopment Plan', '')
            .replace('District Plan', '')
            .replace('Plan', '');
      };
    overlayStyle(rgb: [number, number, number] = [0, 0, 0]): Style {
      return new Style({
        stroke: new Stroke({color: `rgba(${rgb.join(',')})`, lineDash: [5, 0, 0, 5], width: 3}),
        fill: new Fill({color: `rgba(${rgb.join(',')}, 0.4)`}),
        text: new Text({
            font: 'bold 1rem Segoe UI,sans-serif',
            overflow: true,
            scale: 0.85,
            padding: [5, 5, 5, 5],
            fill: new Fill({
              color: `rgba(${rgb.join(',')}, 1)`
            }),
            stroke: new Stroke({
              color: 'white',
              width: 3
            })
        })
     });
    }
    styleFunction(feature: FeatureLike, labelProp = 'name', rgb?: [number, number, number]): Style {
        const newstyle = this.overlayStyle(rgb);
        newstyle.getText()
            .setText(
            this.stringDivider(feature.get(labelProp), 20, '\n'));

        return newstyle;
    }
    resetService(): void {
        this.storeService.setOverlayLayers([]);
        this.overlays = [];
    }
}

// use mongo for search with regex filter
// {"attributes.STREET_ADD": { "$regex": "(920 Bro)"}}
