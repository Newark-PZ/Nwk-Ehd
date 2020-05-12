import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-rotate',
  template: ' <ng-content></ng-content> '
})
export class ControlRotateComponent implements OnInit, OnDestroy {
  instance: Rotate;

  @Input() className: string;
  @Input() label: string;
  @Input() tipLabel: string;
  @Input() duration: number;
  @Input() autoHide: boolean;

  constructor(readonly map: MapComponent) {
  }

  ngOnInit(): void {
    this.instance = new Rotate(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
