import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { ObjectEvent } from 'ol/Object';
import View from 'ol/View';
import { MapComponent } from './map.component';

@Component({
  selector: 'map-view',
  template: ' <ng-content></ng-content>'
})
export class ViewComponent implements OnInit, OnChanges {
  instance: View;
  componentType = 'view';

  @Input() constrainRotation: boolean | number;
  @Input() enableRotation: boolean;
  @Input() extent: Extent;
  @Input() maxResolution: number;
  @Input() minResolution: number;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() resolution: number;
  @Input() resolutions: Array<number>;
  @Input() rotation: number;
  @Input() zoom: number;
  @Input() zoomFactor: number;
  @Input() center: Coordinate;
  @Input() projection: string;
  @Input() zoomAnimation = false;

  @Output() readonly changeZoom: EventEmitter<ObjectEvent> = new EventEmitter<ObjectEvent>();
  @Output() readonly changeResolution: EventEmitter<ObjectEvent> = new EventEmitter<ObjectEvent>();
  @Output() readonly changeCenter: EventEmitter<ObjectEvent> = new EventEmitter<ObjectEvent>();
  props = [
    'constrainRotation',
    'enableRotation',
    'extent',
    'maxResolution',
    'minResolution',
    'maxZoom',
    'minZoom',
    'resolution',
    'resolutions',
    'rotation',
    'zoom',
    'zoomFactor',
    'center',
    'projection',
    'zoomAnimation'
  ];
  constructor(readonly host: MapComponent) {}

  ngOnInit(): void {
    this.instance = new View(this);
    this.host.instance.setView(this.instance);

    this.instance.on('change:zoom', (event: ObjectEvent) => { this.changeZoom.emit(event); });
    this.instance.on('change:resolution', (event: ObjectEvent) => { this.changeResolution.emit(event); });
    this.instance.on('change:center', (event: ObjectEvent) => { this.changeCenter.emit(event); });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key of this.props) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'zoom':
            /** Work-around: setting the zoom via setProperties does not work. */
            if (this.zoomAnimation) {
              this.instance.animate({ zoom: changes[key].currentValue });
            } else {
              this.instance.setZoom(changes[key].currentValue);
            }
            break;
          case 'projection':
            this.instance = new View(this);
            this.host.instance.setView(this.instance);
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
  }
}
