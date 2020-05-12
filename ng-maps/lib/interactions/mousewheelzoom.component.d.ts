import { OnDestroy, OnInit } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: MouseWheelZoom;
    duration: number;
    timeout: number;
    useAnchor: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MouseWheelZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MouseWheelZoomInteractionComponent, "map-interaction-mousewheelzoom", never, { "duration": "duration"; "timeout": "timeout"; "useAnchor": "useAnchor"; }, {}, never, never>;
}
