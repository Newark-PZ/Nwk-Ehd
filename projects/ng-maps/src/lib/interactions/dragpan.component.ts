import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragPan } from 'ol/interaction';
import Kinetic from 'ol/Kinetic';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-dragpan',
  template: ''
})
export class DragPanInteractionComponent implements OnInit, OnDestroy {
  instance: DragPan;

  @Input() condition: Condition;
  @Input() kinetic: Kinetic;

  constructor(private readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
