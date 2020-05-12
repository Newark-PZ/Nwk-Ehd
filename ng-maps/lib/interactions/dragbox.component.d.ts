import { OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragBox } from 'ol/interaction';
import { EndCondition } from 'ol/interaction/DragBox';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DragBoxInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: DragBox;
    className: string;
    condition: Condition;
    boxEndCondition: EndCondition;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DragBoxInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DragBoxInteractionComponent, "map-interaction-dragbox", never, { "className": "className"; "condition": "condition"; "boxEndCondition": "boxEndCondition"; }, {}, never, never>;
}
