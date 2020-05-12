import { OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DragZoomInteractionComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: DragZoom;
    className: string;
    condition: Condition;
    duration: number;
    out: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DragZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DragZoomInteractionComponent, "map-interaction-dragzoom", never, { "className": "className"; "condition": "condition"; "duration": "duration"; "out": "out"; }, {}, never, never>;
}
