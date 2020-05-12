import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import Feature from 'ol/format/Feature';
import { Vector } from 'ol/source';
import { LoadingStrategy } from 'ol/source/Vector';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-vector',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }]
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  instance: Vector;
  @Input() overlaps: boolean;
  @Input() useSpatialIndex: boolean;
  @Input() wrapX: boolean;
  @Input() url: string;
  @Input() format: Feature;
  @Input() strategy: LoadingStrategy;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
