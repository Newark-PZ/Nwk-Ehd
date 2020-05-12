import { Input, OnInit } from '@angular/core';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';

export abstract class SimpleGeometryComponent implements OnInit {
  instance: SimpleGeometry;
  componentType = 'simple-geometry';

  @Input() srid: string;

  constructor(protected map: MapComponent, protected host: FeatureComponent) {}

  ngOnInit(): void {
    this.host.instance.setGeometry(this.instance);
  }
}
