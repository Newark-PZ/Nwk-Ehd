import { Component, Input, OnInit } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';

@Component({
  selector: 'map-tilegrid-wmts',
  template: ''
})
export class TileGridWMTSComponent extends TileGridComponent implements OnInit {
  instance: WMTS;

  @Input() origin?: Coordinate;
  @Input() origins?: Array<Coordinate>;
  @Input() resolutions: Array<number>;
  @Input() matrixIds: Array<string>;
  @Input() sizes?: Array<Size>;
  @Input() tileSizes?: Array<Size>;
  @Input() widths?: Array<number>;

  ngOnInit(): void {
    this.instance = new WMTS(this);
  }
}
