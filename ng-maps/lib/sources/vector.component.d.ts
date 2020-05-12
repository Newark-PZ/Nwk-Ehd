import { OnInit } from '@angular/core';
import Feature from 'ol/format/Feature';
import { Vector } from 'ol/source';
import { LoadingStrategy } from 'ol/source/Vector';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    instance: Vector;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    url: string;
    format: Feature;
    strategy: LoadingStrategy;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceVectorComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceVectorComponent, "map-source-vector", never, { "overlaps": "overlaps"; "useSpatialIndex": "useSpatialIndex"; "wrapX": "wrapX"; "url": "url"; "format": "format"; "strategy": "strategy"; }, {}, never, ["*"]>;
}
