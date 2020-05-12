import { Component, OnInit } from '@angular/core';
import { Point } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-point',
  template: ' <ng-content></ng-content> '
})
export class GeometryPointComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-point';
  instance: Point;

  // tslint:disable-next-line: unnecessary-constructor
  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new Point([0, 0]);
    super.ngOnInit();
  }
}
