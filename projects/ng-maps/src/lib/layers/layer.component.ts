import { Input, OnChanges, OnDestroy, OnInit, SimpleChanges, Directive } from '@angular/core';
import Event from 'ol/events/Event';
import { Extent } from 'ol/extent';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';

@Directive()
export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  instance: any;
  componentType = 'layer';

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent: Extent;
  @Input() zIndex: number;
  @Input() minResolution: number;
  @Input() maxResolution: number;

  @Input() prerender: (evt: Event) => void;
  @Input() postrender: (evt: Event) => void;
  props = [
    'opacity',
    'visible',
    'extent',
    'zIndex',
    'minResolution',
    'maxResolution',
    'prerender',
    'postrender'
  ];

  constructor(protected host: MapComponent | LayerGroupComponent) {}

  ngOnInit(): void {
    if (this.prerender !== null && this.prerender !== undefined) {
      this.instance.on('prerender', this.prerender);
    }
    if (this.postrender !== null && this.postrender !== undefined) {
      this.instance.on('postrender', this.postrender);
    }
    this.host.instance.getLayers()
      .push(this.instance);
  }

  ngOnDestroy(): void {
    this.host.instance.getLayers()
      .remove(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key of this.props) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
        if (key === 'prerender') {
          this.instance.un('prerender', changes[key].previousValue);
          this.instance.on('prerender', changes[key].currentValue);
        }
        if (key === 'postrender') {
          this.instance.un('postrender', changes[key].previousValue);
          this.instance.on('postrender', changes[key].currentValue);
        }
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
