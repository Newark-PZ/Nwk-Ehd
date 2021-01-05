import { SelectionModel } from '@angular/cdk/collections';
import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Map } from 'ol';
import BaseLayer from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { XYZ } from 'ol/source';
import { MapLayerService } from '../../services/maplayer.service';
import { rowExpand } from '../../util/animations';
import { ModalComponent } from '../elements/modal.component';

@Component({
    animations: [rowExpand],
    selector: 'app-layer-switcher',
    templateUrl: './layer-switcher.component.html',
    styleUrls: ['./layer-switcher.component.scss']
})
export class LayerSwitcherComponent implements OnInit {
    @Input() map: Map;
    @Input() parcelView: 'Zoning' | 'LandUse' | 'Base' | undefined;
    @Output() readonly viewChanged: EventEmitter<'Zoning' | 'LandUse' | 'Base' | undefined>;
    parcelGrouping: LayerGroup;
    layers: Array<BaseLayer | LayerGroup> = [];
    geoOpacity: number;
    geoVis: boolean;
    parcelsOpacity: number;
    parcelsVis: boolean;
    overlayOpacity: number;
    geographiesControl = new FormControl();
    isExpansionDetailRow = (i: number, row: BaseLayer) => row.hasOwnProperty('expanded');
    expandedElement: BaseLayer | null;
    cols: Array<any> = ['expand',  'name', 'visible'];
    selection = new SelectionModel<BaseLayer>(false, []);
    constructor(readonly dialog: MatDialog, readonly lyrService: MapLayerService) {
        this.viewChanged = new EventEmitter<'Zoning' | 'LandUse' | 'Base' | undefined>();
    }
    ngOnInit(): void {
        this.layers = this.map.getLayers()
            .getArray()
            .slice(0, -1);
        this.parcelGrouping = new LayerGroup({
            layers: ['Zoning', 'Land Use', 'Base'].map(p => new TileLayer({
                className: p,
                visible: p.replace(' ', '') === this.parcelView
        }))});
        this.parcelGrouping.set('className', 'Parcels');
        this.layers.push(this.parcelGrouping);
    }
    setOpacity(e, layer: BaseLayer): void {
        layer.setOpacity(e.value);
        if ((layer.get('className')).search(/(Parcel)/gi) > -1) {
            this.map.getLayers()
                .getArray()
                .filter( l => (l.get('className')).search(/(Parcel)/gi) > -1 )[0]
                .setOpacity(e.value);
        }
    }
    toggleVisible(e: MouseEvent, layer: BaseLayer, group?: LayerGroup): void {
        e.stopPropagation();
        layer.setVisible(!layer.getVisible());
        this.viewChanged.emit();
        if (group && (layer.getClassName()).search(/(Basemap|Rail|Parcels|Grid)/gi) === -1) {
            group.getLayers()
                .forEach(lyr => {if (lyr !== layer) { lyr.setVisible(false); } });
            this.viewChanged.emit();
        }
        if (!group && (layer.get('className')).search(/(Parcel)/gi) !== -1) {
            this.map.getLayers()
                .getArray()
                .filter(
                    l => (l.get('className')).search(/(Parcel)/gi) !== -1
                )[0]
                .setVisible(this.parcelGrouping.getVisible());
            this.viewChanged.emit();
        }
        if (group && (group.get('className')).search(/(Parcel)/gi) > -1) {
            const name = layer.getClassName()
                .replace(' ', '');
            const newSrcs = this.lyrService.makeParcelSources(name as 'Zoning' | 'LandUse' | 'Base');
            this.map.getLayers()
                .forEach(
                    l => (l.get('className')).search(/(Parcel)/gi) > -1
                            ? (l as LayerGroup).getLayersArray()
                                .forEach(lyr => { lyr.setSource(newSrcs[0]); })
                            : ''
                );
            this.viewChanged.emit((name as 'Zoning' | 'LandUse' | 'Base'));
        }
    }
    openDetails(lyr: VectorLayer | TileLayer): void {
        const className: string = lyr.getClassName();
        const lyrInfo = this.lyrService.getLayerInfo(className);
        const urlString: string = String(lyr instanceof VectorLayer
            ? (lyr.getSource()).getUrl()
            : (lyr.getSource() as XYZ).getUrls()[0]);
        const addLink = className.search(/(Parcels|Grid|Basemap)/gi) === -1
            ? `<tr><td class="side-header">Source</td><td><a class="mat-stroked-button" download="Newark_${className.replace(/\s/gi, '_')}.geojson"
                href="${urlString}${urlString.startsWith('https://nzlur.carto.com/') ? ('&filename=Newark_').concat(className.replace(/\s/gi, '_')) : ''
                }">${urlString.startsWith('https://nzlur.carto.com/') ? 'CARTO' : 'Data'} Source</a></td></tr>`
            : '';
        this.dialog.open(ModalComponent, {
          maxWidth: '100vw',
          data: {
            header: `<b>${lyrInfo.info[0]}</b>`,
            message: `
                    <table class="text-table">
                        <tr><td class="side-header">Description</td><td>${lyrInfo.info[1]}</td></tr>
                        <tr><td class="side-header">Attributions</td><td>${lyrInfo.source[0].replace('<a ', '<a class="mat-stroked-button" target="_blank" ')}</td></tr>
                        ${addLink}
                    </table>`
          }
        });
    }
}
