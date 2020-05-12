import { AfterContentInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Graticule } from 'ol';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';

@Component({
  selector: 'map-graticule',
  template: '<ng-content></ng-content>'
})
export class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
  instance: any;
  componentType = 'graticule';

  @Input() strokeStyle: Stroke;
  @Input() showLabels: boolean;
  @Input() lonLabelPosition: number;
  @Input() latLabelPosition: number;
  props = [
    'strokeStyle',
    'showLabels',
    'lonLabelPosition',
    'latLabelPosition'
  ];
  constructor(private readonly map: MapComponent) {}

  ngOnChanges(changes: SimpleChanges): void {
    const properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }

    for (const key of this.props) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    if (properties) {
      this.instance = new Graticule(properties);
    }
    this.instance.setMap(this.map.instance);
  }

  ngAfterContentInit(): void {
    this.instance = new Graticule({
      strokeStyle: this.strokeStyle,
      showLabels: this.showLabels,
      lonLabelPosition: this.lonLabelPosition,
      latLabelPosition: this.latLabelPosition
    });
    this.instance.setMap(this.map.instance);
  }

  ngOnDestroy(): void {
    this.instance.setMap(undefined);
  }
}
