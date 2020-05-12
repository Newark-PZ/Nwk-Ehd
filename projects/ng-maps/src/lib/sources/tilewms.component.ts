import { Component, forwardRef, Host, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TileWMS } from 'ol/source';
import { LoadFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-tilewms',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }]
})
export class SourceTileWMSComponent extends SourceComponent implements OnChanges, OnInit {
  instance: TileWMS;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() gutter: number;
  @Input() hidpi: boolean;
  @Input() params: { [key: string]: any };
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() serverType: string;
  @Input() tileGrid: TileGrid;
  @Input() tileLoadFunction: LoadFunction;
  @Input() url: string;
  @Input() urls: Array<string>;
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new TileWMS(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
