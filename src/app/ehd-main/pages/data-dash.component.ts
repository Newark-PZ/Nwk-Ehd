import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { MapComponent, OverlayComponent } from 'ng-maps';
import { easeOut } from 'ol/easing';
import GeoJSON from 'ol/format/GeoJSON';
import { fromExtent } from 'ol/geom/Polygon';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import { Fill, Stroke, Style, Text } from 'ol/style';
import { take } from 'rxjs/operators';
import { JsonDataService, LayersService } from '../../shared';
import { MapLayer } from '../../shared/classes/maplayer';
import { AppData } from '../../shared/models';
import { MongodbService } from '../../shared/services/mongodb.service';
import * as fromStore from '../../store/store.reducers';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'app-data-dash',
    styleUrls: ['data-dash.component.scss'],
    templateUrl: './data-dash.component.html'
})
export class DataDashComponent implements AfterViewInit, OnDestroy, OnInit {
    basemapUrl = 'https://d.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png';
    cartoLabelsUrl = 'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';
    basemapAttr = '<span><a href="http://www.openstreetmap.org/copyright">© OpenStreetMap</a> contributors, <a href="https://carto.com/attribution">© CARTO</a></span>';
    wardExtents = [
        {ward: 'Central', min: [-74.20665195379563, 40.72323700151655], max: [-74.16139072367717, 40.76205752393302]},
        {ward: 'South', min: [-74.22888768271345, 40.68658364265579], max: [-74.16594416077261, 40.7339560522728]},
        {ward: 'East', min: [-74.18221757349376, 40.742476612471506], max: [-74.12191579438063, 40.70133158132805]},
        {ward: 'North', min: [-74.1925256887145, 40.7538447314112], max: [-74.1482839995625, 40.78833290822526]},
        {ward: 'West', min: [-74.25143759565441, 40.73044194208102], max: [-74.18184724229062, 40.764862407965005]}
    ];
    cardOpened = true;
    extentNo = 0;
    fullScreen = false;
    sideStatus = true;
    textHide = true;
    clicked: {blocklot?: string; data: Array<{prop: string; value: any}>} = {blocklot: '', data: []};
    hovered: {blocklot?: string; proploc?: string; } = {blocklot: ''};
    itemSelected = false;
    cpbData: Array<AppData>;
    @ViewChild('map') map: MapComponent;
    @ViewChild('hover') hoverFlag: OverlayComponent;
    overlaylyrs: Array<MapLayer> = [];
    constructor(
        readonly store: Store<fromStore.StoreState>,
        readonly layerservice: LayersService,
        readonly jsondata: JsonDataService,
        readonly mongo: MongodbService,
        readonly _bottomSheet: MatBottomSheet
    ) {}
    ngOnInit(): void {
        this.jsondata.getDash('CPB:*', '')
            .pipe(take(1))
            .subscribe(
                v => this.cpbData = v.result.records
            );
    }
    ngAfterViewInit(): void {
        // document.addEventListener('wheel', (e: WheelEvent) => {
        //         e.stopPropagation();
        //         e.deltaY > 0 ? this.changeView('up') : this.changeView('down');
        // });
        this.map.instance.updateSize();
        this.map.instance.once('rendercomplete', () => {
            this.layerservice.initLayers([], 'wards', 'none')
            .forEach(
                (g, i) => i === 0 ? this.overlaylyrs = g : undefined
            );
            this.overlaylyrs.forEach(l => {this.map.instance.addLayer(l.layer); });
            this.makeLayer();
            });
    }
    ngOnDestroy(): void {
        this._bottomSheet.dismiss();
        this.overlaylyrs = [];
        this.layerservice.resetService();
    }
    changeView(dir?: 'up' | 'down', num?: number): void {
        if (dir === 'up') {
            this.extentNo = this.extentNo + 1;
        } else if (dir === 'down') {
            this.extentNo = this.extentNo - 1;
        }
        // tslint:disable-next-line: no-unused-expression
        num ? this.extentNo = Math.max(num, 0) : undefined;
        if (this.extentNo > 4 ) { this.extentNo = 4; }
        if (this.extentNo < 0 ) { this.extentNo = 0; }
        this.map.instance.getView()
        .fit(
            fromExtent([
                fromLonLat(this.wardExtents[this.extentNo].max)[0],
                fromLonLat(this.wardExtents[this.extentNo].max)[1],
                fromLonLat(this.wardExtents[this.extentNo].min)[0],
                fromLonLat(this.wardExtents[this.extentNo].min)[1]
            ]),
            {size: this.map.instance.getSize(), easing: easeOut, duration: 750}
        );
    }
    dispatchHover(e): void {
        this.map.instance.forEachFeatureAtPixel(e.pixel, feat => {
            this.hoverFlag.instance.setPosition(feat.getGeometry()
                .getExtent());
            this.hovered.blocklot = feat.get('blocklot');
        });
    }
    dispatchClick(e): void {
        this.map.instance.forEachFeatureAtPixel(e.pixel, feat => {
            this.clicked.blocklot = feat.get('blocklot');
            this.clicked.data = [];
            Object.entries(this.cpbData.filter(d => d.PrimaryBlockLot === feat.get('blocklot'))[0])
                .slice(0, -1)
                .forEach(
                d => this.clicked.data.push({prop: d[0], value: d[1]})
            );
        });
    }
    makeLayer(): void {
        const blocklots: Array<string> = [];
        this.cpbData.forEach(
            d => blocklots.push(`'${d.PrimaryBlockLot}'`)
        );
        this.map.instance.addLayer(
            new VectorLayer({
                className: 'CPB',
                zIndex: 5,
                opacity: 1,
                style: feature => this.parcelStyleFunction(feature, 'blocklot', [20, 20, 20]),
                source: new VectorSource({
                    url: `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select the_geom,blocklot from public.parcels where blocklot in (${blocklots.join(',')})`,
                    format: new GeoJSON()
                    })
            })
        );
    }
    parcelStyleFunction(feature, labelProp, rgb: [number, number, number]): Style {
        const newstyle = new Style({
            stroke: new Stroke({color: 'rgba(20, 20, 20)', width: 1}),
            fill: new Fill({color: 'yellow'}),
            text: new Text({
                font: 'bold 1rem Segoe UI,sans-serif',
                overflow: true,
                scale: 0.85,
                padding: [100, 100, 100, 100],
                fill: new Fill({
                  color: 'rgba(0,0,0,1)'
                }),
                stroke: new Stroke({
                  color: 'white',
                  width: 3
                })
            })
         });
        newstyle.getText()
            .setText(this.cpbData.filter(d => d.PrimaryBlockLot === feature.get(labelProp))[0].AppNo
                .slice(6, 9));

        return newstyle;
    }
}
