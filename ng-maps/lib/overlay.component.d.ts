import { OnDestroy, OnInit } from '@angular/core';
import { Overlay } from 'ol';
import { PanOptions } from 'ol/Overlay';
import OverlayPositioning from 'ol/OverlayPositioning';
import { ContentComponent } from './content.component';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
export declare class OverlayComponent implements OnInit, OnDestroy {
    private readonly map;
    componentType: string;
    instance: Overlay;
    element: HTMLElement;
    content: ContentComponent;
    id: number | string;
    offset: Array<number>;
    positioning: OverlayPositioning | undefined;
    stopEvent: boolean;
    insertFirst: boolean;
    autoPan: boolean;
    autoPanAnimation: PanOptions;
    autoPanMargin: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<OverlayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<OverlayComponent, "map-overlay", never, { "id": "id"; "offset": "offset"; "positioning": "positioning"; "stopEvent": "stopEvent"; "insertFirst": "insertFirst"; "autoPan": "autoPan"; "autoPanAnimation": "autoPanAnimation"; "autoPanMargin": "autoPanMargin"; }, {}, ["content"], ["*"]>;
}
