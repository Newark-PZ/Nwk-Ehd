import { OnDestroy, OnInit } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: DoubleClickZoom;
    duration: number;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DoubleClickZoomInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DoubleClickZoomInteractionComponent, "map-interaction-doubleclickzoom", never, { "duration": "duration"; "delta": "delta"; }, {}, never, never>;
}
