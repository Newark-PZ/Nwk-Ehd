import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Collection } from 'ol';
import { Control, defaults } from 'ol/control';
import { Options as AttributionOptions } from 'ol/control/Attribution';
import { Options as RotateOptions } from 'ol/control/Rotate';
import { Options as ZoomOptions } from 'ol/control/Zoom';

import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-defaults',
  template: ''
})
export class DefaultControlComponent implements OnInit, OnDestroy {
  instance: Collection<Control>;
  @Input() attribution: boolean;
  @Input() attributionOptions: AttributionOptions;
  @Input() rotate: boolean;
  @Input() rotateOptions: RotateOptions;
  @Input() zoom: boolean;
  @Input() zoomOptions: ZoomOptions;

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    // console.log('ol.control.defaults init: ', this);
    this.instance = defaults(this);
    this.instance.forEach(c => { this.map.instance.addControl(c); });
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-defaults');
    this.instance.forEach(c => this.map.instance.removeControl(c));
  }
}
