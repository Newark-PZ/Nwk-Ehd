import { OnDestroy, OnInit } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlZoomComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: Zoom;
    duration: number;
    zoomInLabel: string | HTMLElement;
    zoomOutLabel: string | HTMLElement;
    zoomInTipLabel: string;
    zoomOutTipLabel: string;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlZoomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlZoomComponent, "map-control-zoom", never, { "duration": "duration"; "zoomInLabel": "zoomInLabel"; "zoomOutLabel": "zoomOutLabel"; "zoomInTipLabel": "zoomInTipLabel"; "zoomOutTipLabel": "zoomOutTipLabel"; "delta": "delta"; }, {}, never, ["*"]>;
}
