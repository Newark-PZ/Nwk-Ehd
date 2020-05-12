import { OnInit } from '@angular/core';
import { MultiPolygon } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
export declare class GeometryMultiPolygonComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPolygon;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<GeometryMultiPolygonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeometryMultiPolygonComponent, "map-geometry-multipolygon", never, {}, {}, never, ["*"]>;
}
