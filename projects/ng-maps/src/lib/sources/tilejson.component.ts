import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { TileJSON } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-tilejson',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }]
})
export class SourceTileJSONComponent extends SourceComponent implements OnInit {
  instance: TileJSON;

  @Input() url: string;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new TileJSON(this);
    this.host.instance.setSource(this.instance);
  }
}
