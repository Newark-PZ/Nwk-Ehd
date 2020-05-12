import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import { Fill } from 'ol/style';
import { StyleCircleComponent } from './circle.component';
import { StyleComponent } from './style.component';
import { StyleTextComponent } from './text.component';
import * as i0 from "@angular/core";
export declare class StyleFillComponent implements OnInit, OnChanges {
    private readonly host;
    instance: Fill;
    color: Color | ColorLike;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<StyleFillComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StyleFillComponent, "map-style-fill", never, { "color": "color"; }, {}, never, never>;
}
