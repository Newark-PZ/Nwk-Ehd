import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Control } from 'ol/control';
import { Interaction } from 'ol/interaction';
import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import { ObjectEvent } from 'ol/Object';
import RenderEvent from 'ol/render/Event';

@Component({
  selector: 'map-map',
  template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  instance: Map;
  componentType = 'map';

  @Input() width = '100%';
  @Input() height = '100%';
  @Input() pixelRatio: number;
  @Input() keyboardEventTarget: HTMLElement | string;
  @Input() loadTilesWhileAnimating: boolean;
  @Input() loadTilesWhileInteracting: boolean;
  @Input() logo: string | boolean;
  @Input() renderer: 'canvas' | 'webgl';
  props = [
    'width',
    'height',
    'pixelRatio',
    'keyboardEventTarget',
    'loadTilesWhileAnimating',
    'loadTilesWhileInteracting',
    'logo',
    'renderer'
  ];

  @Output() readonly olClick: EventEmitter<MapBrowserEvent>;
  @Output() readonly dblClick: EventEmitter<MapBrowserEvent>;
  @Output() readonly moveStart: EventEmitter<MapEvent>;
  @Output() readonly moveEnd: EventEmitter<MapEvent>;
  @Output() readonly pointerDrag: EventEmitter<MapBrowserEvent>;
  @Output() readonly pointerMove: EventEmitter<MapBrowserEvent>;
  @Output() readonly onpostrender: EventEmitter<RenderEvent>;
  @Output() readonly postRender: EventEmitter<MapEvent>;
  @Output() readonly onprerender: EventEmitter<RenderEvent>;
  @Output() readonly propertyChange: EventEmitter<ObjectEvent>;
  @Output() readonly singleClick: EventEmitter<MapBrowserEvent>;

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: Array<Control> = [];
  interactions: Array<Interaction> = [];

  constructor(private readonly host: ElementRef) {
    this.olClick = new EventEmitter<MapBrowserEvent>();
    this.dblClick = new EventEmitter<MapBrowserEvent>();
    this.moveStart = new EventEmitter<MapEvent>();
    this.moveEnd = new EventEmitter<MapEvent>();
    this.pointerDrag = new EventEmitter<MapBrowserEvent>();
    this.pointerMove = new EventEmitter<MapBrowserEvent>();
    this.onpostrender = new EventEmitter<RenderEvent>();
    this.postRender = new EventEmitter<MapEvent>();
    this.onprerender = new EventEmitter<RenderEvent>();
    this.propertyChange = new EventEmitter<ObjectEvent>();
    this.singleClick = new EventEmitter<MapBrowserEvent>();
  }

  ngOnInit(): void {
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: MapBrowserEvent) => { this.olClick.emit(event); });
    this.instance.on('dblclick', (event: MapBrowserEvent) => { this.dblClick.emit(event); });
    this.instance.on('movestart', (event: MapEvent) => { this.moveStart.emit(event); });
    this.instance.on('moveend', (event: MapEvent) => { this.moveEnd.emit(event); });
    this.instance.on('pointerdrag', (event: MapBrowserEvent) => { this.pointerDrag.emit(event); });
    this.instance.on('pointermove', (event: MapBrowserEvent) => { this.pointerMove.emit(event); });
    this.instance.on('postrender', (event: RenderEvent) => { this.onpostrender.emit(event); });
    this.instance.on('postrender', (event: MapEvent) => { this.postRender.emit(event); });
    this.instance.on('prerender', (event: RenderEvent) => { this.onprerender.emit(event); });
    this.instance.on('propertychange', (event: ObjectEvent) => { this.propertyChange.emit(event); });
    this.instance.on('singleclick', (event: MapBrowserEvent) => { this.singleClick.emit(event); });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key of this.props) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit(): void {
    this.instance.updateSize();
  }
}
