import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragRotateAndZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-dragrotateandzoom',
  template: ''
})
export class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
  instance: DragRotateAndZoom;

  @Input() condition: Condition;
  @Input() duration: number;

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragRotateAndZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}