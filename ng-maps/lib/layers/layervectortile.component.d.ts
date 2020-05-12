import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import VectorTileRenderType from 'ol/layer/VectorTileRenderType';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
    renderBuffer: number;
    renderMode: VectorTileRenderType | string;
    renderOrder: (feature1: Feature, feature2: Feature) => number;
    style: Style | Array<Style> | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerVectorTileComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerVectorTileComponent, "map-layer-vectortile", never, { "renderBuffer": "renderBuffer"; "renderMode": "renderMode"; "renderOrder": "renderOrder"; "style": "style"; "updateWhileAnimating": "updateWhileAnimating"; "updateWhileInteracting": "updateWhileInteracting"; "visible": "visible"; }, {}, never, ["*"]>;
}
