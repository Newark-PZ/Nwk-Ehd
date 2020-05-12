import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragBox } from 'ol/interaction';
import { EndCondition } from 'ol/interaction/DragBox';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-dragbox',
  template: ''
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  instance: DragBox;

  @Input() className: string;
  @Input() condition: Condition;
  @Input() boxEndCondition: EndCondition;

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}