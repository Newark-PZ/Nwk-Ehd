import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-overviewmap',
  template: ' <ng-content></ng-content> '
})
export class ControlOverviewMapComponent implements OnInit, OnChanges, OnDestroy {
  instance: OverviewMap;
  @Input() collapsed: boolean;
  @Input() collapseLabel: string;
  @Input() collapsible: boolean;
  @Input() label: string;
  @Input() layers: Array<Layer>;
  @Input() target: HTMLElement;
  @Input() tipLabel: string;
  @Input() view: View;

  constructor(private readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance !== undefined && changes.hasOwnProperty('view')) {
      this.reloadInstance();
    }
  }

  private reloadInstance(): void {
    this.map.instance.removeControl(this.instance);
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }
}
