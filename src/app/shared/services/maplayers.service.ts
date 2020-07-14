import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureLike } from 'ol/Feature';
import { EsriJSON, GeoJSON } from 'ol/format';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { UTFGrid, XYZ } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style, Text } from 'ol/style';
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
    geoLayer: Array<MapLayer> = [];
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
    initGeoParcelLayers(): Array<Array<MapLayer>> {
        this.parcelLayers = [
            new MapLayer(
                {name: 'zoning', group: 'Parcels', legendInfo: this.getLegendData('zoning'),
                 layer: new TileLayer({className: 'parcels',  zIndex: 3, opacity: 1, visible: true})}
            ),
            new MapLayer(
                {name: 'Grid', group: 'Parcels', layer: new TileLayer({className: 'parcelgrid',  zIndex: 2, opacity: 1, visible: true})}
            )
        ];
        this.geoLayer = [
            new MapLayer(
                {name: 'wards', group: 'Geographies', layer: new VectorLayer({
                    className: 'geo', zIndex: 4, opacity: 1, visible: true,
                    style: feature => this.styleFunction(feature, 'ward_name', [0, 0, 0])
                })}
            )
        ];
        this.getGeoLayer('wards');
        this.setParcelViz('zoning');

        return [this.parcelLayers, this.geoLayer];
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
            this.parcelLayers[0].name = layer;
            this.parcelLayers[0].legendInfo = this.getLegendData(layer);
            this.parcelLayers[0].layer.setSource(new XYZ({
                urls: cartoRasterTiles,
                attributions: ['<a href="https://njgin.nj.gov/njgin/about/ogis/">NJ OGIS</a>', '<a href="https://njgin.nj.gov/">NJ GIN</a>', 'City of Newark Office of Planning & Zoning']
            }));
            this.parcelLayers[1].layer.setSource( new UTFGrid({
                    tileJSON: { version: '2.2.0', grids: baseJson.grids.map(hackUrls), tiles: baseJson.grids.map(hackUrls) }
                }));
            this.storeService.setParcelLayers(this.parcelLayers);
        })
        .catch(error => { console.error(error); });
        }
    }
    updateLayer(
        layer: string,
        type: 'geo' | 'parcels',
        propset: {name: 'opacity' | 'zIndex', propVal: number } | {name: 'visible', propVal: boolean}
        ): void {
            if (type === 'parcels') {
                this.parcelLayers.filter(ol => ol.name === layer)[0].layer
                    .set(propset.name, propset.propVal);
                this.storeService.setParcelLayers(this.parcelLayers);
            } else if (type === 'geo') {
                this.geoLayer.filter(ol => ol.name === layer)[0].layer
                    .set(propset.name, propset.propVal);
                this.storeService.setGeoLayer(this.geoLayer);
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
    getGeoLayer(
        layerName: 'none'
        | 'newarktractpolygon_1'
        | 'nwkneighborhoods'
        | 'wards'
        ): void {
        if (layerName === 'none') {
            this.geoLayer[0].layer.setSource( new VectorSource());
            this.geoLayer[0].name = 'none';
        } else {
        const columns = this.findCols(layerName);
        this.geoLayer[0].layer.setSource(
            new VectorSource({
            url: `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,${columns}%20from%20public.${layerName}`,
            format: new GeoJSON({
                geometryName: layerName
            }),
            attributions: this.attributions(layerName)
        }));
        this.geoLayer[0].name = layerName;
        this.geoLayer[0].setLegendInfo(this.geoNameFix(layerName));
        (this.geoLayer[0].layer as VectorLayer).setStyle(feat => this.styleFunction(feat, this.findCols(layerName), [0, 0, 0]));
        }
        this.storeService.setGeoLayer(this.geoLayer);
    }
    findCols = (layer: string) => {
        switch (layer) {
            case 'newarktractpolygon_1': return 'namelsad';
            case 'nwkneighborhoods': return 'name';
            case 'wards': return 'ward_name';
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

        return str.replace('Census Tract ', '');
      };
    geoNameFix(layer): string {
        switch (layer) {
            case 'newarktractpolygon_1': return 'Census Tracts';
            case 'nwkneighborhoods': return 'Neighborhoods';
            default: return 'Wards';
        }
    }
    attributions(layer): Array<string> {
        switch (layer) {
            case 'newarktractpolygon_1': return ['<a href="https://data.census.gov/">US Census</a>'];
            case 'nwkneighborhoods': return ['<a href="https://newgin.maps.arcgis.com/home/index.html">NewGIN</a>'];
            default: return ['<a href="https://newgin.maps.arcgis.com/home/index.html">NewGIN</a>'];
        }
    }
    geoStyle(rgb: [number, number, number] = [0, 0, 0]): Style {
        return new Style({
          stroke: new Stroke({color: `rgba(${rgb.join(',')})`, width: 3}),
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
          const newstyle = this.geoStyle(rgb);
          newstyle.getText()
              .setText(
              this.stringDivider(feature.get(labelProp), 20, '\n'));

          return newstyle;
    }
    getLegendData(name: string): LegendItem {
        switch (name) {
            case 'landuse':
                return ({
                    layer: 'Land Use',
                    group: 'Parcels',
                    items: [
                        {name: '1', background: '#686868', desc: 'Vacant Land'},
                        {name: '2', background: '#FFEBAF', desc: 'Residential: < 4 Units'},
                        {name: '4A', background: '#FF7F7F', desc: 'Commercial'},
                        {name: '4B', background: '#C29ED7', desc: 'Industrial'},
                        {name: '4C', background: '#FFAA00', desc: 'Apartments'},
                        {name: '5A', background: '#FFFFFF', desc: 'Railroad: Class I'},
                        {name: '5B', background: '#FFFFFF', desc: 'Railroad: Class II'},
                        {name: '15A', background: '#BEE8FF', desc: 'Exempt: Public School Property'},
                        {name: '15B', background: '#BEE8FF', desc: 'Exempt: Other School Property'},
                        {name: '15C', background: '#73DFFF', desc: 'Exempt: Public Property'},
                        {name: '15D', background: '#00C5FF', desc: 'Exempt: Church & Charitable Property'},
                        {name: '15E', background: '#D1FF73', desc: 'Exempt: Cemeteries & Graveyards'},
                        {name: '15F', background: '#0084A8', desc: 'Exempt: Other'}
                ]});
            case 'zoning':
                return ({
                    layer: 'Zoning',
                    group: 'Parcels',
                    items: [
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
                    {name: 'MX-3', background: '#734C00', desc: 'Mixed-Use: High Intensity'},
                    {name: 'INST', background: '#0063ff', desc: 'Institutional'},
                    {name: 'PARK', background: '#229A00', desc: 'Parks & Open Space'},
                    {name: 'CEM', background: '#561818', desc: 'Cemeteries'},
                    {name: 'RDV', background: '#dddddd', desc: 'Redevelopment Zone'},
                    {name: 'EWR/EWR-S', background: '#8400A8', desc: 'Airport & Airport Support'},
                    {name: 'PORT', background: '#4C0073',  desc: 'Port Related Industrial'}
                    ]
                });
            case undefined:
            default: return {
                layer: 'Base',
                group: 'Parcels',
                items: [
                    {name: 'Parcel', background: 'grey',  desc: 'City of Newark Parcel'}
                ]
            };
        }
    }
    resetService(): void {
        this.storeService.setParcelLayers([]);
        this.storeService.setGeoLayer([]);
        this.parcelLayers = [];
        this.geoLayer = [];
    }
}
