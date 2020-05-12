import { OnInit } from '@angular/core';
import { MultiLineString } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
export declare class GeometryMultiLinestringComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiLineString;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<GeometryMultiLinestringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeometryMultiLinestringComponent, "map-geometry-multilinestring", never, {}, {}, never, ["*"]>;
}
