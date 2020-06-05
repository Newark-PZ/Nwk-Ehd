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
import { CartoSQLResp, SearchFeature, ZoningFields } from '../../models';
import { CartoService } from '../../services/carto.service';
import { MongodbService } from '../../services/mongodb.service';

@Component({
    selector: 'map-intro-pane',
    styleUrls: ['./mapels.component.scss'],
    templateUrl: './intro-pane.component.html'
})
export class IntroPaneComponent implements OnInit {
    @HostBinding('class') class = 'intro-pane';
    results: Array<SearchFeature> = [];
    searchControl = new FormControl();
    filteredOptions: Observable<Array<SearchFeature>>;
    propInfo: Observable<ZoningFields>;
    searchType = 'STREET_ADD';
    @Input() map: MapComponent;
    @Input() overlay: OverlayComponent;
    constructor(
      readonly searchData: MongodbService,
      readonly store: Store<fromStore.StoreState>,
      readonly carto: CartoService
    ) {
        this.propInfo = this.store.select(state => state.propPane.propInfo);
    }
    ngOnInit(): void {
      this.filteredOptions = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }

    private _filter(value: string): Array<SearchFeature> {
      this.searchData.searchAddr(value)
      .then(res => {
        this.results = [];
        res.forEach(r => {
            this.results.push(r);
          });
        })
        .catch(err => { console.error(err); });

      return this.results;
    }
    displayFn(opt: SearchFeature): string {
      switch (this.searchType) {
        case 'BLOCK_LOT':
          return opt && opt.attributes.BLOCK_LOT ? opt.attributes.BLOCK_LOT : '';
        default:
          return opt && opt.attributes.STREET_ADD ? opt.attributes.STREET_ADD : '';
      }
    }
    goTo(value: MatAutocompleteSelectedEvent): any {
        this.store.dispatch(new MapPaneActions.SetSelectedModule(2));
        this.handleClick(value.option.value);
    }
    handleClick(result: SearchFeature): void {
        this.store.dispatch(new PropPaneActions.SetSelectedProp({
          STREET_ADD: result.attributes.STREET_ADD,
          BLOCK_LOT: result.attributes.BLOCK_LOT,
          geometry: [result.geometry.x, result.geometry.y]
        }));
        this.overlay.instance.setPosition(
          [result.geometry.x, result.geometry.y]
        );
        this.updatePropInfo(result.attributes.BLOCK_LOT.split('-')[0], result.attributes.BLOCK_LOT.split('-')[1]);
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
