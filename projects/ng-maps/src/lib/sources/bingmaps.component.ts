import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { BingMaps } from 'ol/source';
import { LoadFunction } from 'ol/Tile';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'map-source-bingmaps',
  template: ' <div class="aol-source-bingmaps"></div> ',
  // tslint:disable-next-line: no-forward-ref
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }]
})
export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  instance: BingMaps;

  @Input() cacheSize: number;
  @Input() hidpi: boolean;
  @Input() culture: string;
  @Input() key: string;
  @Input() imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey' = 'Aerial';
  @Input() maxZoom: number;
  @Input() reprojectionErrorThreshold: number;
  @Input() tileLoadFunction: LoadFunction;
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}
