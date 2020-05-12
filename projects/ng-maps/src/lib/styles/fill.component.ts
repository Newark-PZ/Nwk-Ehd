import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import { Fill } from 'ol/style';
import { StyleCircleComponent } from './circle.component';
import { StyleComponent } from './style.component';
import { StyleTextComponent } from './text.component';

@Component({
  selector: 'map-style-fill',
  template: ' <div class="map-style-fill"></div>'
})
export class StyleFillComponent implements OnInit, OnChanges {
  /* the typings do not have the setters */
  private readonly host: /*StyleComponent|StyleCircleComponent|StyleTextComponent*/ any;
  instance: Fill;

  @Input() color: Color | ColorLike;

  constructor(
    @Optional() styleHost: StyleComponent,
    @Optional() styleCircleHost: StyleCircleComponent,
    @Optional() styleTextHost: StyleTextComponent
  ) {
    if (!styleHost) {
      throw new Error('aol-style-stroke must be a descendant of aol-style');
    }
    // tslint:disable-next-line: prefer-conditional-expression
    if (!!styleTextHost) {
      this.host = styleTextHost;
    } else if (!!styleCircleHost) {
      this.host = styleCircleHost;
    } else {
      this.host = styleHost;
    }
  }

  ngOnInit(): void {
    this.instance = new Fill(this);
    switch (this.host.componentType) {
      case 'style':
        this.host.instance.setFill(this.instance);
        break;
      case 'style-text':
        this.host.instance.setFill(this.instance);
        break;
      case 'style-circle':
        this.host.fill = this.instance;
        // console.log('setting ol.style.circle instance\'s fill:', this.host);
        break;
      default:
        throw new Error(`unknown host type: ${this.host}`);
      // break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.color) {
      this.instance.setColor(changes.color.currentValue);
    }
    this.host.update();
  }
}
