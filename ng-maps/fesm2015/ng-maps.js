import { CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ɵɵinvalidFactory, ɵɵdefineDirective, ɵɵNgOnChangesFeature, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, Host, ContentChildren, EventEmitter, ɵɵelement, ɵɵstyleProp, Input, Output, ɵɵInheritDefinitionFeature, SkipSelf, Optional, ɵɵProvidersFeature, forwardRef, ɵɵstaticContentQuery, ContentChild, ɵɵgetInheritedFactory, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Attribution, Control, defaults, FullScreen, OverviewMap, Rotate, ScaleLine, Zoom, ZoomSlider, ZoomToExtent } from 'ol/control';
import { transform } from 'ol/proj';
import { LineString, MultiLineString, MultiPoint, MultiPolygon, Polygon, Circle, Point } from 'ol/geom';
import { Feature, Overlay, Graticule } from 'ol';
import 'ol/format/Feature';
import { Vector as Vector$1, BingMaps, Cluster, ImageArcGISRest, ImageStatic, ImageWMS, XYZ, OSM, Raster, TileJSON, TileWMS, UTFGrid } from 'ol/source';
import { Group, Vector, Image, Tile, VectorTile } from 'ol/layer';
import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import View from 'ol/View';
import { MVT, GeoJSON } from 'ol/format';
import { Style, Circle as Circle$1, Text, Fill, Icon, Stroke } from 'ol/style';
import { defaults as defaults$1, DoubleClickZoom, DragAndDrop, DragBox, DragPan, DragRotate, DragRotateAndZoom, DragZoom, Draw, Modify, MouseWheelZoom, PinchZoom, Select, Translate } from 'ol/interaction';
import 'ol/Kinetic';
import 'ol/geom/GeometryType';
import TileGrid from 'ol/tilegrid/TileGrid';
import { createXYZ } from 'ol/tilegrid';
import WMTS$1 from 'ol/source/WMTS';
import WMTS from 'ol/tilegrid/WMTS';
import VectorTile$1 from 'ol/source/VectorTile';
import 'ol/style/IconAnchorUnits';
import 'ol/style/IconOrigin';

const _c0 = ["*"];
class AttributionComponent {
    // tslint:disable-next-line: prefer-readonly
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    }
}
AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(ɵɵdirectiveInject(ElementRef)); };
AttributionComponent.ɵcmp = ɵɵdefineComponent({ type: AttributionComponent, selectors: [["map-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'map-attribution',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class LayerComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'layer';
        this.props = [
            'opacity',
            'visible',
            'extent',
            'zIndex',
            'minResolution',
            'maxResolution',
            'prerender',
            'postrender'
        ];
    }
    ngOnInit() {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers()
            .push(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.getLayers()
            .remove(this.instance);
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
                if (key === 'prerender') {
                    this.instance.un('prerender', changes[key].previousValue);
                    this.instance.on('prerender', changes[key].currentValue);
                }
                if (key === 'postrender') {
                    this.instance.un('postrender', changes[key].previousValue);
                    this.instance.on('postrender', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
}
LayerComponent.ɵfac = function LayerComponent_Factory(t) { ɵɵinvalidFactory(); };
LayerComponent.ɵdir = ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [ɵɵNgOnChangesFeature] });

class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            // tslint:disable-next-line: no-null-keyword
            this.host.instance.setSource(null);
        }
    }
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
}
SourceComponent.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(ɵɵdirectiveInject(LayerComponent)); };
SourceComponent.ɵdir = ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });

const _c0$1 = ["*"];
class AttributionsComponent {
    // tslint:disable-next-line: prefer-readonly
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map(cmp => cmp.instance);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
}
AttributionsComponent.ɵfac = function AttributionsComponent_Factory(t) { return new (t || AttributionsComponent)(ɵɵdirectiveInject(SourceComponent, 1)); };
AttributionsComponent.ɵcmp = ɵɵdefineComponent({ type: AttributionsComponent, selectors: [["map-attributions"]], contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, AttributionComponent, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.attributions = _t);
    } }, ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function AttributionsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AttributionsComponent, [{
        type: Component,
        args: [{
                selector: 'map-attributions',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: SourceComponent, decorators: [{
                type: Host
            }] }]; }, { attributions: [{
            type: ContentChildren,
            args: [AttributionComponent]
        }] }); })();

const _c0$2 = ["*"];
class MapComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        this.props = [
            'width',
            'height',
            'pixelRatio',
            'keyboardEventTarget',
            'loadTilesWhileAnimating',
            'loadTilesWhileInteracting',
            'logo',
            'renderer'
        ];
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
        this.olClick = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.moveStart = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.pointerDrag = new EventEmitter();
        this.pointerMove = new EventEmitter();
        this.onpostrender = new EventEmitter();
        this.postRender = new EventEmitter();
        this.onprerender = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.singleClick = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (event) => { this.olClick.emit(event); });
        this.instance.on('dblclick', (event) => { this.dblClick.emit(event); });
        this.instance.on('movestart', (event) => { this.moveStart.emit(event); });
        this.instance.on('moveend', (event) => { this.moveEnd.emit(event); });
        this.instance.on('pointerdrag', (event) => { this.pointerDrag.emit(event); });
        this.instance.on('pointermove', (event) => { this.pointerMove.emit(event); });
        this.instance.on('postrender', (event) => { this.onpostrender.emit(event); });
        this.instance.on('postrender', (event) => { this.postRender.emit(event); });
        this.instance.on('prerender', (event) => { this.onprerender.emit(event); });
        this.instance.on('propertychange', (event) => { this.propertyChange.emit(event); });
        this.instance.on('singleclick', (event) => { this.singleClick.emit(event); });
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngAfterViewInit() {
        this.instance.updateSize();
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(ɵɵdirectiveInject(ElementRef)); };
MapComponent.ɵcmp = ɵɵdefineComponent({ type: MapComponent, selectors: [["map-map"]], inputs: { width: "width", height: "height", pixelRatio: "pixelRatio", keyboardEventTarget: "keyboardEventTarget", loadTilesWhileAnimating: "loadTilesWhileAnimating", loadTilesWhileInteracting: "loadTilesWhileInteracting", logo: "logo", renderer: "renderer" }, outputs: { olClick: "olClick", dblClick: "dblClick", moveStart: "moveStart", moveEnd: "moveEnd", pointerDrag: "pointerDrag", pointerMove: "pointerMove", onpostrender: "onpostrender", postRender: "postRender", onprerender: "onprerender", propertyChange: "propertyChange", singleClick: "singleClick" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$2, decls: 2, vars: 4, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "div");
        ɵɵprojection(1);
    } if (rf & 2) {
        ɵɵstyleProp("width", ctx.width)("height", ctx.height);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MapComponent, [{
        type: Component,
        args: [{
                selector: 'map-map',
                template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: ElementRef }]; }, { width: [{
            type: Input
        }], height: [{
            type: Input
        }], pixelRatio: [{
            type: Input
        }], keyboardEventTarget: [{
            type: Input
        }], loadTilesWhileAnimating: [{
            type: Input
        }], loadTilesWhileInteracting: [{
            type: Input
        }], logo: [{
            type: Input
        }], renderer: [{
            type: Input
        }], olClick: [{
            type: Output
        }], dblClick: [{
            type: Output
        }], moveStart: [{
            type: Output
        }], moveEnd: [{
            type: Output
        }], pointerDrag: [{
            type: Output
        }], pointerMove: [{
            type: Output
        }], onpostrender: [{
            type: Output
        }], postRender: [{
            type: Output
        }], onprerender: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], singleClick: [{
            type: Output
        }] }); })();

const _c0$3 = ["*"];
class LayerGroupComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        super.ngOnInit();
    }
}
LayerGroupComponent.ɵfac = function LayerGroupComponent_Factory(t) { return new (t || LayerGroupComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 12)); };
LayerGroupComponent.ɵcmp = ɵɵdefineComponent({ type: LayerGroupComponent, selectors: [["map-layer-group"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function LayerGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayerGroupComponent, [{
        type: Component,
        args: [{
                selector: 'map-layer-group',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }]; }, null); })();

const _c0$4 = ["*"];
class LayerVectorComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        this.instance = new Vector(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerVectorComponent.ɵfac = function LayerVectorComponent_Factory(t) { return new (t || LayerVectorComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerVectorComponent.ɵcmp = ɵɵdefineComponent({ type: LayerVectorComponent, selectors: [["map-layer-vector"]], inputs: { renderBuffer: "renderBuffer", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$4, decls: 1, vars: 0, template: function LayerVectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayerVectorComponent, [{
        type: Component,
        args: [{
                selector: 'map-layer-vector',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { renderBuffer: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }] }); })();

const _c0$5 = ["*"];
class SourceVectorComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceVectorComponent.ɵfac = function SourceVectorComponent_Factory(t) { return new (t || SourceVectorComponent)(ɵɵdirectiveInject(LayerVectorComponent, 1)); };
SourceVectorComponent.ɵcmp = ɵɵdefineComponent({ type: SourceVectorComponent, selectors: [["map-source-vector"]], inputs: { overlaps: "overlaps", useSpatialIndex: "useSpatialIndex", wrapX: "wrapX", url: "url", format: "format", strategy: "strategy" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function SourceVectorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceVectorComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-vector',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }]
            }]
    }], function () { return [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }]; }, { overlaps: [{
            type: Input
        }], useSpatialIndex: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], url: [{
            type: Input
        }], format: [{
            type: Input
        }], strategy: [{
            type: Input
        }] }); })();

const _c0$6 = ["*"];
class FeatureComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(ɵɵdirectiveInject(SourceVectorComponent)); };
FeatureComponent.ɵcmp = ɵɵdefineComponent({ type: FeatureComponent, selectors: [["map-feature"]], inputs: { id: "id" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureComponent, [{
        type: Component,
        args: [{
                selector: 'map-feature',
                template: ' <ng-content></ng-content>'
            }]
    }], function () { return [{ type: SourceVectorComponent }]; }, { id: [{
            type: Input
        }] }); })();

