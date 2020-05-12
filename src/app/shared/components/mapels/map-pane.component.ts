import { Clipboard } from '@angular/cdk/clipboard';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
    currentGeography: string;
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
        {value: 'none', label: 'None'},
        {value: 'base', label: 'Base'},
        {value: 'zoning', label: 'Zoning'},
        {value: 'landuse', label: 'Land Use'}
    ];
    overlays: Observable<Array<MapLayer>>;
    isExpansionDetailRow = (i: number, row: MapLayer) => row.hasOwnProperty('expanded');
    expandedElement: MapLayer | null;
    cols: Array<any> = [ 'zIndex', 'visible', 'name'];
    selection = new SelectionModel<MapLayer>(true, []);
    resultsLength = 0;
    sideStatus = false;
    textHide = true;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @Input() map: MapComponent;
    @Input() geoLayer: LayerVectorComponent;
    geographiesControl = new FormControl(this.currentGeography);
    parcelsControl = new FormControl();
    overlaysControl = new FormControl();
    constructor(
        public clipboard: Clipboard,
        readonly layers: LayersService,
        readonly getLayers: MapLayersService,
        readonly storeService: StoreService,
        readonly store: Store<fromStore.StoreState>
        ) {
            this.overlays = this.store.select(state => state.layers.overlays.sort(ol => ol.layer.getZIndex()));
            this.store.select(state => state.layers.geoLayer)
            .subscribe(
                val => val ? this.currentGeography = val : 'none'
            );
            this.store.select(state => state.layers.geoOpacity)
            .subscribe(
                o => o ? this.geoOpacity = o : this.geoOpacity = 1
            );
            this.store.select(state => state.layers.parcelsOpacity)
            .subscribe(
                o => o ? this.parcelsOpacity = o : this.parcelsOpacity = 1
            );
            this.geographiesControl.valueChanges.subscribe( v => {
                this.storeService.setGeoLayer(v);
                v !== 'none' ?
                this.getLayers.getCartoLayer(this.geoLayer.instance, v)
                : this.geoLayer.instance.getSource()
                    .dispose();
                this.map.instance.render();
            });
            this.parcelsControl.valueChanges.subscribe( v => { this.storeService.setParcelLayer(v); });
    }
    ngOnInit(): void {
        this.geoVis = true;
        this.parcelsVis = true;
        this.overlayOpacity = 1;
    }
    setOpacity(e, type): void {
        switch (type) {
            case 'geo':
                this.store.dispatch(new LayersActions.SetGeoOpacity(e));
                break;
            case 'parcels':
                this.store.dispatch(new LayersActions.SetParcelsOpacity(e));
                break;
            default:
                this.layers.updateOverlayLayer(e.name, { name: 'opacity', propVal: e.layer.opacity });
                break;
        }
    }
    copyVal(mapInput: any): any {
        this.clipboard.copy(`Block ${mapInput.block}, Lot ${mapInput.lot}`);
    }
    toggleVisible(row: MapLayer): void {
        this.selection.toggle(row);
        const curvis = row.layer.getVisible();
        row.layer.setVisible(!curvis);
        this.layers.updateOverlayLayer(row.name, { name: 'visible', propVal: row.layer.getVisible() });
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
