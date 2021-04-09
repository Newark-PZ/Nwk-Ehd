import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Feature, { FeatureLike } from 'ol/Feature';
import { MVT as MVTFormat } from 'ol/format';
import GeoJSON from 'ol/format/GeoJSON';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorTileLayer from 'ol/layer/VectorTile';
import { Vector as VectorSource, VectorTile as VectorTileSource, XYZ } from 'ol/source';
import { Fill, Icon, Stroke, Style, Text } from 'ol/style';
import { LegendItem } from '../models';

interface InitLayerData {
    resource: string;
    resourceNum?: number;
    keyField?: string;
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
    zones = {
        'R-1': ['Residential: 1 Family', '#FFFFBE'],
        'R-2': ['Residential: 1-2 Family', '#FFFF00'],
        'R-3': ['Residential: 1-3 Family', '#E6E600'],
        'R-4': ['Residential: Low-Rise Multi-Family', '#e4a024'],
        'R-5': ['Residential: Mid-Rise Multi-Family', '#FF8C00'],
        'R-6': ['Residential: High-Rise Multi-Family', '#f37520'],
        'C-1': ['Commercial: Neighborhood', '#FFBEBE'],
        'C-2': ['Commercial: Community', '#FF7F7F'],
        'C-3': ['Commercial: Regional', '#A80000'],
        'I-1': ['Industrial: Light', '#E8BEFF'],
        'I-2': ['Industrial: Medium', '#DF73FF'],
        'I-3': ['Industrial: Heavy', '#8400A8'],
        'MX-1': ['Mixed-Use: Low Intensity', '#BEFFE8'],
        'MX-2': ['Mixed-Use: Medium Intensity', '#00E6A9'],
        'MX-3': ['Mixed-Use: High Intensity', '#00A884'],
        INST: ['Institutional', '#73B2FF'],
        PARK: ['Parks & Open Space', '#98E600'],
        CEM: ['Cemeteries', '#70A800'],
        RDV: ['Redevelopment Zone', '#E1E1E1'],
        EWR: ['Airport & Airport Support', '#B2B2B2'],
        PORT: ['Port Related Industrial', '#686868'],
        'N/A': ['Not Available', '#000000']
    };
    landUses = {
        1: ['Vacant Property', 'rgba(204,204,204)'],
        2: ['Residential: < 4 Units', 'rgba(255,235,175)'],
        '4A': ['Commercial', 'rgba(255,127,127)'],
        '4B': ['Industrial', 'rgba(170,102,205)'],
        '4C': ['Apartments', 'rgba(230,152,0)'],
        '5A': ['Railroad: Class I/II', 'rgba(78,78,78)'],
        '5B': ['Railroad: Class I/II', 'rgba(78,78,78)'],
        '5A/B': ['Railroad: Class I/II', 'rgba(78,78,78)'],
        '15A': ['Exempt: Public/Other School Property', 'rgba(190,210,255)'],
        '15B': ['Exempt: Public/Other School Property', 'rgba(190,210,255)'],
        '15A/B': ['Exempt: Public/Other School Property', 'rgba(190,210,255)'],
        '15C': ['Exempt: Public Property', 'rgba(158,170,215)'],
        '15D': ['Exempt: Church & Charitable Property', 'rgba(122,142,245)'],
        '15E': ['Exempt: Cemeteries & Graveyards', 'rgba(163,255,115)'],
        '15F': ['Exempt: Other', 'rgba(102,119,205)'],
        Unclassed: ['Unclassed Properties', 'rgba(0,0,0,0.2)']
    };
    initialLayerData: Array<InitLayerData> = [
        {
            resource: 'Newark_Historic_Assets', resourceNum: 1, keyField: 'ABR_NAME', name: 'Historic_Districts',
            group: 'Overlays', legendColor: [128, 147, 241], zIndex: 11
        },
        {
            resource: 'Newark_Redevelopment_Plan_Areas', keyField: 'ShortName', name: 'Redevelopment_Plans',
            group: 'Overlays', legendColor: [254, 95, 0], zIndex: 10
        },
        {
            resource: 'Newark_Economic_Development', resourceNum: 1, name: 'Opportunity_Zones',
            group: 'Overlays', legendColor: [106, 88, 55], zIndex: 9
        },
        {
            resource: 'Newark_Economic_Development', resourceNum: 2, keyField: 'UEZ_NAME', name: 'Urban_Enterprise_Zone',
            group: 'Overlays', legendColor: [226, 157, 227], zIndex: 8
        },
        {
            resource: 'Census_Geographies', resourceNum: 0, name: 'Census_Tracts',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            resource: 'Census_Geographies', resourceNum: 3, keyField: 'ZCTA5CE10', name: 'Zipcodes',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            resource: 'Newark_Geographies', resourceNum: 0, keyField: 'name', name: 'Neighborhoods',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        },
        {
            resource: 'Newark_Geographies', resourceNum: 1, keyField: 'WARD_NAME', name: 'Wards',
            group: 'Boundary', legendColor: [0, 0, 0], zIndex: 4
        }
    ];
    initParcelData = [{ name: 'Parcels', group: 'Parcels', legendColor: [0, 0, 0], zIndex: 2 }];
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
                zIndex: 5.1,
                source: new VectorSource({ url: 'assets/data/transit_njt.geojson', format: new GeoJSON() }),
                style: (feat: Feature) => new Style({
                    image: new Icon({ src: `assets/img/icons/${feat.get('ICON')}.png`, crossOrigin: 'anonymous', scale: 0.5 }),
                    text: this.makeText(feat.get('STATION'), undefined, undefined, 25, 0, 0.7, '#1a73e8', 'white')
                })
            }),
            new VectorLayer({
                className: 'Light Rail',
                maxResolution:  9.554628535634155,
                zIndex: 5,
                source: new VectorSource({ url: 'assets/data/transit_nlr.geojson', format: new GeoJSON() }),
                style: feat => new Style({
                    image: new Icon({ src: 'assets/img/icons/Logo_NLR.png', crossOrigin: 'anonymous', scale: 0.6 }),
                    text: this.makeText(feat.get('STATION'), undefined, undefined, 15, 0, 0.7, '#1a73e8', 'white')
                })
            })]
        });
    }
    makeLayerGroup(group: 'Boundary' | 'Overlays', visibleLyrs: Array<string> = []): LayerGroup {
        // const buildCartoUrl = (cartoLayer: string, cols: string): string => `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select%20the_geom,${cols}%20from%20public.${cartoLayer}`;
        const buildArcGISURL = (resourceName: string, resourceNum: number, keyField: string) => `https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/${resourceName}/FeatureServer/${resourceNum}/query?where="${keyField}" is not null${resourceName === 'Newark_Historic_Assets' ? ` AND "STATUS"='LISTED'` : ''}&geometryType=esriGeometryPolygon&outFields="${keyField}"&returnGeometry=true&f=geojson`;

        return new LayerGroup({
            layers: this.initialLayerData.filter(il => il.group === group)
            .map(il => new VectorLayer({
                className: il.name,
                zIndex: il.zIndex,
                visible: visibleLyrs.includes(il.name),
                style: feat => this.styleFunction(il.group, feat, il.keyField ? il.keyField : 'NAMELSAD', il.legendColor),
                source: new VectorSource({
                    url: buildArcGISURL(il.resource, il.resourceNum ? il.resourceNum : 0,  il.keyField ? il.keyField : 'NAMELSAD'),
                    format: new GeoJSON(),
                    attributions: this.getAttributions(il.name)
                })
            }))
        });
    }
    setParcelStyle(attr: 'Zoning' | 'LandUse' | 'Base', feat: FeatureLike): Style {
        const styler = (l, f) => {
            switch (l) {
            case 'Zoning': return (
                {color: `${this.zones[f.get('ZONING') === undefined ? 'N/A' : f.get('ZONING')][1]}CC`}
                );
            case 'LandUse': return (
                {color: `${this.landUses[f.get('PROPCLASS') === undefined ? 'Unclassed' : f.get('PROPCLASS')][1].slice(0, -1)},.8)`}
                );
            default: return ({color: 'transparent'});
        }};

        return new Style({
            fill: new Fill(styler(attr, feat)),
            stroke: new Stroke({width: 0.2, color: 'grey'})
        });
    }
    makeParcelGroup(layer: 'Zoning' | 'LandUse' | 'Base'): LayerGroup {
        return new LayerGroup({ layers:
            this.initParcelData.map(
                (ip, i) => new VectorTileLayer({
                    className: ip.name, zIndex: ip.zIndex,
                    source: new VectorTileSource({
                        format: new MVTFormat(),
                        url: 'https://vectortileservices1.arcgis.com/WAUuvHqqP3le2PMh/arcgis/rest/services/Newark_Parcels_Zoning/VectorTileServer/tile/{z}/{y}/{x}.pbf'
                    }),
                    style: feat => this.setParcelStyle(layer, feat)
                })
        )});
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
                return ({
                    layer: 'Land Use', group: 'Parcels',
                    items: Object.keys(this.landUses)
                        .filter(k => !['5A', '5B', '15A', '15B'].includes(k))
                        .map((k, i) => [k, 'grey', this.landUses[k][1], this.landUses[k][0]])
                });
            case 'Zoning':
                return ({
                    layer: 'Zoning', group: 'Parcels',
                    items: Object.keys(this.zones)
                        .map((k, i) => [k, 'grey', this.zones[k][1], this.zones[k][0]])
                });
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