class SimpleGeometryComponent {
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
}
SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
SimpleGeometryComponent.ɵdir = ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } });

const _c0$7 = ["*"];
class GeometryLinestringComponent extends SimpleGeometryComponent {
    // tslint:disable-next-line: unnecessary-constructor
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-linestring';
    }
    ngOnInit() {
        this.instance = new LineString([
            [0, 0],
            [1, 1]
        ]);
        super.ngOnInit();
    }
}
GeometryLinestringComponent.ɵfac = function GeometryLinestringComponent_Factory(t) { return new (t || GeometryLinestringComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryLinestringComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryLinestringComponent, selectors: [["map-geometry-linestring"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$7, decls: 1, vars: 0, template: function GeometryLinestringComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-linestring',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

const _c0$8 = ["*"];
class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
    // tslint:disable-next-line: unnecessary-constructor
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multilinestring';
    }
    ngOnInit() {
        this.instance = new MultiLineString([
            [
                [0, 0],
                [1, 1]
            ]
        ]);
        super.ngOnInit();
    }
}
GeometryMultiLinestringComponent.ɵfac = function GeometryMultiLinestringComponent_Factory(t) { return new (t || GeometryMultiLinestringComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryMultiLinestringComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryMultiLinestringComponent, selectors: [["map-geometry-multilinestring"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function GeometryMultiLinestringComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryMultiLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multilinestring',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

const _c0$9 = ["*"];
class GeometryMultiPointComponent extends SimpleGeometryComponent {
    // tslint:disable-next-line: unnecessary-constructor
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipoint';
    }
    ngOnInit() {
        this.instance = new MultiPoint([
            [0, 0],
            [1, 1]
        ]);
        super.ngOnInit();
    }
}
GeometryMultiPointComponent.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryMultiPointComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["map-geometry-multipoint"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$9, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryMultiPointComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multipoint',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

const _c0$a = ["*"];
class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
    // tslint:disable-next-line: unnecessary-constructor
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipolygon';
    }
    ngOnInit() {
        this.instance = new MultiPolygon([
            [
                [
                    [0, 0],
                    [1, 1],
                    [0, 1]
                ]
            ]
        ]);
        super.ngOnInit();
    }
}
GeometryMultiPolygonComponent.ɵfac = function GeometryMultiPolygonComponent_Factory(t) { return new (t || GeometryMultiPolygonComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryMultiPolygonComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryMultiPolygonComponent, selectors: [["map-geometry-multipolygon"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function GeometryMultiPolygonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryMultiPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multipolygon',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

const _c0$b = ["*"];
class GeometryPolygonComponent extends SimpleGeometryComponent {
    // tslint:disable-next-line: unnecessary-constructor
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-polygon';
    }
    ngOnInit() {
        this.instance = new Polygon([
            [
                [0, 0],
                [1, 1],
                [0, 1]
            ]
        ]);
        super.ngOnInit();
    }
}
GeometryPolygonComponent.ɵfac = function GeometryPolygonComponent_Factory(t) { return new (t || GeometryPolygonComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryPolygonComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryPolygonComponent, selectors: [["map-geometry-polygon"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$b, decls: 1, vars: 0, template: function GeometryPolygonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-polygon',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

class CollectionCoordinatesComponent {
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('map-collection-coordinates must be a child of a geometry component');
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', e => { this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map(c => transform(c, this.srid, this.mapSrid));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map(cc => cc.map(c => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map(ccc => ccc.map(cc => cc.map(c => transform(c, this.srid, this.mapSrid))));
                    break;
                default:
                    break;
            }
        }
        // tslint:disable-next-line: no-non-null-assertion no-unnecessary-type-assertion
        this.host.instance.setCoordinates(transformedCoordinates);
    }
}
CollectionCoordinatesComponent.ɵfac = function CollectionCoordinatesComponent_Factory(t) { return new (t || CollectionCoordinatesComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(GeometryLinestringComponent, 8), ɵɵdirectiveInject(GeometryPolygonComponent, 8), ɵɵdirectiveInject(GeometryMultiPointComponent, 8), ɵɵdirectiveInject(GeometryMultiLinestringComponent, 8), ɵɵdirectiveInject(GeometryMultiPolygonComponent, 8)); };
CollectionCoordinatesComponent.ɵcmp = ɵɵdefineComponent({ type: CollectionCoordinatesComponent, selectors: [["map-collection-coordinates"]], inputs: { coordinates: "coordinates", srid: "srid" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-collection-coordinates"]], template: function CollectionCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CollectionCoordinatesComponent, [{
        type: Component,
        args: [{
                selector: 'map-collection-coordinates',
                template: ' <div class="map-collection-coordinates"></div> '
            }]
    }], function () { return [{ type: MapComponent }, { type: GeometryLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryPolygonComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiPointComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiLinestringComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryMultiPolygonComponent, decorators: [{
                type: Optional
            }] }]; }, { coordinates: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();

const _c0$c = ["*"];
class ContentComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(ɵɵdirectiveInject(ElementRef)); };
ContentComponent.ɵcmp = ɵɵdefineComponent({ type: ContentComponent, selectors: [["map-content"]], ngContentSelectors: _c0$c, decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ContentComponent, [{
        type: Component,
        args: [{
                selector: 'map-content',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class ControlAttributionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlAttributionComponent.ɵfac = function ControlAttributionComponent_Factory(t) { return new (t || ControlAttributionComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(ElementRef)); };
ControlAttributionComponent.ɵcmp = ɵɵdefineComponent({ type: ControlAttributionComponent, selectors: [["map-control-attribution"]], inputs: { collapsible: "collapsible" }, decls: 0, vars: 0, template: function ControlAttributionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlAttributionComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-attribution',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }, { type: ElementRef }]; }, { collapsible: [{
            type: Input
        }] }); })();

const _c0$d = ["*"];
class ControlComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    }
}
ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlComponent.ɵcmp = ɵɵdefineComponent({ type: ControlComponent, selectors: [["map-control"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, ngContentSelectors: _c0$d, decls: 1, vars: 0, template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlComponent, [{
        type: Component,
        args: [{
                selector: 'map-control',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }] }); })();

class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach(c => { this.map.instance.addControl(c); });
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach(c => this.map.instance.removeControl(c));
    }
}
DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(ɵɵdirectiveInject(MapComponent)); };
DefaultControlComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["map-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultControlComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-defaults',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { attribution: [{
            type: Input
        }], attributionOptions: [{
            type: Input
        }], rotate: [{
            type: Input
        }], rotateOptions: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomOptions: [{
            type: Input
        }] }); })();

const _c0$e = ["*"];
class ControlFullScreenComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
}
ControlFullScreenComponent.ɵfac = function ControlFullScreenComponent_Factory(t) { return new (t || ControlFullScreenComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlFullScreenComponent.ɵcmp = ɵɵdefineComponent({ type: ControlFullScreenComponent, selectors: [["map-control-fullscreen"]], inputs: { className: "className", label: "label", labelActive: "labelActive", tipLabel: "tipLabel", keys: "keys" }, ngContentSelectors: _c0$e, decls: 1, vars: 0, template: function ControlFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-fullscreen',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], label: [{
            type: Input
        }], labelActive: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], keys: [{
            type: Input
        }] }); })();

