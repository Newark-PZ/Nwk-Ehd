import { OnDestroy, OnInit } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlRotateComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: Rotate;
    className: string;
    label: string;
    tipLabel: string;
    duration: number;
    autoHide: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlRotateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlRotateComponent, "map-control-rotate", never, { "className": "className"; "label": "label"; "tipLabel": "tipLabel"; "duration": "duration"; "autoHide": "autoHide"; }, {}, never, ["*"]>;
}
