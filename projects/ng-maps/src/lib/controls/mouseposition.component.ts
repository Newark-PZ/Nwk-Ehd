import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-control-mouseposition',
  template: ''
})
export class ControlMousePositionComponent implements OnInit, OnDestroy {
  instance: MousePosition;
  @Input() coordinateFormat: CoordinateFormat;
  @Input() projection: ProjectionLike;
  target: HTMLElement;

  constructor(private readonly map: MapComponent, private readonly element: ElementRef) {}

  ngOnInit(): void {
    this.target = this.element.nativeElement;
    this.instance = new MousePosition(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }
}
