import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import VectorSource from 'ol/source/Vector';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    source: VectorSource;
    renderBuffer: number;
    style: Style | Array<Style> | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerVectorComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerVectorComponent, "map-layer-vector", never, { "renderBuffer": "renderBuffer"; "style": "style"; "updateWhileAnimating": "updateWhileAnimating"; "updateWhileInteracting": "updateWhileInteracting"; }, {}, never, ["*"]>;
}
