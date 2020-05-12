import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { Extent } from 'ol/extent';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-zoomtoextent',
  template: '<ng-content></ng-content>'
})
export class ControlZoomToExtentComponent implements OnInit, OnDestroy {
  instance: ZoomToExtent;

  @Input() className: string;
  @Input() label: string | HTMLElement;
  @Input() tipLabel: string;
  @Input() extent: Extent;

  constructor(private readonly map: MapComponent) {
  }

  ngOnInit(): void {
    this.instance = new ZoomToExtent(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
