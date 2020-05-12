import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { transform } from 'ol/proj';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { MapComponent } from './map.component';

@Component({
  selector: 'map-collection-coordinates',
  template: ' <div class="map-collection-coordinates"></div> '
})
export class CollectionCoordinatesComponent implements OnChanges, OnInit {
  private readonly host: any;
  private mapSrid = 'EPSG:3857';

  @Input() coordinates: Array<Coordinate> | Array<Array<Coordinate>> | Array<Array<Array<Coordinate>>>;
  @Input() srid = 'EPSG:3857';

  constructor(
    private readonly map: MapComponent,
    @Optional() geometryLinestring: GeometryLinestringComponent,
    @Optional() geometryPolygon: GeometryPolygonComponent,
    @Optional() geometryMultipoint: GeometryMultiPointComponent,
    @Optional() geometryMultilinestring: GeometryMultiLinestringComponent,
    @Optional() geometryMultipolygon: GeometryMultiPolygonComponent
  ) {
    if (!!geometryLinestring) {
      this.host = geometryLinestring;
    } else if (!!geometryPolygon) {
      this.host = geometryPolygon;
    } else if (!!geometryMultipoint) {
      this.host = geometryMultipoint;
    } else if (!!geometryMultilinestring) {
      this.host = geometryMultilinestring;
    } else if (!!geometryMultipolygon) {
      this.host = geometryMultipolygon;
    } else {
      throw new Error('map-collection-coordinates must be a child of a geometry component');
    }
  }

  ngOnInit(): void {
    this.map.instance.on('change:view', e => { this.onMapViewChanged(e); });
    this.mapSrid = this.map.instance.getView()
      .getProjection()
      .getCode();
    this.transformCoordinates();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.transformCoordinates();
  }

  private onMapViewChanged(event): void {
    this.mapSrid = event.target.get(event.key)
      .getProjection()
      .getCode();
    this.transformCoordinates();
  }

  private transformCoordinates(): void {
    let transformedCoordinates: Array<Coordinate> | Array<Array<Coordinate>> | Array<Array<Array<Coordinate>>>;

    if (this.srid === this.mapSrid) {
      transformedCoordinates = this.coordinates;
    } else {
      switch (this.host.componentType) {
        case 'geometry-linestring':
        case 'geometry-multipoint':
          transformedCoordinates = (this.coordinates as Array<Coordinate>).map(c => transform(c, this.srid, this.mapSrid));
          break;
        case 'geometry-polygon':
        case 'geometry-multilinestring':
          transformedCoordinates = (this.coordinates as Array<Array<Coordinate>>).map(cc =>
            cc.map(c => transform(c, this.srid, this.mapSrid))
          );
          break;
        case 'geometry-multipolygon':
          transformedCoordinates = (this.coordinates as Array<Array<Array<Coordinate>>>).map(ccc =>
            ccc.map(cc => cc.map(c => transform(c, this.srid, this.mapSrid)))
          );
          break;
        default:
          break;
      }
    }
    // tslint:disable-next-line: no-non-null-assertion no-unnecessary-type-assertion
    this.host.instance.setCoordinates(transformedCoordinates!);
  }
}
