import { Component, OnInit } from '@angular/core';
import { MultiLineString } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-multilinestring',
  template: ' <ng-content></ng-content> '
})
export class GeometryMultiLinestringComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-multilinestring';
  instance: MultiLineString;

  // tslint:disable-next-line: unnecessary-constructor
  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new MultiLineString([
      [
        [0, 0],
        [1, 1]
      ]
    ]);
    super.ngOnInit();
  }
}
