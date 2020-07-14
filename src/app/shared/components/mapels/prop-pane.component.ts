import { Clipboard } from '@angular/cdk/clipboard';
import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArcFeature, MapInput, SearchItem } from '../../models';

import * as fromStore from '../../../store/store.reducers';

@Component({
    selector: 'map-prop-pane',
    styleUrls: ['./mapels.component.scss'],
    templateUrl: './prop-pane.component.html'
})
export class PropPaneComponent {
    mapInput: MapInput = {
        hood: 'Click on a neighborhood to learn about it',
        zoneColor: 'black'
    };
    propSub: Observable<ArcFeature>;
    primaryUsesCols: Array<string> = ['Primary Use'];
    accessoryUsesCols: Array<string> = ['Accessory Use'];
    @HostBinding('class') class = 'map-prop-pane';

    prop: Observable<SearchItem>;
    constructor(
        public clipboard: Clipboard,
        readonly store: Store<fromStore.StoreState>
        ) {
        this.prop = this.store.select(state => state.propPane.selectedProp);
        this.propSub = this.store.select(state => state.propPane.propInfo);
    }

    copyVal(mapInput: MapInput): any {
        this.clipboard.copy(`Block ${mapInput.block}, Lot ${mapInput.lot}`);
    }
}
