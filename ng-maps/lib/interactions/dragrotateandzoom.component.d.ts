import { OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragRotateAndZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: DragRotateAndZoom;
    condition: Condition;
    duration: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DragRotateAndZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DragRotateAndZoomInteractionComponent, "map-interaction-dragrotateandzoom", never, { "condition": "condition"; "duration": "duration"; }, {}, never, never>;
}
