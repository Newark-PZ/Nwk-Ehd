import { ElementRef, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import * as i0 from "@angular/core";
export declare class AttributionComponent implements OnInit {
    private elementRef;
    instance: Attribution;
    html: string;
    className?: string;
    target?: HTMLElement | string;
    collapsible?: boolean;
    collapsed?: boolean;
    tipLabel?: string;
    label?: string | HTMLElement;
    collapseLabel?: string | HTMLElement;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<AttributionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AttributionComponent, "map-attribution", never, {}, {}, never, ["*"]>;
}
