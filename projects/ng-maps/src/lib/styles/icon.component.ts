import { Component, Host, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icon } from 'ol/style';
import IconAnchorUnits from 'ol/style/IconAnchorUnits';
import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';

@Component({
  selector: 'map-style-icon',
  template: ' <div class="map-style-icon"></div>'
})
export class StyleIconComponent implements OnInit, OnChanges {
  instance: Icon;

  @Input() anchor: [number, number];
  @Input() anchorXUnits: IconAnchorUnits;
  @Input() anchorYUnits: IconAnchorUnits;
  @Input() anchorOrigin: IconOrigin;
  @Input() color: [number, number, number, number];
  @Input() crossOrigin: IconOrigin;
  @Input() img: HTMLImageElement | HTMLCanvasElement;
  @Input() offset: [number, number];
  @Input() offsetOrigin: IconOrigin;
  @Input() opacity: number;
  @Input() scale: number;
  @Input() snapToPixel: boolean;
  @Input() rotateWithView: boolean;
  @Input() rotation: number;
  @Input() size: [number, number];
  @Input() imgSize: [number, number];
  @Input() src: string;

  constructor(@Host() private readonly host: StyleComponent) {}

  ngOnInit(): void {
    this.instance = new Icon(this);
    this.host.instance.setImage(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.opacity) {
      this.instance.setOpacity(changes.opacity.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.src) {
      this.instance = new Icon(this);
      this.host.instance.setImage(this.instance);
    }
    this.host.update();
  }
}
