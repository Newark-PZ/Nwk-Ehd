import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { Size } from 'ol/size';
import TileGrid from 'ol/tilegrid/TileGrid';
import * as i0 from "@angular/core";
export declare class TileGridComponent implements OnInit, OnChanges {
    instance: TileGrid;
    extent: Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | Size;
    origin?: Coordinate;
    resolutions: Array<number>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<TileGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TileGridComponent, "map-tilegrid", never, { "extent": "extent"; "maxZoom": "maxZoom"; "minZoom": "minZoom"; "tileSize": "tileSize"; "origin": "origin"; "resolutions": "resolutions"; }, {}, never, never>;
}
