import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { MapComponent, OverlayComponent } from 'ng-maps';
import { getCenter } from 'ol/extent';
import GeoJSON from 'ol/format/GeoJSON';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle, Fill, Stroke, Style } from 'ol/style';
import { take } from 'rxjs/operators';
import { JsonDataService, LayersService } from '../../shared';
import { MapLayer } from '../../shared/classes/maplayer';
import { RentControlData } from '../../shared/models';
import { MongodbService } from '../../shared/services/mongodb.service';
import * as fromStore from '../../store/store.reducers';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    selector: 'app-orc-dash',
    styleUrls: ['orc-dash.component.scss'],
    templateUrl: './orc-dash.component.html'
})
export class OrcDashComponent implements AfterViewInit, OnDestroy, OnInit {
    basemapUrl = 'https://d.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png';
    cartoLabelsUrl = 'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';
    basemapAttr = '<span><a href="http://www.openstreetmap.org/copyright">© OpenStreetMap</a> contributors, <a href="https://carto.com/attribution">© CARTO</a></span>';
    cardOpened = true;
    extentNo = 0;
    fullScreen = false;
    sideStatus = true;
    textHide = true;
    clicked: {blocklot?: string; data: Array<{prop: string; value: any}>} = {blocklot: '', data: []};
    hovered: {blocklot?: string; proploc?: string; } = {blocklot: '', proploc: ''};
    itemSelected = false;
    orcData: Array<RentControlData>;
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
        this.jsondata.getDash('', 'ORC')
            .pipe(take(1))
            .subscribe(
                v => this.orcData = v.result.records
            );
    }
    ngAfterViewInit(): void {
        this.map.instance.updateSize();
        this.map.instance.once('rendercomplete', () => {
            this.layerservice.initLayers([], 'wards', 'base')
            .forEach(
                (g, i) => i === 0 ? this.overlaylyrs = g : this.map.instance.addLayer(g[0].layer)
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
    dispatchHover(e): void {
        this.map.instance.forEachFeatureAtPixel(e.pixel, feat => {
            if (feat.get('blocklot')) {
            this.hoverFlag.instance.setPosition(getCenter(feat.getGeometry()
                .getExtent()));
            this.hovered.blocklot = feat.get('blocklot');
            this.hovered.proploc = this.orcData.filter(d => d.BlockLot === feat.get('blocklot'))[0]['BLQ - PropLoc2'];
            }
        });
    }
    dispatchClick(e): void {
        this.map.instance.forEachFeatureAtPixel(e.pixel, feat => {
            this.clicked.blocklot = feat.get('blocklot');
            this.clicked.data = [];
            Object.entries(this.orcData.filter(d => d.BlockLot === feat.get('blocklot'))[0])
                .slice(1, -1)
                .forEach(
                d => this.clicked.data.push({prop: d[0], value: d[1]})
            );
            feat.get('blocklot') ? this.cardOpened = true : this.cardOpened = this.cardOpened;
        });
    }
    makeLayer(): void {
        const blocklots: Array<string> = [];
        this.orcData.forEach(
            d => blocklots.push(`'${d.BlockLot}'`)
        );
        const vsource = new VectorSource({
            url: `https://nzlur.carto.com/api/v2/sql?format=GeoJSON&q=select the_geom,blocklot from public.parcels where blocklot in (${blocklots.join(',')})`,
            format: new GeoJSON()
        });
        this.map.instance.addLayer(
            new VectorLayer({
                className: 'CPB',
                zIndex: 5,
                opacity: 1,
                style: feature => this.parcelStyleFunction(feature),
                source: vsource
            })
        );
    }
    parcelStyleFunction(feature): Style | Array<Style> {
        const newstyle = [
            new Style({
                stroke: new Stroke({color: 'rgba(20, 20, 20)', width: 1}),
                fill: new Fill({color: 'yellow'})
                // text: new Text({
                //     font: 'bold 1rem Segoe UI,sans-serif',
                //     overflow: true,
                //     scale: 0.85,
                //     padding: [100, 100, 100, 100],
                //     fill: new Fill({
                //     color: 'rgba(0,0,0,1)'
                //     }),
                //     stroke: new Stroke({
                //     color: 'white',
                //     width: 3
                //     })
                // })
            }),
            new Style({
                image: new Circle({
                    radius: Math.max(this.orcData.filter(d => d.BlockLot === feature.get('blocklot'))[0].ResidentialUnits / 25, 8),
                    fill: new Fill({color: this.orcData.filter(d => d.BlockLot === feature.get('blocklot'))[0].ExemptFromRentControl
                    === 'yes' ? 'green' : 'orange'}),
                    stroke: new Stroke({
                      color: [60, 60, 60], width: 2
                    })
                }),
                geometry: ft => {
                    // return the coordinates of the first ring of the polygon
                    const geomExtent = ft.getGeometry()
                        .getExtent();

                    return new Point(getCenter(geomExtent));
                }
            })
        ];

        return newstyle;
    }
}
