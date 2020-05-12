import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { GeoJSON } from 'ol/format';
import FeatureFormat from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-geojson',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }]
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
  instance: Vector;
  format: FeatureFormat;
  @Input() defaultDataProjection: ProjectionLike;
  @Input() featureProjection: ProjectionLike;
  @Input() geometryName: string;
  @Input() url: string;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.format = new GeoJSON(this);
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
