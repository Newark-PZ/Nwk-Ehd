import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRipple } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { MapComponent, OverlayComponent } from 'ng-maps';
import { MapBrowserEvent } from 'ol';
import { easeOut } from 'ol/easing';
import { fromExtent } from 'ol/geom/Polygon';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import { UTFGrid } from 'ol/source';
import { Observable, Observer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { LayersService } from '../../shared';
import { MapLayer } from '../../shared/classes/maplayer';
import { BottomSheetComponent } from '../../shared/components/elements/bottomsheet.component';
import { PropSnackbarComponent } from '../../shared/components/mapels/prop-snackbar.component';
import { LegendItem } from '../../shared/models/layers.interface';
import { rowExpand } from '../../shared/util/animations';
import * as fromStore from '../../store/store.reducers';
import { StoreService } from '../../store/store.service';

@Component({
  animations: [rowExpand],
  selector: 'app-maps',
  styleUrls: ['../../shared/components/mapels/mapels.component.scss'],
  templateUrl: './maps.component.html',
  styles: [':host { height: 100%; display: flex;}']
})
export class MapsComponent implements AfterViewInit, OnDestroy {
  basemapUrls = [
    'https://d.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
    'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
  ];
  cartoLabelsUrl = [
    'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png',
    'http://mt0.google.com/vt/lyrs=h&hl=en&x={x}&y={y}&z={z}'
  ];
  basemapAttr = [
    '<span><a href="http://www.openstreetmap.org/copyright">© OpenStreetMap</a> contributors, <a href="https://carto.com/attribution">© CARTO</a></span>',
    '<span>Imagery ©2020 Bluesky, Maxar Technologies, Sanborn, USDA Farm Service Agency, <a href="https://www.google.com/permissions/geoguidelines/attr-guide/">Google Streets & Satellite 2020</a></span>'
  ];
  fullScreen = false;
  sideStatus = true;
  textHide = true;
  zoom = 13;
  layersSubscription: Subscription;
  parcelsSubscription: Subscription;
  clicked = {blocklot: '', block: '', lot: '', proploc: ''};
  hovered: {blocklot?: string; proploc?: string; } = {blocklot: ''};
  basemap$: Observable<boolean>;
  paneState$: Observable<boolean>;
  panesub: Subscription;
  showLegend = false;
  legendCols = ['element', 'label', 'info'];
  @ViewChild(MatRipple) ripple: MatRipple;
  @ViewChild('map') map: MapComponent;
  @ViewChild('overlay') overlay: OverlayComponent;
  @ViewChild('hover') hoverFlag: OverlayComponent;
  overlaylyrs: Array<MapLayer> = [];
  parcelLyrs: Array<MapLayer> = [];
  legendSub$: Observable<Array<LegendItem>>;

  constructor(
    readonly store: Store<fromStore.StoreState>,
    public storeService: StoreService,
    readonly snackBar: MatSnackBar,
    readonly layerservice: LayersService,
    readonly _bottomSheet: MatBottomSheet
  ) {
    this.basemap$ = this.store.select(state => state.map.basemap);
    this.paneState$ = this.store.select(state => state.propPane.opened);
    this.legendSub$ = new Observable((observer: Observer<Array<LegendItem>>) => {
      setInterval(e => {
        if (e) {
          const mapLayers: Array<MapLayer> = [
            this.parcelLyrs[0]
          ]
          .concat(this.overlaylyrs)
          .sort(l => l.layer.getZIndex());
          observer.next(mapLayers.filter(lyr => lyr.layer.getVisible())
          .map(
            l => l.legendInfo
          ));
        }}, 500, this.showLegend);
    });
  }
  convertRemToPixels(rem: number): number {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  ngAfterViewInit(): void {
    this.map.instance.updateSize();
    this.map.instance.once('rendercomplete', () => {
      this.storeService.setMap(this.map.instance);
      this.layerservice.initLayers()
        .forEach(
          (g, i) => i === 0 ? this.overlaylyrs = g : this.parcelLyrs = g
        );
      this.overlaylyrs.forEach(l => {this.map.instance.addLayer(l.layer); });
      this.parcelLyrs.forEach(l => {this.map.instance.addLayer(l.layer); });
      });
    this.map.instance.getView()
      .on('change', () =>
        this.zoom = this.map.instance.getView()
        .getZoom()
        );
    this.parcelsSubscription = this.store
      .select(state => state.map.parcelLayers)
      .pipe(take(1))
      .subscribe(layers => {
          if (this.parcelLyrs.length > 0) {
            this.parcelLyrs.forEach(l => {
              this.map.instance.removeLayer(l.layer);
              this.parcelLyrs.shift();
            });
          }
          if (layers.length > 0) {
            layers.forEach(l => {
              this.parcelLyrs.unshift(l);
              this.map.instance.addLayer(l);
            });
          }
    });
    this.layersSubscription = this.store
        .select(state => state.map.overlays)
        .pipe(take(1))
        .subscribe(layers => {
          if (this.overlaylyrs.length > 0) {
            this.overlaylyrs.forEach(l => {
                this.map.instance.removeLayer(l.layer);
                this.overlaylyrs.shift();
              });
          }
          // Add all OL layers
          layers.forEach(l => {
            this.overlaylyrs.push(l);
            this.map.instance.addLayer(l);
          });
    });
    this.map.instance.on('singleclick', e => { this.handleSingleClick(e); });
  }
  ngOnDestroy(): void {
    this.snackBar.dismiss();
    this._bottomSheet.dismiss();
    this.layersSubscription.unsubscribe();
    this.parcelsSubscription.unsubscribe();
    this.overlaylyrs = [];
    this.layerservice.resetService();
    this.showLegend = false;
  }
  openBottomsheet(page: number): void {
    this._bottomSheet.open(BottomSheetComponent,
      { data: { map: this.map, overlay: this.overlay } })
      .afterOpened()
      .subscribe(() => {
        this.storeService.setMapPaneSelectedModule(page);
      });
  }
  zoomChange(type: 'in' | 'out'): void {
    type === 'in'
    ? this.zoom = Math.min(this.zoom + 1, 19)
    : this.zoom = Math.max(this.zoom - 1, 8);
    this.map.instance.getView()
        .animate({ zoom: this.zoom, easing: easeOut, duration: 750});
  }
  resetView(): void {
    this.map.instance.getView()
    .fit(
      fromExtent([
        fromLonLat([-74.0617852, 40.6733126])[0],
        fromLonLat([-74.0617852, 40.6733126])[1],
        fromLonLat([-74.2853199, 40.7910592])[0],
        fromLonLat([-74.2853199, 40.7910592])[1]
      ]),
      {size: this.map.instance.getSize(), easing: easeOut, duration: 750}
    );
  }
  setBasemap(): void {
    this.storeService.toggleBasemap();
  }
  handleSingleClick(e: MapBrowserEvent): void {
    this.showLegend = false;
    this.ripple.launch(e.pixel[0] + this.convertRemToPixels(1), e.pixel[1] + this.convertRemToPixels(5.5));
    const viewResolution = this.map.instance.getView()
      .getResolution();
    this.map.instance.getLayers()
      .forEach(l => {if (l.getClassName() === 'Grid') { ((l as TileLayer).getSource() as UTFGrid)
        .forDataAtCoordinateAndResolution(e.coordinate, viewResolution, data => {
        this.clicked.blocklot = data.blocklot || data.block_lot || '__-__';
        this.clicked.proploc = data.proploc || 'No Address/Non-Parcel';
        this.storeService.setPropPaneSelectedProp(
          {
            BLOCK_LOT: this.clicked.blocklot,
            STREET_ADD: this.clicked.proploc,
            geometry: [e.coordinate[0], e.coordinate[1]]
          }
          );
      });
      } else if (l.getClassName() === 'geo') {
        const geofeat = (l as VectorLayer).getSource()
          .getFeaturesAtCoordinate(e.coordinate)[0]
          .getProperties();
        this.storeService.setPropPaneSelectedGeo(
          geofeat ? geofeat : ''
        );
      }
    });
    this.overlay.instance.setPosition(e.coordinate);
    this.snackBar.openFromComponent(PropSnackbarComponent, {data: {bottomsheet: () => { this.openBottomsheet(2); }}});
  }
  dispatchHover(e): void {
    const viewResolution = this.map.instance.getView()
    .getResolution() || 0;
    this.map.instance.getLayers()
      .forEach(l => {if (l.getClassName() === 'Grid') { ((l as TileLayer).getSource() as UTFGrid)
        .forDataAtCoordinateAndResolution(e.coordinate, viewResolution, data => {
          this.hoverFlag.instance.setPosition(e.coordinate);
          if (data) {
            this.hovered.blocklot = data.blocklot && data.blocklot.length > 0 ? data.blocklot : '__-__';
            this.hovered.proploc = data.proploc && data.proploc.length > 1 ? data.proploc : undefined;
          } else {
            this.hovered = {blocklot: '', proploc: undefined};
          }
      });
    }});
  }
}
