import { CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ɵɵinvalidFactory, ɵɵdefineDirective, ɵɵNgOnChangesFeature, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, Host, ContentChildren, EventEmitter, ɵɵelement, ɵɵstyleProp, Input, Output, ɵɵInheritDefinitionFeature, SkipSelf, Optional, ɵɵProvidersFeature, forwardRef, ɵɵstaticContentQuery, ContentChild, ɵɵgetInheritedFactory, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Attribution, Control, defaults, FullScreen, OverviewMap, Rotate, ScaleLine, Zoom, ZoomSlider, ZoomToExtent } from 'ol/control';
import { __values, __extends } from 'tslib';
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

var _c0 = ["*"];
var AttributionComponent = /** @class */ (function () {
    function AttributionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AttributionComponent.prototype.ngOnInit = function () {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    };
    AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(ɵɵdirectiveInject(ElementRef)); };
    AttributionComponent.ɵcmp = ɵɵdefineComponent({ type: AttributionComponent, selectors: [["map-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return AttributionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'map-attribution',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

var LayerComponent = /** @class */ (function () {
    function LayerComponent(host) {
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
    LayerComponent.prototype.ngOnInit = function () {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers()
            .push(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.getLayers()
            .remove(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    LayerComponent.ɵfac = function LayerComponent_Factory(t) { ɵɵinvalidFactory(); };
    LayerComponent.ɵdir = ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [ɵɵNgOnChangesFeature] });
    return LayerComponent;
}());

var SourceComponent = /** @class */ (function () {
    function SourceComponent(host) {
        this.host = host;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnDestroy = function () {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(undefined);
        }
    };
    SourceComponent.prototype._register = function (s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    };
    SourceComponent.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(ɵɵdirectiveInject(LayerComponent)); };
    SourceComponent.ɵdir = ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });
    return SourceComponent;
}());

var _c0$1 = ["*"];
var AttributionsComponent = /** @class */ (function () {
    function AttributionsComponent(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    AttributionsComponent.prototype.ngAfterViewInit = function () {
        if (this.attributions.length) {
            this.instance = this.attributions.map(function (cmp) { return cmp.instance; });
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
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
    return AttributionsComponent;
}());
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

var _c0$2 = ["*"];
var MapComponent = /** @class */ (function () {
    function MapComponent(host) {
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
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', function (event) { _this.olClick.emit(event); });
        this.instance.on('dblclick', function (event) { _this.dblClick.emit(event); });
        this.instance.on('movestart', function (event) { _this.moveStart.emit(event); });
        this.instance.on('moveend', function (event) { _this.moveEnd.emit(event); });
        this.instance.on('pointerdrag', function (event) { _this.pointerDrag.emit(event); });
        this.instance.on('pointermove', function (event) { _this.pointerMove.emit(event); });
        this.instance.on('postrender', function (event) { _this.onpostrender.emit(event); });
        this.instance.on('postrender', function (event) { _this.postRender.emit(event); });
        this.instance.on('prerender', function (event) { _this.onprerender.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.instance.on('singleclick', function (event) { _this.singleClick.emit(event); });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        this.instance.updateSize();
    };
    MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(ɵɵdirectiveInject(ElementRef)); };
    MapComponent.ɵcmp = ɵɵdefineComponent({ type: MapComponent, selectors: [["map-map"]], inputs: { width: "width", height: "height", pixelRatio: "pixelRatio", keyboardEventTarget: "keyboardEventTarget", loadTilesWhileAnimating: "loadTilesWhileAnimating", loadTilesWhileInteracting: "loadTilesWhileInteracting", logo: "logo", renderer: "renderer" }, outputs: { olClick: "olClick", dblClick: "dblClick", moveStart: "moveStart", moveEnd: "moveEnd", pointerDrag: "pointerDrag", pointerMove: "pointerMove", onpostrender: "onpostrender", postRender: "postRender", onprerender: "onprerender", propertyChange: "propertyChange", singleClick: "singleClick" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$2, decls: 2, vars: 4, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelement(0, "div");
            ɵɵprojection(1);
        } if (rf & 2) {
            ɵɵstyleProp("width", ctx.width)("height", ctx.height);
        } }, encapsulation: 2 });
    return MapComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MapComponent, [{
        type: Component,
        args: [{
                selector: 'map-map',
                template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
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

var _c0$3 = ["*"];
var LayerGroupComponent = /** @class */ (function (_super) {
    __extends(LayerGroupComponent, _super);
    function LayerGroupComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerGroupComponent.prototype.ngOnInit = function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerGroupComponent.ɵfac = function LayerGroupComponent_Factory(t) { return new (t || LayerGroupComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 12)); };
    LayerGroupComponent.ɵcmp = ɵɵdefineComponent({ type: LayerGroupComponent, selectors: [["map-layer-group"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function LayerGroupComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return LayerGroupComponent;
}(LayerComponent));
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

var _c0$4 = ["*"];
var LayerVectorComponent = /** @class */ (function (_super) {
    __extends(LayerVectorComponent, _super);
    function LayerVectorComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerVectorComponent.prototype.ngOnInit = function () {
        this.instance = new Vector(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorComponent.ɵfac = function LayerVectorComponent_Factory(t) { return new (t || LayerVectorComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
    LayerVectorComponent.ɵcmp = ɵɵdefineComponent({ type: LayerVectorComponent, selectors: [["map-layer-vector"]], inputs: { renderBuffer: "renderBuffer", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$4, decls: 1, vars: 0, template: function LayerVectorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return LayerVectorComponent;
}(LayerComponent));
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

var _c0$5 = ["*"];
var SourceVectorComponent = /** @class */ (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorComponent.ɵfac = function SourceVectorComponent_Factory(t) { return new (t || SourceVectorComponent)(ɵɵdirectiveInject(LayerVectorComponent, 1)); };
    SourceVectorComponent.ɵcmp = ɵɵdefineComponent({ type: SourceVectorComponent, selectors: [["map-source-vector"]], inputs: { overlaps: "overlaps", useSpatialIndex: "useSpatialIndex", wrapX: "wrapX", url: "url", format: "format", strategy: "strategy" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorComponent; }) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function SourceVectorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceVectorComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceVectorComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-vector',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorComponent; }) }]
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

var _c0$6 = ["*"];
var FeatureComponent = /** @class */ (function () {
    function FeatureComponent(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    };
    FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(ɵɵdirectiveInject(SourceVectorComponent)); };
    FeatureComponent.ɵcmp = ɵɵdefineComponent({ type: FeatureComponent, selectors: [["map-feature"]], inputs: { id: "id" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return FeatureComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FeatureComponent, [{
        type: Component,
        args: [{
                selector: 'map-feature',
                template: ' <ng-content></ng-content>'
            }]
    }], function () { return [{ type: SourceVectorComponent }]; }, { id: [{
            type: Input
        }] }); })();

var SimpleGeometryComponent = /** @class */ (function () {
    function SimpleGeometryComponent(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    SimpleGeometryComponent.prototype.ngOnInit = function () {
        this.host.instance.setGeometry(this.instance);
    };
    SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    SimpleGeometryComponent.ɵdir = ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } });
    return SimpleGeometryComponent;
}());

var _c0$7 = ["*"];
var GeometryLinestringComponent = /** @class */ (function (_super) {
    __extends(GeometryLinestringComponent, _super);
    // tslint:disable-next-line: unnecessary-constructor
    function GeometryLinestringComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-linestring';
        return _this;
    }
    GeometryLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new LineString([
            [0, 0],
            [1, 1]
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryLinestringComponent.ɵfac = function GeometryLinestringComponent_Factory(t) { return new (t || GeometryLinestringComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryLinestringComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryLinestringComponent, selectors: [["map-geometry-linestring"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$7, decls: 1, vars: 0, template: function GeometryLinestringComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryLinestringComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-linestring',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

var _c0$8 = ["*"];
var GeometryMultiLinestringComponent = /** @class */ (function (_super) {
    __extends(GeometryMultiLinestringComponent, _super);
    // tslint:disable-next-line: unnecessary-constructor
    function GeometryMultiLinestringComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-multilinestring';
        return _this;
    }
    GeometryMultiLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new MultiLineString([
            [
                [0, 0],
                [1, 1]
            ]
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiLinestringComponent.ɵfac = function GeometryMultiLinestringComponent_Factory(t) { return new (t || GeometryMultiLinestringComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryMultiLinestringComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryMultiLinestringComponent, selectors: [["map-geometry-multilinestring"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function GeometryMultiLinestringComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryMultiLinestringComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryMultiLinestringComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multilinestring',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

var _c0$9 = ["*"];
var GeometryMultiPointComponent = /** @class */ (function (_super) {
    __extends(GeometryMultiPointComponent, _super);
    // tslint:disable-next-line: unnecessary-constructor
    function GeometryMultiPointComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-multipoint';
        return _this;
    }
    GeometryMultiPointComponent.prototype.ngOnInit = function () {
        this.instance = new MultiPoint([
            [0, 0],
            [1, 1]
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiPointComponent.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryMultiPointComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["map-geometry-multipoint"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$9, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryMultiPointComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryMultiPointComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multipoint',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

var _c0$a = ["*"];
var GeometryMultiPolygonComponent = /** @class */ (function (_super) {
    __extends(GeometryMultiPolygonComponent, _super);
    // tslint:disable-next-line: unnecessary-constructor
    function GeometryMultiPolygonComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-multipolygon';
        return _this;
    }
    GeometryMultiPolygonComponent.prototype.ngOnInit = function () {
        this.instance = new MultiPolygon([
            [
                [
                    [0, 0],
                    [1, 1],
                    [0, 1]
                ]
            ]
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiPolygonComponent.ɵfac = function GeometryMultiPolygonComponent_Factory(t) { return new (t || GeometryMultiPolygonComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryMultiPolygonComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryMultiPolygonComponent, selectors: [["map-geometry-multipolygon"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function GeometryMultiPolygonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryMultiPolygonComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryMultiPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multipolygon',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

var _c0$b = ["*"];
var GeometryPolygonComponent = /** @class */ (function (_super) {
    __extends(GeometryPolygonComponent, _super);
    // tslint:disable-next-line: unnecessary-constructor
    function GeometryPolygonComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-polygon';
        return _this;
    }
    GeometryPolygonComponent.prototype.ngOnInit = function () {
        this.instance = new Polygon([
            [
                [0, 0],
                [1, 1],
                [0, 1]
            ]
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPolygonComponent.ɵfac = function GeometryPolygonComponent_Factory(t) { return new (t || GeometryPolygonComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryPolygonComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryPolygonComponent, selectors: [["map-geometry-polygon"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$b, decls: 1, vars: 0, template: function GeometryPolygonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryPolygonComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryPolygonComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-polygon',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

var CollectionCoordinatesComponent = /** @class */ (function () {
    function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
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
    CollectionCoordinatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.instance.on('change:view', function (e) { _this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.ngOnChanges = function (changes) {
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.onMapViewChanged = function (event) {
        this.mapSrid = event.target.get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    };
    CollectionCoordinatesComponent.prototype.transformCoordinates = function () {
        var _this = this;
        var transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map(function (c) { return transform(c, _this.srid, _this.mapSrid); });
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map(function (cc) {
                        return cc.map(function (c) { return transform(c, _this.srid, _this.mapSrid); });
                    });
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map(function (ccc) {
                        return ccc.map(function (cc) { return cc.map(function (c) { return transform(c, _this.srid, _this.mapSrid); }); });
                    });
                    break;
                default:
                    break;
            }
        }
        // tslint:disable-next-line: no-non-null-assertion no-unnecessary-type-assertion
        this.host.instance.setCoordinates(transformedCoordinates);
    };
    CollectionCoordinatesComponent.ɵfac = function CollectionCoordinatesComponent_Factory(t) { return new (t || CollectionCoordinatesComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(GeometryLinestringComponent, 8), ɵɵdirectiveInject(GeometryPolygonComponent, 8), ɵɵdirectiveInject(GeometryMultiPointComponent, 8), ɵɵdirectiveInject(GeometryMultiLinestringComponent, 8), ɵɵdirectiveInject(GeometryMultiPolygonComponent, 8)); };
    CollectionCoordinatesComponent.ɵcmp = ɵɵdefineComponent({ type: CollectionCoordinatesComponent, selectors: [["map-collection-coordinates"]], inputs: { coordinates: "coordinates", srid: "srid" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-collection-coordinates"]], template: function CollectionCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return CollectionCoordinatesComponent;
}());
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

var _c0$c = ["*"];
var ContentComponent = /** @class */ (function () {
    function ContentComponent(elementRef) {
        this.elementRef = elementRef;
    }
    ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(ɵɵdirectiveInject(ElementRef)); };
    ContentComponent.ɵcmp = ɵɵdefineComponent({ type: ContentComponent, selectors: [["map-content"]], ngContentSelectors: _c0$c, decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ContentComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ContentComponent, [{
        type: Component,
        args: [{
                selector: 'map-content',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

var ControlAttributionComponent = /** @class */ (function () {
    function ControlAttributionComponent(map, element) {
        this.map = map;
        this.element = element;
        this.componentType = 'control';
    }
    ControlAttributionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        this.instance = new Attribution(this);
        this.map.instance.addControl(this.instance);
    };
    ControlAttributionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlAttributionComponent.ɵfac = function ControlAttributionComponent_Factory(t) { return new (t || ControlAttributionComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(ElementRef)); };
    ControlAttributionComponent.ɵcmp = ɵɵdefineComponent({ type: ControlAttributionComponent, selectors: [["map-control-attribution"]], inputs: { collapsible: "collapsible" }, decls: 0, vars: 0, template: function ControlAttributionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return ControlAttributionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlAttributionComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-attribution',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }, { type: ElementRef }]; }, { collapsible: [{
            type: Input
        }] }); })();

var _c0$d = ["*"];
var ControlComponent = /** @class */ (function () {
    function ControlComponent(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    };
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
    return ControlComponent;
}());
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

var DefaultControlComponent = /** @class */ (function () {
    function DefaultControlComponent(map) {
        this.map = map;
    }
    DefaultControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach(function (c) { _this.map.instance.addControl(c); });
    };
    DefaultControlComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // console.log('removing aol-control-defaults');
        this.instance.forEach(function (c) { return _this.map.instance.removeControl(c); });
    };
    DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(ɵɵdirectiveInject(MapComponent)); };
    DefaultControlComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["map-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DefaultControlComponent;
}());
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

var _c0$e = ["*"];
var ControlFullScreenComponent = /** @class */ (function () {
    function ControlFullScreenComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ControlFullScreenComponent.prototype.ngOnInit = function () {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    };
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    };
    ControlFullScreenComponent.ɵfac = function ControlFullScreenComponent_Factory(t) { return new (t || ControlFullScreenComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlFullScreenComponent.ɵcmp = ɵɵdefineComponent({ type: ControlFullScreenComponent, selectors: [["map-control-fullscreen"]], inputs: { className: "className", label: "label", labelActive: "labelActive", tipLabel: "tipLabel", keys: "keys" }, ngContentSelectors: _c0$e, decls: 1, vars: 0, template: function ControlFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlFullScreenComponent;
}());
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

var ControlMousePositionComponent = /** @class */ (function () {
    function ControlMousePositionComponent(map, element) {
        this.map = map;
        this.element = element;
    }
    ControlMousePositionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    };
    ControlMousePositionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlMousePositionComponent.ɵfac = function ControlMousePositionComponent_Factory(t) { return new (t || ControlMousePositionComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(ElementRef)); };
    ControlMousePositionComponent.ɵcmp = ɵɵdefineComponent({ type: ControlMousePositionComponent, selectors: [["map-control-mouseposition"]], inputs: { coordinateFormat: "coordinateFormat", projection: "projection" }, decls: 0, vars: 0, template: function ControlMousePositionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return ControlMousePositionComponent;
}());
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

var _c0$f = ["*"];
var ControlOverviewMapComponent = /** @class */ (function () {
    function ControlOverviewMapComponent(map) {
        this.map = map;
    }
    ControlOverviewMapComponent.prototype.ngOnInit = function () {
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlOverviewMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance !== undefined && changes.hasOwnProperty('view')) {
            this.reloadInstance();
        }
    };
    ControlOverviewMapComponent.prototype.reloadInstance = function () {
        this.map.instance.removeControl(this.instance);
        this.instance = new OverviewMap(this);
        this.map.instance.addControl(this.instance);
    };
    ControlOverviewMapComponent.ɵfac = function ControlOverviewMapComponent_Factory(t) { return new (t || ControlOverviewMapComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlOverviewMapComponent.ɵcmp = ɵɵdefineComponent({ type: ControlOverviewMapComponent, selectors: [["map-control-overviewmap"]], inputs: { collapsed: "collapsed", collapseLabel: "collapseLabel", collapsible: "collapsible", label: "label", layers: "layers", target: "target", tipLabel: "tipLabel", view: "view" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$f, decls: 1, vars: 0, template: function ControlOverviewMapComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlOverviewMapComponent;
}());
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

var _c0$g = ["*"];
var ControlRotateComponent = /** @class */ (function () {
    function ControlRotateComponent(map) {
        this.map = map;
    }
    ControlRotateComponent.prototype.ngOnInit = function () {
        this.instance = new Rotate(this);
        this.map.instance.addControl(this.instance);
    };
    ControlRotateComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlRotateComponent.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlRotateComponent.ɵcmp = ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["map-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlRotateComponent;
}());
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

var _c0$h = ["*"];
var ControlScaleLineComponent = /** @class */ (function () {
    function ControlScaleLineComponent(map) {
        this.map = map;
    }
    ControlScaleLineComponent.prototype.ngOnInit = function () {
        this.instance = new ScaleLine(this);
        this.map.instance.addControl(this.instance);
    };
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlScaleLineComponent.ɵfac = function ControlScaleLineComponent_Factory(t) { return new (t || ControlScaleLineComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlScaleLineComponent.ɵcmp = ɵɵdefineComponent({ type: ControlScaleLineComponent, selectors: [["map-control-scaleline"]], inputs: { units: "units" }, ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function ControlScaleLineComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlScaleLineComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ControlScaleLineComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-scaleline',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }]; }, { units: [{
            type: Input
        }] }); })();

var _c0$i = ["*"];
var ControlZoomComponent = /** @class */ (function () {
    function ControlZoomComponent(map) {
        this.map = map;
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomComponent.ɵfac = function ControlZoomComponent_Factory(t) { return new (t || ControlZoomComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlZoomComponent.ɵcmp = ɵɵdefineComponent({ type: ControlZoomComponent, selectors: [["map-control-zoom"]], inputs: { duration: "duration", zoomInLabel: "zoomInLabel", zoomOutLabel: "zoomOutLabel", zoomInTipLabel: "zoomInTipLabel", zoomOutTipLabel: "zoomOutTipLabel", delta: "delta" }, ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function ControlZoomComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlZoomComponent;
}());
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

var _c0$j = ["*"];
var ControlZoomSliderComponent = /** @class */ (function () {
    function ControlZoomSliderComponent(map) {
        this.map = map;
    }
    ControlZoomSliderComponent.prototype.ngOnInit = function () {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomSliderComponent.ɵfac = function ControlZoomSliderComponent_Factory(t) { return new (t || ControlZoomSliderComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlZoomSliderComponent.ɵcmp = ɵɵdefineComponent({ type: ControlZoomSliderComponent, selectors: [["map-control-zoomslider"]], inputs: { className: "className", duration: "duration", maxResolution: "maxResolution", minResolution: "minResolution" }, ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function ControlZoomSliderComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlZoomSliderComponent;
}());
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

var _c0$k = ["*"];
var ControlZoomToExtentComponent = /** @class */ (function () {
    function ControlZoomToExtentComponent(map) {
        this.map = map;
    }
    ControlZoomToExtentComponent.prototype.ngOnInit = function () {
        this.instance = new ZoomToExtent(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomToExtentComponent.ɵfac = function ControlZoomToExtentComponent_Factory(t) { return new (t || ControlZoomToExtentComponent)(ɵɵdirectiveInject(MapComponent)); };
    ControlZoomToExtentComponent.ɵcmp = ɵɵdefineComponent({ type: ControlZoomToExtentComponent, selectors: [["map-control-zoomtoextent"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", extent: "extent" }, ngContentSelectors: _c0$k, decls: 1, vars: 0, template: function ControlZoomToExtentComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlZoomToExtentComponent;
}());
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

var _c0$l = ["*"];
var GeometryCircleComponent = /** @class */ (function (_super) {
    __extends(GeometryCircleComponent, _super);
    function GeometryCircleComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        _this.instance = new Circle([0, 0]);
        return _this;
    }
    Object.defineProperty(GeometryCircleComponent.prototype, "radius", {
        get: function () {
            return this.instance.getRadius();
        },
        set: function (radius) {
            this.instance.setRadius(radius);
        },
        enumerable: true,
        configurable: true
    });
    GeometryCircleComponent.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryCircleComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["map-geometry-circle"]], inputs: { radius: "radius" }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryCircleComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryCircleComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-circle',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, { radius: [{
            type: Input
        }] }); })();

var _c0$m = ["*"];
var GeometryPointComponent = /** @class */ (function (_super) {
    __extends(GeometryPointComponent, _super);
    // tslint:disable-next-line: unnecessary-constructor
    function GeometryPointComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-point';
        return _this;
    }
    GeometryPointComponent.prototype.ngOnInit = function () {
        this.instance = new Point([0, 0]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryPointComponent.ɵfac = function GeometryPointComponent_Factory(t) { return new (t || GeometryPointComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(FeatureComponent)); };
    GeometryPointComponent.ɵcmp = ɵɵdefineComponent({ type: GeometryPointComponent, selectors: [["map-geometry-point"]], features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$m, decls: 1, vars: 0, template: function GeometryPointComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryPointComponent;
}(SimpleGeometryComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeometryPointComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-point',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, null); })();

var _c0$n = ["*"];
var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    OverlayComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    };
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
    return OverlayComponent;
}());
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

var _c0$o = ["*"];
var ViewComponent = /** @class */ (function () {
    function ViewComponent(host) {
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
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', function (event) { _this.changeZoom.emit(event); });
        this.instance.on('change:resolution', function (event) { _this.changeResolution.emit(event); });
        this.instance.on('change:center', function (event) { _this.changeCenter.emit(event); });
    };
    ViewComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.instance.setProperties(properties, false);
    };
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(ɵɵdirectiveInject(MapComponent)); };
    ViewComponent.ɵcmp = ɵɵdefineComponent({ type: ViewComponent, selectors: [["map-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", zoomAnimation: "zoomAnimation" }, outputs: { changeZoom: "changeZoom", changeResolution: "changeResolution", changeCenter: "changeCenter" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$o, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ViewComponent;
}());
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

var CoordinateComponent = /** @class */ (function () {
    function CoordinateComponent(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
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
    CoordinateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.instance.on('change:view', function (e) { _this.onMapViewChanged(e); });
        this.mapSrid = this.map.instance.getView()
            .getProjection()
            .getCode();
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.ngOnChanges = function (changes) {
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.onMapViewChanged = function (event) {
        this.mapSrid = event.target.get(event.key)
            .getProjection()
            .getCode();
        this.transformCoordinates();
    };
    CoordinateComponent.prototype.transformCoordinates = function () {
        var transformedCoordinates;
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
    };
    CoordinateComponent.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(ViewComponent, 8), ɵɵdirectiveInject(GeometryPointComponent, 8), ɵɵdirectiveInject(GeometryCircleComponent, 8), ɵɵdirectiveInject(OverlayComponent, 8)); };
    CoordinateComponent.ɵcmp = ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["map-coordinate"]], inputs: { x: "x", y: "y", srid: "srid" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return CoordinateComponent;
}());
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

var FormatComponent = /** @class */ (function () {
    function FormatComponent() {
        this.componentType = 'format';
    }
    return FormatComponent;
}());

var FormatMVTComponent = /** @class */ (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); };
    FormatMVTComponent.ɵcmp = ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["map-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent; }) }]), ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return FormatMVTComponent;
}(FormatComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'map-format-mvt',
                template: '',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent; }) }]
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

var _c0$p = ["*"];
var GraticuleComponent = /** @class */ (function () {
    function GraticuleComponent(map) {
        this.map = map;
        this.componentType = 'graticule';
        this.props = [
            'strokeStyle',
            'showLabels',
            'lonLabelPosition',
            'latLabelPosition'
        ];
    }
    GraticuleComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.prototype.ngAfterContentInit = function () {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition
        });
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.prototype.ngOnDestroy = function () {
        this.instance.setMap(undefined);
    };
    GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(ɵɵdirectiveInject(MapComponent)); };
    GraticuleComponent.ɵcmp = ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["map-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$p, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GraticuleComponent;
}());
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

var DefaultInteractionComponent = /** @class */ (function () {
    function DefaultInteractionComponent(map) {
        this.map = map;
    }
    DefaultInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = defaults$1();
        this.instance.forEach(function (i) { _this.map.instance.addInteraction(i); });
    };
    DefaultInteractionComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.instance.forEach(function (i) { return _this.map.instance.removeInteraction(i); });
    };
    DefaultInteractionComponent.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DefaultInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["map-interaction-default"]], decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DefaultInteractionComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-default',
                template: ''
            }]
    }], function () { return [{ type: MapComponent }]; }, null); })();

var DoubleClickZoomInteractionComponent = /** @class */ (function () {
    function DoubleClickZoomInteractionComponent(map) {
        this.map = map;
    }
    DoubleClickZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DoubleClickZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DoubleClickZoomInteractionComponent.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) { return new (t || DoubleClickZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DoubleClickZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DoubleClickZoomInteractionComponent, selectors: [["map-interaction-doubleclickzoom"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DoubleClickZoomInteractionComponent;
}());
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

var DragAndDropInteractionComponent = /** @class */ (function () {
    function DragAndDropInteractionComponent(map) {
        this.map = map;
    }
    DragAndDropInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragAndDrop(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragAndDropInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragAndDropInteractionComponent.ɵfac = function DragAndDropInteractionComponent_Factory(t) { return new (t || DragAndDropInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DragAndDropInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragAndDropInteractionComponent, selectors: [["map-interaction-draganddrop"]], inputs: { formatConstructors: "formatConstructors", projection: "projection", target: "target" }, decls: 0, vars: 0, template: function DragAndDropInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragAndDropInteractionComponent;
}());
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

var DragBoxInteractionComponent = /** @class */ (function () {
    function DragBoxInteractionComponent(map) {
        this.map = map;
    }
    DragBoxInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragBoxInteractionComponent.ɵfac = function DragBoxInteractionComponent_Factory(t) { return new (t || DragBoxInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DragBoxInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragBoxInteractionComponent, selectors: [["map-interaction-dragbox"]], inputs: { className: "className", condition: "condition", boxEndCondition: "boxEndCondition" }, decls: 0, vars: 0, template: function DragBoxInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragBoxInteractionComponent;
}());
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

var DragPanInteractionComponent = /** @class */ (function () {
    function DragPanInteractionComponent(map) {
        this.map = map;
    }
    DragPanInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragPan(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragPanInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragPanInteractionComponent.ɵfac = function DragPanInteractionComponent_Factory(t) { return new (t || DragPanInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DragPanInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragPanInteractionComponent, selectors: [["map-interaction-dragpan"]], inputs: { condition: "condition", kinetic: "kinetic" }, decls: 0, vars: 0, template: function DragPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragPanInteractionComponent;
}());
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

var DragRotateInteractionComponent = /** @class */ (function () {
    function DragRotateInteractionComponent(map) {
        this.map = map;
    }
    DragRotateInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragRotate(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragRotateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragRotateInteractionComponent.ɵfac = function DragRotateInteractionComponent_Factory(t) { return new (t || DragRotateInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DragRotateInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragRotateInteractionComponent, selectors: [["map-interaction-dragrotate"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragRotateInteractionComponent;
}());
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

var DragRotateAndZoomInteractionComponent = /** @class */ (function () {
    function DragRotateAndZoomInteractionComponent(map) {
        this.map = map;
    }
    DragRotateAndZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragRotateAndZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragRotateAndZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragRotateAndZoomInteractionComponent.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) { return new (t || DragRotateAndZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DragRotateAndZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragRotateAndZoomInteractionComponent, selectors: [["map-interaction-dragrotateandzoom"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragRotateAndZoomInteractionComponent;
}());
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

var DragZoomInteractionComponent = /** @class */ (function () {
    function DragZoomInteractionComponent(map) {
        this.map = map;
    }
    DragZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragZoomInteractionComponent.ɵfac = function DragZoomInteractionComponent_Factory(t) { return new (t || DragZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DragZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DragZoomInteractionComponent, selectors: [["map-interaction-dragzoom"]], inputs: { className: "className", condition: "condition", duration: "duration", out: "out" }, decls: 0, vars: 0, template: function DragZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragZoomInteractionComponent;
}());
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

var DrawInteractionComponent = /** @class */ (function () {
    function DrawInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.drawEnd = new EventEmitter();
        this.drawStart = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    DrawInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Draw(this);
        this.instance.on('change', function (event) { _this.olChange.emit(event); });
        this.instance.on('change:active', function (event) { _this.olChangeActive.emit(event); });
        this.instance.on('drawend', function (event) { _this.drawEnd.emit(event); });
        this.instance.on('drawstart', function (event) { _this.drawStart.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    DrawInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DrawInteractionComponent.ɵfac = function DrawInteractionComponent_Factory(t) { return new (t || DrawInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    DrawInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: DrawInteractionComponent, selectors: [["map-interaction-draw"]], inputs: { clickTolerance: "clickTolerance", features: "features", source: "source", snapTolerance: "snapTolerance", type: "type", maxPoints: "maxPoints", minPoints: "minPoints", finishCondition: "finishCondition", style: "style", geometryFunction: "geometryFunction", geometryName: "geometryName", condition: "condition", freehandCondition: "freehandCondition", freehand: "freehand", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", drawEnd: "drawEnd", drawStart: "drawStart", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function DrawInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DrawInteractionComponent;
}());
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

var ModifyInteractionComponent = /** @class */ (function () {
    function ModifyInteractionComponent(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ModifyInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Modify(this);
        this.instance.on('change', function (event) { _this.olChange.emit(event); });
        this.instance.on('change:active', function (event) { _this.olChangeActive.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.instance.on('modifyend', function (event) { _this.modifyEnd.emit(event); });
        this.instance.on('modifystart', function (event) { _this.modifyStart.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    ModifyInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    ModifyInteractionComponent.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    ModifyInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["map-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { modifyEnd: "modifyEnd", modifyStart: "modifyStart", olChange: "olChange", olChangeActive: "olChangeActive", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return ModifyInteractionComponent;
}());
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

var MouseWheelZoomInteractionComponent = /** @class */ (function () {
    function MouseWheelZoomInteractionComponent(map) {
        this.map = map;
    }
    MouseWheelZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new MouseWheelZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    MouseWheelZoomInteractionComponent.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) { return new (t || MouseWheelZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    MouseWheelZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: MouseWheelZoomInteractionComponent, selectors: [["map-interaction-mousewheelzoom"]], inputs: { duration: "duration", timeout: "timeout", useAnchor: "useAnchor" }, decls: 0, vars: 0, template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return MouseWheelZoomInteractionComponent;
}());
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

var PinchZoomInteractionComponent = /** @class */ (function () {
    function PinchZoomInteractionComponent(map) {
        this.map = map;
    }
    PinchZoomInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new PinchZoom(this);
        this.map.instance.addInteraction(this.instance);
    };
    PinchZoomInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    PinchZoomInteractionComponent.ɵfac = function PinchZoomInteractionComponent_Factory(t) { return new (t || PinchZoomInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    PinchZoomInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: PinchZoomInteractionComponent, selectors: [["map-interaction-pinchzoom"]], inputs: { duration: "duration", constrainResolution: "constrainResolution" }, decls: 0, vars: 0, template: function PinchZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return PinchZoomInteractionComponent;
}());
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

var SelectInteractionComponent = /** @class */ (function () {
    function SelectInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    SelectInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Select(this);
        this.instance.on('change', function (event) { _this.olChange.emit(event); });
        this.instance.on('select', function (event) { _this.olSelect.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    SelectInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    SelectInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["map-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olSelect: "olSelect", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return SelectInteractionComponent;
}());
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

var TranslateInteractionComponent = /** @class */ (function () {
    function TranslateInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    TranslateInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Translate(this);
        this.instance.on('change', function (event) { _this.olChange.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.instance.on('translateend', function (event) { _this.translateEnd.emit(event); });
        this.instance.on('translatestart', function (event) { _this.translateStart.emit(event); });
        this.instance.on('translating', function (event) { _this.translating.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    TranslateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    TranslateInteractionComponent.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(ɵɵdirectiveInject(MapComponent)); };
    TranslateInteractionComponent.ɵcmp = ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["map-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return TranslateInteractionComponent;
}());
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

var _c0$q = ["*"];
var LayerImageComponent = /** @class */ (function (_super) {
    __extends(LayerImageComponent, _super);
    function LayerImageComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerImageComponent.prototype.ngOnInit = function () {
        this.instance = new Image(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerImageComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerImageComponent.ɵfac = function LayerImageComponent_Factory(t) { return new (t || LayerImageComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
    LayerImageComponent.ɵcmp = ɵɵdefineComponent({ type: LayerImageComponent, selectors: [["map-layer-image"]], inputs: { opacity: "opacity", visible: "visible", extent: "extent", minResolution: "minResolution", maxResolution: "maxResolution", zIndex: "zIndex" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$q, decls: 1, vars: 0, template: function LayerImageComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return LayerImageComponent;
}(LayerComponent));
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

var _c0$r = ["*"];
var LayerTileComponent = /** @class */ (function (_super) {
    __extends(LayerTileComponent, _super);
    function LayerTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new Tile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerTileComponent.ɵfac = function LayerTileComponent_Factory(t) { return new (t || LayerTileComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
    LayerTileComponent.ɵcmp = ɵɵdefineComponent({ type: LayerTileComponent, selectors: [["map-layer-tile"]], inputs: { preload: "preload", useInterimTilesOnError: "useInterimTilesOnError" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$r, decls: 1, vars: 0, template: function LayerTileComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return LayerTileComponent;
}(LayerComponent));
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

var _c0$s = ["*"];
var LayerVectorTileComponent = /** @class */ (function (_super) {
    __extends(LayerVectorTileComponent, _super);
    function LayerVectorTileComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerVectorTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorTileComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorTileComponent.ɵfac = function LayerVectorTileComponent_Factory(t) { return new (t || LayerVectorTileComponent)(ɵɵdirectiveInject(MapComponent), ɵɵdirectiveInject(LayerGroupComponent, 8)); };
    LayerVectorTileComponent.ɵcmp = ɵɵdefineComponent({ type: LayerVectorTileComponent, selectors: [["map-layer-vectortile"]], inputs: { renderBuffer: "renderBuffer", renderMode: "renderMode", renderOrder: "renderOrder", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting", visible: "visible" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$s, decls: 1, vars: 0, template: function LayerVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return LayerVectorTileComponent;
}(LayerComponent));
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

var SourceBingmapsComponent = /** @class */ (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imagerySet = 'Aerial';
        return _this;
    }
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    SourceBingmapsComponent.ɵfac = function SourceBingmapsComponent_Factory(t) { return new (t || SourceBingmapsComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
    SourceBingmapsComponent.ɵcmp = ɵɵdefineComponent({ type: SourceBingmapsComponent, selectors: [["map-source-bingmaps"]], inputs: { cacheSize: "cacheSize", hidpi: "hidpi", culture: "culture", key: "key", imagerySet: "imagerySet", maxZoom: "maxZoom", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceBingmapsComponent; }) }]), ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-bingmaps"]], template: function SourceBingmapsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return SourceBingmapsComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceBingmapsComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-bingmaps',
                template: ' <div class="aol-source-bingmaps"></div> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceBingmapsComponent; }) }]
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

var _c0$t = ["*"];
var SourceClusterComponent = /** @class */ (function (_super) {
    __extends(SourceClusterComponent, _super);
    function SourceClusterComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceClusterComponent.prototype.ngAfterContentInit = function () {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    };
    SourceClusterComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    };
    SourceClusterComponent.ɵfac = function SourceClusterComponent_Factory(t) { return new (t || SourceClusterComponent)(ɵɵdirectiveInject(LayerVectorComponent, 1)); };
    SourceClusterComponent.ɵcmp = ɵɵdefineComponent({ type: SourceClusterComponent, selectors: [["map-source-cluster"]], contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, SourceVectorComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sourceVectorComponent = _t.first);
        } }, inputs: { distance: "distance", geometryFunction: "geometryFunction", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceClusterComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$t, decls: 1, vars: 0, template: function SourceClusterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceClusterComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceClusterComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-cluster',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceClusterComponent; }) }]
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

var _c0$u = ["*"];
var SourceGeoJSONComponent = /** @class */ (function (_super) {
    __extends(SourceGeoJSONComponent, _super);
    function SourceGeoJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceGeoJSONComponent.prototype.ngOnInit = function () {
        this.format = new GeoJSON(this);
        this.instance = new Vector$1(this);
        this.host.instance.setSource(this.instance);
    };
    SourceGeoJSONComponent.ɵfac = function SourceGeoJSONComponent_Factory(t) { return new (t || SourceGeoJSONComponent)(ɵɵdirectiveInject(LayerVectorComponent, 1)); };
    SourceGeoJSONComponent.ɵcmp = ɵɵdefineComponent({ type: SourceGeoJSONComponent, selectors: [["map-source-geojson"]], inputs: { defaultDataProjection: "defaultDataProjection", featureProjection: "featureProjection", geometryName: "geometryName", url: "url" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceGeoJSONComponent; }) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$u, decls: 1, vars: 0, template: function SourceGeoJSONComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceGeoJSONComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceGeoJSONComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-geojson',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceGeoJSONComponent; }) }]
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

var _c0$v = ["*"];
var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
    __extends(SourceImageArcGISRestComponent, _super);
    function SourceImageArcGISRestComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.ratio = 1.5;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageArcGISRestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new ImageArcGISRest(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', function (event) { _this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', function (event) { _this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', function (event) { _this.imageLoadError.emit(event); });
    };
    SourceImageArcGISRestComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceImageArcGISRestComponent.ɵfac = function SourceImageArcGISRestComponent_Factory(t) { return new (t || SourceImageArcGISRestComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
    SourceImageArcGISRestComponent.ɵcmp = ɵɵdefineComponent({ type: SourceImageArcGISRestComponent, selectors: [["map-source-imagearcgisrest"]], inputs: { projection: "projection", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", params: "params", ratio: "ratio", resolutions: "resolutions", wrapX: "wrapX" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageArcGISRestComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$v, decls: 1, vars: 0, template: function SourceImageArcGISRestComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceImageArcGISRestComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceImageArcGISRestComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-imagearcgisrest',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageArcGISRestComponent; }) }]
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

var _c0$w = ["*"];
var SourceImageStaticComponent = /** @class */ (function (_super) {
    __extends(SourceImageStaticComponent, _super);
    function SourceImageStaticComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.props = [
            'projection',
            'imageExtent',
            'url',
            'attributions',
            'crossOrigin',
            'imageLoadFunction',
            'imageSize'
        ];
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageStaticComponent.prototype.setLayerSource = function () {
        var _this = this;
        this.instance = new ImageStatic(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', function (event) { _this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', function (event) { _this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', function (event) { _this.imageLoadError.emit(event); });
    };
    SourceImageStaticComponent.prototype.ngOnInit = function () {
        this.setLayerSource();
    };
    SourceImageStaticComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.instance.setProperties(properties, false);
    };
    SourceImageStaticComponent.ɵfac = function SourceImageStaticComponent_Factory(t) { return new (t || SourceImageStaticComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
    SourceImageStaticComponent.ɵcmp = ɵɵdefineComponent({ type: SourceImageStaticComponent, selectors: [["map-source-imagestatic"]], inputs: { projection: "projection", imageExtent: "imageExtent", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", imageSize: "imageSize" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageStaticComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$w, decls: 1, vars: 0, template: function SourceImageStaticComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceImageStaticComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceImageStaticComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-imagestatic',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageStaticComponent; }) }]
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

var _c0$x = ["*"];
var SourceImageWMSComponent = /** @class */ (function (_super) {
    __extends(SourceImageWMSComponent, _super);
    function SourceImageWMSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imageLoadStart = new EventEmitter();
        _this.imageLoadEnd = new EventEmitter();
        _this.imageLoadError = new EventEmitter();
        return _this;
    }
    SourceImageWMSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', function (event) { _this.imageLoadStart.emit(event); });
        this.instance.on('imageloadend', function (event) { _this.imageLoadEnd.emit(event); });
        this.instance.on('imageloaderror', function (event) { _this.imageLoadError.emit(event); });
    };
    SourceImageWMSComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceImageWMSComponent.ɵfac = function SourceImageWMSComponent_Factory(t) { return new (t || SourceImageWMSComponent)(ɵɵdirectiveInject(LayerImageComponent, 1)); };
    SourceImageWMSComponent.ɵcmp = ɵɵdefineComponent({ type: SourceImageWMSComponent, selectors: [["map-source-imagewms"]], inputs: { attributions: "attributions", crossOrigin: "crossOrigin", hidpi: "hidpi", serverType: "serverType", imageLoadFunction: "imageLoadFunction", params: "params", projection: "projection", ratio: "ratio", resolutions: "resolutions", url: "url" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageWMSComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$x, decls: 1, vars: 0, template: function SourceImageWMSComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceImageWMSComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceImageWMSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-imagewms',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceImageWMSComponent; }) }]
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

var TileGridComponent = /** @class */ (function () {
    function TileGridComponent() {
    }
    TileGridComponent.prototype.ngOnInit = function () {
        (!this.resolutions)
            ? this.instance = createXYZ(this)
            : this.instance = new TileGrid(this);
    };
    TileGridComponent.prototype.ngOnChanges = function (changes) {
        (!this.resolutions)
            ? this.instance = createXYZ(this)
            : this.instance = new TileGrid(this);
    };
    TileGridComponent.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); };
    TileGridComponent.ɵcmp = ɵɵdefineComponent({ type: TileGridComponent, selectors: [["map-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return TileGridComponent;
}());
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

var _c0$y = ["*"];
var SourceXYZComponent = /** @class */ (function (_super) {
    __extends(SourceXYZComponent, _super);
    function SourceXYZComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.props = [
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
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceXYZComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    };
    SourceXYZComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    };
    SourceXYZComponent.prototype.init = function () {
        var _this = this;
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', function (event) { _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    SourceXYZComponent.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(ɵɵdirectiveInject(LayerTileComponent, 9)); };
    SourceXYZComponent.ɵcmp = ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["map-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, TileGridComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
        } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceXYZComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$y, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceXYZComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceXYZComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-xyz',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceXYZComponent; }) }]
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

var SourceOsmComponent = /** @class */ (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceOsmComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', function (event) { _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    SourceOsmComponent.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(ɵɵdirectiveInject(LayerTileComponent, 9)); };
    SourceOsmComponent.ɵcmp = ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["map-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceOsmComponent; }) }]), ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "map-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return SourceOsmComponent;
}(SourceXYZComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceOsmComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-osm',
                template: ' <div class="map-source-osm"></div> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceOsmComponent; }) }]
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

var _c0$z = ["*"];
var SourceRasterComponent = /** @class */ (function (_super) {
    __extends(SourceRasterComponent, _super);
    function SourceRasterComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.beforeOperations = new EventEmitter();
        _this.afterOperations = new EventEmitter();
        _this.sources = [];
        return _this;
    }
    Object.defineProperty(SourceRasterComponent.prototype, "source", {
        set: function (sourceComponent) {
            this.sources = [sourceComponent.instance];
            if (this.instance) {
                // Openlayer doesn't handle sources update. Just recreate Raster instance.
                this.init();
            }
        },
        enumerable: true,
        configurable: true
    });
    SourceRasterComponent.prototype.ngAfterContentInit = function () {
        this.init();
    };
    SourceRasterComponent.prototype.init = function () {
        var _this = this;
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', function (event) { _this.beforeOperations.emit(event); });
        this.instance.on('afteroperations', function (event) { _this.afterOperations.emit(event); });
        this._register(this.instance);
    };
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
                    useExisting: forwardRef(function () { return SourceRasterComponent; })
                }
            ]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$z, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceRasterComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceRasterComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-raster',
                template: '<ng-content></ng-content>',
                providers: [
                    {
                        provide: SourceComponent,
                        // tslint:disable-next-line: no-forward-ref
                        useExisting: forwardRef(function () { return SourceRasterComponent; })
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

var _c0$A = ["*"];
var SourceTileJSONComponent = /** @class */ (function (_super) {
    __extends(SourceTileJSONComponent, _super);
    function SourceTileJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileJSONComponent.prototype.ngOnInit = function () {
        this.instance = new TileJSON(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileJSONComponent.ɵfac = function SourceTileJSONComponent_Factory(t) { return new (t || SourceTileJSONComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
    SourceTileJSONComponent.ɵcmp = ɵɵdefineComponent({ type: SourceTileJSONComponent, selectors: [["map-source-tilejson"]], inputs: { url: "url" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileJSONComponent; }) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$A, decls: 1, vars: 0, template: function SourceTileJSONComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceTileJSONComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceTileJSONComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilejson',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileJSONComponent; }) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { url: [{
            type: Input
        }] }); })();

var _c0$B = ["*"];
var SourceTileWMSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileWMSComponent.prototype.ngOnInit = function () {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMSComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceTileWMSComponent.ɵfac = function SourceTileWMSComponent_Factory(t) { return new (t || SourceTileWMSComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
    SourceTileWMSComponent.ɵcmp = ɵɵdefineComponent({ type: SourceTileWMSComponent, selectors: [["map-source-tilewms"]], inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", gutter: "gutter", hidpi: "hidpi", params: "params", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", serverType: "serverType", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMSComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$B, decls: 1, vars: 0, template: function SourceTileWMSComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceTileWMSComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceTileWMSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilewms',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMSComponent; }) }]
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

var TileGridWMTSComponent = /** @class */ (function (_super) {
    __extends(TileGridWMTSComponent, _super);
    function TileGridWMTSComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileGridWMTSComponent.prototype.ngOnInit = function () {
        this.instance = new WMTS(this);
    };
    TileGridWMTSComponent.ɵfac = function TileGridWMTSComponent_Factory(t) { return ɵTileGridWMTSComponent_BaseFactory(t || TileGridWMTSComponent); };
    TileGridWMTSComponent.ɵcmp = ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["map-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return TileGridWMTSComponent;
}(TileGridComponent));
var ɵTileGridWMTSComponent_BaseFactory = ɵɵgetInheritedFactory(TileGridWMTSComponent);
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

var _c0$C = ["*"];
var SourceTileWMTSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMTSComponent, _super);
    function SourceTileWMTSComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.props = [
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
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceTileWMTSComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.instance.setProperties(properties, false);
    };
    SourceTileWMTSComponent.prototype.setLayerSource = function () {
        var _this = this;
        this.instance = new WMTS$1(this);
        this.instance.on('tileloadstart', function (event) { _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { _this.tileLoadError.emit(event); });
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMTSComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    };
    SourceTileWMTSComponent.ɵfac = function SourceTileWMTSComponent_Factory(t) { return new (t || SourceTileWMTSComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
    SourceTileWMTSComponent.ɵcmp = ɵɵdefineComponent({ type: SourceTileWMTSComponent, selectors: [["map-source-tilewmts"]], contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, TileGridWMTSComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tileGridWMTS = _t.first);
        } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", tileGrid: "tileGrid", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", requestEncoding: "requestEncoding", layer: "layer", style: "style", tileClass: "tileClass", tilePixelRatio: "tilePixelRatio", version: "version", format: "format", matrixSet: "matrixSet", dimensions: "dimensions", url: "url", tileLoadFunction: "tileLoadFunction", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMTSComponent; }) }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature], ngContentSelectors: _c0$C, decls: 1, vars: 0, template: function SourceTileWMTSComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceTileWMTSComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceTileWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilewmts',
                template: '<ng-content></ng-content>',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMTSComponent; }) }]
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

var _c0$D = ["*"];
var SourceUTFGridComponent = /** @class */ (function (_super) {
    __extends(SourceUTFGridComponent, _super);
    function SourceUTFGridComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceUTFGridComponent.prototype.ngOnInit = function () {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    };
    SourceUTFGridComponent.ɵfac = function SourceUTFGridComponent_Factory(t) { return new (t || SourceUTFGridComponent)(ɵɵdirectiveInject(LayerTileComponent, 1)); };
    SourceUTFGridComponent.ɵcmp = ɵɵdefineComponent({ type: SourceUTFGridComponent, selectors: [["map-source-utfgrid"]], inputs: { tileJSON: "tileJSON", url: "url" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceUTFGridComponent; }) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$D, decls: 1, vars: 0, template: function SourceUTFGridComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceUTFGridComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceUTFGridComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-utfgrid',
                template: '<ng-content></ng-content>',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceUTFGridComponent; }) }]
            }]
    }], function () { return [{ type: LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { tileJSON: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();

var _c0$E = ["*"];
var SourceVectorTileComponent = /** @class */ (function (_super) {
    __extends(SourceVectorTileComponent, _super);
    function SourceVectorTileComponent(layer) {
        return _super.call(this, layer) || this;
    }
    /* need the children to construct the OL3 object */
    SourceVectorTileComponent.prototype.ngAfterContentInit = function () {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile$1(this);
        this.host.instance.setSource(this.instance);
    };
    SourceVectorTileComponent.ɵfac = function SourceVectorTileComponent_Factory(t) { return new (t || SourceVectorTileComponent)(ɵɵdirectiveInject(LayerVectorTileComponent, 1)); };
    SourceVectorTileComponent.ɵcmp = ɵɵdefineComponent({ type: SourceVectorTileComponent, selectors: [["map-source-vectortile"]], contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, FormatComponent, true);
            ɵɵcontentQuery(dirIndex, TileGridComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formatComponent = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tileGridComponent = _t.first);
        } }, inputs: { cacheSize: "cacheSize", overlaps: "overlaps", projection: "projection", tilePixelRatio: "tilePixelRatio", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorTileComponent; }) }]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$E, decls: 1, vars: 0, template: function SourceVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceVectorTileComponent;
}(SourceComponent));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SourceVectorTileComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-vectortile',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorTileComponent; }) }]
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

var _c0$F = ["*"];
var StyleComponent = /** @class */ (function () {
    function StyleComponent(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    StyleComponent.prototype.update = function () {
        this.host.instance.changed();
    };
    StyleComponent.prototype.ngOnInit = function () {
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(ɵɵdirectiveInject(FeatureComponent, 8), ɵɵdirectiveInject(LayerVectorComponent, 8)); };
    StyleComponent.ɵcmp = ɵɵdefineComponent({ type: StyleComponent, selectors: [["map-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0$F, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return StyleComponent;
}());
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

var _c0$G = ["*"];
var StyleCircleComponent = /** @class */ (function () {
    function StyleCircleComponent(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    StyleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    };
    StyleCircleComponent.prototype.ngAfterContentInit = function () {
        this.instance = new Circle$1(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    };
    StyleCircleComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    };
    StyleCircleComponent.prototype.ngOnDestroy = function () {
        // tslint:disable-next-line: no-non-null-assertion
        this.host.instance.setImage(undefined);
    };
    StyleCircleComponent.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(ɵɵdirectiveInject(StyleComponent, 1)); };
    StyleCircleComponent.ɵcmp = ɵɵdefineComponent({ type: StyleCircleComponent, selectors: [["map-style-circle"]], inputs: { fill: "fill", radius: "radius", snapToPixel: "snapToPixel", stroke: "stroke" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$G, decls: 1, vars: 0, template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2 });
    return StyleCircleComponent;
}());
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

var StyleTextComponent = /** @class */ (function () {
    function StyleTextComponent(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('map-style-text must be a descendant of map-style');
        }
    }
    StyleTextComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    };
    StyleTextComponent.prototype.ngOnChanges = function (changes) {
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
    };
    StyleTextComponent.ɵfac = function StyleTextComponent_Factory(t) { return new (t || StyleTextComponent)(ɵɵdirectiveInject(StyleComponent, 8)); };
    StyleTextComponent.ɵcmp = ɵɵdefineComponent({ type: StyleTextComponent, selectors: [["map-style-text"]], inputs: { font: "font", offsetX: "offsetX", offsetY: "offsetY", scale: "scale", rotateWithView: "rotateWithView", rotation: "rotation", text: "text", textAlign: "textAlign", textBaseLine: "textBaseLine" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-text"]], template: function StyleTextComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return StyleTextComponent;
}());
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

var StyleFillComponent = /** @class */ (function () {
    function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
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
    StyleFillComponent.prototype.ngOnInit = function () {
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
                throw new Error("unknown host type: " + this.host);
            // break;
        }
    };
    StyleFillComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        this.host.update();
    };
    StyleFillComponent.ɵfac = function StyleFillComponent_Factory(t) { return new (t || StyleFillComponent)(ɵɵdirectiveInject(StyleComponent, 8), ɵɵdirectiveInject(StyleCircleComponent, 8), ɵɵdirectiveInject(StyleTextComponent, 8)); };
    StyleFillComponent.ɵcmp = ɵɵdefineComponent({ type: StyleFillComponent, selectors: [["map-style-fill"]], inputs: { color: "color" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-fill"]], template: function StyleFillComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return StyleFillComponent;
}());
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

var StyleIconComponent = /** @class */ (function () {
    function StyleIconComponent(host) {
        this.host = host;
    }
    StyleIconComponent.prototype.ngOnInit = function () {
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    };
    StyleIconComponent.prototype.ngOnChanges = function (changes) {
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
    };
    StyleIconComponent.ɵfac = function StyleIconComponent_Factory(t) { return new (t || StyleIconComponent)(ɵɵdirectiveInject(StyleComponent, 1)); };
    StyleIconComponent.ɵcmp = ɵɵdefineComponent({ type: StyleIconComponent, selectors: [["map-style-icon"]], inputs: { anchor: "anchor", anchorXUnits: "anchorXUnits", anchorYUnits: "anchorYUnits", anchorOrigin: "anchorOrigin", color: "color", crossOrigin: "crossOrigin", img: "img", offset: "offset", offsetOrigin: "offsetOrigin", opacity: "opacity", scale: "scale", snapToPixel: "snapToPixel", rotateWithView: "rotateWithView", rotation: "rotation", size: "size", imgSize: "imgSize", src: "src" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-icon"]], template: function StyleIconComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return StyleIconComponent;
}());
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

var StyleStrokeComponent = /** @class */ (function () {
    function StyleStrokeComponent(styleHost, styleCircleHost, styleTextHost) {
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
    StyleStrokeComponent.prototype.ngOnInit = function () {
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
                throw new Error("unknown host type: " + this.host);
            // break;
        }
    };
    StyleStrokeComponent.prototype.ngOnChanges = function (changes) {
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
    };
    StyleStrokeComponent.ɵfac = function StyleStrokeComponent_Factory(t) { return new (t || StyleStrokeComponent)(ɵɵdirectiveInject(StyleComponent, 8), ɵɵdirectiveInject(StyleCircleComponent, 8), ɵɵdirectiveInject(StyleTextComponent, 8)); };
    StyleStrokeComponent.ɵcmp = ɵɵdefineComponent({ type: StyleStrokeComponent, selectors: [["map-style-stroke"]], inputs: { color: "color", lineCap: "lineCap", lineDash: "lineDash", lineJoin: "lineJoin", miterLimit: "miterLimit", width: "width" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-stroke"]], template: function StyleStrokeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return StyleStrokeComponent;
}());
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
var COMPONENTS = [
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
var AngularOpenlayersModule = /** @class */ (function () {
    function AngularOpenlayersModule() {
    }
    AngularOpenlayersModule.ɵmod = ɵɵdefineNgModule({ type: AngularOpenlayersModule });
    AngularOpenlayersModule.ɵinj = ɵɵdefineInjector({ factory: function AngularOpenlayersModule_Factory(t) { return new (t || AngularOpenlayersModule)(); }, imports: [[CommonModule]] });
    return AngularOpenlayersModule;
}());
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
