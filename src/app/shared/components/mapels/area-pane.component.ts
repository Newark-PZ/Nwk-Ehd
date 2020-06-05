import { Clipboard } from '@angular/cdk/clipboard';
import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartoService } from '../../services/carto.service';

import * as fromStore from '../../../store/store.reducers';

@Component({
    selector: 'map-area-pane',
    styleUrls: ['./mapels.component.scss'],
    templateUrl: './area-pane.component.html'
})
export class AreaPaneComponent {
    primaryUsesCols: Array<string> = ['Primary Use'];
    accessoryUsesCols: Array<string> = ['Accessory Use'];
    @HostBinding('class') class = 'map-prop-pane';

    geo: Observable<any>;
    constructor(
        public carto: CartoService,
        public clipboard: Clipboard,
        readonly store: Store<fromStore.StoreState>
        ) {
        this.geo = this.store.select(state => state.propPane.selectedGeo);
    }
}
