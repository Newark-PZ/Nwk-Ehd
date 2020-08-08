import { Clipboard } from '@angular/cdk/clipboard';
import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MapInput, ParcelFields, SearchItem } from '../../models';

import * as fromStore from '../../../store/store.reducers';
import { JsonDataService } from '../../services/get-json-data.service';

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
    propSub: Observable<ParcelFields>;
    primaryUsesCols: Array<string> = ['Primary Use'];
    accessoryUsesCols: Array<string> = ['Accessory Use'];
    propFields = [
        {prop: 'proploc', name: ''},
        {prop: 'blocklot', name: ''},
        {prop: 'addlots', name: 'Add Lots'},
        {prop: 'ward', name: 'Ward'},
        {prop: 'zipcode', name: 'Zipcode'},
        {prop: 'propclass', name: 'Class'},
        {prop: 'zone', name: 'Zone'},
        {prop: 'property_t', name: 'Description'},
        {prop: 'acreage', name: 'Acreage'},
        {prop: 'landvalue', name: 'Value-Land'},
        {prop: 'imprvalue', name: 'Value-Imprvs.'},
        {prop: 'lstyrtax', name: 'Last Year Tax'},
        {prop: 'historicdi', name: 'Historic District'},
        {prop: 'opportunit', name: 'Oppo. Zone'},
        {prop: 'inuez', name: 'In UEZ'},
        {prop: 'cop_use', name: 'Use'},
        {prop: 'cop_rda', name: 'RDA?'},
        {prop: 'redevarea', name: 'Plan'},
        {prop: 'redevcode', name: 'Subzone'}
        ];
    propClasses: Array<{name: string; desc: string; }> = [
        {name: '1', desc: 'Vacant Land'},
        {name: '2', desc: 'Residential: < 4 Units'},
        {name: '4A', desc: 'Commercial'},
        {name: '4B', desc: 'Industrial'},
        {name: '4C', desc: 'Apartments'},
        {name: '5A', desc: 'Railroad: Class I'},
        {name: '5B', desc: 'Railroad: Class II'},
        {name: '15A', desc: 'Exempt: Public School Property'},
        {name: '15B', desc: 'Exempt: Other School Property'},
        {name: '15C', desc: 'Exempt: Public Property'},
        {name: '15D', desc: 'Exempt: Church & Charitable Property'},
        {name: '15E', desc: 'Exempt: Cemeteries & Graveyards'},
        {name: '15F', desc: 'Exempt: Other'}
    ];
    @HostBinding('class') class = 'map-prop-pane';

    prop: Observable<SearchItem>;
    constructor(
        public clipboard: Clipboard,
        readonly store: Store<fromStore.StoreState>,
        readonly jsonData: JsonDataService
        ) {
        this.prop = this.store.select(state => state.propPane.selectedProp);
        this.propSub = this.store.select(state => state.propPane.propInfo);
    }

    copyVal(mapInput: MapInput): any {
        this.clipboard.copy(`Block ${mapInput.block}, Lot ${mapInput.lot}`);
    }

    redevCode(code: string): string {
    const redevcodes = [
        {code: '3RD-COM-N', zone: 'Commercial: Neighborhood'},
        {code: '3RD-MAKER', zone: 'Maker Village'},
        {code: '3RD-MU-H', zone: 'Mixed-Use: High Density'},
        {code: '3RD-MU-M', zone: 'Mixed-Use: Medium Density'},
        {code: '3RD-PUBLIC', zone: 'Public Facilities'},
        {code: '3RD-RES-H', zone: 'Residential: High Density'},
        {code: '3RD-RES-L', zone: 'Residential: Low Density'},
        {code: '3RD-RES-M', zone: 'Residential: Medium Density'},
        {code: '3RD-SEMIPUBLIC', zone: 'Semi-Public'},
        {code: 'BS-', zone: ''},
        {code: 'BS-A', zone: 'Sub-district A: Broad Street Station Transit Hub'},
        {code: 'BS-B', zone: 'Sub-district B: Orange Street Retail Corridor'},
        {code: 'BS-C', zone: 'Sub-district C: Washington Park Cultural District'},
        {code: 'BS-D', zone: 'Sub-district D: James Street Commons Historic District'},
        {code: 'BS-E', zone: 'Sub-district E: Nesbitt Street Residential District'},
        {code: 'BS-F', zone: 'Sub-district F: 8th Avenue Gateway District '},
        {code: 'BS-G', zone: 'Sub-district G: NJIT Greek Village'},
        {code: 'DC-', zone: ''},
        {code: 'KB-MUCR', zone: 'Mixed-use Commercial Residential'},
        {code: 'KB-MURRR', zone: 'Mixed-use Regional Retail-Residential'},
        {code: 'KB-NC', zone: 'Neighborhood Commercial'},
        {code: 'KB-PR', zone: 'Parkfront Residential'},
        {code: 'KB-R', zone: 'Residential'},
        {code: 'LD-', zone: ''},
        {code: 'LP-CIVIC-MU', zone: 'Cultural-Civic Mixed Use'},
        {code: 'LP-HP', zone: 'Historic Park'},
        {code: 'LP-MULB-MU', zone: 'Mulberry Street Mixed Use'},
        {code: 'LP-RES-LM', zone: 'Residential-Low to Medium'},
        {code: 'LP-RESMH-MU', zone: 'Residential-Medium to High/Mixed Use'},
        {code: 'LP-STR-MU', zone: 'Streetlevel Mixed Use'},
        {code: 'NF-B-2', zone: 'B-2'},
        {code: 'NF-I-1', zone: 'I-1'},
        {code: 'NF-NUC', zone: 'New United Campus'},
        {code: 'NF-R-3', zone: 'R-3'},
        {code: 'SB-MUNC', zone: 'Mixed-Use Neighborhood Commercial'},
        {code: 'SB-MUNR', zone: 'Mixed-Use Neighborhood Residential'},
        {code: 'SB-PS', zone: 'Public Safety'},
        {code: 'WAT-BallantineMU', zone: 'Ballantine Site - Mixed Use'},
        {code: 'WAT-IND', zone: 'Dedicated Industrial'},
        {code: 'WAT-MU-1', zone: 'Mixed Use 1 (Light Industrial, Residential, Retail)'},
        {code: 'WAT-MU-1+', zone: 'Mixed Use 1 (Light Industrial, Residential, Retail)'},
        {code: 'WAT-MU-2', zone: 'Mixed Use 2 (Medium-Density Residential, Office, Retail)'},
        {code: 'WAT-MU-3', zone: 'Mixed Use 3 (High-Density Residential, Office, Retail)'},
        {code: 'WAT-OS', zone: 'Open Space'},
        {code: 'WAT-PARK', zone: 'Park'},
        {code: 'WAT-RES', zone: 'Dedicated Residential'}
    ];

    return redevcodes.filter(c => c.code === code)[0].zone;

    }
    propT(codes: string): Array<string> {
        const desc: Array<string> = [];
        if (codes.match(/^[1-9.]*S/i)) {
            desc.push(`${codes.slice(0, codes.indexOf('S'))} Stories`);
        }
        if (codes.match(/(?:AG|UG)$/i)) {
            desc.push(codes.slice(codes.length - 2) === 'UG' ? 'Unattached Garage' : 'Attached Garage');
        }

        return desc;

    }
    propClassFilter(classCode: string): string {
        return classCode ? this.propClasses.filter(c => c.name === classCode)[0].desc : '';
    }
}
