import { OnDestroy, OnInit } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlScaleLineComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: ScaleLine;
    units: string;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlScaleLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlScaleLineComponent, "map-control-scaleline", never, { "units": "units"; }, {}, never, ["*"]>;
}
