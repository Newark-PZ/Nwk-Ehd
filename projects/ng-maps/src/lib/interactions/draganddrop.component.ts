import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import FeatureFormat from 'ol/format/Feature';
import { DragAndDrop } from 'ol/interaction';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-draganddrop',
  template: ''
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  instance: DragAndDrop;

  @Input() formatConstructors: Array<FeatureFormat>;
  @Input() projection: ProjectionLike;
  @Input() target: HTMLElement;

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
