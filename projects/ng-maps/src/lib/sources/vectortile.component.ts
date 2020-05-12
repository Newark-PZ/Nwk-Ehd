import { AfterContentInit, Component, ContentChild, forwardRef, Host, Input } from '@angular/core';
import Feature from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import VectorTile from 'ol/source/VectorTile';
import { UrlFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import { FormatComponent } from '../formats/format.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-vectortile',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }]
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  instance: VectorTile;
  @Input() cacheSize: number;
  @Input() overlaps: boolean;
  @Input() projection: ProjectionLike;
  @Input() tilePixelRatio: number;
  @Input() tileUrlFunction: UrlFunction;
  @Input() url: string;
  @Input() urls: Array<string>;
  @Input() wrapX: boolean;

  @ContentChild(FormatComponent) formatComponent: FormatComponent;
  format: Feature;
  @ContentChild(TileGridComponent) tileGridComponent: TileGridComponent;
  tileGrid: TileGrid;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit(): void {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
