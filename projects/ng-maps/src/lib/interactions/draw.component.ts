import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { Condition } from 'ol/events/condition';
import GeometryType from 'ol/geom/GeometryType';
import { Draw } from 'ol/interaction';
import { DrawEvent, GeometryFunction } from 'ol/interaction/Draw';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-draw',
  template: ''
})
export class DrawInteractionComponent implements OnInit, OnDestroy {
  instance: Draw;

  @Input() clickTolerance?: number;
  @Input() features?: Collection<Feature>;
  @Input() source?: Vector;
  @Input() snapTolerance?: number;
  @Input() type: GeometryType;
  @Input() maxPoints?: number;
  @Input() minPoints?: number;
  @Input() finishCondition?: Condition;
  @Input() style?: Style | Array<Style> | StyleFunction;
  @Input() geometryFunction?: GeometryFunction;
  @Input() geometryName?: string;
  @Input() condition?: Condition;
  @Input() freehandCondition?: Condition;
  @Input() freehand?: boolean;
  @Input() wrapX?: boolean;

  @Output() readonly olChange = new EventEmitter<DrawEvent>();
  @Output() readonly olChangeActive = new EventEmitter<DrawEvent>();
  @Output() readonly drawEnd = new EventEmitter<DrawEvent>();
  @Output() readonly drawStart = new EventEmitter<DrawEvent>();
  @Output() readonly propertyChange = new EventEmitter<DrawEvent>();

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new Draw(this);
    this.instance.on('change', (event: DrawEvent) => { this.olChange.emit(event); });
    this.instance.on('change:active', (event: DrawEvent) => { this.olChangeActive.emit(event); });
    this.instance.on('drawend', (event: DrawEvent) => { this.drawEnd.emit(event); });
    this.instance.on('drawstart', (event: DrawEvent) => { this.drawStart.emit(event); });
    this.instance.on('propertychange', (event: DrawEvent) => { this.propertyChange.emit(event); });
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
