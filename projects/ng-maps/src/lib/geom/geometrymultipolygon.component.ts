import { Component, OnInit } from '@angular/core';
import { MultiPolygon } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-multipolygon',
  template: ' <ng-content></ng-content> '
})
export class GeometryMultiPolygonComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-multipolygon';
  instance: MultiPolygon;

  // tslint:disable-next-line: unnecessary-constructor
  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new MultiPolygon([
      [
        [
          [0, 0],
          [1, 1],
          [0, 1]
        ]
      ]
    ]);
    super.ngOnInit();
  }
}
