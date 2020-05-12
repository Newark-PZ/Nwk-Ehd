import { OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { ContentComponent } from '../content.component';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    componentType: string;
    instance: Control;
    element: HTMLElement;
    content: ContentComponent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlComponent, "map-control", never, {}, {}, ["content"], ["*"]>;
}