class ControlMousePositionComponent {
    constructor(map, element) {
        this.map = map;
        this.element = element;
    }
    ngOnInit() {
        this.target = this.element.nativeElement;
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlMousePositionComponent.ɵfac = function ControlMousePositionComponent_Factory(t) { return new (t || ControlMousePositionComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(ElementRef)); };
ControlMousePositionComponent.ɵcmp = ɵɵdefineComponent({ type: ControlMousePositionComponent, selectors: [["map-control-mouseposition"]], inputs: { coordinateFormat: "coordinateFormat", projection: "projection" }, decls: 0, vars: 0, template: function ControlMousePositionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlMousePositionComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-mouseposition',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }, { type: ElementRef }]; }, { coordinateFormat: [{
            type: Input
        }], projection: [{
            type: Input
        }] }); })();

const _c0$f = ["*"];
class ControlOverviewMapComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance !== undefined && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    }
    reloadInstance() {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    }
}
ControlOverviewMapComponent.ɵfac = function ControlOverviewMapComponent_Factory(t) { return new (t || ControlOverviewMapComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlOverviewMapComponent.ɵcmp = ɵɵdefineComponent({ type: ControlOverviewMapComponent, selectors: [["map-control-overviewmap"]], inputs: { collapsed: "collapsed", collapseLabel: "collapseLabel", collapsible: "collapsible", label: "label", layers: "layers", target: "target", tipLabel: "tipLabel", view: "view" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$f, decls: 1, vars: 0, template: function ControlOverviewMapComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlOverviewMapComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-overviewmap',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { collapsed: [{
            type: Input
        }], collapseLabel: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], label: [{
            type: Input
        }], layers: [{
            type: Input
        }], target: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();

const _c0$g = ["*"];
class ControlRotateComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlRotateComponent.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlRotateComponent.ɵcmp = ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["map-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlRotateComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-rotate',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], label: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], duration: [{
            type: Input
        }], autoHide: [{
            type: Input
        }] }); })();

const _c0$h = ["*"];
class ControlScaleLineComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new ScaleLine(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlScaleLineComponent.ɵfac = function ControlScaleLineComponent_Factory(t) { return new (t || ControlScaleLineComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlScaleLineComponent.ɵcmp = ɵɵdefineComponent({ type: ControlScaleLineComponent, selectors: [["map-control-scaleline"]], inputs: { units: "units" }, ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function ControlScaleLineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlScaleLineComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-scaleline',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { units: [{
            type: Input
        }] }); })();

const _c0$i = ["*"];
class ControlZoomComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomComponent.ɵfac = function ControlZoomComponent_Factory(t) { return new (t || ControlZoomComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlZoomComponent.ɵcmp = ɵɵdefineComponent({ type: ControlZoomComponent, selectors: [["map-control-zoom"]], inputs: { duration: "duration", zoomInLabel: "zoomInLabel", zoomOutLabel: "zoomOutLabel", zoomInTipLabel: "zoomInTipLabel", zoomOutTipLabel: "zoomOutTipLabel", delta: "delta" }, ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function ControlZoomComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlZoomComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-zoom',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], zoomInLabel: [{
            type: Input
        }], zoomOutLabel: [{
            type: Input
        }], zoomInTipLabel: [{
            type: Input
        }], zoomOutTipLabel: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();

const _c0$j = ["*"];
class ControlZoomSliderComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomSliderComponent.ɵfac = function ControlZoomSliderComponent_Factory(t) { return new (t || ControlZoomSliderComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlZoomSliderComponent.ɵcmp = ɵɵdefineComponent({ type: ControlZoomSliderComponent, selectors: [["map-control-zoomslider"]], inputs: { className: "className", duration: "duration", maxResolution: "maxResolution", minResolution: "minResolution" }, ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function ControlZoomSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlZoomSliderComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-zoomslider',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], duration: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }] }); })();

const _c0$k = ["*"];
class ControlZoomToExtentComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeControl(this.instance);
    }
}
ControlZoomToExtentComponent.ɵfac = function ControlZoomToExtentComponent_Factory(t) { return new (t || ControlZoomToExtentComponent)(ɵɵdirectiveInject(MapComponent)); };
ControlZoomToExtentComponent.ɵcmp = ɵɵdefineComponent({ type: ControlZoomToExtentComponent, selectors: [["map-control-zoomtoextent"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", extent: "extent" }, ngContentSelectors: _c0$k, decls: 1, vars: 0, template: function ControlZoomToExtentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlZoomToExtentComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-zoomtoextent',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], label: [{
            type: Input
        }], tipLabel: [{
            type: Input
        }], extent: [{
            type: Input
        }] }); })();

const _c0$l = ["*"];
class GeometryCircleComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new Circle([0, 0]);
    }
    get radius() {
        return this.instance.getRadius();
    }
    set radius(radius) {
        this.instance.setRadius(radius);
    }
}
GeometryCircleComponent.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryCircleComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["map-geometry-circle"]], inputs: { radius: "radius" }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryCircleComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-circle',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, { radius: [{
            type: Input
        }] }); })();

const _c0$m = ["*"];
class GeometryPointComponent extends SimpleGeometryComponent {
    // tslint:disable-next-line: unnecessary-constructor
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-point';
    }
    ngOnInit() {
        this.instance = new Point([0, 0]);
        super.ngOnInit();
    }
}
GeometryPointComponent.ɵfac = function GeometryPointComponent_Factory(t) { return new (t || GeometryPointComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
GeometryPointComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryPointComponent, selectors: [["map-geometry-point"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$m, decls: 1, vars: 0, template: function GeometryPointComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryPointComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-point',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

const _c0$n = ["*"];
class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(ɵɵdirectiveInject(MapComponent)); };
OverlayComponent.ɵcmp = ɵɵdefineComponent({ type: OverlayComponent, selectors: [["map-overlay"]], contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { id: "id", offset: "offset", positioning: "positioning", stopEvent: "stopEvent", insertFirst: "insertFirst", autoPan: "autoPan", autoPanAnimation: "autoPanAnimation", autoPanMargin: "autoPanMargin" }, ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{
                selector: 'map-overlay',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: MapComponent }]; }, { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }], id: [{
            type: Input
        }], offset: [{
            type: Input
        }], positioning: [{
            type: Input
        }], stopEvent: [{
            type: Input
        }], insertFirst: [{
            type: Input
        }], autoPan: [{
            type: Input
        }], autoPanAnimation: [{
            type: Input
        }], autoPanMargin: [{
            type: Input
        }] }); })();

const _c0$o = ["*"];
class ViewComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
        this.props = [
            'constrainRotation',
            'enableRotation',
            'extent',
            'maxResolution',
            'minResolution',
            'maxZoom',
            'minZoom',
            'resolution',
            'resolutions',
            'rotation',
            'zoom',
            'zoomFactor',
            'center',
            'projection',
            'zoomAnimation'
        ];
    }
    ngOnInit() {
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', (event) => { this.changeZoom.emit(event); });
        this.instance.on('change:resolution', (event) => { this.changeResolution.emit(event); });
        this.instance.on('change:center', (event) => { this.changeCenter.emit(event); });
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(ɵɵdirectiveInject(MapComponent)); };
ViewComponent.ɵcmp = ɵɵdefineComponent({ type: ViewComponent, selectors: [["map-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", zoomAnimation: "zoomAnimation" }, outputs: { changeZoom: "changeZoom", changeResolution: "changeResolution", changeCenter: "changeCenter" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$o, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'map-view',
                template: ' <ng-content></ng-content>'
            }]
    }], function () { return [{ type: MapComponent }]; }, { constrainRotation: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }], extent: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], resolution: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], rotation: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomFactor: [{
            type: Input
        }], center: [{
            type: Input
        }], projection: [{
            type: Input
        }], zoomAnimation: [{
            type: Input
        }], changeZoom: [{
            type: Output
        }], changeResolution: [{
            type: Output
        }], changeCenter: [{
            type: Output
        }] }); })();

class CoordinateComponent {
    constructor(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        if (geometryPointHost !== null) {
            this.host = geometryPointHost;
        }
        else if (geometryCircleHost !== null) {
            this.host = geometryCircleHost;
        }
        else if (viewHost !== null) {
            this.host = viewHost;
        }
        else if (overlayHost !== null) {
            this.host = overlayHost;
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', e => { this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
        (this.srid === this.mapSrid)
            ? transformedCoordinates = [this.x, this.y]
            : transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);
        switch (this.host.componentType) {
            case 'geometry-point':
                this.host.instance.setCoordinates(transformedCoordinates);
                break;
            case 'geometry-circle':
            case 'view':
                this.host.instance.setCenter(transformedCoordinates);
                break;
            case 'overlay':
                this.host.instance.setPosition(transformedCoordinates);
                break;
            default:
                break;
        }
    }
}
CoordinateComponent.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(ViewComponent, 8), ɵɵdirectiveInject(GeometryPointComponent, 8), ɵɵdirectiveInject(GeometryCircleComponent, 8), ɵɵdirectiveInject(OverlayComponent, 8)); };
CoordinateComponent.ɵcmp = ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["map-coordinate"]], inputs: { x: "x", y: "y", srid: "srid" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoordinateComponent, [{
        type: Component,
        args: [{
                selector: 'map-coordinate',
                template: ' <div class="map-coordinate"></div>'
            }]
    }], function () { return [{ type: MapComponent }, { type: ViewComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryPointComponent, decorators: [{
                type: Optional
            }] }, { type: GeometryCircleComponent, decorators: [{
                type: Optional
            }] }, { type: OverlayComponent, decorators: [{
                type: Optional
            }] }]; }, { x: [{
            type: Input
        }], y: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();

class FormatComponent {
    constructor() {
        this.componentType = 'format';
    }
}

class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
}
FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); };
FormatMVTComponent.ɵcmp = ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["map-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]), ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'map-format-mvt',
                template: '',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]
            }]
    }], function () { return []; }, { featureClass: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], layerName: [{
            type: Input
        }], layers: [{
            type: Input
        }] }); })();

