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
import { ImageWMS } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-imagewms',
  template: ' <ng-content></ng-content> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }]
})
export class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
  instance: ImageWMS;

  @Input() attributions: AttributionLike;
  @Input() crossOrigin: string;
  @Input() hidpi: boolean;
  @Input() serverType: string;
  @Input() imageLoadFunction?: LoadFunction;
  @Input() params: { [key: string]: any };
  @Input() projection: ProjectionLike | string;
  @Input() ratio: number;
  @Input() resolutions: Array<number>;
  @Input() url: string;

  @Output() readonly imageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output() readonly imageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output() readonly imageLoadError = new EventEmitter<ImageSourceEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new ImageWMS(this);
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
