import { OnDestroy, OnInit } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class PinchZoomInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: PinchZoom;
    duration: number;
    constrainResolution: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<PinchZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PinchZoomInteractionComponent, "map-interaction-pinchzoom", never, { "duration": "duration"; "constrainResolution": "constrainResolution"; }, {}, never, never>;
}
