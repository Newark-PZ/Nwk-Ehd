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
import { LegendItem } from '../interfaces/config-layers.inteface';
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
    legendItems: Array<LegendItem> = [];
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
                {name: 'zoning', layer: new TileLayer({className: 'parcels',  zIndex: 3, opacity: 1, visible: true})}
            ),
            new MapLayer(
                {name: 'Parcel Grid', layer: new TileLayer({className: 'parcelgrid',  zIndex: 2, opacity: 1, visible: true})}
            )
        ];
        this.setParcelViz('zoning');

        return this.parcelLayers;
    }
    setParcelViz(layer: 'zoning' | 'landuse' | 'base' | 'none'): void {
        const dataset = {zoning: 'zoning_2', landuse: 'table_2017_zoning_layer', base: 'zoning_2'};
        const config = encodeURIComponent(JSON.stringify(apiConfig(layer, dataset[layer])));
        if (layer !== this.parcelLayers[0].name || this.parcelLayers[0].layer.getSource() === null) {
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
            this.getLegendData();
        })
        .catch(error => { console.error(error); });
        }
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
    getLegendData(): void {
        switch (this.parcelLayers[0].name) {
            case 'landuse':
                this.legendItems = [
                    {name: '1', background: '#686868', desc: 'Vacant Land'},
                    {name: '2', background: '#FFEBAF', desc: 'Residential: < 4 Units'},
                    {name: '4A', background: '#FF7F7F', desc: 'Commercial'},
                    {name: '4B', background: '#E8BEFF', desc: 'Industrial'},
                    {name: '4C', background: '#FFAA00', desc: 'Apartments'},
                    {name: '5A', background: '#B5E6B9', desc: 'Railroad: Class I'},
                    {name: '5B', background: '#B5E6B9', desc: 'Railroad: Class II'},
                    {name: '15A', background: '#BED2FF', desc: 'Exempt: Public School Property'},
                    {name: '15B', background: '#BED2FF', desc: 'Exempt: Other School Property'},
                    {name: '15C', background: '#BEFFE8', desc: 'Exempt: Public Property'},
                    {name: '15D', background: '#73B2FF', desc: 'Exempt: Church & Charitable Property'},
                    {name: '15E', background: '#fff', desc: 'Exempt: Cemeteries & Graveyards'},
                    {name: '15F', background: '#00C5FF', desc: 'Exempt: Other'}
                ];
                break;
            case 'zoning':
                this.legendItems = [
                    {name: 'R-1', background: '#fffaca', desc: 'Residential: 1 Family'},
                    {name: 'R-2', background: '#fff68f', desc: 'Residential: 1-2 Family'},
                    {name: 'R-3', background: '#fff100', desc: 'Residential: 1-3 Family'},
                    {name: 'R-4', background: '#ebd417', desc: 'Residential: Low-Rise Multi-Family'},
                    {name: 'R-5', background: '#b49d34', desc: 'Residential: Mid-Rise Multi-Family'},
                    {name: 'R-6', background: '#998439', desc: 'Residential: High-Rise Multi-Family'},
                    {name: 'C-1', background: '#fbc8b3', desc: 'Commercial: Neighborhood'},
                    {name: 'C-2', background: '#da2028', desc: 'Commercial: Community'},
                    {name: 'C-3', background: '#850204', desc: 'Commercial: Regional'},
                    {name: 'I-1', background: '#e1c3dd', desc: 'Industrial: Light'},
                    {name: 'I-2', background: '#A53ED5', desc: 'Industrial: Medium'},
                    {name: 'I-3', background: '#c0188c', desc: 'Industrial: Heavy'},
                    {name: 'MX-1', background: '#e4a024', desc: 'Mixed-Use: Low Intensity'},
                    {name: 'MX-2', background: '#f37520', desc: 'Mixed-Use: Medium Intensity'},
                    {name: 'MX-3', background: '#FF2900', desc: 'Mixed-Use: High Intensity'},
                    {name: 'INST', background: '#0063ff', desc: 'Institutional'},
                    {name: 'PARK', background: '#229A00', desc: 'Parks & Open Space'},
                    {name: 'CEM', background: '#561818', desc: 'Cemeteries'},
                    {name: 'RDV', background: '#dddddd', desc: 'Redevelopment Zone'},
                    {name: 'EWR/EWR-S', background: '#820c0c', desc: 'Airport & Airport Support'},
                    {name: 'PORT', background: '#B81609',  desc: 'Port Related Industrial'}
                ];
                break;
            case undefined:
            default: this.legendItems = [{name: 'Parcel', background: 'grey',  desc: 'City of Newark Parcel'}];
        }
        this.storeService.setLegend(this.legendItems);
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
