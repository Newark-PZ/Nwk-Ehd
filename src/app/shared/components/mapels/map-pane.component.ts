import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { LayerVectorComponent, MapComponent } from 'ng-maps';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as LayersActions from '../../../store/layers/layers.actions';
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
    isExpansionDetailRow = (i: number, row: MapLayer) => row.hasOwnProperty('expanded');
    expandedElement: MapLayer | null;
    cols: Array<any> = ['expand', 'zIndex', 'visible', 'name'];
    selection = new SelectionModel<MapLayer>(true, []);
    resultsLength = 0;
    sideStatus = false;
    textHide = true;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @Input() map: MapComponent;
    @Input() geoLayer: LayerVectorComponent;
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
            this.store.select(state => state.layers.geoLayer)
                .subscribe(val => { this.geographiesControl.setValue(val); });
            this.parcelLayers = this.store.select(state => state.layers.parcelLayers);
            this.store.select(state => state.layers.geoOpacity)
            .subscribe(
                o => o ? this.geoOpacity = o : this.geoOpacity = 1
            );
            this.geographiesControl.valueChanges.subscribe( v => { this.storeService.setGeoLayer(v); });
            this.parcelsControl.valueChanges.subscribe( v => { this.getLayers.setParcelViz(v); });
    }
    ngOnInit(): void {
        this.geoVis = true;
        this.parcelsVis = true;
        this.overlayOpacity = 1;
        this.parcelsControl.setValue(this.getLayers.parcelLayers[0].name);
    }
    setOpacity(e, type): void {
        switch (type) {
            case 'geo':
                this.store.dispatch(new LayersActions.SetGeoOpacity(e));
                break;
            case 'parcels':
                this.getLayers.updateLayer(e.name, {name: 'opacity', propVal: e.layer.opacity });
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
                this.getLayers.updateLayer(layer.name, {name: 'visible', propVal: layer.layer.getVisible()});
                break;
            case 'parcels': {
                const curparcelvis = layer.layer.getVisible();
                layer.layer.setVisible(!curparcelvis);
                this.getLayers.updateLayer(layer.name, {name: 'visible', propVal: layer.layer.getVisible()});
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
    onListDrop(event: CdkDragDrop<Array<MapLayer>>): void {
        this.overlays.pipe(take(1))
        .subscribe(
            v => { moveItemInArray(v, event.previousIndex, event.currentIndex); }
        );
        event.item.data.layer.setZIndex(event.currentIndex + 7);
        this.layers.updateOverlayLayer(event.item.data.layer.name, { name: 'zIndex', propVal: event.currentIndex + 6 });
    }

}
