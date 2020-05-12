import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import TileSource from 'ol/source/Tile';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    source: TileSource;
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerTileComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerTileComponent, "map-layer-tile", never, { "preload": "preload"; "useInterimTilesOnError": "useInterimTilesOnError"; }, {}, never, ["*"]>;
}
