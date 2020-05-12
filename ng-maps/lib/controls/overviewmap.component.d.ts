import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
export declare class ControlOverviewMapComponent implements OnInit, OnChanges, OnDestroy {
    private readonly map;
    instance: OverviewMap;
    collapsed: boolean;
    collapseLabel: string;
    collapsible: boolean;
    label: string;
    layers: Array<Layer>;
    target: HTMLElement;
    tipLabel: string;
    view: View;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private reloadInstance;
    static ɵfac: i0.ɵɵFactoryDef<ControlOverviewMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlOverviewMapComponent, "map-control-overviewmap", never, { "collapsed": "collapsed"; "collapseLabel": "collapseLabel"; "collapsible": "collapsible"; "label": "label"; "layers": "layers"; "target": "target"; "tipLabel": "tipLabel"; "view": "view"; }, {}, never, ["*"]>;
}
