import { OnDestroy, OnInit } from '@angular/core';
import { Collection } from 'ol';
import { Control } from 'ol/control';
import { Options as AttributionOptions } from 'ol/control/Attribution';
import { Options as RotateOptions } from 'ol/control/Rotate';
import { Options as ZoomOptions } from 'ol/control/Zoom';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DefaultControlComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: Collection<Control>;
    attribution: boolean;
    attributionOptions: AttributionOptions;
    rotate: boolean;
    rotateOptions: RotateOptions;
    zoom: boolean;
    zoomOptions: ZoomOptions;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DefaultControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DefaultControlComponent, "map-control-defaults", never, { "attribution": "attribution"; "attributionOptions": "attributionOptions"; "rotate": "rotate"; "rotateOptions": "rotateOptions"; "zoom": "zoom"; "zoomOptions": "zoomOptions"; }, {}, never, never>;
}
