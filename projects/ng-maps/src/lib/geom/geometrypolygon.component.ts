import { Component, OnInit } from '@angular/core';
import { Polygon } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-polygon',
  template: ' <ng-content></ng-content> '
})
export class GeometryPolygonComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-polygon';
  instance: Polygon;

  // tslint:disable-next-line: unnecessary-constructor
  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new Polygon([
      [
        [0, 0],
        [1, 1],
        [0, 1]
      ]
    ]);
    super.ngOnInit();
  }
}
