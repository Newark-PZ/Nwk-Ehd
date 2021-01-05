import { Clipboard } from '@angular/cdk/clipboard';
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Map } from 'ol';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromStore from '../../../store/store.reducers';
import { LegendItem, MapInput, ParcelFields, SearchItem } from '../../models';
import { CartoService } from '../../services/carto.service';
import { MapLayerService } from '../../services/maplayer.service';
import { ModalComponent } from '../elements/modal.component';

@Component({
    styleUrls: ['./info-tabs.component.scss'],
    selector: 'map-info-tabs',
    templateUrl: './info-tabs.component.html'
})
export class InfoTabsComponent implements OnInit, OnChanges {
    @Input() map: Map;
    @Input() menuOpen: boolean;
    @Input() parcelView: 'Zoning' | 'LandUse' | 'Base';
    legendCols = ['element', 'label', 'info'];
    currentTab = 'legend';
    layers: Array<LegendItem> = [];
    mapInput: MapInput = {
        hood: 'Click on a neighborhood to learn about it',
        zoneColor: 'black'
    };
    propSub: Observable<ParcelFields>;
    primaryUsesCols: Array<string> = ['Primary Use'];
    accessoryUsesCols: Array<string> = ['Accessory Use'];
    propFields = [
        { prop: 'proploc', name: '' },
        { prop: 'blocklot', name: '' },
        { prop: 'propclass', name: 'Class' },
        { prop: 'zone', name: 'Zone' },
        { prop: 'historicdi', name: 'Historic District' },
        { prop: 'opportunit', name: 'Oppo. Zone' },
        { prop: 'inuez', name: 'In UEZ' },
        { prop: 'redevarea', name: 'Plan' }
    ];
    propClasses: Array<{ name: string; color: string; desc: string; }> = [
        { name: '1', color: 'rgb(204,204,204)', desc: 'Vacant Property' },
        { name: '2', color: 'rgb(255,235,175)', desc: 'Residential: < 4 Units' },
        { name: '4A', color: 'rgb(255,127,127)', desc: 'Commercial' },
        { name: '4B', color: 'rgb(170,102,205)', desc: 'Industrial' },
        { name: '4C', color: 'rgb(230,152,0)', desc: 'Apartments' },
        { name: '5A', color: 'rgb(78,78,78)', desc: 'Railroad: Class I' },
        { name: '5B', color: 'rgb(78,78,78)', desc: 'Railroad: Class II' },
        { name: '15A', color: 'rgb(190,210,255)', desc: 'Exempt: Public School Property' },
        { name: '15B', color: 'rgb(190,210,255)', desc: 'Exempt: Other School Property' },
        { name: '15C', color: 'rgb(158,170,215)', desc: 'Exempt: Public Property' },
        { name: '15D', color: 'rgb(122,142,245)', desc: 'Exempt: Church & Charitable Property' },
        { name: '15E', color: 'rgb(163,255,115)', desc: 'Exempt: Cemeteries & Graveyards' },
        { name: '15F', color: 'rgb(102,119,205)', desc: 'Exempt: Other' }
    ];
    zones: Array<{ name: string; color: string; desc: string; }> = [
        { name: 'R-1', color: '#fffaca', desc: 'Residential: 1 Family' },
        { name: 'R-2', color: '#fff68f', desc: 'Residential: 1-2 Family' },
        { name: 'R-3', color: '#fff100', desc: 'Residential: 1-3 Family' },
        { name: 'R-4', color: '#ebd417', desc: 'Residential: Low-Rise Multi-Family' },
        { name: 'R-5', color: '#b49d34', desc: 'Residential: Mid-Rise Multi-Family' },
        { name: 'R-6', color: '#998439', desc: 'Residential: High-Rise Multi-Family' },
        { name: 'C-1', color: '#fbc8b3', desc: 'Commercial: Neighborhood' },
        { name: 'C-2', color: '#da2028', desc: 'Commercial: Community' },
        { name: 'C-3', color: '#850204', desc: 'Commercial: Regional' },
        { name: 'I-1', color: '#e1c3dd', desc: 'Industrial: Light' },
        { name: 'I-2', color: '#A53ED5', desc: 'Industrial: Medium' },
        { name: 'I-3', color: '#c0188c', desc: 'Industrial: Heavy' },
        { name: 'MX-1', color: '#e4a024', desc: 'Mixed-Use: Low Intensity' },
        { name: 'MX-2', color: '#f37520', desc: 'Mixed-Use: Medium Intensity' },
        { name: 'MX-3', color: '#734C00', desc: 'Mixed-Use: High Intensity' },
        { name: 'INST', color: '#0063ff', desc: 'Institutional' },
        { name: 'PARK', color: '#229A00', desc: 'Parks & Open Space' },
        { name: 'CEM', color: '#561818', desc: 'Cemeteries' },
        { name: 'RDV', color: '#dddddd', desc: 'Redevelopment Zone' },
        { name: 'EWR', color: '#8400A8', desc: 'Airport' },
        { name: 'EWR-S', color: '#8400A8', desc: 'Airport Support' },
        { name: 'PORT', color: '#4C0073', desc: 'Port Industrial' }
    ];
    propFieldsFull = [
        { prop: 'proploc', name: 'Address' },
        { prop: 'blocklot', name: 'Block-Lot' },
        { prop: 'addlots', name: 'Add Lots' },
        { prop: 'ward', name: 'Ward' },
        { prop: 'zipcode', name: 'Zipcode' },
        { prop: 'propclass', name: 'Class' },
        { prop: 'zone', name: 'Zone' },
        { prop: 'property_t', name: 'Desc.' },
        { prop: 'acreage', name: 'Acreage' },
        { prop: 'landvalue', name: 'Value-Land' },
        { prop: 'imprvalue', name: 'Value-Imprvs.' },
        { prop: 'lstyrtax', name: 'Last Year Tax' },
        { prop: 'historicdi', name: 'Historic District' },
        { prop: 'opportunit', name: 'Oppo. Zone' },
        { prop: 'inuez', name: 'In UEZ' },
        { prop: 'cop_use', name: 'Use' },
        { prop: 'cop_rda', name: 'RDA?' },
        { prop: 'redevarea', name: 'Plan' },
        { prop: 'redevcode', name: 'Subzone' }
    ];
    prop: Observable<SearchItem>;
    @Output() readonly export: EventEmitter<{ event: string, linkEl: HTMLLinkElement }>;
    @Output() readonly menuOpened: EventEmitter<string>;
    constructor(
        readonly layerService: MapLayerService,
        public clipboard: Clipboard,
        readonly store: Store<fromStore.StoreState>,
        readonly dialog: MatDialog,
        readonly cartoService: CartoService,
        readonly sanitizer: DomSanitizer
    ) {
        this.export = new EventEmitter<{ event: string, linkEl: HTMLLinkElement }>();
        this.menuOpened = new EventEmitter<string>();
        this.prop = this.store.select(state => state.propPane.selectedProp);
        this.propSub = this.store.select(state => state.propPane.propInfo);
    }
    ngOnInit(): void {
        this.map.getLayers()
            .getArray()
            .filter(l => !l.hasOwnProperty('layers'))
            .forEach(l => {
                l.getLayersArray()
                    .filter(lyr => lyr.getVisible() && (lyr.getClassName()).search(/(Basemap|Rail|Grid)/gi) === -1)
                    .forEach(
                        sl => this.layers.push(
                            this.layerService.getLegendData(sl.getClassName()
                                .search(/Parcel/gi) > -1
                                ? this.parcelView : sl.getClassName(),
                                sl.getClassName()
                                    .search(/Parcel/gi) > -1
                                    ? undefined : l.get('className')
                            )
                        )
                    );
            });
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('parcelView')) {
            this.parcelView = changes.parcelView.currentValue;
        }
    }
    openMenu(panel: string, toggle?: string): void {
        this.currentTab = panel;
        if (toggle && this.menuOpen) {
            this.menuOpen = false;
        } else {
            this.menuOpened.emit(panel);
            setTimeout(() => { this.menuOpen = true; }, 250);
        }
    }
    downloadMap(el: HTMLLinkElement): void {
        this.export.emit({ event: 'export map', linkEl: el });
    }
    copyVal(): any {
        this.prop.pipe(take(1))
            .subscribe(v => {
                this.clipboard.copy(`Block ${v.BLOCK_LOT.split('-')[0]}, Lot ${v.BLOCK_LOT.split('-')[1]}`);
            });
    }
    propClassFilter(classCode: string): [string, string] {
        return this.propClasses.filter(c => c.name === classCode).length > 0 ? [
            this.propClasses.filter(c => c.name === classCode)[0].desc, this.propClasses.filter(c => c.name === classCode)[0].color
        ] : ['Unclassed Property', 'white'];
    }
    zoneFilter(zone: string): [string, string] {
        return this.zones.filter(c => c.name === zone).length > 0 ? [
            this.zones.filter(c => c.name === zone)[0].desc, this.zones.filter(c => c.name === zone)[0].color
        ] : ['N/A', 'white'];
    }
    redevCode(code: string): string {
        const redevcodes = [
            { code: '3RD-COM-N', zone: 'Commercial: Neighborhood' },
            { code: '3RD-MAKER', zone: 'Maker Village' },
            { code: '3RD-MU-H', zone: 'Mixed-Use: High Density' },
            { code: '3RD-MU-M', zone: 'Mixed-Use: Medium Density' },
            { code: '3RD-PUBLIC', zone: 'Public Facilities' },
            { code: '3RD-RES-H', zone: 'Residential: High Density' },
            { code: '3RD-RES-L', zone: 'Residential: Low Density' },
            { code: '3RD-RES-M', zone: 'Residential: Medium Density' },
            { code: '3RD-SEMIPUBLIC', zone: 'Semi-Public' },
            { code: 'BS-', zone: '' },
            { code: 'BS-A', zone: 'Sub-district A: Broad Street Station Transit Hub' },
            { code: 'BS-B', zone: 'Sub-district B: Orange Street Retail Corridor' },
            { code: 'BS-C', zone: 'Sub-district C: Washington Park Cultural District' },
            { code: 'BS-D', zone: 'Sub-district D: James Street Commons Historic District' },
            { code: 'BS-E', zone: 'Sub-district E: Nesbitt Street Residential District' },
            { code: 'BS-F', zone: 'Sub-district F: 8th Avenue Gateway District ' },
            { code: 'BS-G', zone: 'Sub-district G: NJIT Greek Village' },
            { code: 'DC-', zone: '' },
            { code: 'KB-MUCR', zone: 'Mixed-use Commercial Residential' },
            { code: 'KB-MURRR', zone: 'Mixed-use Regional Retail-Residential' },
            { code: 'KB-NC', zone: 'Neighborhood Commercial' },
            { code: 'KB-PR', zone: 'Parkfront Residential' },
            { code: 'KB-R', zone: 'Residential' },
            { code: 'LD-', zone: '' },
            { code: 'LP-CIVIC-MU', zone: 'Cultural-Civic Mixed Use' },
            { code: 'LP-HP', zone: 'Historic Park' },
            { code: 'LP-MULB-MU', zone: 'Mulberry Street Mixed Use' },
            { code: 'LP-RES-LM', zone: 'Residential-Low to Medium' },
            { code: 'LP-RESMH-MU', zone: 'Residential-Medium to High/Mixed Use' },
            { code: 'LP-STR-MU', zone: 'Street Level Mixed Use' },
            { code: 'NF-B-2', zone: 'B-2' },
            { code: 'NF-I-1', zone: 'I-1' },
            { code: 'NF-NUC', zone: 'New United Campus' },
            { code: 'NF-R-3', zone: 'R-3' },
            { code: 'SB-MUNC', zone: 'Mixed-Use Neighborhood Commercial' },
            { code: 'SB-MUNR', zone: 'Mixed-Use Neighborhood Residential' },
            { code: 'SB-PS', zone: 'Public Safety' },
            { code: 'WAT-BallantineMU', zone: 'Ballantine Site - Mixed Use' },
            { code: 'WAT-IND', zone: 'Dedicated Industrial' },
            { code: 'WAT-MU-1', zone: 'Mixed Use 1 (Light Industrial, Residential, Retail)' },
            { code: 'WAT-MU-1+', zone: 'Mixed Use 1 (Light Industrial, Residential, Retail)' },
            { code: 'WAT-MU-2', zone: 'Mixed Use 2 (Medium-Density Residential, Office, Retail)' },
            { code: 'WAT-MU-3', zone: 'Mixed Use 3 (High-Density Residential, Office, Retail)' },
            { code: 'WAT-OS', zone: 'Open Space' },
            { code: 'WAT-PARK', zone: 'Park' },
            { code: 'WAT-RES', zone: 'Dedicated Residential' }
        ];

        return redevcodes.filter(c => c.code === code).length > 0 ? redevcodes.filter(c => c.code === code)[0].zone : 'N/A';
    }
    propT(codes: string): Array<string> {
        const desc: Array<string> = [];
        if (codes.match(/^[1-9.]*S/i)) {
            desc.push(`${codes.slice(0, codes.indexOf('S'))} Stories`);
        }
        if (codes.match(/(?:AG|UG)$/i)) {
            desc.push(codes.slice(codes.length - 2) === 'UG' ? 'Unattached Garage' : 'Attached Garage');
        }

        return desc.length > 0 ? desc : ['N/A'];

    }
    openMoreInfo(blocklot: string): void {
        const fields: Array<[string, number, number?]> = [ ['Basic Info', 2, 7], ['More Info', 7, 12], ['Special Districts', 12, 17], ['Redevelopment Area', 17] ];
        const csvFile = data => {
            const csv: Array<[string, string]> = [];
            this.propFieldsFull.forEach(row => {
                if (row.prop === 'redevcode') { csv.push([row.name, this.redevCode(data[row.prop])]);
                } else if (row.prop === 'property_t') {csv.push([row.name, this.propT(data.property_t)
                    .join(',')]);
                } else {csv.push([row.name, data[row.prop] && data[row.prop] !== ' ' && data[row.prop] !== '' ? data[row.prop] : 'N/A']); }
            });
            const csvContent = csv.map(e => e.join(','))
                .join('\n');
            const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});

            return window.URL.createObjectURL(blob);
        };
        this.cartoService.getZoning(blocklot, '*')
            .pipe(take(1))
            .subscribe(r => {
                const data = r.rows[0];
                this.dialog.open(ModalComponent, {
                    maxWidth: '100vw',
                    data: {
                        download: {
                            href: this.sanitizer.bypassSecurityTrustResourceUrl(csvFile(data)),
                            filename: `${data.blocklot}.csv`,
                            text: 'Download CSV of Info'
                        },
                        header: `<p><b>${data.proploc}</b></p><p>Block: ${data.blocklot.split('-')[0]} | Lot: ${data.blocklot.split('-')[1]}</p>`,
                        message: `${fields.map(f => `<p><i>${f[0].toUpperCase()}</i></p><table class="text-table">${
                            this.propFieldsFull.slice(f[1], f[2])
                                .map(row => {
                                    if (row.prop === 'redevcode') {
                                        return `<tr><td class="side-header">${row.name}</td><td class="propVals">${this.redevCode(data[row.prop])}`;
                                    } else if (row.prop === 'property_t') {
                                        return `<tr><td class="side-header">${row.name}</td><td class="propVals">${this.propT(data.property_t)
                                                .map(d => `<span>${d}`)
                                                .join('</span>')
                                            }</span>`;
                                    }

                                    return `<tr><td class="side-header">${row.name}</td><td class="propVals">${data[row.prop] && data[row.prop] !== ' ' && data[row.prop] !== '' ? data[row.prop] : 'N/A'}`;
                                })
                                .join('</td></tr>')}</td></tr>`)
                            .join('</table>')}</table>`
                    }
                });
            });
    }

}
