import { OnInit } from '@angular/core';
import { MultiPoint } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
export declare class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPoint;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<GeometryMultiPointComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeometryMultiPointComponent, "map-geometry-multipoint", never, {}, {}, never, ["*"]>;
}
