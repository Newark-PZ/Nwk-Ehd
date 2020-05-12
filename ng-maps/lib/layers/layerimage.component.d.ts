import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Extent } from 'ol/extent';
import ImageSource from 'ol/source/Image';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
    source: ImageSource;
    opacity: number;
    visible: boolean;
    extent: Extent;
    minResolution: number;
    maxResolution: number;
    zIndex: number;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerImageComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerImageComponent, "map-layer-image", never, { "opacity": "opacity"; "visible": "visible"; "extent": "extent"; "minResolution": "minResolution"; "maxResolution": "maxResolution"; "zIndex": "zIndex"; }, {}, never, ["*"]>;
}
