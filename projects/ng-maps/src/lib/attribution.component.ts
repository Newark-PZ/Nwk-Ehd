import { Component, ElementRef, OnInit } from '@angular/core';
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

  // tslint:disable-next-line: prefer-readonly
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new Attribution(this);
  }
}
