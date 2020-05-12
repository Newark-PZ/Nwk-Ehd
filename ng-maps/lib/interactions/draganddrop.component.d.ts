import { OnDestroy, OnInit } from '@angular/core';
import FeatureFormat from 'ol/format/Feature';
import { DragAndDrop } from 'ol/interaction';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    readonly map: MapComponent;
    instance: DragAndDrop;
    formatConstructors: Array<FeatureFormat>;
    projection: ProjectionLike;
    target: HTMLElement;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DragAndDropInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DragAndDropInteractionComponent, "map-interaction-draganddrop", never, { "formatConstructors": "formatConstructors"; "projection": "projection"; "target": "target"; }, {}, never, never>;
}
