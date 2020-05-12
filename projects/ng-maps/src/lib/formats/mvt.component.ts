import { Component, forwardRef, Input } from '@angular/core';
import { FeatureClass } from 'ol/Feature';
import { MVT } from 'ol/format';
import { FormatComponent } from './format.component';

@Component({
  selector: 'map-format-mvt',
  template: '',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]
})
export class FormatMVTComponent extends FormatComponent {
  instance: MVT;

  @Input() featureClass: FeatureClass;
  @Input() geometryName: string;
  @Input() layerName: string;
  @Input() layers: Array<string>;

  constructor() {
    super();
    this.instance = new MVT(this);
  }
}
