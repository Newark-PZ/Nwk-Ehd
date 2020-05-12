import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Store } from '@ngrx/store';
import { MapComponent, OverlayComponent } from 'ng-maps';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as MapPaneActions from '../../../store/map-pane/map-pane.actions';
import * as PropPaneActions from '../../../store/prop-pane/prop-pane.actions';
import * as fromStore from '../../../store/store.reducers';
import { CartoSQLResp, ZoningFields } from '../../models';
import { CartoService } from '../../services/carto.service';
import { JsonDataService } from '../../services/get-json-data.service';

export interface EsriSearchItem {
  address: string;
  blocklot: string;
  coordinates: [number, number];
}

@Component({
    selector: 'map-intro-pane',
    styleUrls: ['./mapels.component.scss'],
    templateUrl: './intro-pane.component.html'
})
export class IntroPaneComponent implements OnInit {
    @HostBinding('class') class = 'intro-pane';
    results: Array<EsriSearchItem> = [];
    searchControl = new FormControl();
    filteredOptions: Observable<Array<EsriSearchItem>>;
    sidebarOpened$: Observable<boolean>;
    propInfo: Observable<ZoningFields>;
    searchType = 'STREET_ADD';
    @Input() map: MapComponent;
    @Input() overlay: OverlayComponent;
    constructor(
      readonly searchData: JsonDataService,
      readonly store: Store<fromStore.StoreState>,
      readonly carto: CartoService
    ) {
        this.sidebarOpened$ = this.store.select(state => state.propPane.opened);
        this.propInfo = this.store.select(state => state.propPane.propInfo);
    }
    ngOnInit(): void {
      this.filteredOptions = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }

    private _filter(value: string): Array<EsriSearchItem> {
      this.searchData.getAddressPt(value)
      .then(res => {
        this.results = [];
        res.forEach(r => {
            this.results.push({ address: r.properties.STREET_ADD, blocklot: r.properties.BLOCK_LOT, coordinates: r.geometry.coordinates });
            });
        })
        .catch(err => { console.error(err); });

      return this.results;
    }
    displayFn(opt: EsriSearchItem): string {
      switch (this.searchType) {
        case 'BLOCK_LOT':
          return opt && opt.blocklot ? opt.blocklot : '';
        default:
          return opt && opt.address ? opt.address : '';
      }
    }
    goTo(value: MatAutocompleteSelectedEvent): any {
        this.store.dispatch(new MapPaneActions.SetSelectedModule(2));
        this.handleClick(value.option.value);
    }
    handleClick(result: EsriSearchItem): void {
        this.store.dispatch(new PropPaneActions.SetSelectedProp(
            {blocklot: result.blocklot, address: result.address, coords: [result.coordinates[1], result.coordinates[0]] }
        ));
        this.overlay.instance.setPosition(result.coordinates);
        this.updatePropInfo(result.blocklot.split('-')[0], result.blocklot.split('-')[1]);
    }
    updatePropInfo(block, lot): void {
        this.carto.getZoning('*', block, lot)
            .subscribe((data: CartoSQLResp) => {this.store.dispatch(new PropPaneActions.SetPropInfo(data.rows[0])); });
    }
    switchSearchType(val: string): void {
      this.searchType = val;
      this.searchControl.setValue('');
    }
}
