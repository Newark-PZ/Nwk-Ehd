import { OnInit } from '@angular/core';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare abstract class SimpleGeometryComponent implements OnInit {
    protected map: MapComponent;
    protected host: FeatureComponent;
    instance: SimpleGeometry;
    componentType: string;
    srid: string;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SimpleGeometryComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SimpleGeometryComponent, never, never, { "srid": "srid"; }, {}, never>;
}
