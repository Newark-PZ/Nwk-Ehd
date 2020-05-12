import { OnDestroy, OnInit } from '@angular/core';
import { Collection } from 'ol';
import { Interaction } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class DefaultInteractionComponent implements OnInit, OnDestroy {
    private readonly map;
    instance: Collection<Interaction>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<DefaultInteractionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DefaultInteractionComponent, "map-interaction-default", never, {}, {}, never, never>;
}
