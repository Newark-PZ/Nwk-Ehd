import { Input, OnDestroy } from '@angular/core';
import { Source } from 'ol/source';

import { LayerComponent } from '../layers/layer.component';

export abstract class SourceComponent implements OnDestroy {
  instance: Source;
  componentType = 'source';

  @Input() attributions: any;

  constructor(protected host: LayerComponent) {}

  ngOnDestroy(): void {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(undefined);
    }
  }

  protected _register(s: Source): void {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
