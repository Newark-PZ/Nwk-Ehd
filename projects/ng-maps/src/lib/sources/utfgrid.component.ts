import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { UTFGrid } from 'ol/source';
import { Config } from 'ol/source/TileJSON';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-utfgrid',
  template: '<ng-content></ng-content>',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }]
})
export class SourceUTFGridComponent extends SourceComponent implements OnInit {
  instance: UTFGrid;
  @Input() tileJSON: Config;
  @Input() url: string;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new UTFGrid(this);
    this.host.instance.setSource(this.instance);
  }
}