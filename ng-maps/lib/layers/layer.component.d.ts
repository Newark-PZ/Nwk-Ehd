import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    protected host: MapComponent | LayerGroupComponent;
    instance: any;
    componentType: string;
    opacity: number;
    visible: boolean;
    extent: Extent;
    zIndex: number;
    minResolution: number;
    maxResolution: number;
    prerender: (evt: Event) => void;
    postrender: (evt: Event) => void;
    props: string[];
    constructor(host: MapComponent | LayerGroupComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LayerComponent, never, never, { "opacity": "opacity"; "visible": "visible"; "extent": "extent"; "zIndex": "zIndex"; "minResolution": "minResolution"; "maxResolution": "maxResolution"; "prerender": "prerender"; "postrender": "postrender"; }, {}, never>;
}
