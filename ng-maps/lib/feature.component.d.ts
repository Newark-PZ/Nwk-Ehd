import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
import * as i0 from "@angular/core";
export declare class FeatureComponent implements OnInit, OnDestroy, OnChanges {
    private readonly host;
    componentType: string;
    instance: Feature;
    id: string | number | undefined;
    constructor(host: SourceVectorComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<FeatureComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FeatureComponent, "map-feature", never, { "id": "id"; }, {}, never, ["*"]>;
}
