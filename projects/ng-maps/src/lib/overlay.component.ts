import { Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { Overlay } from 'ol';
import { PanOptions } from 'ol/Overlay';
import OverlayPositioning from 'ol/OverlayPositioning';
import { ContentComponent } from './content.component';
import { MapComponent } from './map.component';

@Component({
  selector: 'map-overlay',
  template: '<ng-content></ng-content>'
})
export class OverlayComponent implements OnInit, OnDestroy {
  componentType = 'overlay';
  instance: Overlay;
  element: HTMLElement;
  @ContentChild(ContentComponent, { static: true }) content: ContentComponent;

  @Input() id: number | string;
  @Input() offset: Array<number>;
  @Input() positioning: OverlayPositioning | undefined;
  @Input() stopEvent: boolean;
  @Input() insertFirst: boolean;
  @Input() autoPan: boolean;
  @Input() autoPanAnimation: PanOptions;
  @Input() autoPanMargin: number;

  constructor(private readonly map: MapComponent) {}

  ngOnInit(): void {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Overlay(this);
      this.map.instance.addOverlay(this.instance);
    }
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
    }
  }
}