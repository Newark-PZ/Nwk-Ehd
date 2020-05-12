import { OnInit } from '@angular/core';
import { TileJSON } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceTileJSONComponent extends SourceComponent implements OnInit {
    instance: TileJSON;
    url: string;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceTileJSONComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceTileJSONComponent, "map-source-tilejson", never, { "url": "url"; }, {}, never, ["*"]>;
}
