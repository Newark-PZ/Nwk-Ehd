import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color } from 'ol/color';
import { Stroke } from 'ol/style';
import { StyleCircleComponent } from './circle.component';
import { StyleComponent } from './style.component';
import { StyleTextComponent } from './text.component';
import * as i0 from "@angular/core";
export declare class StyleStrokeComponent implements OnInit, OnChanges {
    instance: Stroke;
    private readonly host;
    color: Color | undefined;
    lineCap: 'butt' | 'round' | 'square' | undefined;
    lineDash: Array<number> | undefined;
    lineJoin: 'round' | 'bevel' | 'miter' | undefined;
    miterLimit: number | undefined;
    width: number | undefined;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<StyleStrokeComponent, [{ optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StyleStrokeComponent, "map-style-stroke", never, { "color": "color"; "lineCap": "lineCap"; "lineDash": "lineDash"; "lineJoin": "lineJoin"; "miterLimit": "miterLimit"; "width": "width"; }, {}, never, never>;
}
