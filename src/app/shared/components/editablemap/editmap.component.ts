import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay, View } from 'ol';
import { defaults as defaultControls, ScaleLine } from 'ol/control';
import { easeOut } from 'ol/easing';
import { platformModifierKeyOnly } from 'ol/events/condition';
import GeoJSON from 'ol/format/GeoJSON';
import GeometryType from 'ol/geom/GeometryType';
import Point from 'ol/geom/Point';
import { fromExtent } from 'ol/geom/Polygon';
import {
  defaults as defaultInteractions, DragPan, Draw, MouseWheelZoom, Select
} from 'ol/interaction';
import { DrawEvent } from 'ol/interaction/Draw';
import LayerGroup from 'ol/layer/Group';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import OverlayPositioning from 'ol/OverlayPositioning';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Vector, XYZ } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import { Converter } from 'showdown';
import { StoreService } from '../../../store/store.service';
import { CartoService } from '../../services/carto.service';
import { MapLayerService } from '../../services/maplayer.service';

@Component({
  selector: 'app-editable-map',
  styleUrls: ['./editmap.component.scss'],
  templateUrl: './editmap.component.html'
})
// tslint:disable: no-non-null-assertion
export class EditableMapComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() basemap: 'base' | 'sat' = 'base';
  @Input() height = '100%';
  @Input() width = '100%';
  instance: Map;
  drawStatus: 'edit' | 'drawn' | 'off' = 'off';
  editFeatures: Array<{ geometry: string; description: string; votes: number }> = [];
  drawOptions: {
    [status: string]: {buttonColor: string; buttonIcon?: string; buttonText: string; action: 'change' | 'submit' | 'cancel'}
  } = {
    edit: {
      buttonColor: 'warn',
      buttonIcon: 'cancel',
      buttonText: 'Cancel',
      action: 'cancel'
    },
    drawn: {
      buttonColor: 'primary',
      buttonIcon: undefined,
      buttonText: 'Submit',
      action: 'submit'
    },
    off: {
      buttonColor: 'primary',
      buttonIcon: 'add_location',
      buttonText: 'Add Point',
      action: 'change'
    }
  };
  attributesEditing = false;
  zoom = 13;
  selected: { cartodb_id: number; description: string; votes: number };
  popup: Overlay;
  props = ['basemap', 'height', 'panel', 'parcelView', 'width'];
  votedIds: Array<string | number> = [];
  basemapgroup = this.layers.makeBasemapGroup();
  transitGroup = this.layers.makeTransitGroup();
  geoGroup = this.layers.makeLayerGroup('Boundary', ['wards']);
  drawLayer = new VectorLayer({
    zIndex: 8,
    source: new Vector({}),
    style: new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        scale: 2,
        anchor: [0.5, 0.95],
        src: 'assets/img/icons/map-pin_buffer.svg'
      })
    })
  });
  draw = new Draw({
    source: this.drawLayer.getSource(), type: 'Point' as GeometryType, condition: () => !this.attributesEditing
  });
  featureForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    coords: new FormControl('')
  });
  serviceUrl = 'https://nzlur.carto.com/api/v2/sql';
  corralLyrSource = new VectorSource({
    format: new GeoJSON(),
    url: `${this.serviceUrl}?format=GeoJSON&q=select%20cartodb_id,the_geom,description,votes%20from%20public.newark_micromobility_corral_locations_voting`
  });
  corralLyr = new VectorLayer({
    source: this.corralLyrSource,
    className: 'corralLyr',
    zIndex: 8,
    style: (feat, res) => new Style({
      image: new Icon({
          crossOrigin: 'anonymous',
          anchor: [0.5, 0.95],
          scale: Math.min((feat.get('votes') * 0.1) + 0.85, 3.2),
          src: 'assets/img/icons/map-pin_buffer.svg'
      }),
      text: res < 5 ? this.layers.makeText(
        `${new Converter().makeMarkdown(feat.get('description'))
          .slice(0, 25)}...`, 1.2, 'left', 17, -18, 0.8, '#0afffb', 'white'
        ) : undefined
    })
  });
  selectInteraction = new Select({
    condition: e => (!this.attributesEditing && e.type === 'click'), layers: [this.corralLyr]
  });
  mouseWheelZoom = new MouseWheelZoom({ condition: platformModifierKeyOnly });
  constructor(
    private readonly host: ElementRef,
    private readonly http: HttpClient,
    readonly snackbar: MatSnackBar,
    readonly storeService: StoreService,
    readonly layers: MapLayerService,
    readonly cartooQuery: CartoService) {}
  ngOnInit(): void {
    [
      [this.basemapgroup, 'Basemap'], [this.transitGroup, 'Transit'], [this.geoGroup, 'Boundary']
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
        this.geoGroup, this.drawLayer, this.corralLyr
      ],
      overlays: [this.popup],
      interactions: defaultInteractions({ pinchRotate: false, mouseWheelZoom: false })
        .extend(
          // tslint:disable: no-string-literal
          [
            new DragPan({ condition: e => (e.originalEvent['which'] === 2) }),
            this.selectInteraction,
            this.mouseWheelZoom
          ]
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
    this.setBasemapLayer();
    this.selectInteraction.on('select', e => {
      if (e.selected.length > 0) {
        this.selected = {
          cartodb_id: e.selected[0].get('cartodb_id'), description: e.selected[0].get('description'), votes: e.selected[0].get('votes')
        };
        this.popup.setPosition((e.selected[0].getGeometry() as Point).getCoordinates());
      } else {
        this.selected = {cartodb_id: 0, description: 'description', votes: 1};
        this.popup.setPosition(undefined);
      }
    });
    this.draw.on('drawend', e => { this.attributesEditing ? e.stopPropagation() : this.handleDraw(e); });
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
  handleDraw(e: DrawEvent): void {
    const feature = e.feature;
    this.attributesEditing = true;
    this.popup.setPosition((feature.getGeometry() as Point).getCoordinates());
  }
  finishDraw(): void {
    this.featureForm.get('coords')!
      .setValue(this.popup.getPosition());
    const feature = {
      geometry: toLonLat(this.popup.getPosition()!)
        .toString(),
      description: this.featureForm.get('description')?.value,
      votes: 1
    };
    this.editFeatures.push(feature);
    this.drawStatus = 'drawn';
    this.featureForm.reset();
    this.popup.setPosition(undefined);
    this.attributesEditing = false;
  }
  checkEditing(el: HTMLLinkElement): void {
    if (this.attributesEditing) {
      this.attributesEditing = false;
      this.popup.setPosition(undefined);
      el.blur();
    }
  }
  closeOverlay(el: HTMLLinkElement): void {
    this.selectInteraction.getFeatures()
      .clear();
    this.popup.setPosition(undefined);
    el.blur();
  }
  setBasemapLayer(): void {
    this.basemap === 'base' ? this.basemap = 'sat' : this.basemap = 'base';
    const cartoBaseUrl = (name: 'nolabels' | 'only_labels') => `https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager_${name}/{z}/{x}/{y}.png`;
    (this.basemapgroup.getLayersArray()[0]
      .getSource() as XYZ)
      .setUrl(cartoBaseUrl('nolabels'));
    this.basemapgroup.getLayersArray()[0]
      .getSource()
      .setAttributions('<span><a href="http://www.openstreetmap.org/copyright">© OpenStreetMap</a> contributors, <a href="https://carto.com/attribution">© CARTO</a></span>');
    (this.basemapgroup.getLayersArray()[1]
      .getSource() as XYZ)
      .setUrl(cartoBaseUrl('only_labels'));
  }
  changeDraw(action: 'change' | 'submit' | 'cancel'): void {
    if (action === 'change') {
      switch (this.drawStatus) {
        case 'off':
          this.drawStatus = 'edit';
          this.instance.addInteraction(this.draw);
          break;
        case 'edit':
          this.drawStatus = 'drawn';
          break;
        default:
          this.drawStatus = 'off';
          break;
      }
    }
    if (action === 'submit') {
      const payload = this.editFeatures.map(
          f => {
            const text = this.escapeText(f.description);

            return `'${encodeURIComponent(text)}', '${f.votes}', ST_SetSRID(ST_Point(${f.geometry}),4326)`;
          }
        )
        .join(',');
      console.warn(payload);
      this.http.get(`${this.serviceUrl}?q=INSERT INTO newark_micromobility_corral_locations_voting (description, votes, the_geom) VALUES (${payload})&api_key=-2qYxHOSn-uzagcFLzjYbA`)
        .subscribe({
          next: data => {
            console.warn(data);
            this.corralLyr.getSource()
              .refresh();
            this.drawLayer.getSource()
              .clear();
          },
          error: error => {
            console.error('There was an error!', error);
          }
      });
    }
    if (action === 'cancel' || action === 'submit') {
      this.drawStatus = 'off';
      this.editFeatures = [];
      this.drawLayer.getSource()
        .clear();
      this.selectInteraction.getFeatures()
        .clear();
      this.instance.removeInteraction(this.draw);
    }
    this.attributesEditing = false;
    this.popup.setPosition(undefined);
  }
  ctrlScroll(): [string, number] {
    return ['block', 1];
  }
  doVote(type: 'up' | 'down', id: number, votes: number): void {
    const changeVote = type === 'up' ? votes + 1 : votes - 1;
    this.http.get(`${this.serviceUrl}?q=UPDATE newark_micromobility_corral_locations_voting set votes = ${changeVote} where cartodb_id = ${id};&api_key=-2qYxHOSn-uzagcFLzjYbA`)
      .subscribe({
        next: data => {
          console.warn(data);
          this.corralLyr.getSource()
          .refresh();
          this.selected.votes = changeVote;
          this.votedIds.push(id);
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }
  escapeText(str: string): string {
    const fixstr = str.replace(/&/g, '&amp;') /* This MUST be the 1st replacement. */
      .replace(/'/g, '&apos;') /* The 4 other predefined entities, required. */
      .replace(/"/g, '&quot;')
      .replace(/\\/g, '\\\\')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\u0000/g, '\\0');

    return fixstr;
  }
  ngAfterViewInit(): void { this.instance.updateSize(); }
  ngOnDestroy(): void { this.instance.dispose(); this.zoom = 13; }
}
