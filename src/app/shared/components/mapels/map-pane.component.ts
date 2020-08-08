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
        {value: 'newark_censustracts', label: 'Census Tracts'},
        {value: 'newark_zipcodes', label: 'Zipcodes'},
        {value: 'neighborhoods', label: 'Neighborhoods'},
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
        readonly getLayers: LayersService,
        readonly storeService: StoreService,
        readonly store: Store<fromStore.StoreState>
        ) {
            this.overlays = this.store.select(state => state.layers.overlays.filter(ol => ol.group === 'Overlays'));
            this.geoLayer = this.store.select(state => state.layers.overlays.filter(ol => ol.group === 'Geographies'));
            this.parcelLayers = this.store.select(state => state.layers.parcelLayers);
            this.geographiesControl.valueChanges.subscribe( v => { this.getLayers.setGeo(v); });
            this.parcelsControl.valueChanges.subscribe( v => { this.getLayers.setParcelViz(v); });
    }
    ngOnInit(): void {
        this.geoVis = true;
        this.parcelsVis = true;
        this.overlayOpacity = 1;
        this.parcelsControl.setValue(this.getLayers.parcelLayers[0].name.replace('Parcels: ', ''));
        this.geographiesControl.setValue(this.getLayers.layers.filter(ol => ol.group === 'Geographies')[0].cartoName);
    }
    setOpacity(e): void {
        this.getLayers.updateLayer(e.name, { name: 'opacity', propVal: e.layer.opacity });
    }
    toggleVisible(type: string, layer: MapLayer): void {
        switch (type) {
            case 'geo':
                const curgeovis = layer.layer.getVisible();
                layer.layer.setVisible(!curgeovis);
                this.getLayers.updateLayer(layer.name, { name: 'visible', propVal: layer.layer.getVisible() });
                break;
            case 'parcels': {
                const curparcelvis = layer.layer.getVisible();
                layer.layer.setVisible(!curparcelvis);
                this.getLayers.updateLayer(layer.name, { name: 'visible', propVal: layer.layer.getVisible() });
                break;
            }
            default: {
                    this.selection.toggle(layer);
                    const curvis = layer.layer.getVisible();
                    layer.layer.setVisible(!curvis);
                    this.getLayers.updateLayer(layer.name, { name: 'visible', propVal: layer.layer.getVisible() });
                    break;
                }
        }
    }

}
