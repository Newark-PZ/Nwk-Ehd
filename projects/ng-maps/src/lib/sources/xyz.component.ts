import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  OnChanges,
  Optional,
  Output,
  SimpleChanges
} from '@angular/core';
import { Size } from 'ol/size';
import { XYZ } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';

import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-xyz',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: XYZ;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() opaque: boolean;
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() minZoom: number;
  @Input() maxZoom: number;
  @Input() tileGrid: TileGrid;
  @Input() tileLoadFunction?: LoadFunction;
  @Input() tilePixelRatio: number;
  @Input() tileSize: number | Size;
  @Input() tileUrlFunction?: UrlFunction;
  @Input() url: string;
  @Input() urls: Array<string>;
  @Input() wrapX: boolean;
  props = [
    'cacheSize',
    'crossOrigin',
    'opaque',
    'projection',
    'reprojectionErrorThreshold',
    'minZoom',
    'maxZoom',
    'tileGrid',
    'tileLoadFunction',
    'tilePixelRatio',
    'tileSize',
    'tileUrlFunction',
    'url',
    'urls',
    'wrapX'
  ];

  @ContentChild(TileGridComponent) tileGridXYZ: TileGridComponent;

  @Output() readonly tileLoadStart: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output() readonly tileLoadEnd: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output() readonly tileLoadError: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();

  constructor(
    @Optional() @Host() protected layer: LayerTileComponent
  ) {
    super(layer);
  }

  ngAfterContentInit(): void {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.init();
  }

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

    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('url')) {
      this.init();
    }
  }

  init(): void {
    this.instance = new XYZ(this);

    this.instance.on('tileloadstart', (event: TileSourceEvent) => { this.tileLoadStart.emit(event); });
    this.instance.on('tileloadend', (event: TileSourceEvent) => { this.tileLoadEnd.emit(event); });
    this.instance.on('tileloaderror', (event: TileSourceEvent) => { this.tileLoadError.emit(event); });

    this._register(this.instance);
  }
}
