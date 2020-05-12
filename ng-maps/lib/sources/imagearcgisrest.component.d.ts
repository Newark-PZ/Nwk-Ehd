import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoadFunction } from 'ol/Image';
import { ProjectionLike } from 'ol/proj';
import { ImageArcGISRest } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
    instance: ImageArcGISRest;
    projection: ProjectionLike | string;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    params?: {
        [k: string]: any;
    };
    ratio: number;
    resolutions?: Array<number>;
    wrapX?: boolean;
    readonly imageLoadStart: EventEmitter<ImageSourceEvent>;
    readonly imageLoadEnd: EventEmitter<ImageSourceEvent>;
    readonly imageLoadError: EventEmitter<ImageSourceEvent>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceImageArcGISRestComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceImageArcGISRestComponent, "map-source-imagearcgisrest", never, { "projection": "projection"; "url": "url"; "attributions": "attributions"; "crossOrigin": "crossOrigin"; "imageLoadFunction": "imageLoadFunction"; "params": "params"; "ratio": "ratio"; "resolutions": "resolutions"; "wrapX": "wrapX"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}
