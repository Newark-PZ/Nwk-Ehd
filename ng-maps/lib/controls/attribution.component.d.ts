import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlAttributionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    readonly element: ElementRef;
    componentType: string;
    instance: Attribution;
    target: HTMLElement;
    collapsible: boolean;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlAttributionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlAttributionComponent, "map-control-attribution", never, { "collapsible": "collapsible"; }, {}, never, never>;
}
