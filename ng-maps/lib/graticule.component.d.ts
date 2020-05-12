import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
export declare class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private readonly map;
    instance: any;
    componentType: string;
    strokeStyle: Stroke;
    showLabels: boolean;
    lonLabelPosition: number;
    latLabelPosition: number;
    props: string[];
    constructor(map: MapComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<GraticuleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GraticuleComponent, "map-graticule", never, { "strokeStyle": "strokeStyle"; "showLabels": "showLabels"; "lonLabelPosition": "lonLabelPosition"; "latLabelPosition": "latLabelPosition"; }, {}, never, ["*"]>;
}
