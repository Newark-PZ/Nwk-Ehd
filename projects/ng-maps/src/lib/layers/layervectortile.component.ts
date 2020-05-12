import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { VectorTile } from 'ol/layer';
import VectorTileRenderType from 'ol/layer/VectorTileRenderType';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'map-layer-vectortile',
  template: ' <ng-content></ng-content> '
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
  @Input() renderBuffer: number;
  @Input() renderMode: VectorTileRenderType | string;
  /* not marked as optional in the typings */
  @Input() renderOrder: (feature1: Feature, feature2: Feature) => number;
  @Input() style: Style | Array<Style> | StyleFunction;
  @Input() updateWhileAnimating: boolean;
  @Input() updateWhileInteracting: boolean;
  @Input() visible: boolean;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit(): void {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }
}