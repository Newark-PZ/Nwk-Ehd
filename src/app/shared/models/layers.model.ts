import { Fill, Stroke, Style, Text } from 'ol/style';

export const geoStyles = new Style({
    stroke: new Stroke({
        color: '#627BC1',
        width: 4
    }),
    fill: new Fill({
        color: 'rgba(0, 0, 0, 0)'
    })
});
export const overLabelStyle = (labelstatus: boolean): Style | undefined => {
    if (labelstatus) {
        return new Style({
            text: new Text({
                font: '8px Segoe UI Semibold, OpenSans, sans-serif',
                overflow: true,
                fill: new Fill({
                    color: 'black'
                }),
                stroke: new Stroke({
                    color: 'white',
                    width: 3
                })
            })
        });
    }
};
export const labelStyle = new Style({
    text: new Text({
        font: '12px Segoe UI Semibold, OpenSans, sans-serif',
        overflow: true,
        fill: new Fill({
            color: 'black'
        }),
        stroke: new Stroke({
            color: 'white',
            width: 4.5
        })
    })
});
export const noParcelCartoCSS = `
  #zoning_2 {
    polygon-fill: rgba(0,0,0,0);
    line-color: rgba(0, 0, 0, 0);
    line-opacity: 0;
  }
`;
export const baseParcelCartoCSS = `
  #zoning_2 {
    polygon-fill: rgba(0,0,0,0);
    line-width: 0.5;
    line-color: rgb(200, 200, 200);
  }
`;
export const zoningParcelCartoCSS = `
#zoning_2[code='R-1'] {polygon-fill: #fffaca;}
#zoning_2[code='R-2'] {polygon-fill: #fff68f;}
#zoning_2[code='R-3'] {polygon-fill: #fff100;}
#zoning_2[code='R-4'] {polygon-fill: #ebd417;}
#zoning_2[code='R-5'] {polygon-fill: #b49d34;}
#zoning_2[code='R-6'] {polygon-fill: #998439;}
#zoning_2[code='C-1'] {polygon-fill: #fbc8b3;}
#zoning_2[code='C-2'] {polygon-fill: #da2028;}
#zoning_2[code='C-3'] {polygon-fill: #850204;}
#zoning_2[code='I-1'] {polygon-fill: #e1c3dd;}
#zoning_2[code='I-2'] {polygon-fill: #A53ED5;}
#zoning_2[code='I-3'] {polygon-fill: #c0188c;}
#zoning_2[code='MX-1'] {polygon-fill: #e4a024;}
#zoning_2[code='MX-2'] {polygon-fill: #f37520;}
#zoning_2[code='MX-3'] {polygon-fill: #FF2900;}
#zoning_2[code='INST'] {polygon-fill: #0063ff;}
#zoning_2[code='PARK'] {polygon-fill: #229A00;}
#zoning_2[code='CEM'] {polygon-fill: #561818;}
#zoning_2[code='RDV'] {polygon-fill: #dddddd;}
#zoning_2[code='EWR'] {polygon-fill: #820c0c;}
#zoning_2[code='PORT'] {polygon-fill: #B81609;}
#zoning_2 {
    polygon-opacity: 0.7;
    line-color: black;
    line-width: 0.1;
    line-opacity: 1;
}`;
export const landUseParcelCartoCSS = `
#table_2017_zoning_layer[propclass='1'] {polygon-fill: #686868;}
#table_2017_zoning_layer[propclass='2'] {polygon-fill: #FFEBAF;}
#table_2017_zoning_layer[propclass='4A'] {polygon-fill: #FF7F7F;}
#table_2017_zoning_layer[propclass='4B'] {polygon-fill: #E8BEFF;}
#table_2017_zoning_layer[propclass='4C'] {polygon-fill: #FFAA00;}
#table_2017_zoning_layer[propclass='5A'] {polygon-fill: #B5E6B9;}
#table_2017_zoning_layer[propclass='5B'] {polygon-fill: #B5E6B9;}
#table_2017_zoning_layer[propclass='15A'] {polygon-fill: #BED2FF;}
#table_2017_zoning_layer[propclass='15B'] {polygon-fill: #BED2FF;}
#table_2017_zoning_layer[propclass='15C'] {polygon-fill: #BEFFE8;}
#table_2017_zoning_layer[propclass='15D'] {polygon-fill: #73B2FF;}
#table_2017_zoning_layer[propclass='15E'] {polygon-fill: #fff;}
#table_2017_zoning_layer[propclass='15F'] {polygon-fill: #00C5FF;}
#table_2017_zoning_layer {
    polygon-opacity: 0.7;
    line-color: black;
    line-width: 0.1;
    line-opacity: 1;
}`;
export const cartoGrid = (z, x, y) => 'https://cartocdn-gusc-a.global.ssl.fastly.net/' +
    'nzlur/api/v1/map/828afba5071058f312755e751aea6b1d:1581093818059/' +
    `parcels/${z}/${x}/${y}.grid.json`;
export const layerCartoCSS = `
  #layer {
    polygon-fill: rgba(0,0,0,0);
    line-width: 0.33;
    line-color: rgb(200, 0, 0);
  }
`;
// tslint:disable: no-parameter-reassignment
export const apiConfig = (parcelStyle, layername: 'zoning_2' | 'table_2017_zoning_layer', interactivity?: Array<string>) => {
    let cartoCSS = '';
    switch (parcelStyle) {
        case 'None':
            cartoCSS = noParcelCartoCSS;
            interactivity = ['cartodb_id', 'proploc', 'blocklot', 'code'];
            break;
        case 'zoning':
            cartoCSS = zoningParcelCartoCSS;
            interactivity = ['proploc', 'blocklot'];
            break;
        case 'landuse':
            cartoCSS = landUseParcelCartoCSS;
            interactivity = ['proploc', 'block_lot'];
            break;
        default:
            cartoCSS = baseParcelCartoCSS;
            interactivity = ['cartodb_id', 'proploc', 'blocklot'];
            break;
    }

    return {
        layers: [{
            type: 'cartodb',
            options: {
                sql: `SELECT * FROM ${layername}`,
                cartocss: cartoCSS,
                cartocss_version: '2.2.0',
                interactivity
            }
        }]
    };
};
export const zoningColors = (zone: string) => {
    switch (zone) {
       case 'R-1': return '#fffaca';
       case 'R-2': return '#fff68f';
       case 'R-3': return '#fff100';
       case 'R-4': return '#ebd417';
       case 'C-1': return '#fbc8b3';
       case 'C-2': return '#da2028';
       case 'C-3': return '#850204';
       case 'I-1': return '#e1c3dd';
       case 'I-2': return '#A53ED5';
       case 'I-3': return '#c0188c';
       case 'MX-1':  return '#e4a024';
       case 'MX-2':  return '#f37520';
       case 'MX-3':  return '#FF2900';
       case 'INST':  return '#0063ff';
       case 'PARK':  return '#229A00';
       case 'CEM':  return '#561818';
       case 'RDV':  return '#dddddd';
       case 'EWR':  return '#820c0c';
       case 'PORT': return  '#B81609';
       default: return 'rgba(0,0,0,.2)';
    }
};
export const zoneFunction = (zone: string): Style => {
    const zonecolor = zoningColors(zone);

    return new Style({
        fill: new Fill({
            color: zonecolor
        }),
        stroke: new Stroke({
            color: 'rgba(0,0,0,.5)',
            width: 0.2
        })
    });
};
