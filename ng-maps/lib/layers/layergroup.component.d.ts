import { OnDestroy, OnInit } from '@angular/core';
import { Group } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import * as i0 from "@angular/core";
export declare class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
    instance: Group;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerGroupComponent, [null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerGroupComponent, "map-layer-group", never, {}, {}, never, ["*"]>;
}
