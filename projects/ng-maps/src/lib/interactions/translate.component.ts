import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { Translate } from 'ol/interaction';
import { TranslateEvent } from 'ol/interaction/Translate';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';

@Component({
  selector: 'map-interaction-translate',
  template: ''
})
export class TranslateInteractionComponent implements OnInit, OnDestroy {
  instance: Translate;

  @Input() features?: Collection<Feature>;
  @Input() layers?: Array<Layer> | ((layer: Layer) => boolean);
  @Input() hitTolerance?: number;

  @Output() readonly olChange: EventEmitter<TranslateEvent>;
  @Output() readonly propertyChange: EventEmitter<TranslateEvent>;
  @Output() readonly translateEnd: EventEmitter<TranslateEvent>;
  @Output() readonly translateStart: EventEmitter<TranslateEvent>;
  @Output() readonly translating: EventEmitter<TranslateEvent>;

  constructor(readonly map: MapComponent) {
    this.olChange = new EventEmitter<TranslateEvent>();
    this.propertyChange = new EventEmitter<TranslateEvent>();
    this.translateEnd = new EventEmitter<TranslateEvent>();
    this.translateStart = new EventEmitter<TranslateEvent>();
    this.translating = new EventEmitter<TranslateEvent>();
  }

  ngOnInit(): void {
    this.instance = new Translate(this);

    this.instance.on('change', (event: TranslateEvent) => { this.olChange.emit(event); });
    this.instance.on('propertychange', (event: TranslateEvent) => { this.propertyChange.emit(event); });
    this.instance.on('translateend', (event: TranslateEvent) => { this.translateEnd.emit(event); });
    this.instance.on('translatestart', (event: TranslateEvent) => { this.translateStart.emit(event); });
    this.instance.on('translating', (event: TranslateEvent) => { this.translating.emit(event); });

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
