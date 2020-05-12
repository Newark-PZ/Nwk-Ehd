import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Collection, Feature } from 'ol';
import { Translate } from 'ol/interaction';
import { TranslateEvent } from 'ol/interaction/Translate';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class TranslateInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: Translate;
    features?: Collection<Feature>;
    layers?: Array<Layer> | ((layer: Layer) => boolean);
    hitTolerance?: number;
    readonly olChange: EventEmitter<TranslateEvent>;
    readonly propertyChange: EventEmitter<TranslateEvent>;
    readonly translateEnd: EventEmitter<TranslateEvent>;
    readonly translateStart: EventEmitter<TranslateEvent>;
    readonly translating: EventEmitter<TranslateEvent>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<TranslateInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TranslateInteractionComponent, "map-interaction-translate", never, { "features": "features"; "layers": "layers"; "hitTolerance": "hitTolerance"; }, { "olChange": "olChange"; "propertyChange": "propertyChange"; "translateEnd": "translateEnd"; "translateStart": "translateStart"; "translating": "translating"; }, never, never>;
}
