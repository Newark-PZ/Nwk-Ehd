import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { ProjectionLike } from 'ol/proj';
import { TileSourceEvent } from 'ol/source/Tile';
import WMTS from 'ol/source/WMTS';
import WMTSRequestEncoding from 'ol/source/WMTSRequestEncoding';
import { LoadFunction } from 'ol/Tile';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-tilewmts',
  template: '<ng-content></ng-content>',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }]
})
export class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: WMTS;
  @Input() cacheSize?: number;
  @Input() crossOrigin?: string;
  @Input() tileGrid: WMTSTileGrid;
  @Input() projection: ProjectionLike;
  @Input() reprojectionErrorThreshold?: number;
  @Input() requestEncoding?: WMTSRequestEncoding | string;
  @Input() layer: string;
  @Input() style: string;
  @Input() tileClass?: any;
  @Input() tilePixelRatio?: number;
  @Input() version?: string;
  @Input() format?: string;
  @Input() matrixSet: string;
  @Input() dimensions?: any;
  @Input() url?: string;
  @Input() tileLoadFunction?: LoadFunction;
  @Input() urls?: Array<string>;
  @Input() wrapX?: boolean;
  props = [
    'cacheSize',
    'crossOrigin',
    'tileGrid',
    'projection',
    'reprojectionErrorThreshold',
    'requestEncoding',
    'layer',
    'style',
    'tileClass',
    'tilePixelRatio',
    'version',
    'format',
    'matrixSet',
    'dimension',
    'url',
    'tileLoadFunction',
    'urls',
    'wrapX'
  ];

  @Output() readonly tileLoadStart: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output() readonly tileLoadEnd: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output() readonly tileLoadError: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();

  @ContentChild(TileGridWMTSComponent) tileGridWMTS: TileGridWMTSComponent;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key of this.props) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'url':
            this.url = changes[key].currentValue;
            this.setLayerSource();
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
  }

  setLayerSource(): void {
    this.instance = new WMTS(this);
    this.instance.on('tileloadstart', (event: TileSourceEvent) => { this.tileLoadStart.emit(event); });
    this.instance.on('tileloadend', (event: TileSourceEvent) => { this.tileLoadEnd.emit(event); });
    this.instance.on('tileloaderror', (event: TileSourceEvent) => { this.tileLoadError.emit(event); });
    this.host.instance.setSource(this.instance);
  }

  ngAfterContentInit(): void {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
      this.setLayerSource();
    }
  }
}
