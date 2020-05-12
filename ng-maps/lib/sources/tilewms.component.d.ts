import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TileWMS } from 'ol/source';
import { LoadFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceTileWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: TileWMS;
    cacheSize: number;
    crossOrigin: string;
    gutter: number;
    hidpi: boolean;
    params: {
        [key: string]: any;
    };
    projection: string;
    reprojectionErrorThreshold: number;
    serverType: string;
    tileGrid: TileGrid;
    tileLoadFunction: LoadFunction;
    url: string;
    urls: Array<string>;
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceTileWMSComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceTileWMSComponent, "map-source-tilewms", never, { "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "gutter": "gutter"; "hidpi": "hidpi"; "params": "params"; "projection": "projection"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "serverType": "serverType"; "tileGrid": "tileGrid"; "tileLoadFunction": "tileLoadFunction"; "url": "url"; "urls": "urls"; "wrapX": "wrapX"; }, {}, never, ["*"]>;
}
