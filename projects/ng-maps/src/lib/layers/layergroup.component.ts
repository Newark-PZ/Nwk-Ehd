import { Component, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core';
import { Group } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'map-layer-group',
  template: ' <ng-content></ng-content> '
})
export class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
  instance: Group;

  constructor(
    map: MapComponent,
    @SkipSelf() @Optional() group?: LayerGroupComponent
  ) {
    super(group || map);
  }

  ngOnInit(): void {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new Group(this);
    super.ngOnInit();
  }
}
