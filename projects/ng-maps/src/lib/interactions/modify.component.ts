import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { Condition } from 'ol/events/condition';
import { Modify } from 'ol/interaction';
import { ModifyEvent } from 'ol/interaction/Modify';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-modify',
  template: ''
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  instance: Modify;

  @Input() condition?: Condition;
  @Input() deleteCondition?: Condition;
  @Input() pixelTolerance?: number;
  @Input() style?: Style | Array<Style> | StyleFunction;
  @Input() features: Collection<Feature>;
  @Input() wrapX?: boolean;
  @Input() source?: Vector;

  @Output() readonly modifyEnd = new EventEmitter<ModifyEvent>();
  @Output() readonly modifyStart = new EventEmitter<ModifyEvent>();
  @Output() readonly olChange = new EventEmitter<ModifyEvent>();
  @Output() readonly olChangeActive = new EventEmitter<ModifyEvent>();
  @Output() readonly propertyChange = new EventEmitter<ModifyEvent>();

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new Modify(this);
    this.instance.on('change', (event: ModifyEvent) => { this.olChange.emit(event); });
    this.instance.on('change:active', (event: ModifyEvent) => { this.olChangeActive.emit(event); });
    this.instance.on('propertychange', (event: ModifyEvent) => { this.propertyChange.emit(event); });
    this.instance.on('modifyend', (event: ModifyEvent) => { this.modifyEnd.emit(event); });
    this.instance.on('modifystart', (event: ModifyEvent) => { this.modifyStart.emit(event); });
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
