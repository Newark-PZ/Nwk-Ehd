import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-fullscreen',
  template: ' <ng-content></ng-content> '
})
export class ControlFullScreenComponent implements OnInit, OnDestroy {
  instance: FullScreen;

  @Input() className: string;
  @Input() label: string;
  @Input() labelActive: string;
  @Input() tipLabel: string;
  @Input() keys: boolean;

  constructor(private readonly map: MapComponent) {
    // console.log('instancing aol-control-fullscreen');
  }

  ngOnInit(): void {
    this.instance = new FullScreen(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this.instance);
  }
}
