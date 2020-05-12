import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-dragrotate',
  template: ''
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  instance: DragRotate;

  @Input() condition: Condition;
  @Input() duration: number;

  constructor(private readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragRotate(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
