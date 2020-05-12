import { Component, OnInit } from '@angular/core';
import { MultiPoint } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-multipoint',
  template: ' <ng-content></ng-content> '
})
export class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-multipoint';
  instance: MultiPoint;

  // tslint:disable-next-line: unnecessary-constructor
  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new MultiPoint([
      [0, 0],
      [1, 1]
    ]);
    super.ngOnInit();
  }
}
