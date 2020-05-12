import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
export declare class CollectionCoordinatesComponent implements OnChanges, OnInit {
    private readonly map;
    private readonly host;
    private mapSrid;
    coordinates: Array<Coordinate> | Array<Array<Coordinate>> | Array<Array<Array<Coordinate>>>;
    srid: string;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent, geometryMultipoint: GeometryMultiPointComponent, geometryMultilinestring: GeometryMultiLinestringComponent, geometryMultipolygon: GeometryMultiPolygonComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onMapViewChanged;
    private transformCoordinates;
    static ɵfac: i0.ɵɵFactoryDef<CollectionCoordinatesComponent, [null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CollectionCoordinatesComponent, "map-collection-coordinates", never, { "coordinates": "coordinates"; "srid": "srid"; }, {}, never, never>;
}
