import { OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DragRotateInteractionComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: DragRotate;
    condition: Condition;
    duration: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DragRotateInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DragRotateInteractionComponent, "map-interaction-dragrotate", never, { "condition": "condition"; "duration": "duration"; }, {}, never, never>;
}
