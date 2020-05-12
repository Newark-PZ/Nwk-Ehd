import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { Size } from 'ol/size';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';

@Component({
  selector: 'map-tilegrid',
  template: ''
})
export class TileGridComponent implements OnInit, OnChanges {
  instance: TileGrid;

  @Input() extent: Extent;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() tileSize: number | Size;
  @Input() origin?: Coordinate;
  @Input() resolutions: Array<number>;

  ngOnInit(): void {
    (!this.resolutions)
    ? this.instance = createXYZ(this)
    : this.instance = new TileGrid(this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    (!this.resolutions)
    ? this.instance = createXYZ(this)
    : this.instance = new TileGrid(this);
  }
}
