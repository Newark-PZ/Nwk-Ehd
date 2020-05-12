import { OnInit } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import * as i0 from "@angular/core";
export declare class TileGridWMTSComponent extends TileGridComponent implements OnInit {
    instance: WMTS;
    origin?: Coordinate;
    origins?: Array<Coordinate>;
    resolutions: Array<number>;
    matrixIds: Array<string>;
    sizes?: Array<Size>;
    tileSizes?: Array<Size>;
    widths?: Array<number>;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TileGridWMTSComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TileGridWMTSComponent, "map-tilegrid-wmts", never, { "origin": "origin"; "origins": "origins"; "resolutions": "resolutions"; "matrixIds": "matrixIds"; "sizes": "sizes"; "tileSizes": "tileSizes"; "widths": "widths"; }, {}, never, never>;
}
