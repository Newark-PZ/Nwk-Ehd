import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { ContentComponent } from '../content.component';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control',
  template: ' <ng-content></ng-content> '
})
export class ControlComponent implements OnInit, OnDestroy {
  componentType = 'control';
  instance: Control;
  element: HTMLElement;
  @ContentChild(ContentComponent, { static: true }) content: ContentComponent;

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Control(this);
      this.map.instance.addControl(this.instance);
    }
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance.removeControl(this.instance);
    }
  }
}
