import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { getCenter } from 'ol/extent';
import ImageLayer from 'ol/layer/Image';
import Map from 'ol/Map';
import Projection from 'ol/proj/Projection';
import Static from 'ol/source/ImageStatic';
import View from 'ol/View';

@Component({
    selector: 'app-map-image',
    styleUrls: ['../mapels/mapels.component.scss'],
    styles: ['div {width: 100%; height: 100%;}'],
    template: '<div id="map" #map></div>'
})
export class MapImageComponent implements OnInit {
    @Input() imgUrl = 'assets/img/headerPhotos/DoremusStudyArea.jpg';
    @Input() attributions = '© <a href="https://sites.google.com/view/forwardbounddoremus">forward-bound doremus</a>';
    @ViewChild('map') map: HTMLElement;
    projection = new Projection({
        code: 'image',
        units: 'pixels',
        extent: [0, 0, 1280, 1280]
    });
    mapParams: Map;
    ngOnInit(): void {
        this.mapParams = new Map({
            layers: [
                new ImageLayer({
                source: new Static({
                        attributions: this.attributions,
                        url: this.imgUrl,
                        projection: this.projection,
                        imageExtent: [0, 0, 1280, 1280]
                    })
                })
            ],
            target: 'map',
            view: new View({
                projection: this.projection,
                center: getCenter(this.projection.getExtent()),
                zoom: 2,
                maxZoom: 8
            })
        });
    }
}
