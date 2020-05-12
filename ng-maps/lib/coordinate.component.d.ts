import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { MapComponent } from './map.component';
import { OverlayComponent } from './overlay.component';
import { ViewComponent } from './view.component';
import * as i0 from "@angular/core";
export declare class CoordinateComponent implements OnChanges, OnInit {
    private readonly map;
    private readonly host;
    private mapSrid;
    x: number;
    y: number;
    srid: string;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent, geometryCircleHost: GeometryCircleComponent, overlayHost: OverlayComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged;
    private transformCoordinates;
    static ɵfac: i0.ɵɵFactoryDef<CoordinateComponent, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CoordinateComponent, "map-coordinate", never, { "x": "x"; "y": "y"; "srid": "srid"; }, {}, never, never>;
}
