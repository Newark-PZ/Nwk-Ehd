import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoadFunction } from 'ol/Image';
import { ProjectionLike } from 'ol/proj';
import { ImageWMS } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
export declare class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: ImageWMS;
    attributions: AttributionLike;
    crossOrigin: string;
    hidpi: boolean;
    serverType: string;
    imageLoadFunction?: LoadFunction;
    params: {
        [key: string]: any;
    };
    projection: ProjectionLike | string;
    ratio: number;
    resolutions: Array<number>;
    url: string;
    readonly imageLoadStart: EventEmitter<ImageSourceEvent>;
    readonly imageLoadEnd: EventEmitter<ImageSourceEvent>;
    readonly imageLoadError: EventEmitter<ImageSourceEvent>;
    constructor(layer: LayerImageComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceImageWMSComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SourceImageWMSComponent, "map-source-imagewms", never, { "attributions": "attributions"; "crossOrigin": "crossOrigin"; "hidpi": "hidpi"; "serverType": "serverType"; "imageLoadFunction": "imageLoadFunction"; "params": "params"; "projection": "projection"; "ratio": "ratio"; "resolutions": "resolutions"; "url": "url"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}
