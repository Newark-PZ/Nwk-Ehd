import { OnInit } from '@angular/core';
import { BingMaps } from 'ol/source';
import { LoadFunction } from 'ol/Tile';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    instance: BingMaps;
    cacheSize: number;
    hidpi: boolean;
    culture: string;
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    maxZoom: number;
    reprojectionErrorThreshold: number;
    tileLoadFunction: LoadFunction;
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceBingmapsComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceBingmapsComponent, "map-source-bingmaps", never, { "cacheSize": "cacheSize"; "hidpi": "hidpi"; "culture": "culture"; "key": "key"; "imagerySet": "imagerySet"; "maxZoom": "maxZoom"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "tileLoadFunction": "tileLoadFunction"; "wrapX": "wrapX"; }, {}, never, never>;
}
