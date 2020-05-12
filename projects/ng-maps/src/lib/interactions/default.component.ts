import { Component, OnDestroy, OnInit } from '@angular/core';
import { Collection } from 'ol';
import { defaults, Interaction } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-default',
  template: ''
})
export class DefaultInteractionComponent implements OnInit, OnDestroy {
  instance: Collection<Interaction>;

  constructor(private readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = defaults();
    this.instance.forEach(i => { this.map.instance.addInteraction(i); });
  }

  ngOnDestroy(): void {
    this.instance.forEach(i => this.map.instance.removeInteraction(i));
  }
}