const _c0$p = ["*"];
class GraticuleComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'graticule';
        this.props = [
            'strokeStyle',
            'showLabels',
            'lonLabelPosition',
            'latLabelPosition'
        ];
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    }
    ngAfterContentInit() {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition
        });
        this.instance.setMap(this.map.instance);
    }
    ngOnDestroy() {
        this.instance.setMap(undefined);
    }
}
GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(ɵɵdirectiveInject(MapComponent)); };
GraticuleComponent.ɵcmp = ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["map-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$p, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GraticuleComponent, [{
        type: Component,
        args: [{
                selector: 'map-graticule',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: MapComponent }]; }, { strokeStyle: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], lonLabelPosition: [{
            type: Input
        }], latLabelPosition: [{
            type: Input
        }] }); })();

class DefaultInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = defaults$1();
        this.instance.forEach(i => { this.map.instance.addInteraction(i); });
    }
    ngOnDestroy() {
        this.instance.forEach(i => this.map.instance.removeInteraction(i));
    }
}
DefaultInteractionComponent.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DefaultInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["map-interaction-default"]], decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-default',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, null); })();

class DoubleClickZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DoubleClickZoomInteractionComponent.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) { return new (t || DoubleClickZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DoubleClickZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DoubleClickZoomInteractionComponent, selectors: [["map-interaction-doubleclickzoom"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DoubleClickZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-doubleclickzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], delta: [{
            type: Input
        }] }); })();

class DragAndDropInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragAndDropInteractionComponent.ɵfac = function DragAndDropInteractionComponent_Factory(t) { return new (t || DragAndDropInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DragAndDropInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragAndDropInteractionComponent, selectors: [["map-interaction-draganddrop"]], inputs: { formatConstructors: "formatConstructors", projection: "projection", target: "target" }, decls: 0, vars: 0, template: function DragAndDropInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragAndDropInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-draganddrop',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { formatConstructors: [{
            type: Input
        }], projection: [{
            type: Input
        }], target: [{
            type: Input
        }] }); })();

class DragBoxInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragBoxInteractionComponent.ɵfac = function DragBoxInteractionComponent_Factory(t) { return new (t || DragBoxInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DragBoxInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragBoxInteractionComponent, selectors: [["map-interaction-dragbox"]], inputs: { className: "className", condition: "condition", boxEndCondition: "boxEndCondition" }, decls: 0, vars: 0, template: function DragBoxInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragBoxInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-dragbox',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], boxEndCondition: [{
            type: Input
        }] }); })();

class DragPanInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragPanInteractionComponent.ɵfac = function DragPanInteractionComponent_Factory(t) { return new (t || DragPanInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DragPanInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragPanInteractionComponent, selectors: [["map-interaction-dragpan"]], inputs: { condition: "condition", kinetic: "kinetic" }, decls: 0, vars: 0, template: function DragPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragPanInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-dragpan',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], kinetic: [{
            type: Input
        }] }); })();

class DragRotateInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragRotateInteractionComponent.ɵfac = function DragRotateInteractionComponent_Factory(t) { return new (t || DragRotateInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DragRotateInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragRotateInteractionComponent, selectors: [["map-interaction-dragrotate"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragRotateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-dragrotate',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();

class DragRotateAndZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragRotateAndZoomInteractionComponent.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) { return new (t || DragRotateAndZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DragRotateAndZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragRotateAndZoomInteractionComponent, selectors: [["map-interaction-dragrotateandzoom"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragRotateAndZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-dragrotateandzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], duration: [{
            type: Input
        }] }); })();

class DragZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DragZoomInteractionComponent.ɵfac = function DragZoomInteractionComponent_Factory(t) { return new (t || DragZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DragZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragZoomInteractionComponent, selectors: [["map-interaction-dragzoom"]], inputs: { className: "className", condition: "condition", duration: "duration", out: "out" }, decls: 0, vars: 0, template: function DragZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DragZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-dragzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], duration: [{
            type: Input
        }], out: [{
            type: Input
        }] }); })();

class DrawInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Draw(this);
        this.instance.on('change', (event) => { this.olChange.emit(event); });
        this.instance.on('change:active', (event) => { this.olChangeActive.emit(event); });
        this.instance.on('drawend', (event) => { this.drawEnd.emit(event); });
        this.instance.on('drawstart', (event) => { this.drawStart.emit(event); });
        this.instance.on('propertychange', (event) => { this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
DrawInteractionComponent.ɵfac = function DrawInteractionComponent_Factory(t) { return new (t || DrawInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
DrawInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DrawInteractionComponent, selectors: [["map-interaction-draw"]], inputs: { clickTolerance: "clickTolerance", features: "features", source: "source", snapTolerance: "snapTolerance", type: "type", maxPoints: "maxPoints", minPoints: "minPoints", finishCondition: "finishCondition", style: "style", geometryFunction: "geometryFunction", geometryName: "geometryName", condition: "condition", freehandCondition: "freehandCondition", freehand: "freehand", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", drawEnd: "drawEnd", drawStart: "drawStart", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function DrawInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DrawInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-draw',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { clickTolerance: [{
            type: Input
        }], features: [{
            type: Input
        }], source: [{
            type: Input
        }], snapTolerance: [{
            type: Input
        }], type: [{
            type: Input
        }], maxPoints: [{
            type: Input
        }], minPoints: [{
            type: Input
        }], finishCondition: [{
            type: Input
        }], style: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], condition: [{
            type: Input
        }], freehandCondition: [{
            type: Input
        }], freehand: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], drawEnd: [{
            type: Output
        }], drawStart: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();

class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => { this.olChange.emit(event); });
        this.instance.on('change:active', (event) => { this.olChangeActive.emit(event); });
        this.instance.on('propertychange', (event) => { this.propertyChange.emit(event); });
        this.instance.on('modifyend', (event) => { this.modifyEnd.emit(event); });
        this.instance.on('modifystart', (event) => { this.modifyStart.emit(event); });
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
ModifyInteractionComponent.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
ModifyInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["map-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { modifyEnd: "modifyEnd", modifyStart: "modifyStart", olChange: "olChange", olChangeActive: "olChangeActive", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ModifyInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-modify',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { condition: [{
            type: Input
        }], deleteCondition: [{
            type: Input
        }], pixelTolerance: [{
            type: Input
        }], style: [{
            type: Input
        }], features: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], source: [{
            type: Input
        }], modifyEnd: [{
            type: Output
        }], modifyStart: [{
            type: Output
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();

class MouseWheelZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
MouseWheelZoomInteractionComponent.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) { return new (t || MouseWheelZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
MouseWheelZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: MouseWheelZoomInteractionComponent, selectors: [["map-interaction-mousewheelzoom"]], inputs: { duration: "duration", timeout: "timeout", useAnchor: "useAnchor" }, decls: 0, vars: 0, template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MouseWheelZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-mousewheelzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], timeout: [{
            type: Input
        }], useAnchor: [{
            type: Input
        }] }); })();

class PinchZoomInteractionComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
PinchZoomInteractionComponent.ɵfac = function PinchZoomInteractionComponent_Factory(t) { return new (t || PinchZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
PinchZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: PinchZoomInteractionComponent, selectors: [["map-interaction-pinchzoom"]], inputs: { duration: "duration", constrainResolution: "constrainResolution" }, decls: 0, vars: 0, template: function PinchZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PinchZoomInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-pinchzoom',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { duration: [{
            type: Input
        }], constrainResolution: [{
            type: Input
        }] }); })();

class SelectInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Select(this);
        this.instance.on('change', (event) => { this.olChange.emit(event); });
        this.instance.on('select', (event) => { this.olSelect.emit(event); });
        this.instance.on('propertychange', (event) => { this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
SelectInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["map-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olSelect: "olSelect", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-select',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { addCondition: [{
            type: Input
        }], condition: [{
            type: Input
        }], layers: [{
            type: Input
        }], style: [{
            type: Input
        }], removeCondition: [{
            type: Input
        }], toggleCondition: [{
            type: Input
        }], multi: [{
            type: Input
        }], features: [{
            type: Input
        }], filter: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olSelect: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();

class TranslateInteractionComponent {
    constructor(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Translate(this);
        this.instance.on('change', (event) => { this.olChange.emit(event); });
        this.instance.on('propertychange', (event) => { this.propertyChange.emit(event); });
        this.instance.on('translateend', (event) => { this.translateEnd.emit(event); });
        this.instance.on('translatestart', (event) => { this.translateStart.emit(event); });
        this.instance.on('translating', (event) => { this.translating.emit(event); });
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
TranslateInteractionComponent.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
TranslateInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["map-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TranslateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-translate',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, { features: [{
            type: Input
        }], layers: [{
            type: Input
        }], hitTolerance: [{
            type: Input
        }], olChange: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], translateEnd: [{
            type: Output
        }], translateStart: [{
            type: Output
        }], translating: [{
            type: Output
        }] }); })();

const _c0$q = ["*"];
class LayerImageComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        this.instance = new Image(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerImageComponent.ɵfac = function LayerImageComponent_Factory(t) { return new (t || LayerImageComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerImageComponent.ɵcmp = ɵɵdefineComponent({ type: LayerImageComponent, selectors: [["map-layer-image"]], inputs: { opacity: "opacity", visible: "visible", extent: "extent", minResolution: "minResolution", maxResolution: "maxResolution", zIndex: "zIndex" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$q, decls: 1, vars: 0, template: function LayerImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayerImageComponent, [{
        type: Component,
        args: [{
                selector: 'map-layer-image',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { opacity: [{
            type: Input
        }], visible: [{
            type: Input
        }], extent: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();

const _c0$r = ["*"];
class LayerTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerTileComponent.ɵfac = function LayerTileComponent_Factory(t) { return new (t || LayerTileComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerTileComponent.ɵcmp = ɵɵdefineComponent({ type: LayerTileComponent, selectors: [["map-layer-tile"]], inputs: { preload: "preload", useInterimTilesOnError: "useInterimTilesOnError" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$r, decls: 1, vars: 0, template: function LayerTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayerTileComponent, [{
        type: Component,
        args: [{
                selector: 'map-layer-tile',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { preload: [{
            type: Input
        }], useInterimTilesOnError: [{
            type: Input
        }] }); })();

const _c0$s = ["*"];
class LayerVectorTileComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerVectorTileComponent.ɵfac = function LayerVectorTileComponent_Factory(t) { return new (t || LayerVectorTileComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
LayerVectorTileComponent.ɵcmp = ɵɵdefineComponent({ type: LayerVectorTileComponent, selectors: [["map-layer-vectortile"]], inputs: { renderBuffer: "renderBuffer", renderMode: "renderMode", renderOrder: "renderOrder", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting", visible: "visible" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$s, decls: 1, vars: 0, template: function LayerVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayerVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'map-layer-vectortile',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { renderBuffer: [{
            type: Input
        }], renderMode: [{
            type: Input
        }], renderOrder: [{
            type: Input
        }], style: [{
            type: Input
        }], updateWhileAnimating: [{
            type: Input
        }], updateWhileInteracting: [{
            type: Input
        }], visible: [{
            type: Input
        }] }); })();

class SourceBingmapsComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imagerySet = 'Aerial';
    }
    ngOnInit() {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceBingmapsComponent.ɵfac = function SourceBingmapsComponent_Factory(t) { return new (t || SourceBingmapsComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceBingmapsComponent.ɵcmp = ɵɵdefineComponent({ type: SourceBingmapsComponent, selectors: [["map-source-bingmaps"]], inputs: { cacheSize: "cacheSize", hidpi: "hidpi", culture: "culture", key: "key", imagerySet: "imagerySet", maxZoom: "maxZoom", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }]), ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-bingmaps"]], template: function SourceBingmapsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceBingmapsComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-bingmaps',
                template: ' <div class="aol-source-bingmaps"></div> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], culture: [{
            type: Input
        }], key: [{
            type: Input
        }], imagerySet: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();

const _c0$t = ["*"];
class SourceClusterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngAfterContentInit() {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    }
}
SourceClusterComponent.ɵfac = function SourceClusterComponent_Factory(t) { return new (t || SourceClusterComponent)(ɵɵdirectiveInject(LayerVectorComponent, 1)); };
SourceClusterComponent.ɵcmp = ɵɵdefineComponent({ type: SourceClusterComponent, selectors: [["map-source-cluster"]], contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SourceVectorComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sourceVectorComponent = _t.first);
    } }, inputs: { distance: "distance", geometryFunction: "geometryFunction", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$t, decls: 1, vars: 0, template: function SourceClusterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceClusterComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-cluster',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }]
            }]
    }], function () { return [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }]; }, { distance: [{
            type: Input
        }], geometryFunction: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], sourceVectorComponent: [{
            type: ContentChild,
            args: [SourceVectorComponent]
        }] }); })();

const _c0$u = ["*"];
class SourceGeoJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceGeoJSONComponent.ɵfac = function SourceGeoJSONComponent_Factory(t) { return new (t || SourceGeoJSONComponent)(ɵɵdirectiveInject(LayerVectorComponent, 1)); };
SourceGeoJSONComponent.ɵcmp = ɵɵdefineComponent({ type: SourceGeoJSONComponent, selectors: [["map-source-geojson"]], inputs: { defaultDataProjection: "defaultDataProjection", featureProjection: "featureProjection", geometryName: "geometryName", url: "url" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$u, decls: 1, vars: 0, template: function SourceGeoJSONComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceGeoJSONComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-geojson',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }]
            }]
    }], function () { return [{ type: LayerVectorComponent, decorators: [{
                type: Host
            }] }]; }, { defaultDataProjection: [{
            type: Input
        }], featureProjection: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();

const _c0$v = ["*"];
class SourceImageArcGISRestComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.ratio = 1.5;
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => { this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', (event) => { this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', (event) => { this.imageLoadError.emit(event); });
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceImageArcGISRestComponent.ɵfac = function SourceImageArcGISRestComponent_Factory(t) { return new (t || SourceImageArcGISRestComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceImageArcGISRestComponent.ɵcmp = ɵɵdefineComponent({ type: SourceImageArcGISRestComponent, selectors: [["map-source-imagearcgisrest"]], inputs: { projection: "projection", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", params: "params", ratio: "ratio", resolutions: "resolutions", wrapX: "wrapX" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$v, decls: 1, vars: 0, template: function SourceImageArcGISRestComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceImageArcGISRestComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-imagearcgisrest',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { projection: [{
            type: Input
        }], url: [{
            type: Input
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], ratio: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();

const _c0$w = ["*"];
class SourceImageStaticComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.props = [
            'projection',
            'imageExtent',
            'url',
            'attributions',
            'crossOrigin',
            'imageLoadFunction',
            'imageSize'
        ];
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    setLayerSource() {
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => { this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', (event) => { this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', (event) => { this.imageLoadError.emit(event); });
    }
    ngOnInit() {
        this.setLayerSource();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    }
}
SourceImageStaticComponent.ɵfac = function SourceImageStaticComponent_Factory(t) { return new (t || SourceImageStaticComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceImageStaticComponent.ɵcmp = ɵɵdefineComponent({ type: SourceImageStaticComponent, selectors: [["map-source-imagestatic"]], inputs: { projection: "projection", imageExtent: "imageExtent", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", imageSize: "imageSize" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$w, decls: 1, vars: 0, template: function SourceImageStaticComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceImageStaticComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-imagestatic',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { projection: [{
            type: Input
        }], imageExtent: [{
            type: Input
        }], url: [{
            type: Input
        }], attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], imageSize: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();

const _c0$x = ["*"];
class SourceImageWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => { this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', (event) => { this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', (event) => { this.imageLoadError.emit(event); });
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceImageWMSComponent.ɵfac = function SourceImageWMSComponent_Factory(t) { return new (t || SourceImageWMSComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceImageWMSComponent.ɵcmp = ɵɵdefineComponent({ type: SourceImageWMSComponent, selectors: [["map-source-imagewms"]], inputs: { attributions: "attributions", crossOrigin: "crossOrigin", hidpi: "hidpi", serverType: "serverType", imageLoadFunction: "imageLoadFunction", params: "params", projection: "projection", ratio: "ratio", resolutions: "resolutions", url: "url" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$x, decls: 1, vars: 0, template: function SourceImageWMSComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceImageWMSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-imagewms',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { attributions: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], serverType: [{
            type: Input
        }], imageLoadFunction: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], ratio: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], url: [{
            type: Input
        }], imageLoadStart: [{
            type: Output
        }], imageLoadEnd: [{
            type: Output
        }], imageLoadError: [{
            type: Output
        }] }); })();

class TileGridComponent {
    ngOnInit() {
        (!this.resolutions)
            ? this.instance = createXYZ(this)
            : this.instance = new TileGrid(this);
    }
    ngOnChanges(changes) {
        (!this.resolutions)
            ? this.instance = createXYZ(this)
            : this.instance = new TileGrid(this);
    }
}
TileGridComponent.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); };
TileGridComponent.ɵcmp = ɵɵdefineComponent({ type: TileGridComponent, selectors: [["map-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TileGridComponent, [{
        type: Component,
        args: [{
                selector: 'map-tilegrid',
                template: ''
            }]
    }], null, { extent: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], origin: [{
            type: Input
        }], resolutions: [{
            type: Input
        }] }); })();

const _c0$y = ["*"];
class SourceXYZComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.props = [
            'cacheSize',
            'crossOrigin',
            'opaque',
            'projection',
            'reprojectionErrorThreshold',
            'minZoom',
            'maxZoom',
            'tileGrid',
            'tileLoadFunction',
            'tilePixelRatio',
            'tileSize',
            'tileUrlFunction',
            'url',
            'urls',
            'wrapX'
        ];
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    }
    init() {
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (event) => { this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', (event) => { this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', (event) => { this.tileLoadError.emit(event); });
        this._register(this.instance);
    }
}
SourceXYZComponent.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(ɵɵdirectiveInject(LayerTileComponent, 9)); };
SourceXYZComponent.ɵcmp = ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["map-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TileGridComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
    } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$y, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceXYZComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-xyz',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], opaque: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileGridXYZ: [{
            type: ContentChild,
            args: [TileGridComponent]
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();

class SourceOsmComponent extends SourceXYZComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (event) => { this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', (event) => { this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', (event) => { this.tileLoadError.emit(event); });
        this._register(this.instance);
    }
}
SourceOsmComponent.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(ɵɵdirectiveInject(LayerTileComponent, 9)); };
SourceOsmComponent.ɵcmp = ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["map-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }]), ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "map-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceOsmComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-osm',
                template: ' <div class="map-source-osm"></div> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { attributions: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], opaque: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();

const _c0$z = ["*"];
class SourceRasterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    set source(sourceComponent) {
        this.sources = [sourceComponent.instance];
        if (this.instance) {
            // Openlayer doesn't handle sources update. Just recreate Raster instance.
            this.init();
        }
    }
    ngAfterContentInit() {
        this.init();
    }
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (event) => { this.beforeOperations.emit(event); });
        this.instance.on('afteroperations', (event) => { this.afterOperations.emit(event); });
        this._register(this.instance);
    }
}
SourceRasterComponent.ɵfac = function SourceRasterComponent_Factory(t) { return new (t || SourceRasterComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
SourceRasterComponent.ɵcmp = ɵɵdefineComponent({ type: SourceRasterComponent, selectors: [["map-source-raster"]], contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SourceComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.source = _t.first);
    } }, inputs: { operation: "operation", threads: "threads", lib: "lib", operationType: "operationType" }, outputs: { beforeOperations: "beforeOperations", afterOperations: "afterOperations" }, features: [ɵɵProvidersFeature([
            {
                provide: SourceComponent,
                // tslint:disable-next-line: no-forward-ref
                useExisting: forwardRef(() => SourceRasterComponent)
            }
        ]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$z, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceRasterComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-raster',
                template: '<ng-content></ng-content>',
                providers: [
                    {
                        provide: SourceComponent,
                        // tslint:disable-next-line: no-forward-ref
                        useExisting: forwardRef(() => SourceRasterComponent)
                    }
                ]
            }]
    }], function () { return [{ type: LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { operation: [{
            type: Input
        }], threads: [{
            type: Input
        }], lib: [{
            type: Input
        }], operationType: [{
            type: Input
        }], beforeOperations: [{
            type: Output
        }], afterOperations: [{
            type: Output
        }], source: [{
            type: ContentChild,
            args: [SourceComponent]
        }] }); })();

