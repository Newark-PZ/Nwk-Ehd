import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EsriJSON, GeoJSON } from 'ol/format';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { UTFGrid, XYZ } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import * as fromStore from '../../store/store.reducers';
import { StoreService } from '../../store/store.service';
import { MapLayer } from '../classes/maplayer';
import { apiConfig } from '../models';

/**
 * Service to query data from NZLUR Carto
 * @method getGeoJSONLayer() Input Geolayer Name and Return Geojson file
 * @method setParcelViz() Input Layer Name, Target Carto and Target Grid layers and return Both Layers
 * @method getEsriLayer() Input a reference to target vector layer and the Esri Layer Name, sets source of the target layer
 */
@Injectable({
    providedIn: 'root'
})
@Injectable()
export class MapLayersService {
    mapsApiUrl = 'https://nzlur.carto.com/api/v1/map/';
    arcgisRestBaseURL = 'https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/';
    parcelLayers: Array<MapLayer> = [];
    esriFeatures: EsriJSON;
    constructor(
        readonly http: HttpClient,
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
    initGeoParcelLayers(): Array<MapLayer> {
        this.parcelLayers = [
            new MapLayer(
                {name: 'Parcel Grid', layer: new TileLayer({className: 'parcelgrid',  zIndex: 2, opacity: 1, visible: true})}
            ),
            new MapLayer(
                {name: 'zoning', layer: new TileLayer({className: 'parcels',  zIndex: 3, opacity: 1, visible: true})}
            )
        ];
        this.setParcelViz('zoning');

        return this.parcelLayers;
    }
    setParcelViz(layer: 'zoning' | 'landuse' | 'base' | 'none'): void {
        const dataset = {zoning: 'zoning_2', landuse: 'table_2017_zoning_layer', base: 'zoning_2'};
        const config = encodeURIComponent(JSON.stringify(apiConfig(layer, dataset[layer])));
        fetch(`${this.mapsApiUrl}?config=${config}`, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
        .then(res => res.json())
        .then(response => {
            const hackUrls = (x: any) => x.replace('layer0', '0');
            const baseJson = response.metadata.layers['0'].tilejson.raster;
            const cartoRasterTiles = baseJson.tiles.map(hackUrls);
            this.parcelLayers[0].layer.setSource(new XYZ({ urls: cartoRasterTiles }));
            this.parcelLayers[0].name = layer;
            this.parcelLayers[1].layer.setSource( new UTFGrid({
                    tileJSON: { version: '2.2.0', grids: baseJson.grids.map(hackUrls), tiles: baseJson.grids.map(hackUrls) }
                }));
            this.storeService.setParcelLayers(this.parcelLayers);
        })
        .catch(error => { console.error(error); });
    }
    updateLayer(
        layer: string,
        propset: {name: 'opacity' | 'zIndex', propVal: number } | {name: 'visible', propVal: boolean}
        ): void {
            // tslint:disable: no-non-null-assertion
            if (this.parcelLayers.find(ol => ol.name === layer)!.layer) {
                this.parcelLayers.find(ol => ol.name === layer)!.layer
                    .set(propset.name, propset.propVal);
                this.storeService.setParcelLayers(this.parcelLayers);
            }
    }
    getLegendData(mapName: 'none' | 'zoning' | 'landuse' | 'base'): Array<{ label: string; background: string; description: string; }> {
        switch (mapName) {
            case 'landuse': return [
                {label: '1', background: '#686868', description: 'Vacant Land'},
                {label: '2', background: '#FFEBAF', description: 'Residential: < 4 Units'},
                {label: '4A', background: '#FF7F7F', description: 'Commercial'},
                {label: '4B', background: '#E8BEFF', description: 'Industrial'},
                {label: '4C', background: '#FFAA00', description: 'Apartments'},
                {label: '5A', background: '#B5E6B9', description: 'Railroad: Class I'},
                {label: '5B', background: '#B5E6B9', description: 'Railroad: Class II'},
                {label: '15A', background: '#BED2FF', description: 'Exempt: Public School Property'},
                {label: '15B', background: '#BED2FF', description: 'Exempt: Other School Property'},
                {label: '15C', background: '#BEFFE8', description: 'Exempt: Public Property'},
                {label: '15D', background: '#73B2FF', description: 'Exempt: Church & Charitable Property'},
                {label: '15E', background: '#fff', description: 'Exempt: Cemeteries & Graveyards'},
                {label: '15F', background: '#00C5FF', description: 'Exempt: Other'}
            ];
            case 'zoning': return [
                {label: 'R-1', background: '#fffaca', description: 'Residential: 1 Family'},
                {label: 'R-2', background: '#fff68f', description: 'Residential: 1-2 Family'},
                {label: 'R-3', background: '#fff100', description: 'Residential: 1-3 Family'},
                {label: 'R-4', background: '#ebd417', description: 'Residential: Low-Rise Multi-Family'},
                {label: 'R-5', background: '#b49d34', description: 'Residential: Mid-Rise Multi-Family'},
                {label: 'R-6', background: '#998439', description: 'Residential: High-Rise Multi-Family'},
                {label: 'C-1', background: '#fbc8b3', description: 'Commercial: Neighborhood'},
                {label: 'C-2', background: '#da2028', description: 'Commercial: Community'},
                {label: 'C-3', background: '#850204', description: 'Commercial: Regional'},
                {label: 'I-1', background: '#e1c3dd', description: 'Industrial: Light'},
                {label: 'I-2', background: '#A53ED5', description: 'Industrial: Medium'},
                {label: 'I-3', background: '#c0188c', description: 'Industrial: Heavy'},
                {label: 'MX-1', background: '#e4a024', description: 'Mixed-Use: Low Intensity'},
                {label: 'MX-2', background: '#f37520', description: 'Mixed-Use: Medium Intensity'},
                {label: 'MX-3', background: '#FF2900', description: 'Mixed-Use: High Intensity'},
                {label: 'INST', background: '#0063ff', description: 'Institutional'},
                {label: 'PARK', background: '#229A00', description: 'Parks & Open Space'},
                {label: 'CEM', background: '#561818', description: 'Cemeteries'},
                {label: 'RDV', background: '#dddddd', description: 'Redevelopment Zone'},
                {label: 'EWR/EWR-S', background: '#820c0c', description: 'Airport & Airport Support'},
                {label: 'PORT', background: '#B81609',  description: 'Port Related Industrial'}
            ];
            case undefined:
            default: return [{label: 'Parcel', background: 'grey',  description: 'City of Newark Parcel'}];
        }
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
        | 'nwkneighborhoods'
        | 'wards'
        ): void {
        const columns = this.findCols(layerName);
        this.storeService.setGeoLayer(layerName);
        layerRef.setSource(
            new VectorSource({
            url: `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,${columns}%20from%20public.${layerName}`,
            format: new GeoJSON({geometryName: layerName})
        }));
    }
    findCols = (layer: string) => {
        switch (layer) {
            case 'newarktractpolygon_1': return 'name';
            case 'nwkneighborhoods': return 'name';
            case 'wards': return 'WARD_NAME';
            default: return '*';
        }
    };
    resetService(): void {
        this.storeService.setParcelLayers([]);
        this.parcelLayers = [];
    }
}
