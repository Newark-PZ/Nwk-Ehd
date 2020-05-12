import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromLonLat } from 'ol/proj';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as PropPaneActions from '../../../store/prop-pane/prop-pane.actions';
import * as fromStore from '../../../store/store.reducers';
import { CartoSQLResp, ZoningFields } from '../../models';
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
            <h3>{{ (prop | async).address | titlecase }}</h3>
            <p>Block {{(prop | async).blocklot.split('-')[0]}}, Lot {{(prop | async).blocklot.split('-')[1]}}</p>
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
    prop: Observable<{ blocklot: string; address: string; coords: [number, number]; }>;
    coords: [number, number];
    propInfo: Observable<ZoningFields>;
    basemap$: Observable<boolean>;

    constructor(
        public google: GoogleService,
        private readonly store: Store<fromStore.StoreState>,
        private readonly carto: CartoService
    ) {
        this.basemap$ = this.store.select(state => state.layers.basemap);
        this.sidebarOpened$ = this.store.select(state => state.propPane.opened);
        this.prop = this.store.select(state => state.propPane.selectedProp);
        this.propInfo = this.store.select(state => state.propPane.propInfo);
        this.store.select(state => state.propPane.selectedProp.coords)
            .subscribe(r => this.coords = r);
    }
    openPropInfo(): void {
        let blocklot;
        this.prop.pipe(take(1))
            .subscribe(p => blocklot = p.blocklot);
        this.getPropInfo(blocklot.split('-')[0], blocklot.split('-')[1]);
        this.store.dispatch(new PropPaneActions.SetOpened(true));
    }
    zoomToLoc(coords): void {
        this.store
            .select(state => state.map.map)
            .pipe(take(1))
            .subscribe(m => {
                if (m) {
                m.getView()
                .animate({center: fromLonLat([coords[1], coords[0]]), zoom: 17});
                }
            }
        );
    }
    getPropInfo(block, lot): void {
        this.carto.getZoning('*', block, lot)
            .subscribe(
                (data: CartoSQLResp) => {
                    this.store.dispatch(new PropPaneActions.SetPropInfo(data.rows[0]));
                });
    }
}
