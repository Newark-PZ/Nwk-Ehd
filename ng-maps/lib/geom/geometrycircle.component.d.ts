import { OnInit } from '@angular/core';
import { Circle } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
export declare class GeometryCircleComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Circle;
    get radius(): number;
    set radius(radius: number);
    constructor(map: MapComponent, host: FeatureComponent);
    static ɵfac: i0.ɵɵFactoryDef<GeometryCircleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeometryCircleComponent, "map-geometry-circle", never, { "radius": "radius"; }, {}, never, ["*"]>;
}
