import { AfterContentInit, Component, Host, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Circle, Fill, Stroke } from 'ol/style';
import { StyleComponent } from './style.component';

@Component({
  selector: 'map-style-circle',
  template: ' <ng-content></ng-content>'
})
export class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
  componentType = 'style-circle';
  instance: Circle;

  @Input() fill: Fill;
  @Input() radius: number;
  @Input() snapToPixel: boolean;
  @Input() stroke: Stroke;

  constructor(@Host() private readonly host: StyleComponent) {}

  /**
   * WORK-AROUND: since the re-rendering is not triggered on style change
   * we trigger a radius change.
   * see openlayers #6233 and #5775
   */
  update(): void {
    if (!!this.instance) {
      this.instance.setRadius(this.radius);
    }
    this.host.update();
  }

  ngAfterContentInit(): void {
    this.instance = new Circle(this);
    this.host.instance.setImage(this.instance);
    this.host.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    if (changes.radius) {
      this.instance.setRadius(changes.radius.currentValue);
    }
    // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-non-null-assertion
    this.host.instance.setImage(undefined!);
  }
}
