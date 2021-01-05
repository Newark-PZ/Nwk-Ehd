import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Feature, { FeatureLike } from 'ol/Feature';
import GeoJSON from 'ol/format/GeoJSON';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { UTFGrid, XYZ } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { Fill, Icon, Stroke, Style, Text } from 'ol/style';
import { LegendItem } from '../models';

interface InitLayerData {
    cartoName: string;
    cartoCol?: string;
    group: 'Parcels' | 'Boundary' | 'Overlays';
    legendColor: [number, number, number];
    name: string;
    zIndex: number;
}
/**
 * Service to generate map groups and set up layers
 * @method makeBasemapGroup() Return Layer Group with Basemap and Basemap Labels layers
 * @method makeTransitGroup() Return Layer Group with Commuter and Light Rail layers
 * @method makeLayerGroup(): Return Layer Group with Poltiical Geographies or Overlay Layers
 * @method makeParcelGroup() Return Layer Group with Parcel and Parcel Grid Layers
 */
@Injectable({ providedIn: 'root' })
export class MapLayerService {
    mapsApiUrl = 'https://nzlur.carto.com/api/v1/map/';
    initialLayerData: Array<InitLayerData> = [
        {
            cartoName: 'landmarkdistricts_160420', name: 'Historic Districts',
            group: 'Overlays', legendColor: [128, 147, 241], zIndex: 11
        },
        {
            cartoName: 'newark_redevelopmentareas', name: 'Redevelopment Plans',
            group: 'Overlays', legendColor: [254, 95, 0], zIndex: 10
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
            cartoName: 'newark_censustracts', name: 'Census Tracts',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            cartoName: 'newark_zipcodes', name: 'Zipcodes',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            cartoName: 'neighborhoods', name: 'Neighborhoods',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            cartoName: 'wards', name: 'Wards',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        }
    ];
    initParcelData = [
        { name: 'Parcels', group: 'Parcels', legendColor: [0, 0, 0], zIndex: 3 }
        // { name: 'Grid', group: 'Parcels', legendColor: [0, 0, 0], zIndex: 2 }
    ];
    constructor(readonly http: HttpClient) {}
    makeBasemapGroup(): LayerGroup {
        return new LayerGroup({ layers: [
                new TileLayer({ className: 'Basemap', zIndex: 0, source: new XYZ({ crossOrigin: 'anonymous' }) }),
                new TileLayer({ className: 'Basemap Labels', zIndex: 4, source: new XYZ({ crossOrigin: 'anonymous' }) })
        ]});
    }
    makeTransitGroup(): LayerGroup {
        return new LayerGroup({ layers: [
            new VectorLayer({
                className: 'Commuter Rail',
                zIndex: 4.1,
                source: new VectorSource({ url: 'assets/data/transit_njt.geojson', format: new GeoJSON() }),
                style: (feat: Feature) => new Style({
                    image: new Icon({ src: `assets/img/icons/${feat.get('ICON')}.png`, crossOrigin: 'anonymous', scale: 0.5 }),
                    text: this.makeText(feat.get('STATION'), undefined, undefined, 25, 0, 0.7, '#1a73e8', 'white')
                })
            }),
            new VectorLayer({
                className: 'Light Rail',
                minZoom: 15,
                zIndex: 4,
                source: new VectorSource({ url: 'assets/data/transit_nlr.geojson', format: new GeoJSON() }),
                style: feat => new Style({
                    image: new Icon({ src: 'assets/img/icons/Logo_NLR.png', crossOrigin: 'anonymous', scale: 0.6 }),
                    text: this.makeText(feat.get('STATION'), undefined, undefined, 15, 0, 0.7, '#1a73e8', 'white')
                })
            })]
        });
    }
    makeLayerGroup(group: 'Boundary' | 'Overlays', visibleLyrs: Array<string> = []): LayerGroup {
        const buildCartoUrl = (cartoLayer: string, cols: string): string => `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,${cols}%20from%20public.${cartoLayer}`;

        return new LayerGroup({
            layers: (group === 'Boundary' ? this.initGeoData : this.initialLayerData).map(il => new VectorLayer({
                className: il.name,
                zIndex: il.zIndex,
                visible: visibleLyrs.includes(il.cartoName),
                style: feat => this.styleFunction(il.group, feat, il.cartoCol ? il.cartoCol : 'name', il.legendColor),
                source: new VectorSource({
                    url: buildCartoUrl(il.cartoName, il.cartoCol ? il.cartoCol : 'name'),
                    format: new GeoJSON(),
                    attributions: this.getAttributions(il.name)
                })
            }))
        });
    }
    makeParcelGroup(layer: 'Zoning' | 'LandUse' | 'Base'): LayerGroup {
        return new LayerGroup({ layers:
            this.initParcelData.map(
                (ip, i) => new TileLayer({ className: `${ip.name}`, zIndex: ip.zIndex, source: this.makeParcelSources(layer)[i] })
        )});
    }
    makeParcelSources(layer: 'Zoning' | 'LandUse' | 'Base'): Array<XYZ | UTFGrid> {
        const utfID = {Zoning: 'nzlur@5593c0de@38273e9fe0f1c2971af7fdc993ea5f81:1603212334613', LandUse: 'nzlur@6e7b293d@b00a5ad5f87dd84493a639f12bf0a825:1595904108552', Base: 'nzlur@454dcbd4@351b9f58717a82aa3fb7531e7aaca718:1595904108552'};
        const buildUrls = (): Array<string> => [`https://nzlur.carto.com/api/v1/map/named/Parcels${layer}/all/{z}/{x}/{y}.png`, `https://nzlur.carto.com/api/v1/map/${utfID[layer]}/0/{z}/{x}/{y}.grid.json`];

        return [
            new XYZ({url: buildUrls()[0], crossOrigin: 'anonymous', attributions: this.getAttributions('parcels') }),
            new UTFGrid({tileJSON: { version: '2.2.0', grids: [buildUrls()[1]], tiles: [buildUrls()[1]]}})
        ];
    }
    styleFunction(group: string, feature: FeatureLike, labelProp = 'name', rgb: [number, number, number]): Style {
        const newstyle = new Style({
            stroke: new Stroke({ color: `rgba(${rgb.join(',')})`, lineDash: group === 'Boundary' ? undefined : [5, 0, 0, 5], width: 3 }),
            fill: group === 'Boundary' ? undefined : new Fill({ color: `rgba(${rgb.join(',')}, 0.4)` }),
            text: this.makeText(this.stringDivider(feature.get(labelProp), 20, '\n'), 1.15, 'center', 0, 0, 0.75, group === 'Boundary' ? 'white' : `rgba(${rgb.join(',')}, 1)`, group === 'Boundary' ? 'black' : undefined )
        });

        return newstyle;
    }
    makeText(
        textContent: string, fontSize = 1, textAlignment = 'left', offsetXVal = 25, offsetYVal = 0,
        scaleVal = 0.7, fillColor = '#1a73e8', strokeColor = 'white' ): Text {
        return new Text({
            text: textContent,
            font: `500 calc(${(fontSize * 0.25).toString()}rem + 14.5px) 'Segoe UI Semibold', Verdana, sans-serif`,
            textAlign: textAlignment,
            offsetX: offsetXVal,
            offsetY: offsetYVal,
            overflow: true,
            scale: scaleVal,
            padding: [5, 5, 5, 5],
            fill: new Fill({ color: fillColor }),
            stroke: new Stroke({ color: strokeColor, width: 6 })
        });
    }
    stringDivider(str: string, width: number, spaceReplacer: any): string {
        if (str.length > width) {
            let p = width;
            while (p > 0 && (str[p] !== ' ' && str[p] !== '-')) { p--; }
            if (p > 0) {
                const left = (str.substring(p, p + 1) === '-') ? str.substring(0, p + 1) : str.substring(0, p);
                const right = str.substring(p + 1);

                return `${left}${spaceReplacer}${this.stringDivider(right, width, spaceReplacer)}`;
            }
        }

        return str.replace(/(Redevelopment Plan|District Plan|Census Tract)/gi, '')
            .replace(/\w+/g, txt => txt.charAt(0)
                .toUpperCase() + txt.substr(1)
            );
    }
    getAttributions(className: string): Array<string> {
        switch (className) {
            case 'Census Tracts': return ['<a href="https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/8">US Census TIGER: Census Tracts</a>'];
            case 'Zipcodes': return ['<a href="https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/2">US Census TIGER: 2010 Zip Code Tabulation Areas</a>'];
            case 'Neighborhoods':
            case 'Wards':
                return [`<a href="https://nzlur.carto.com/tables/${className.toLowerCase()}/public">NZLUR Carto: ${className}</a>`];
            case 'Parcels': return ['<a href="https://njgin.nj.gov/">NJ GIN</a>', 'City of Newark Office of Planning & Zoning'];
            default: return [''];
        }
    }
    getLayerInfo(className: string): { info: Array<string>; source: Array<string> } {
        const infoText: Array<{ name: string; info: Array<string>; }> = [
            { name: 'Census Tracts', info: ['Newark Census Tracts', 'City of Newark Census Tracts, as delineated by the 2020 release of US Census TIGER Boundaries']},
            { name: 'Neighborhoods', info: ['Newark Neighborhoods', 'City of Newark Neighborhods, as used by Newark Planning & Zoning Office and codified in the 2015 Zoning and Land Use Regulations.']},
            { name: 'Zipcodes', info: ['Newark 2010 Zipcodes', 'City of Newark Zipcodes Tabulation Areas, as delineated by the 2010 release of US Census TIGER Boundaries']},
            { name: 'Wards', info: ['Newark Wards', 'City of Newark Ward Boundaries as delineated in 2012, the last census redistricting. Boundaries drawn to reflect similar similar population totals amongst the five wards.']},
            { name: 'Parcels', info: ['Newark Parcels', "City of Newark Parcel boundaries, current as of the December 2018 release from the Tax Assessors' office. Incorporates information from State MODIV tax data"]},
            { name: 'Historic Districts', info: ['Newark Historic Districts']},
            { name: 'Redevelopment Plans', info: ['Major Redevelopment Plan Areas']},
            { name: 'Opportunity Zones', info: ['Newark Opportunity Zones']},
            { name: 'Urban Enterprise Zone', info: ['Newark Urban Enterprise Zone']}
        ];

        return {
            info: infoText.filter(i => i.name === className)[0]?.info || [`Newark ${className}`, 'Map layer'],
            source: this.getAttributions(className)
        };
    }
    getLegendData(name: string, type?: 'Boundary' | 'Overlay' | string): LegendItem {
        switch (name) {
            case 'LandUse':
                return ({ layer: 'Land Use', group: 'Parcels', items: [
                        ['1', 'grey', 'rgb(204,204,204)', 'Vacant Property' ],
                        ['2', 'grey', 'rgb(255,235,175)', 'Residential: < 4 Units' ],
                        ['4A', 'grey', 'rgb(255,127,127)', 'Commercial' ],
                        ['4B', 'grey', 'rgb(170,102,205)', 'Industrial' ],
                        ['4C', 'grey', 'rgb(230,152,0)', 'Apartments' ],
                        ['5A/B', 'grey', 'rgb(78,78,78)', 'Railroad: Class I/II' ],
                        ['15A/B', 'grey', 'rgb(190,210,255)', 'Exempt: Public/Other School Property' ],
                        ['15C', 'grey', 'rgb(158,170,215)', 'Exempt: Public Property' ],
                        ['15D', 'grey', 'rgb(122,142,245)', 'Exempt: Church & Charitable Property' ],
                        ['15E', 'grey', 'rgb(163,255,115)', 'Exempt: Cemeteries & Graveyards' ],
                        ['15F', 'grey', 'rgb(102,119,205)', 'Exempt: Other'],
                        ['Unclassed', 'grey', 'rgb(255,255,255)', 'Unclassed Properties']
                ]});
            case 'Zoning':
                return ({ layer: 'Zoning', group: 'Parcels', items: [
                        [ 'R-1', 'grey', '#fffaca', 'Residential: 1 Family' ],
                        [ 'R-2', 'grey', '#fff68f', 'Residential: 1-2 Family' ],
                        [ 'R-3', 'grey', '#fff100', 'Residential: 1-3 Family' ],
                        [ 'R-4', 'grey', '#ebd417', 'Residential: Low-Rise Multi-Family' ],
                        [ 'R-5', 'grey', '#b49d34', 'Residential: Mid-Rise Multi-Family' ],
                        [ 'R-6', 'grey', '#998439', 'Residential: High-Rise Multi-Family' ],
                        [ 'C-1', 'grey', '#fbc8b3', 'Commercial: Neighborhood' ],
                        [ 'C-2', 'grey', '#da2028', 'Commercial: Community' ],
                        [ 'C-3', 'grey', '#850204', 'Commercial: Regional' ],
                        [ 'I-1', 'grey', '#e1c3dd', 'Industrial: Light' ],
                        [ 'I-2', 'grey', '#A53ED5', 'Industrial: Medium' ],
                        [ 'I-3', 'grey', '#c0188c', 'Industrial: Heavy' ],
                        [ 'MX-1', 'grey', '#e4a024', 'Mixed-Use: Low Intensity' ],
                        [ 'MX-2', 'grey', '#f37520', 'Mixed-Use: Medium Intensity' ],
                        [ 'MX-3', 'grey', '#734C00', 'Mixed-Use: High Intensity' ],
                        [ 'INST', 'grey', '#0063ff', 'Institutional' ],
                        [ 'PARK', 'grey', '#229A00', 'Parks & Open Space' ],
                        [ 'CEM', 'grey', '#561818', 'Cemeteries' ],
                        [ 'RDV', 'grey', '#dddddd', 'Redevelopment Zone' ],
                        [ 'EWR/EWR-S', 'grey', '#8400A8', 'Airport & Airport Support' ],
                        [ 'PORT', 'grey', '#4C0073', 'Port Related Industrial']
                ]});
            case 'Base': return {
                    layer: 'Base', group: 'Parcels', items: [ ['Parcel', 'grey', 'City of Newark Parcel' ] ]
                };
            default: return ({
                    layer: name, group: type, items: [[
                    name.slice(0, name.search(/s$/gi) > -1 ? name.search(/s$/gi) : undefined),
                    `rgba(${(type === 'Boundary' ? [0, 0, 0] : this.initialLayerData.filter(il => il.name === name)[0].legendColor).join(',')},1)`,
                    type === 'Boundary' ? 'transparent' : `rgba(${this.initialLayerData.filter(il => il.name === name)[0].legendColor
                            .join(',')},.25)`,
                    `${name.slice(0, name.length - 1)} Boundaries`
                ]]});
        }
    }
}
