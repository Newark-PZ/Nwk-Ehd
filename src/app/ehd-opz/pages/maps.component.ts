import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatRipple } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { LayerVectorComponent, MapComponent, OverlayComponent } from 'ng-maps';
import { MapBrowserEvent } from 'ol';
import { easeOut } from 'ol/easing';
import { fromExtent } from 'ol/geom/Polygon';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat, toLonLat } from 'ol/proj';
import { UTFGrid } from 'ol/source';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { LayersService, MapLayersService } from '../../shared';
import { MapLayer } from '../../shared/classes/maplayer';
import { BottomSheetComponent } from '../../shared/components/elements/bottomsheet.component';
import { PropSnackbarComponent } from '../../shared/components/mapels/prop-snackbar.component';
import { LegendItem } from '../../shared/interfaces/config-layers.inteface';
import { rowExpand } from '../../shared/util/animations';
import * as LayersActions from '../../store/layers/layers.actions';
import * as MapPaneActions from '../../store/map-pane/map-pane.actions';
import * as MapActions from '../../store/map/map.actions';
import * as PropPaneActions from '../../store/prop-pane/prop-pane.actions';
import * as fromStore from '../../store/store.reducers';

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
  cartoLabelsUrl = 'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';
  fullScreen = false;
  sideStatus = true;
  textHide = true;
  zoom = 13;
  coords;
  layersSubscription: Subscription;
  parcelsSubscription: Subscription;
  parcelsOpacity: number;
  clicked = {blocklot: '', block: '', lot: '', proploc: ''};
  basemap$: Observable<boolean>;
  paneState$: Observable<boolean>;
  panesub: Subscription;
  legendEls: Observable<Array<LegendItem>>;
  showLegend = false;
  legendCols = ['element', 'label', 'info'];
  @ViewChild(MatRipple) ripple: MatRipple;
  @ViewChild('map') map: MapComponent;
  @ViewChild('overlay') overlay: OverlayComponent;
  @ViewChild('geoLayer') geoLayer: LayerVectorComponent;
  overlaylyrs: Array<MapLayer> = [];
  parcelLyrs: Array<MapLayer> = [];

  constructor(
    readonly store: Store<fromStore.StoreState>,
    readonly snackBar: MatSnackBar,
    readonly layerservice: LayersService,
    readonly getlayers: MapLayersService,
    readonly _bottomSheet: MatBottomSheet
  ) {
    this.basemap$ = this.store.select(state => state.layers.basemap);
    this.legendEls = this.store.select(state => state.layers.legend);
    this.paneState$ = this.store.select(state => state.propPane.opened);
  }
  convertRemToPixels(rem: number): number {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  ngAfterViewInit(): void {
    this.map.instance.updateSize();
    this.map.instance.once('rendercomplete', () => {
      this.store.dispatch(new MapActions.SetMap(this.map.instance));
      this.overlaylyrs = this.layerservice.initOverlayLayers();
      this.overlaylyrs.forEach(l => {this.map.instance.addLayer(l.layer); });
      this.parcelLyrs = this.getlayers.initGeoParcelLayers();
      this.parcelLyrs.forEach(l => {this.map.instance.addLayer(l.layer); });
      });
    this.map.instance.getView()
      .on('change', () =>
        this.zoom = this.map.instance.getView()
        .getZoom()
        );
    this.parcelsSubscription = this.store
      .select(state => state.layers.parcelLayers)
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
              this.parcelLyrs.push(l);
              this.map.instance.addLayer(l);
            });
          }
    });
    this.layersSubscription = this.store
        .select(state => state.layers.overlays)
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
    this.getlayers.resetService();
  }
  openBottomsheet(page: number): void {
    this._bottomSheet.open(BottomSheetComponent,
      { data: { map: this.map, geoLayer: this.geoLayer, overlay: this.overlay } })
      .afterOpened()
      .subscribe(() => {
        this.store.dispatch(new MapPaneActions.SetSelectedModule(page));
      });
  }
  zoomChange(type: 'in' | 'out'): void {
    type === 'in'
    ? this.zoom = Math.min(this.zoom + 1, 18)
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
    this.store.dispatch(new LayersActions.ToggleBasemap());
  }
  handleSingleClick(e: MapBrowserEvent): void {
    this.ripple.launch(e.pixel[0] + this.convertRemToPixels(1), e.pixel[1] + this.convertRemToPixels(5.5));
    const viewResolution = this.map.instance.getView()
      .getResolution();
    this.coords = [toLonLat(e.coordinate)[1], toLonLat(e.coordinate)[0]];
    this.map.instance.getLayers()
      .forEach(l => {if (l.getClassName() === 'parcelgrid') { ((l as TileLayer).getSource() as UTFGrid)
        .forDataAtCoordinateAndResolution(e.coordinate, viewResolution, data => {
        this.clicked.blocklot = data.blocklot || data.block_lot || '__-__';
        this.clicked.proploc = data.proploc || 'No Address/Non-Parcel';
        this.store.dispatch(new PropPaneActions.SetSelectedProp(
          { blocklot: this.clicked.blocklot, address: this.clicked.proploc, coords: this.coords }
          ));
      });
    }});
    this.overlay.instance.setPosition(e.coordinate);
    this.snackBar.openFromComponent(PropSnackbarComponent, {data: {bottomsheet: () => { this.openBottomsheet(2); }}});
  }
}
