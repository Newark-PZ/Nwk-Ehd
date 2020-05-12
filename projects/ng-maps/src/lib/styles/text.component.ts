import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';

@Component({
  selector: 'map-style-text',
  template: '<div class="aol-style-text"></div>'
})
export class StyleTextComponent implements OnInit, OnChanges {
  instance: Text;
  componentType = 'style-text';

  @Input() font: string | undefined;
  @Input() offsetX: number | undefined;
  @Input() offsetY: number | undefined;
  @Input() scale: number | undefined;
  @Input() rotateWithView: boolean | undefined;
  @Input() rotation: number | undefined;
  @Input() text: string | undefined;
  @Input() textAlign: string | undefined;
  @Input() textBaseLine: string | undefined;

  constructor(@Optional() private readonly host: StyleComponent) {
    if (!host) {
      throw new Error('map-style-text must be a descendant of map-style');
    }
  }

  ngOnInit(): void {
    // console.log('creating ol.style.Text instance with: ', this);
    this.instance = new Text(this);
    this.host.instance.setText(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.font) {
      this.instance.setFont(changes.font.currentValue);
    }
    if (changes.offsetX) {
      this.instance.setOffsetX(changes.offsetX.currentValue);
    }
    if (changes.offsetY) {
      this.instance.setOffsetY(changes.offsetY.currentValue);
    }
    if (changes.scale) {
      this.instance.setScale(changes.scale.currentValue);
    }
    if (changes.rotation) {
      this.instance.setRotation(changes.rotation.currentValue);
    }
    if (changes.text) {
      this.instance.setText(changes.text.currentValue);
    }
    if (changes.textAlign) {
      this.instance.setTextAlign(changes.textAlign.currentValue);
    }
    if (changes.textBaseLine) {
      this.instance.setTextBaseline(changes.textBaseLine.currentValue);
    }
    this.host.update();
 }
}
