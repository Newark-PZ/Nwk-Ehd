import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { EsriJSON, GeoJSON } from 'ol/format';
import { Layer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { UTFGrid, XYZ } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import * as fromStore from '../../store/store.reducers';
import { StoreService } from '../../store/store.service';
import { apiConfig } from '../models';

/**
 * Service to query data from NZLUR Carto
 * @method getGeoJSONLayer() Input Geolayer Name and Return Geojson file
 * @method setParcelViz() Input Layer Name, Target Carto and Target Grid layers and return Both Layers
 * @method getEsriLayer() Input a reference to target vector layer and the Esri Layer Name, sets source of the target layer
 */
@Injectable()
export class MapLayersService {
    mapsApiUrl = 'https://nzlur.carto.com/api/v1/map/';
    constructor(
        readonly storeService: StoreService,
        readonly store: Store<fromStore.StoreState>
    ) {}
    getGeoJSONLayer(geolayer: string): any {
        let featureData;
        fetch(`assets/data/${geolayer}.geojson`)
        .then(response => response.json())
        .then(data => featureData = data)
        .catch(err => { console.error(err); });

        return featureData;
    }
    setParcelViz(layer, cartoLayer: TileLayer, gridLayer: TileLayer): void {
        fetch(`${this.mapsApiUrl}?config=${encodeURIComponent(JSON.stringify(apiConfig(layer)))}`, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
        .then(res => res.json())
        .then(response => {
            const hackUrls = (x: any) => x.replace('layer0', '0');
            const baseJson = response.metadata.layers['0'].tilejson.raster;
            const cartoRasterTiles = baseJson.tiles.map(hackUrls);
            // tslint:disable: no-parameter-reassignment
            cartoLayer = new TileLayer({
                className: layer,
                source: new XYZ({ urls: cartoRasterTiles })
            });
            gridLayer = new TileLayer({
                className: 'parcelgrid',
                source: new UTFGrid({
                    tileJSON: { version: '2.2.0', grids: baseJson.grids.map(hackUrls), tiles: baseJson.grids.map(hackUrls) }
                })
            });
            let parcelgridExists = false;
            let cartolayerExists = false;
            this.storeService.mapState$.subscribe(
            m => {
                (m.map as Map).getLayers()
                .forEach((l: Layer) => {
                    if (l.getClassName() === layer) {
                        cartolayerExists = true;
                    } else if (l.getClassName() === 'parcelgrid') {
                        parcelgridExists = true;
                    }
                });
                if (!parcelgridExists && m.map) {
                    m.map.addLayer(gridLayer);
                }
                if (!cartolayerExists && m.map) {
                    m.map.addLayer(cartoLayer);
                }
            });
        })
        .catch(error => { console.error(error); });
    }
    getEsriLayer(
        layerRef: VectorLayer,
        layerName: 'WARDS' | 'O0FFICIAL_NEIGHBORHOOD_LAYER'
        ): void {
        if (layerRef.getSource() === null) { layerRef.dispose(); }
        if (layerName !== 'O0FFICIAL_NEIGHBORHOOD_LAYER') {
            layerRef.setSource(
                new VectorSource({
                url: `https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/${layerName}/FeatureServer/0/query?`
                    + 'where=FID>0&returnGeometry=true&f=json&geometryType=esriGeometryEnvelope&outFields=*',
                format: new EsriJSON({geometryName: layerName})
            }));
        } else {
            layerRef.setSource(
                new VectorSource({
                url: `https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/${layerName}/MapServer/0/query?`
                    + 'where=FID>0&returnGeometry=true&f=json&geometryType=esriGeometryEnvelope&outFields=*',
                format: new EsriJSON({geometryName: layerName})
            }));
        }
    }
    getCartoLayer(
        layerRef: VectorLayer,
        layerName: 'landmarkdistricts_160203'
        | 'newarktractpolygon_1'
        | 'nwkneighborhoods'
        | 'opertunity_zones'
        | 'redevelopmentplanareas_170208'
        | 'uez'
        | 'ward_wardmni_copy'
        | 'wards'
        ): void {
        const columns = this.findCols(layerName);
        if (['newarktractpolygon_1', 'nwkneighborhoods', 'wards'].indexOf(layerName) > -1) {
            this.storeService.setGeoLayer(layerName);
        }
        layerRef.setSource(
            new VectorSource({
            url: `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,${columns}%20from%20public.${layerName}`,
            format: new GeoJSON({geometryName: layerName})
        }));
    }
    // setOverlayLayers(
    //     layerName: Array<'landmarkdistricts_160203'
    //     | 'opertunity_zones'
    //     | 'redevelopmentplanareas_170208'
    //     | 'uez'
    //     | 'ward_wardmni_copy'>
    //     ): Collection<Layer> {
    //     const collection: Collection<Layer> = new Collection();
    //     this.store.select(state => state.layers.overlays)
    //         .pipe(take(1))
    //         .subscribe(s => s.map(l => collection.push(l)));
    //     layerName.forEach(l => {
    //         const columns = this.findCols(l);
    //         if (collection.getArray()
    //             .find(lyr => lyr.getClassName() === l) === undefined) {
    //         collection.push(
    //             new VectorLayer({
    //                 className: l,
    //                 source: new VectorSource({
    //                     url: 'https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,' +
    //                         `${columns}%20from%20public.${l}`,
    //                     format: new GeoJSON()
    //                 })
    //             })
    //         ); }
    //     });

    //     return collection.getLength() > 0 ? collection : new Collection();
    // }
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
}
