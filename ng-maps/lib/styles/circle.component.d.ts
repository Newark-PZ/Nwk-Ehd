import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import * as i0 from "@angular/core";
export declare class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private readonly host;
    componentType: string;
    instance: Circle;
    fill: Fill;
    radius: number;
    snapToPixel: boolean;
    stroke: Stroke;
    constructor(host: StyleComponent);
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<StyleCircleComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StyleCircleComponent, "map-style-circle", never, { "fill": "fill"; "radius": "radius"; "snapToPixel": "snapToPixel"; "stroke": "stroke"; }, {}, never, ["*"]>;
}
