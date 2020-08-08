import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as PropPaneActions from '../../../store/prop-pane/prop-pane.actions';
import * as fromStore from '../../../store/store.reducers';
import { CartoSQLResp, ParcelFields, SearchItem } from '../../models';
import { CartoService } from '../../services/carto.service';
import { GoogleService } from '../../services/google.service';

/**
 * @title Snack-bar Conecting Info to Click location
 */
@Component({
    selector: 'map-prop-snackbar',
    styleUrls: ['./mapels.component.scss'],
    // tslint:disable: template-no-call-expression component-max-inline-declarations template-i18n
    template: `
    <div class="toast-message" [ngClass]="(basemap$ | async) === false ? '' : 'sat'">
        <div style="text-align: center; cursor: pointer"
            (click)="zoomToLoc(coords)"
            matTooltip="Center Map on Address"
            matTooltipPosition="above">
            <h3>{{ (prop | async).STREET_ADD | titlecase }}</h3>
            <p>Block {{(prop | async).BLOCK_LOT.split('-')[0]}}, Lot {{(prop | async).BLOCK_LOT.split('-')[1]}}</p>
        </div>
        <div>
            <button mat-stroked-button
            matTooltip="Open Property Info"
            matTooltipPosition="after"
            (click)="openPropInfo()">
                <mat-icon>info</mat-icon>
            </button>
            <button mat-stroked-button
            matTooltip="Open Google Street View"
            matTooltipPosition="after"
            (click)="this.google.openStreetView(coords[0], coords[1])">
                <mat-icon>streetview</mat-icon>
            </button>
        </div>
    </div>
    `
})
export class PropSnackbarComponent {
    sidebarOpened$: Observable<boolean>;
    prop: Observable<SearchItem>;
    coords;
    propInfo: Observable<ParcelFields>;
    basemap$: Observable<boolean>;

    constructor(
        public google: GoogleService,
        private readonly store: Store<fromStore.StoreState>,
        // private readonly getData: JsonDataService,
        private readonly getCarto: CartoService,
        @Inject(MAT_SNACK_BAR_DATA) public data: {bottomsheet(): void; }
    ) {
        this.basemap$ = this.store.select(state => state.layers.basemap);
        this.sidebarOpened$ = this.store.select(state => state.propPane.opened);
        this.prop = this.store.select(state => state.propPane.selectedProp);
        this.propInfo = this.store.select(state => state.propPane.propInfo);
        this.prop.subscribe(r => {
            if (r.geometry) {
                this.coords = r.geometry;
            }
        });
    }
    openPropInfo(): void {
        let blocklot;
        this.prop.pipe(take(1))
            .subscribe(p => blocklot = p.BLOCK_LOT);
        this.getPropInfo(blocklot.split('-')[0], blocklot.split('-')[1]);
        this.data.bottomsheet();
        this.store.dispatch(new PropPaneActions.SetOpened(true));
    }
    zoomToLoc(coords): void {
        this.store
            .select(state => state.map.map)
            .pipe(take(1))
            .subscribe(m => {
                if (m) {
                m.getView()
                .animate({center: this.coords, zoom: 17});
                }
            }
        );
    }
    getPropInfo(block, lot): void {
        this.getCarto.getZoning('*', block, lot)
            .subscribe(
                (data: CartoSQLResp) => {
                    this.store.dispatch(new PropPaneActions.SetPropInfo(data.rows[0]));
                });
    }
}
