import { Component, Input, OnInit, Optional } from '@angular/core';
import { Geometry } from 'ol/geom';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { GeometryFunction } from 'ol/style/Style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';

@Component({
  selector: 'map-style',
  template: '<ng-content></ng-content>'
})
export class StyleComponent implements OnInit {
  private readonly host: FeatureComponent | LayerVectorComponent;
  instance: Style;
  componentType = 'style';

  @Input() geometry: string | Geometry | GeometryFunction;
  @Input() fill: Fill;
  @Input() image: Image;
  @Input() stroke: Stroke;
  @Input() text: Text;
  @Input() zIndex: number;

  constructor(@Optional() featureHost: FeatureComponent, @Optional() layerHost: LayerVectorComponent) {
    // console.log('creating aol-style');
    this.host = !!featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
  }

  update(): void {
    this.host.instance.changed();
  }

  ngOnInit(): void {
    this.instance = new Style(this);
    this.host.instance.setStyle(this.instance);
  }
}
