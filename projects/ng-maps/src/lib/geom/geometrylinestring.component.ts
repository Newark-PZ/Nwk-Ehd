import { Component, OnInit } from '@angular/core';
import { LineString } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-linestring',
  template: ' <ng-content></ng-content> '
})
export class GeometryLinestringComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-linestring';
  instance: LineString;

  // tslint:disable-next-line: unnecessary-constructor
  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new LineString([
      [0, 0],
      [1, 1]
    ]);
    super.ngOnInit();
  }
}