const _c0$A = ["*"];
class SourceTileJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceTileJSONComponent.ɵfac = function SourceTileJSONComponent_Factory(t) { return new (t || SourceTileJSONComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceTileJSONComponent.ɵcmp = ɵɵdefineComponent({ type: SourceTileJSONComponent, selectors: [["map-source-tilejson"]], inputs: { url: "url" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$A, decls: 1, vars: 0, template: function SourceTileJSONComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceTileJSONComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilejson',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { url: [{
            type: Input
        }] }); })();

const _c0$B = ["*"];
class SourceTileWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
}
SourceTileWMSComponent.ɵfac = function SourceTileWMSComponent_Factory(t) { return new (t || SourceTileWMSComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceTileWMSComponent.ɵcmp = ɵɵdefineComponent({ type: SourceTileWMSComponent, selectors: [["map-source-tilewms"]], inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", gutter: "gutter", hidpi: "hidpi", params: "params", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", serverType: "serverType", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$B, decls: 1, vars: 0, template: function SourceTileWMSComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceTileWMSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilewms',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], gutter: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], serverType: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();

class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
}
TileGridWMTSComponent.ɵfac = function TileGridWMTSComponent_Factory(t) { return ɵTileGridWMTSComponent_BaseFactory(t || TileGridWMTSComponent); };
TileGridWMTSComponent.ɵcmp = ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["map-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 });
const ɵTileGridWMTSComponent_BaseFactory = ɵɵgetInheritedFactory(TileGridWMTSComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(TileGridWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'map-tilegrid-wmts',
                template: ''
            }]
    }], null, { origin: [{
            type: Input
        }], origins: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], matrixIds: [{
            type: Input
        }], sizes: [{
            type: Input
        }], tileSizes: [{
            type: Input
        }], widths: [{
            type: Input
        }] }); })();

const _c0$C = ["*"];
class SourceTileWMTSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.props = [
            'cacheSize',
            'crossOrigin',
            'tileGrid',
            'projection',
            'reprojectionErrorThreshold',
            'requestEncoding',
            'layer',
            'style',
            'tileClass',
            'tilePixelRatio',
            'version',
            'format',
            'matrixSet',
            'dimension',
            'url',
            'tileLoadFunction',
            'urls',
            'wrapX'
        ];
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    }
    setLayerSource() {
        this.instance = new WMTS$1(this);
        this.instance.on('tileloadstart', (event) => { this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', (event) => { this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', (event) => { this.tileLoadError.emit(event); });
        this.host.instance.setSource(this.instance);
    }
    ngAfterContentInit() {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    }
}
SourceTileWMTSComponent.ɵfac = function SourceTileWMTSComponent_Factory(t) { return new (t || SourceTileWMTSComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceTileWMTSComponent.ɵcmp = ɵɵdefineComponent({ type: SourceTileWMTSComponent, selectors: [["map-source-tilewmts"]], contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TileGridWMTSComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tileGridWMTS = _t.first);
    } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", tileGrid: "tileGrid", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", requestEncoding: "requestEncoding", layer: "layer", style: "style", tileClass: "tileClass", tilePixelRatio: "tilePixelRatio", version: "version", format: "format", matrixSet: "matrixSet", dimensions: "dimensions", url: "url", tileLoadFunction: "tileLoadFunction", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$C, decls: 1, vars: 0, template: function SourceTileWMTSComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceTileWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilewmts',
                template: '<ng-content></ng-content>',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], requestEncoding: [{
            type: Input
        }], layer: [{
            type: Input
        }], style: [{
            type: Input
        }], tileClass: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], version: [{
            type: Input
        }], format: [{
            type: Input
        }], matrixSet: [{
            type: Input
        }], dimensions: [{
            type: Input
        }], url: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }], tileGridWMTS: [{
            type: ContentChild,
            args: [TileGridWMTSComponent]
        }] }); })();

