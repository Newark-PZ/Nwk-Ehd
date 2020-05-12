import { OnDestroy } from '@angular/core';
import { Source } from 'ol/source';
import { LayerComponent } from '../layers/layer.component';
import * as i0 from "@angular/core";
export declare abstract class SourceComponent implements OnDestroy {
    protected host: LayerComponent;
    instance: Source;
    componentType: string;
    attributions: any;
    constructor(host: LayerComponent);
    ngOnDestroy(): void;
    protected _register(s: Source): void;
    static ɵfac: i0.ɵɵFactoryDef<SourceComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SourceComponent, never, never, { "attributions": "attributions"; }, {}, never>;
}
