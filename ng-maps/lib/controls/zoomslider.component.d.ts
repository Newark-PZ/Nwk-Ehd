import { OnDestroy, OnInit } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlZoomSliderComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: ZoomSlider;
    className: string;
    duration: number;
    maxResolution: number;
    minResolution: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlZoomSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlZoomSliderComponent, "map-control-zoomslider", never, { "className": "className"; "duration": "duration"; "maxResolution": "maxResolution"; "minResolution": "minResolution"; }, {}, never, ["*"]>;
}
