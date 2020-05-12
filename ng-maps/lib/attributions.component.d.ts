import { AfterViewInit, QueryList } from '@angular/core';
import { Attribution } from 'ol/control';
import { AttributionComponent } from './attribution.component';
import { SourceComponent } from './sources/source.component';
import * as i0 from "@angular/core";
export declare class AttributionsComponent implements AfterViewInit {
    private readonly source;
    instance: Array<Attribution>;
    attributions: QueryList<AttributionComponent>;
    constructor(source: SourceComponent);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<AttributionsComponent, [{ host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AttributionsComponent, "map-attributions", never, {}, {}, ["attributions"], ["*"]>;
}
