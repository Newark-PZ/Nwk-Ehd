import { OnDestroy, OnInit } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { Extent } from 'ol/extent';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlZoomToExtentComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: ZoomToExtent;
    className: string;
    label: string | HTMLElement;
    tipLabel: string;
    extent: Extent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlZoomToExtentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlZoomToExtentComponent, "map-control-zoomtoextent", never, { "className": "className"; "label": "label"; "tipLabel": "tipLabel"; "extent": "extent"; }, {}, never, ["*"]>;
}
