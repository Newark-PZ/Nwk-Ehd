import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-pinchzoom',
  template: ''
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  instance: PinchZoom;

  @Input() duration: number;
  @Input() constrainResolution: boolean;

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new PinchZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
