import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-attribution',
  template: ''
})
export class ControlAttributionComponent implements OnInit, OnDestroy {
  componentType = 'control';
  instance: Attribution;
  target: HTMLElement;
  @Input() collapsible: boolean;

  constructor(readonly map: MapComponent, readonly element: ElementRef) {}

  ngOnInit(): void {
    this.target = this.element.nativeElement;
    this.instance = new Attribution(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
