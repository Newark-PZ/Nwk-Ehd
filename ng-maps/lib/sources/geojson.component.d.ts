import { OnInit } from '@angular/core';
import FeatureFormat from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    instance: Vector;
    format: FeatureFormat;
    defaultDataProjection: ProjectionLike;
    featureProjection: ProjectionLike;
    geometryName: string;
    url: string;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceGeoJSONComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceGeoJSONComponent, "map-source-geojson", never, { "defaultDataProjection": "defaultDataProjection"; "featureProjection": "featureProjection"; "geometryName": "geometryName"; "url": "url"; }, {}, never, ["*"]>;
}
