import { Injectable } from '@angular/core';
import { FeatureLike } from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { UTFGrid, XYZ } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style, Text } from 'ol/style';
import { StoreService } from '../../store/store.service';
import { MapLayer } from '../classes/maplayer';
import { apiConfig, LegendItem } from '../models';
/**
 * Service to query data from NZLUR Carto
 * @method initLayers() Set the initial overlay layers as empty in the store, and add them to target layer group
 */
export interface InitLayerData {
    attributions?: Array<string>;
    cartoName: string;
    cartoCol?: string;
    group: 'Parcels' | 'Geographies' | 'Overlays';
    legendColor: [number, number, number];
    name: string;
    zIndex: number;
}
@Injectable({
    providedIn: 'root'
})
export class LayersService {
    mapsApiUrl = 'https://nzlur.carto.com/api/v1/map/';
    layers: Array<MapLayer> = [];
    parcelLayers: Array<MapLayer> = [];
    initialLayerData: Array<InitLayerData> = [
        {
            cartoName: 'landmarkdistricts_160420', name: 'Historic Districts',
            group: 'Overlays', legendColor: [128, 147, 241], zIndex: 11
        },
        {
            cartoName: 'newark_redevelopmentareas', name: 'Redevelopment Plans',
            group: 'Overlays', legendColor: [254, 95, 0],  zIndex: 10
        },
        {
            cartoName: 'newark_opportunityzones', cartoCol: 'namelsad', name: 'Opportunity Zones',
            group: 'Overlays', legendColor: [106, 88, 55], zIndex: 9
        },
        {
            cartoName: 'uez', cartoCol: 'uez_name', name: 'Urban Enterprise Zone',
            group: 'Overlays', legendColor: [226, 157, 227], zIndex: 8
        }
    ];
    initGeoData: Array<InitLayerData> = [
        {
            cartoName: 'newark_censustracts', cartoCol: 'namelsad', name: 'Census Tracts',
            group: 'Geographies', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            cartoName: 'newark_zipcodes', cartoCol: 'zcta5ce10', name: 'Zipcodes',
            group: 'Geographies', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            cartoName: 'neighborhoods', name: 'Neighborhoods',
            group: 'Geographies', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            cartoName: 'wards', cartoCol: 'ward_name', name: 'Wards',
            group: 'Geographies', legendColor: [0, 0, 0], zIndex: 4
        }
    ];
    initParcelData = [
        {
            name: 'Parcels', group: 'Parcels', legendColor: [0, 0, 0], zIndex: 3
        },
        {
            name: 'Grid', group: 'Parcels', legendColor: [0, 0, 0], zIndex: 2
        }
    ];
    constructor(
        readonly storeService: StoreService
    ) { }
    /**
     * Set the initial overlay layers as empty in the store, and add them to target layer group
     * @param overlayGroup layergroup component target for the layers to initialize inside
     */
    initLayers(
        overlays: Array<
        'landmarkdistricts_160420' | 'newark_redevelopmentareas' | 'newark_oportunityzones' | 'uez'> = [],
        geo: 'newark_censustracts' | 'newark_zipcodes' | 'neighborhoods' | 'wards' | 'none' = 'wards',
        parcel: 'zoning' | 'landuse' | 'base' | 'none' = 'zoning'
    ): Array<Array<MapLayer>> {
        const lyrs: Array<string> = [geo];
        lyrs.concat(overlays);
        if (geo !== 'none') { this.initialLayerData.push(this.initGeoData.filter(gl => gl.cartoName === geo)[0]); }
        this.initialLayerData.forEach(
            l => this.layers.push(new MapLayer({
                name: l.name,
                group: l.group,
                cartoCols: l.cartoCol ? l.cartoCol : 'name',
                cartoName: l.cartoName,
                legendColor: l.legendColor,
                layer: new VectorLayer({
                    className: l.cartoName,
                    zIndex: l.zIndex,
                    opacity: 1,
                    visible: lyrs.includes(l.cartoName),
                    style: feature => this.styleFunction(l.group, feature, l.cartoCol ? l.cartoCol : 'name', l.legendColor),
                    source: new VectorSource({
                        url: this.buildCartoUrl(l.cartoName, l.cartoCol ? l.cartoCol : 'name'),
                        format: new GeoJSON(),
                        attributions: this.attributions(l.cartoName)
                        })
                })
            })
        ));
        this.initParcelData.forEach(
            l => this.parcelLayers.push(new MapLayer({
                name: l.name === 'Parcels' ? `${l.name}: ${parcel}` : l.name,
                group: 'Parcels',
                layer: new TileLayer({
                    className: l.name,
                    zIndex: l.zIndex,
                    opacity: 1
                })
            })
        ));
        this.setParcelViz(parcel);
        this.storeService.setOverlayLayers(this.layers);

        return [this.layers, this.parcelLayers];
    }
    setParcelViz(layer: 'zoning' | 'landuse' | 'base' | 'none'): void {
        const dataset = {zoning: 'zoning_2', landuse: 'parcels', base: 'zoning_2'};
        const config = encodeURIComponent(JSON.stringify(apiConfig(layer, dataset[layer])));
        if (`Parcels: ${layer}` !== this.parcelLayers[0].name || this.parcelLayers[0].layer.getSource() === null && layer !== 'none') {
        fetch(`${this.mapsApiUrl}?config=${config}`, { method: 'GET', headers: new Headers({ 'Content-Type': 'application/json' }) })
        .then(res => res.json())
        .then(response => {
            const hackUrls = (x: any) => x.replace('layer0', '0');
            const baseJson = response.metadata.layers['0'].tilejson.raster;
            const cartoRasterTiles = baseJson.tiles.map(hackUrls);
            this.parcelLayers[0].name = `Parcels: ${layer}`;
            this.parcelLayers[0].legendInfo = this.getLegendData(layer);
            this.parcelLayers[0].layer.setSource(new XYZ({
                urls: cartoRasterTiles,
                attributions: this.attributions('parcels')
            }));
            this.parcelLayers[1].layer.setSource( new UTFGrid({
                    tileJSON: { version: '2.2.0', grids: baseJson.grids.map(hackUrls), tiles: baseJson.grids.map(hackUrls) }
                }));
            this.storeService.setParcelLayers(this.parcelLayers);
        })
        .catch(error => { console.error(error); });
        }
    }
    /**
     * Set the initial overlay layers as empty in the store, and add them to target layer group
     * @param overlayGroup layergroup component target for the layers to initialize inside
     */
    updateLayer(
        layer: string,
        propset: {name: 'opacity', propVal: number } | {name: 'visible', propVal: boolean}
        ): void {
            if (layer.startsWith('Parcels')) {
                this.parcelLayers[0].layer
                    .set(propset.name, propset.propVal);
                this.storeService.setParcelLayers(this.parcelLayers);
            } else {
                this.layers.filter(ol => ol.name === layer)[0].layer
                    .set(propset.name, propset.propVal);
                this.storeService.setOverlayLayers(this.layers);
            }
    }
    setGeo(layer: 'newark_censustracts' | 'newark_zipcodes' | 'neighborhoods' | 'wards'): void {
        const lyr: InitLayerData = this.initGeoData.filter(gl => gl.cartoName === layer)[0];
        this.layers.filter(l => l.group === 'Geographies')[0].name = lyr.name;
        this.layers.filter(l => l.group === 'Geographies')[0].cartoCols = lyr.cartoCol ? lyr.cartoCol : 'name';
        this.layers.filter(l => l.group === 'Geographies')[0].cartoName = lyr.cartoName;
        (this.layers.filter(l => l.group === 'Geographies')[0].layer as VectorLayer).setStyle(
            feature => this.styleFunction(lyr.group, feature, lyr.cartoCol ? lyr.cartoCol : 'name', lyr.legendColor
            ));
        this.layers.filter(l => l.group === 'Geographies')[0].layer
            .setSource(
                new VectorSource({
                    url: this.buildCartoUrl(lyr.cartoName, lyr.cartoCol ? lyr.cartoCol : 'name'),
                    format: new GeoJSON(),
                    attributions: this.attributions(lyr.cartoName)
                    })
        );
        this.storeService.setOverlayLayers(this.layers);
    }
    buildCartoUrl(cartoLayer: string, cols: string): string {
        return `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,${cols}%20from%20public.${cartoLayer}`;
    }
    attributions(layer): Array<string> {
        switch (layer) {
            case 'newark_zipcodes': return ['<a href="https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer">US Census TIGER</a>'];
            case 'newark_censustracts': return ['<a href="https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer">US Census TIGER</a>'];
            case 'neighborhoods': return ['<a href="https://nzlur.carto.com/">NZLUR Carto</a>'];
            case 'parcels': return ['<a href="https://njgin.nj.gov/njgin/about/ogis/">NJ OGIS</a>', '<a href="https://njgin.nj.gov/">NJ GIN</a>', 'City of Newark Office of Planning & Zoning'];
            default: return [''];
        }
    }
    styleFunction(group: string, feature: FeatureLike, labelProp = 'name', rgb: [number, number, number]): Style {
        const newstyle = new Style({
            stroke: new Stroke({color: `rgba(${rgb.join(',')})`, lineDash: group === 'Geographies' ? undefined : [5, 0, 0, 5], width: 3}),
            fill: group === 'Geographies' ? undefined : new Fill({color: `rgba(${rgb.join(',')}, 0.4)`}),
            text: new Text({
                font: group === 'Geographies' ? 'bold 1.25rem Segoe UI,sans-serif' : 'bold 1rem Segoe UI,sans-serif',
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
        newstyle.getText()
            .setText(
            this.stringDivider(feature.get(labelProp), 20, '\n'));

        return newstyle;
    }
    makeStyle(rgb: [number, number, number] = [0, 0, 0]): Style {
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
    stringDivider(str: string, width: number, spaceReplacer: any): string {
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
            .replace('Plan', '')
            .replace('Census Tract ', '')
            .replace(/\w+/g, txt => txt.charAt(0)
                .toUpperCase() + txt.substr(1)
                .toLowerCase()
                );
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
        this.storeService.setOverlayLayers([]);
        this.layers = [];
        this.parcelLayers = [];
    }
}
