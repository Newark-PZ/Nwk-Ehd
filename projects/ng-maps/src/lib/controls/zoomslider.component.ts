import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-zoomslider',
  template: ' <ng-content></ng-content> '
})
export class ControlZoomSliderComponent implements OnInit, OnDestroy {
  instance: ZoomSlider;

  @Input() className: string;
  @Input() duration: number;
  @Input() maxResolution: number;
  @Input() minResolution: number;

  constructor(private readonly map: MapComponent) {
  }

  ngOnInit(): void {
    this.instance = new ZoomSlider(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
