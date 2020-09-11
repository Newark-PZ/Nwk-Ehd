import { Input, OnDestroy, Directive } from '@angular/core';
import { Source } from 'ol/source';

import { LayerComponent } from '../layers/layer.component';

@Directive()
export abstract class SourceComponent implements OnDestroy {
  instance: Source;
  componentType = 'source';

  @Input() attributions: any;

  constructor(protected host: LayerComponent) {}

  ngOnDestroy(): void {
    if (this.host && this.host.instance) {
      // tslint:disable-next-line: no-null-keyword
      this.host.instance.setSource(null);
    }
  }

  protected _register(s: Source): void {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
