import { OnInit } from '@angular/core';
import { Polygon } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
export declare class GeometryPolygonComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: Polygon;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<GeometryPolygonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeometryPolygonComponent, "map-geometry-polygon", never, {}, {}, never, ["*"]>;
}
