import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { Condition } from 'ol/events/condition';
import { Select } from 'ol/interaction';
import { FilterFunction, SelectEvent } from 'ol/interaction/Select';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-select',
  template: ''
})
export class SelectInteractionComponent implements OnInit, OnDestroy {
  instance: Select;

  @Input() addCondition?: Condition;
  @Input() condition?: Condition;
  @Input() layers?: Array<Layer> | ((layer: Layer) => boolean);
  @Input() style?: Style | Array<Style> | StyleFunction;
  @Input() removeCondition?: Condition;
  @Input() toggleCondition?: Condition;
  @Input() multi?: boolean;
  @Input() features?: Collection<Feature>;
  @Input() filter?: FilterFunction;
  @Input() wrapX?: boolean;

  @Output() readonly olChange = new EventEmitter<SelectEvent>();
  @Output() readonly olSelect = new EventEmitter<SelectEvent>();
  @Output() readonly propertyChange = new EventEmitter<SelectEvent>();

  constructor(readonly map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new Select(this);

    this.instance.on('change', (event: SelectEvent) => { this.olChange.emit(event); });
    this.instance.on('select', (event: SelectEvent) => { this.olSelect.emit(event); });
    this.instance.on('propertychange', (event: SelectEvent) => { this.propertyChange.emit(event); });

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
