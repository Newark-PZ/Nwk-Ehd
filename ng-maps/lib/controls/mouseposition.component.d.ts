import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlMousePositionComponent implements OnInit, OnDestroy {
    private readonly map;
    private readonly element;
    instance: MousePosition;
    coordinateFormat: CoordinateFormat;
    projection: ProjectionLike;
    target: HTMLElement;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlMousePositionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlMousePositionComponent, "map-control-mouseposition", never, { "coordinateFormat": "coordinateFormat"; "projection": "projection"; }, {}, never, never>;
}
