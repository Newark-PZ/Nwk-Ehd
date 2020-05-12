import { FeatureClass } from 'ol/Feature';
import { MVT } from 'ol/format';
import { FormatComponent } from './format.component';
import * as i0 from "@angular/core";
export declare class FormatMVTComponent extends FormatComponent {
    instance: MVT;
    featureClass: FeatureClass;
    geometryName: string;
    layerName: string;
    layers: Array<string>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<FormatMVTComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormatMVTComponent, "map-format-mvt", never, { "featureClass": "featureClass"; "geometryName": "geometryName"; "layerName": "layerName"; "layers": "layers"; }, {}, never, never>;
}