const _c0$D = ["*"];
class SourceUTFGridComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceUTFGridComponent.ɵfac = function SourceUTFGridComponent_Factory(t) { return new (t || SourceUTFGridComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
SourceUTFGridComponent.ɵcmp = ɵɵdefineComponent({ type: SourceUTFGridComponent, selectors: [["map-source-utfgrid"]], inputs: { tileJSON: "tileJSON", url: "url" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$D, decls: 1, vars: 0, template: function SourceUTFGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceUTFGridComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-utfgrid',
                template: '<ng-content></ng-content>',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { tileJSON: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();

const _c0$E = ["*"];
class SourceVectorTileComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    ngAfterContentInit() {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceVectorTileComponent.ɵfac = function SourceVectorTileComponent_Factory(t) { return new (t || SourceVectorTileComponent)(ɵɵdirectiveInject(LayerVectorTileComponent, 1)); };
SourceVectorTileComponent.ɵcmp = ɵɵdefineComponent({ type: SourceVectorTileComponent, selectors: [["map-source-vectortile"]], contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, FormatComponent, true);
        ɵɵcontentQuery(dirIndex, TileGridComponent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formatComponent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tileGridComponent = _t.first);
    } }, inputs: { cacheSize: "cacheSize", overlaps: "overlaps", projection: "projection", tilePixelRatio: "tilePixelRatio", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$E, decls: 1, vars: 0, template: function SourceVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-vectortile',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }]
            }]
    }], function () { return [{ type: LayerVectorTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], overlaps: [{
            type: Input
        }], projection: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], formatComponent: [{
            type: ContentChild,
            args: [FormatComponent]
        }], tileGridComponent: [{
            type: ContentChild,
            args: [TileGridComponent]
        }] }); })();

const _c0$F = ["*"];
class StyleComponent {
    constructor(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    update() {
        this.host.instance.changed();
    }
    ngOnInit() {
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
}
StyleComponent.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(ɵɵdirectiveInject(FeatureComponent, 8), ɵɵdirectiveInject(LayerVectorComponent, 8)); };
StyleComponent.ɵcmp = ɵɵdefineComponent({ type: StyleComponent, selectors: [["map-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0$F, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleComponent, [{
        type: Component,
        args: [{
                selector: 'map-style',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: FeatureComponent, decorators: [{
                type: Optional
            }] }, { type: LayerVectorComponent, decorators: [{
                type: Optional
            }] }]; }, { geometry: [{
            type: Input
        }], fill: [{
            type: Input
        }], image: [{
            type: Input
        }], stroke: [{
            type: Input
        }], text: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();

const _c0$G = ["*"];
class StyleCircleComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update() {
        if (!!this.instance) {
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    }
    ngAfterContentInit() {
        this.instance = new Circle$1(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    }
    ngOnDestroy() {
        // tslint:disable-next-line: no-non-null-assertion
        this.host.instance.setImage(undefined);
    }
}
StyleCircleComponent.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(ɵɵdirectiveInject(StyleComponent, 1)); };
StyleCircleComponent.ɵcmp = ɵɵdefineComponent({ type: StyleCircleComponent, selectors: [["map-style-circle"]], inputs: { fill: "fill", radius: "radius", snapToPixel: "snapToPixel", stroke: "stroke" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$G, decls: 1, vars: 0, template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleCircleComponent, [{
        type: Component,
        args: [{
                selector: 'map-style-circle',
                template: ' <ng-content></ng-content>'
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Host
            }] }]; }, { fill: [{
            type: Input
        }], radius: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], stroke: [{
            type: Input
        }] }); })();

class StyleTextComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('map-style-text must be a descendant of map-style');
        }
    }
    ngOnInit() {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.font) {
            this.instance.setFont(changes.font.currentValue);
        }
        if (changes.offsetX) {
            this.instance.setOffsetX(changes.offsetX.currentValue);
        }
        if (changes.offsetY) {
            this.instance.setOffsetY(changes.offsetY.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.text) {
            this.instance.setText(changes.text.currentValue);
        }
        if (changes.textAlign) {
            this.instance.setTextAlign(changes.textAlign.currentValue);
        }
        if (changes.textBaseLine) {
            this.instance.setTextBaseline(changes.textBaseLine.currentValue);
        }
        this.host.update();
    }
}
StyleTextComponent.ɵfac = function StyleTextComponent_Factory(t) { return new (t || StyleTextComponent)(ɵɵdirectiveInject(StyleComponent, 8)); };
StyleTextComponent.ɵcmp = ɵɵdefineComponent({ type: StyleTextComponent, selectors: [["map-style-text"]], inputs: { font: "font", offsetX: "offsetX", offsetY: "offsetY", scale: "scale", rotateWithView: "rotateWithView", rotation: "rotation", text: "text", textAlign: "textAlign", textBaseLine: "textBaseLine" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-text"]], template: function StyleTextComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleTextComponent, [{
        type: Component,
        args: [{
                selector: 'map-style-text',
                template: '<div class="aol-style-text"></div>'
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }]; }, { font: [{
            type: Input
        }], offsetX: [{
            type: Input
        }], offsetY: [{
            type: Input
        }], scale: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], text: [{
            type: Input
        }], textAlign: [{
            type: Input
        }], textBaseLine: [{
            type: Input
        }] }); })();

class StyleFillComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        // tslint:disable-next-line: prefer-conditional-expression
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
    }
    ngOnInit() {
        this.instance = new Fill(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-text':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                // console.log('setting ol.style.circle instance\'s fill:', this.host);
                break;
            default:
                throw new Error(`unknown host type: ${this.host}`);
            // break;
        }
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        this.host.update();
    }
}
StyleFillComponent.ɵfac = function StyleFillComponent_Factory(t) { return new (t || StyleFillComponent)(ɵɵdirectiveInject(StyleComponent, 8), ɵɵdirectiveInject(StyleCircleComponent, 8), ɵɵdirectiveInject(StyleTextComponent, 8)); };
StyleFillComponent.ɵcmp = ɵɵdefineComponent({ type: StyleFillComponent, selectors: [["map-style-fill"]], inputs: { color: "color" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-fill"]], template: function StyleFillComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleFillComponent, [{
        type: Component,
        args: [{
                selector: 'map-style-fill',
                template: ' <div class="map-style-fill"></div>'
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleTextComponent, decorators: [{
                type: Optional
            }] }]; }, { color: [{
            type: Input
        }] }); })();

class StyleIconComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.opacity) {
            this.instance.setOpacity(changes.opacity.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.src) {
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
    }
}
StyleIconComponent.ɵfac = function StyleIconComponent_Factory(t) { return new (t || StyleIconComponent)(ɵɵdirectiveInject(StyleComponent, 1)); };
StyleIconComponent.ɵcmp = ɵɵdefineComponent({ type: StyleIconComponent, selectors: [["map-style-icon"]], inputs: { anchor: "anchor", anchorXUnits: "anchorXUnits", anchorYUnits: "anchorYUnits", anchorOrigin: "anchorOrigin", color: "color", crossOrigin: "crossOrigin", img: "img", offset: "offset", offsetOrigin: "offsetOrigin", opacity: "opacity", scale: "scale", snapToPixel: "snapToPixel", rotateWithView: "rotateWithView", rotation: "rotation", size: "size", imgSize: "imgSize", src: "src" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-icon"]], template: function StyleIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleIconComponent, [{
        type: Component,
        args: [{
                selector: 'map-style-icon',
                template: ' <div class="map-style-icon"></div>'
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Host
            }] }]; }, { anchor: [{
            type: Input
        }], anchorXUnits: [{
            type: Input
        }], anchorYUnits: [{
            type: Input
        }], anchorOrigin: [{
            type: Input
        }], color: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], img: [{
            type: Input
        }], offset: [{
            type: Input
        }], offsetOrigin: [{
            type: Input
        }], opacity: [{
            type: Input
        }], scale: [{
            type: Input
        }], snapToPixel: [{
            type: Input
        }], rotateWithView: [{
            type: Input
        }], rotation: [{
            type: Input
        }], size: [{
            type: Input
        }], imgSize: [{
            type: Input
        }], src: [{
            type: Input
        }] }); })();

class StyleStrokeComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('map-style-stroke must be a descendant of aol-style');
        }
        // tslint:disable-next-line: prefer-conditional-expression
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
    }
    ngOnInit() {
        this.instance = new Stroke(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-text':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                break;
            default:
                throw new Error(`unknown host type: ${this.host}`);
            // break;
        }
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        if (changes.lineCap) {
            this.instance.setLineCap(changes.lineCap.currentValue);
        }
        if (changes.lineDash) {
            this.instance.setLineDash(changes.lineDash.currentValue);
        }
        if (changes.lineJoin) {
            this.instance.setLineJoin(changes.lineJoin.currentValue);
        }
        if (changes.miterLimit) {
            this.instance.setMiterLimit(changes.miterLimit.currentValue);
        }
        if (changes.width) {
            this.instance.setWidth(changes.width.currentValue);
        }
        this.host.update();
    }
}
StyleStrokeComponent.ɵfac = function StyleStrokeComponent_Factory(t) { return new (t || StyleStrokeComponent)(ɵɵdirectiveInject(StyleComponent, 8), ɵɵdirectiveInject(StyleCircleComponent, 8), ɵɵdirectiveInject(StyleTextComponent, 8)); };
StyleStrokeComponent.ɵcmp = ɵɵdefineComponent({ type: StyleStrokeComponent, selectors: [["map-style-stroke"]], inputs: { color: "color", lineCap: "lineCap", lineDash: "lineDash", lineJoin: "lineJoin", miterLimit: "miterLimit", width: "width" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-stroke"]], template: function StyleStrokeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StyleStrokeComponent, [{
        type: Component,
        args: [{
                selector: 'map-style-stroke',
                template: '<div class="map-style-stroke"></div>'
            }]
    }], function () { return [{ type: StyleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleCircleComponent, decorators: [{
                type: Optional
            }] }, { type: StyleTextComponent, decorators: [{
                type: Optional
            }] }]; }, { color: [{
            type: Input
        }], lineCap: [{
            type: Input
        }], lineDash: [{
            type: Input
        }], lineJoin: [{
            type: Input
        }], miterLimit: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();

/*
 * Public API Surface of ngx-openlayers
 */
const COMPONENTS = [
    MapComponent,
    ViewComponent,
    GraticuleComponent,
    LayerGroupComponent,
    LayerImageComponent,
    LayerTileComponent,
    LayerVectorComponent,
    LayerVectorTileComponent,
    SourceOsmComponent,
    SourceBingmapsComponent,
    SourceClusterComponent,
    SourceUTFGridComponent,
    SourceVectorComponent,
    SourceXYZComponent,
    SourceVectorTileComponent,
    SourceTileWMSComponent,
    SourceTileWMTSComponent,
    SourceTileJSONComponent,
    SourceGeoJSONComponent,
    SourceImageStaticComponent,
    SourceImageWMSComponent,
    SourceImageArcGISRestComponent,
    SourceRasterComponent,
    FeatureComponent,
    GeometryLinestringComponent,
    GeometryMultiLinestringComponent,
    GeometryMultiPointComponent,
    GeometryMultiPolygonComponent,
    GeometryPointComponent,
    GeometryPolygonComponent,
    GeometryCircleComponent,
    CoordinateComponent,
    CollectionCoordinatesComponent,
    StyleComponent,
    StyleCircleComponent,
    StyleFillComponent,
    StyleIconComponent,
    StyleStrokeComponent,
    StyleTextComponent,
    DefaultControlComponent,
    ControlComponent,
    ControlAttributionComponent,
    ControlFullScreenComponent,
    ControlMousePositionComponent,
    ControlOverviewMapComponent,
    ControlRotateComponent,
    ControlScaleLineComponent,
    ControlZoomComponent,
    ControlZoomSliderComponent,
    ControlZoomToExtentComponent,
    FormatMVTComponent,
    TileGridComponent,
    TileGridWMTSComponent,
    DefaultInteractionComponent,
    DoubleClickZoomInteractionComponent,
    DragAndDropInteractionComponent,
    DragBoxInteractionComponent,
    DragPanInteractionComponent,
    DragRotateInteractionComponent,
    DragRotateAndZoomInteractionComponent,
    DragZoomInteractionComponent,
    MouseWheelZoomInteractionComponent,
    PinchZoomInteractionComponent,
    DrawInteractionComponent,
    SelectInteractionComponent,
    ModifyInteractionComponent,
    TranslateInteractionComponent,
    OverlayComponent,
    ContentComponent,
    AttributionsComponent,
    AttributionComponent
];
class AngularOpenlayersModule {
}
AngularOpenlayersModule.ɵmod = ɵɵdefineNgModule({ type: AngularOpenlayersModule });
AngularOpenlayersModule.ɵinj = ɵɵdefineInjector({ factory: function AngularOpenlayersModule_Factory(t) { return new (t || AngularOpenlayersModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularOpenlayersModule, { declarations: [MapComponent,
        ViewComponent,
        GraticuleComponent,
        LayerGroupComponent,
        LayerImageComponent,
        LayerTileComponent,
        LayerVectorComponent,
        LayerVectorTileComponent,
        SourceOsmComponent,
        SourceBingmapsComponent,
        SourceClusterComponent,
        SourceUTFGridComponent,
        SourceVectorComponent,
        SourceXYZComponent,
        SourceVectorTileComponent,
        SourceTileWMSComponent,
        SourceTileWMTSComponent,
        SourceTileJSONComponent,
        SourceGeoJSONComponent,
        SourceImageStaticComponent,
        SourceImageWMSComponent,
        SourceImageArcGISRestComponent,
        SourceRasterComponent,
        FeatureComponent,
        GeometryLinestringComponent,
        GeometryMultiLinestringComponent,
        GeometryMultiPointComponent,
        GeometryMultiPolygonComponent,
        GeometryPointComponent,
        GeometryPolygonComponent,
        GeometryCircleComponent,
        CoordinateComponent,
        CollectionCoordinatesComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleFillComponent,
        StyleIconComponent,
        StyleStrokeComponent,
        StyleTextComponent,
        DefaultControlComponent,
        ControlComponent,
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent,
        FormatMVTComponent,
        TileGridComponent,
        TileGridWMTSComponent,
        DefaultInteractionComponent,
        DoubleClickZoomInteractionComponent,
        DragAndDropInteractionComponent,
        DragBoxInteractionComponent,
        DragPanInteractionComponent,
        DragRotateInteractionComponent,
        DragRotateAndZoomInteractionComponent,
        DragZoomInteractionComponent,
        MouseWheelZoomInteractionComponent,
        PinchZoomInteractionComponent,
        DrawInteractionComponent,
        SelectInteractionComponent,
        ModifyInteractionComponent,
        TranslateInteractionComponent,
        OverlayComponent,
        ContentComponent,
        AttributionsComponent,
        AttributionComponent], imports: [CommonModule], exports: [MapComponent,
        ViewComponent,
        GraticuleComponent,
        LayerGroupComponent,
        LayerImageComponent,
        LayerTileComponent,
        LayerVectorComponent,
        LayerVectorTileComponent,
        SourceOsmComponent,
        SourceBingmapsComponent,
        SourceClusterComponent,
        SourceUTFGridComponent,
        SourceVectorComponent,
        SourceXYZComponent,
        SourceVectorTileComponent,
        SourceTileWMSComponent,
        SourceTileWMTSComponent,
        SourceTileJSONComponent,
        SourceGeoJSONComponent,
        SourceImageStaticComponent,
        SourceImageWMSComponent,
        SourceImageArcGISRestComponent,
        SourceRasterComponent,
        FeatureComponent,
        GeometryLinestringComponent,
        GeometryMultiLinestringComponent,
        GeometryMultiPointComponent,
        GeometryMultiPolygonComponent,
        GeometryPointComponent,
        GeometryPolygonComponent,
        GeometryCircleComponent,
        CoordinateComponent,
        CollectionCoordinatesComponent,
        StyleComponent,
        StyleCircleComponent,
        StyleFillComponent,
        StyleIconComponent,
        StyleStrokeComponent,
        StyleTextComponent,
        DefaultControlComponent,
        ControlComponent,
        ControlAttributionComponent,
        ControlFullScreenComponent,
        ControlMousePositionComponent,
        ControlOverviewMapComponent,
        ControlRotateComponent,
        ControlScaleLineComponent,
        ControlZoomComponent,
        ControlZoomSliderComponent,
        ControlZoomToExtentComponent,
        FormatMVTComponent,
        TileGridComponent,
        TileGridWMTSComponent,
        DefaultInteractionComponent,
        DoubleClickZoomInteractionComponent,
        DragAndDropInteractionComponent,
        DragBoxInteractionComponent,
        DragPanInteractionComponent,
        DragRotateInteractionComponent,
        DragRotateAndZoomInteractionComponent,
        DragZoomInteractionComponent,
        MouseWheelZoomInteractionComponent,
        PinchZoomInteractionComponent,
        DrawInteractionComponent,
        SelectInteractionComponent,
        ModifyInteractionComponent,
        TranslateInteractionComponent,
        OverlayComponent,
        ContentComponent,
        AttributionsComponent,
        AttributionComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularOpenlayersModule, [{
        type: NgModule,
        args: [{
                declarations: COMPONENTS,
                imports: [CommonModule],
                exports: COMPONENTS
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AngularOpenlayersModule, AttributionComponent, AttributionsComponent, CollectionCoordinatesComponent, ContentComponent, ControlAttributionComponent, ControlComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, CoordinateComponent, DefaultControlComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateAndZoomInteractionComponent, DragRotateInteractionComponent, DragZoomInteractionComponent, DrawInteractionComponent, FeatureComponent, FormatMVTComponent, GeometryCircleComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GraticuleComponent, LayerComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, MapComponent, ModifyInteractionComponent, MouseWheelZoomInteractionComponent, OverlayComponent, PinchZoomInteractionComponent, SelectInteractionComponent, SimpleGeometryComponent, SourceBingmapsComponent, SourceClusterComponent, SourceComponent, SourceGeoJSONComponent, SourceImageArcGISRestComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceOsmComponent, SourceRasterComponent, SourceTileJSONComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceUTFGridComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, TileGridComponent, TileGridWMTSComponent, TranslateInteractionComponent, ViewComponent };
//# sourceMappingURL=ng-maps.js.map
