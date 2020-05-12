import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-zoom',
  template: ' <ng-content></ng-content> '
})
export class ControlZoomComponent implements OnInit, OnDestroy {
  instance: Zoom;

  @Input() duration: number;
  @Input() zoomInLabel: string | HTMLElement;
  @Input() zoomOutLabel: string | HTMLElement;
  @Input() zoomInTipLabel: string;
  @Input() zoomOutTipLabel: string;
  @Input() delta: number;

  constructor(private readonly map: MapComponent) {
  }

  ngOnInit(): void {
    this.instance = new Zoom(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
