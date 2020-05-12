import { OnInit } from '@angular/core';
import { Geometry } from 'ol/geom';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { GeometryFunction } from 'ol/style/Style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import * as i0 from "@angular/core";
export declare class StyleComponent implements OnInit {
    private readonly host;
    instance: Style;
    componentType: string;
    geometry: string | Geometry | GeometryFunction;
    fill: Fill;
    image: Image;
    stroke: Stroke;
    text: Text;
    zIndex: number;
    constructor(featureHost: FeatureComponent, layerHost: LayerVectorComponent);
    update(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<StyleComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StyleComponent, "map-style", never, { "geometry": "geometry"; "fill": "fill"; "image": "image"; "stroke": "stroke"; "text": "text"; "zIndex": "zIndex"; }, {}, never, ["*"]>;
}
