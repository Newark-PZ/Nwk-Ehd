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
import { LoadFunction } from 'ol/Image';
import { ProjectionLike } from 'ol/proj';
import { ImageArcGISRest } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-imagearcgisrest',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }]
})
export class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
  instance: ImageArcGISRest;

  @Input() projection: ProjectionLike | string;
  @Input() url: string;
  @Input() attributions: AttributionLike;
  @Input() crossOrigin?: string;
  @Input() imageLoadFunction?: LoadFunction;
  @Input() params?: { [k: string]: any };
  @Input() ratio = 1.5;
  @Input() resolutions?: Array<number>;
  @Input() wrapX?: boolean;

  @Output() readonly imageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output() readonly imageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output() readonly imageLoadError = new EventEmitter<ImageSourceEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new ImageArcGISRest(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => { this.imageLoadStart.emit(event); });
    this.instance.on('imageloadend', (event: ImageSourceEvent) => { this.imageLoadEnd.emit(event); });
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => { this.imageLoadError.emit(event); });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
