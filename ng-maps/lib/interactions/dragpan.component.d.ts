import { OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DragPanInteractionComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: DragPan;
    condition: Condition;
    kinetic: Kinetic;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DragPanInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DragPanInteractionComponent, "map-interaction-dragpan", never, { "condition": "condition"; "kinetic": "kinetic"; }, {}, never, never>;
}
