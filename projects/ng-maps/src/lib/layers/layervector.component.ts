import { Component, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Vector } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'map-layer-vector',
  template: ' <ng-content></ng-content> '
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  source: VectorSource;

  @Input() renderBuffer: number;
  @Input() style: Style | Array<Style> | StyleFunction;
  @Input() updateWhileAnimating: boolean;
  @Input() updateWhileInteracting: boolean;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit(): void {
    this.instance = new Vector(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }
}
