import { Component, ElementRef, OnInit } from '@angular/core';
import { MapEvent } from 'ol';
import { Attribution } from 'ol/control';

@Component({
  selector: 'map-attribution',
  template: '<ng-content></ng-content>'
})
export class AttributionComponent implements OnInit {
  instance: Attribution;
  html: string;

  className?: string;
  target?: HTMLElement | string;
  collapsible?: boolean;
  collapsed?: boolean;
  tipLabel?: string;
  label?: string | HTMLElement;
  collapseLabel?: string | HTMLElement;
  render?: (p0: MapEvent) => void;

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit(): void {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new Attribution(this);
  }
}
