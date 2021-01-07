import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay, View } from 'ol';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import { Coordinate } from 'ol/coordinate';
import { easeOut } from 'ol/easing';
import { fromExtent } from 'ol/geom/Polygon';
import {
  defaults as defaultInteractions, DragPan
} from 'ol/interaction';
import LayerGroup from 'ol/layer/Group';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import OverlayPositioning from 'ol/OverlayPositioning';
import { fromLonLat, toLonLat } from 'ol/proj';
import { XYZ } from 'ol/source';
import { take } from 'rxjs/operators';
import { StoreService } from '../../../store/store.service';
import { SearchFeature } from '../../models';
import { CartoService } from '../../services/carto.service';
import { MapLayerService } from '../../services/maplayer.service';
import { togglePanel } from '../../util/animations';
import { InfoTabsComponent } from './info-tabs.component';

@Component({
  animations: [togglePanel],
  selector: 'app-basic-map',
  styleUrls: ['./map.component.scss'],
  templateUrl: './map.component.html'
})
// tslint:disable: no-non-null-assertion
export class MapComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() basemap: 'base' | 'sat' = 'base';
  @Input() height = '100%';
  @Input() panel = false;
  @Input() parcelView: 'Zoning' | 'LandUse' | 'Base' = 'Zoning';
  @Input() width = '100%';
  instance: Map;
  zoom = 13;
  clicked = { blocklot: '', proploc: '', geo: '' };
  hovered: { blocklot: string | ''; proploc?: string; };
  popup: Overlay;
  props = ['basemap', 'height', 'panel', 'parcelView', 'width'];
  basemapgroup = this.layers.makeBasemapGroup();
  transitGroup = this.layers.makeTransitGroup();
  geoGroup = this.layers.makeLayerGroup('Boundary', ['neighborhoods']);
  overlayGroup = this.layers.makeLayerGroup('Overlays', []);
  parcelGroup = this.layers.makeParcelGroup(this.parcelView);
  @ViewChild('infotabs') infotabs: InfoTabsComponent;
  constructor(
    private readonly host: ElementRef,
    readonly snackbar: MatSnackBar,
    readonly storeService: StoreService,
    readonly layers: MapLayerService,
    readonly cartooQuery: CartoService) { }
  ngOnInit(): void {
    [
      [this.basemapgroup, 'Basemap'], [this.transitGroup, 'Transit'], [this.geoGroup, 'Boundary'],
      [this.overlayGroup, 'Overlays'], [this.parcelGroup, 'Parcel']
    ].forEach(
      grp => { (grp[0] as LayerGroup).set('className', grp[1]); }
    );
    this.popup = new Overlay({
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      },
      positioning: 'center-center' as OverlayPositioning,
      element: document.getElementById('popup')!
    });
    this.instance = new Map({
      layers: [
        this.basemapgroup, this.transitGroup,
        this.geoGroup, this.overlayGroup,
        this.parcelGroup
      ],
      overlays: [this.popup],
      interactions: defaultInteractions({ pinchRotate: false })
        .extend(
          // tslint:disable-next-line: no-string-literal
          [new DragPan({ condition: e => (e.originalEvent['which'] === 2) })]
        ),
      controls: defaultControls({ zoom: false })
        .extend([new ScaleLine({ units: 'us' })]),
      target: this.host.nativeElement.firstElementChild,
      view: new View({
        center: fromLonLat([-74.1723667, 40.735657]),
        zoom: 13,
        maxZoom: 19,
        enableRotation: false
      })
    });
    this.instance.updateSize();
    this.instance.on('singleclick', e => { this.handlePropLookup(e, []); });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('basemap')) { this.toggleBasemapLayer(); }
    if (changes.hasOwnProperty('parcelView')) { this.parcelView = changes.parcelView.currentValue; }
  }
  zoomChange(type: 'in' | 'out'): void {
    this.zoom = this.instance.getView()
      .getZoom()!;
    this.zoom = type === 'in' ? Math.min(this.zoom + 1, 19) : Math.max(this.zoom - 1, 8);
    this.instance.getView()
      .animate({ zoom: this.zoom, easing: easeOut, duration: 750 });
  }
  resetView(): void {
    this.zoom = 13;
    this.instance.getView()
      .fit(
        fromExtent([
          fromLonLat([-74.0617852, 40.6733126])[0],
          fromLonLat([-74.0617852, 40.6733126])[1],
          fromLonLat([-74.2853199, 40.7910592])[0],
          fromLonLat([-74.2853199, 40.7910592])[1]
        ]),
        { size: this.instance.getSize(), easing: easeOut, duration: 750 }
      );
  }
  handlePropLookup(e: MapBrowserEvent | undefined, searchevt: Array<SearchFeature>): void {
    const coordinates: Coordinate = e ? e.coordinate : fromLonLat([searchevt[0].X, searchevt[0].Y]);
    this.instance.getLayers()
      .forEach(l => {
        if ((l.get('className')).search(/(Boundary)/gi) > -1) {
          const geofeat = ((l.getLayersArray()).filter(lyr => lyr.getVisible())[0] as VectorLayer).getSource()
            .getFeaturesAtCoordinate(coordinates)[0];
          geofeat === undefined
            ? console.warn('No Boundary Layer Found')
            : this.storeService.setPropPaneSelectedGeo(
              ((l.getLayersArray()).filter(lyr => lyr.getVisible())[0] as VectorLayer).getClassName(),
              geofeat.get('name')
            );
          this.clicked.geo = geofeat.get('name');
        }
    });
    this.cartooQuery.getInfoFromPoint(toLonLat(coordinates) as [number, number])
    .pipe(take(1))
    .subscribe(q => {
      this.clicked = q.rows.length > 0 ? { blocklot: q.rows[0].blocklot, proploc: q.rows[0].proploc, geo: this.clicked.geo } : { blocklot: '__-__', proploc: 'No Address/Non-Parcel', geo: this.clicked.geo };
      this.storeService.setPropPaneSelectedProp(
        { BLOCK_LOT: this.clicked.blocklot, STREET_ADD: this.clicked.proploc, geometry: coordinates as [number, number]}
      );
      this.storeService.setPropPanePropInfo(q.rows[0]);
      this.popup.setPosition(coordinates);
    });
  }
  closeOverlay(el: HTMLLinkElement): void { this.popup.setPosition(undefined); el.blur(); }
  toggleBasemapLayer(): void {
    this.basemap === 'base' ? this.basemap = 'sat' : this.basemap = 'base';
    const cartoBaseUrl = (name: 'nolabels' | 'only_labels') => `https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager_${name}/{z}/{x}/{y}.png`;
    const gglBaseUrl = (name: 'basemap' | 'labels') => `https://mt{1-3}.google.com/vt/lyrs=${name === 'labels' ? 'h' : 's'}&hl=en&x={x}&y={y}&z={z}`;
    const info = {
      sat: [gglBaseUrl('basemap'), gglBaseUrl('labels'), '<span>Imagery ©2020 Bluesky, Maxar Technologies, Sanborn, USDA Farm Service Agency, <a href="https://www.google.com/permissions/geoguidelines/attr-guide/">Google Streets & Satellite 2020</a></span>'],
      base: [cartoBaseUrl('nolabels'), cartoBaseUrl('only_labels'), '<span><a href="http://www.openstreetmap.org/copyright">© OpenStreetMap</a> contributors, <a href="https://carto.com/attribution">© CARTO</a></span>']
    };
    (this.basemapgroup.getLayersArray()[0]
      .getSource() as XYZ)
      .setUrl(info[this.basemap][0]);
    this.basemapgroup.getLayersArray()[0]
      .getSource()
      .setAttributions(info[this.basemap][2]);
    (this.basemapgroup.getLayersArray()[1]
      .getSource() as XYZ)
      .setUrl(info[this.basemap][1]);
  }
  exportMap(e: { event: string, linkEl: HTMLLinkElement }): void {
    this.instance.once('rendercomplete', () => {
      const mapCanvas = document.createElement('canvas');
      const size = this.instance.getSize()!;
      mapCanvas.width = size[0];
      mapCanvas.height = size[1];
      const mapContext = mapCanvas.getContext('2d');
      document.querySelectorAll('.ol-layers > div > canvas')
        .forEach(
          (canvas: HTMLCanvasElement) => {
            if (canvas.width > 0 && mapContext) {
              const opacity = canvas.parentElement?.style.opacity;
              mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
              const transform = canvas.style.transform;
              // Get the transform parameters from the style's transform matrix
              const matrix = transform.match(/^matrix\(([^\(]*)\)$/)![1]
                .split(',')
                .map(Number);
              // Apply the transform to the export map context
              CanvasRenderingContext2D.prototype.setTransform.apply(mapContext, matrix);
              mapContext.drawImage(canvas, 0, 0);
            }
          }
        );
      if (navigator.msSaveBlob) {
        // link download attribuute does not work on MS browsers
        navigator.msSaveBlob(mapCanvas.msGetRegionContent(), 'map.png');
      } else {
        e.linkEl.href = mapCanvas.toDataURL();
        const today = new Date();
        e.linkEl.setAttribute('download', `Newark_EHD_Map_${today.getFullYear()}_${today.toLocaleDateString()
          .replace('/', '_')
          .slice(0, -5)}.png`);
        e.linkEl.click();
      }
    });
    this.instance.renderSync();
  }
  legendSync(parcels?: 'Zoning' | 'LandUse' | 'Base'): void {
    if (parcels) {
      this.parcelView = parcels;
    }
    this.infotabs.layers = [];
    this.instance.getLayers()
      .getArray()
      .filter(l => !l.hasOwnProperty('layers'))
      .forEach(l => {
        l.getLayersArray()
          .filter(lyr => lyr.getVisible() && (lyr.getClassName()).search(/(Basemap|Rail|Grid)/gi) === -1)
          .forEach(
            sl => this.infotabs.layers.push(
              this.layers.getLegendData(sl.getClassName()
                .search(/Parcel/gi) > -1
                ? this.parcelView : sl.getClassName(),
                sl.getClassName()
                  .search(/Parcel/gi) > -1
                  ? undefined : l.get('className')
              )
            )
          );
      });
  }
  ngAfterViewInit(): void { this.instance.updateSize(); }
  ngOnDestroy(): void { this.instance.dispose(); this.zoom = 13; this.panel = false; }
}
