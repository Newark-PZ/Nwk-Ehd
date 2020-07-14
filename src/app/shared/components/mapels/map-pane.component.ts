import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { MapComponent } from 'ng-maps';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/store.reducers';
import { StoreService } from '../../../store/store.service';
import { MapLayer } from '../../classes/maplayer';
import { LayersService } from '../../services/layers.service';
import { MapLayersService } from '../../services/maplayers.service';
import { rowExpand } from '../../util/animations';

@Component({
    animations: [rowExpand],
    selector: 'map-pane',
    styleUrls: ['./mapels.component.scss'],
    templateUrl: './map-pane.component.html'
})
export class MapPaneComponent implements OnInit {
    @HostBinding('class') class = 'map-pane';
    geoOpacity: number;
    geoVis: boolean;
    parcelsOpacity: number;
    parcelsVis: boolean;
    overlayOpacity: number;
    geographies = [
        {value: 'none', label: 'None'},
        {value: 'newarktractpolygon_1', label: 'Census Tracts'},
        {value: 'nwkneighborhoods', label: 'Neighborhoods'},
        {value: 'wards', label: 'Wards'}
    ];
    parcelview = [
        {value: 'base', label: 'Base'},
        {value: 'zoning', label: 'Zoning'},
        {value: 'landuse', label: 'Land Use'}
    ];
    overlays: Observable<Array<MapLayer>>;
    parcelLayers: Observable<Array<MapLayer>>;
    geoLayer: Observable<Array<MapLayer>>;
    isExpansionDetailRow = (i: number, row: MapLayer) => row.hasOwnProperty('expanded');
    expandedElement: MapLayer | null;
    cols: Array<any> = ['expand', 'visible', 'name'];
    selection = new SelectionModel<MapLayer>(true, []);
    resultsLength = 0;
    sideStatus = false;
    textHide = true;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @Input() map: MapComponent;
    geographiesControl = new FormControl();
    parcelsControl = new FormControl();
    overlaysControl = new FormControl();
    constructor(
        public clipboard: Clipboard,
        readonly layers: LayersService,
        readonly getLayers: MapLayersService,
        readonly storeService: StoreService,
        readonly store: Store<fromStore.StoreState>
        ) {
            this.overlays = this.store.select(state => state.layers.overlays);
            this.parcelLayers = this.store.select(state => state.layers.parcelLayers);
            this.geoLayer = this.store.select(state => state.layers.geoLayer);
            this.geographiesControl.valueChanges.subscribe( v => { this.getLayers.getGeoLayer(v); });
            this.parcelsControl.valueChanges.subscribe( v => { this.getLayers.setParcelViz(v); });
    }
    ngOnInit(): void {
        this.geoVis = true;
        this.parcelsVis = true;
        this.overlayOpacity = 1;
        this.parcelsControl.setValue(this.getLayers.parcelLayers[0].name);
        this.geographiesControl.setValue(this.getLayers.geoLayer[0].name);
    }
    setOpacity(e, type): void {
        switch (type) {
            case 'geo':
                this.getLayers.updateLayer(e.name, type, {name: 'opacity', propVal: e.layer.opacity});
                break;
            case 'parcels':
                this.getLayers.updateLayer(e.name, type, {name: 'opacity', propVal: e.layer.opacity });
                break;
            default:
                this.layers.updateOverlayLayer(e.name, { name: 'opacity', propVal: e.layer.opacity });
                break;
        }
    }
    copyVal(mapInput: any): any {
        this.clipboard.copy(`Block ${mapInput.block}, Lot ${mapInput.lot}`);
    }
    toggleVisible(type: string, layer: MapLayer, event?): void {
        switch (type) {
            case 'geo':
                const curgeovis = layer.layer.getVisible();
                layer.layer.setVisible(!curgeovis);
                this.getLayers.updateLayer(layer.name, type, {name: 'visible', propVal: layer.layer.getVisible()});
                break;
            case 'parcels': {
                const curparcelvis = layer.layer.getVisible();
                layer.layer.setVisible(!curparcelvis);
                this.getLayers.updateLayer(layer.name, type, {name: 'visible', propVal: layer.layer.getVisible()});
                break;
            }
            default: {
                    this.selection.toggle(layer);
                    const curvis = layer.layer.getVisible();
                    layer.layer.setVisible(!curvis);
                    this.layers.updateOverlayLayer(layer.name, { name: 'visible', propVal: layer.layer.getVisible() });
                    break;
                }
        }
    }

}
