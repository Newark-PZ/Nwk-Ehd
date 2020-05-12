import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-scaleline',
  template: ' <ng-content></ng-content> '
})
export class ControlScaleLineComponent implements OnInit, OnDestroy {
  instance: ScaleLine;
  @Input() units: string;

  constructor(readonly map: MapComponent) {
  }

  ngOnInit(): void {
    this.instance = new ScaleLine(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
