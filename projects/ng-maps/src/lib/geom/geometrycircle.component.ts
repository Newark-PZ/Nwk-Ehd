import { Component, Input, OnInit } from '@angular/core';
import { Circle } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'map-geometry-circle',
  template: ' <ng-content></ng-content> '
})
export class GeometryCircleComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-circle';
  instance: Circle;

  @Input() get radius(): number {
    return this.instance.getRadius();
  }
  set radius(radius: number) {
    this.instance.setRadius(radius);
  }

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new Circle([0, 0]);
  }
}
