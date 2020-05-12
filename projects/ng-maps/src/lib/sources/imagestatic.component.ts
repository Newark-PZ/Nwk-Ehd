import {
  Component,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Extent } from 'ol/extent';
import { LoadFunction } from 'ol/Image';
import { ProjectionLike } from 'ol/proj';
import { Size } from 'ol/size';
import { ImageStatic } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-imagestatic',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }]
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges {
  instance: ImageStatic;

  @Input() projection: ProjectionLike | string;
  @Input() imageExtent: Extent;
  @Input() url: string;
  @Input() attributions: AttributionLike;
  @Input() crossOrigin?: string;
  @Input() imageLoadFunction?: LoadFunction;
  @Input() imageSize?: Size;
  props = [
    'projection',
    'imageExtent',
    'url',
    'attributions',
    'crossOrigin',
    'imageLoadFunction',
    'imageSize'
  ];

  @Output() readonly imageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output() readonly imageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output() readonly imageLoadError = new EventEmitter<ImageSourceEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  setLayerSource(): void {
    this.instance = new ImageStatic(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => { this.imageLoadStart.emit(event); });
    this.instance.on('imageloadend', (event: ImageSourceEvent) => { this.imageLoadEnd.emit(event); });
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => { this.imageLoadError.emit(event); });
  }

  ngOnInit(): void {
    this.setLayerSource();
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
}
