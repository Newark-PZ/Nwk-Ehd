(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ol/control'), require('ol/proj'), require('ol/geom'), require('ol'), require('ol/format/Feature'), require('ol/source'), require('ol/layer'), require('ol/Map'), require('ol/control/MousePosition'), require('ol/View'), require('ol/format'), require('ol/style'), require('ol/interaction'), require('ol/Kinetic'), require('ol/geom/GeometryType'), require('ol/tilegrid/TileGrid'), require('ol/tilegrid'), require('ol/source/WMTS'), require('ol/tilegrid/WMTS'), require('ol/source/VectorTile'), require('ol/style/IconAnchorUnits'), require('ol/style/IconOrigin')) :
    typeof define === 'function' && define.amd ? define('ng-maps', ['exports', '@angular/common', '@angular/core', 'ol/control', 'ol/proj', 'ol/geom', 'ol', 'ol/format/Feature', 'ol/source', 'ol/layer', 'ol/Map', 'ol/control/MousePosition', 'ol/View', 'ol/format', 'ol/style', 'ol/interaction', 'ol/Kinetic', 'ol/geom/GeometryType', 'ol/tilegrid/TileGrid', 'ol/tilegrid', 'ol/source/WMTS', 'ol/tilegrid/WMTS', 'ol/source/VectorTile', 'ol/style/IconAnchorUnits', 'ol/style/IconOrigin'], factory) :
    (global = global || self, factory(global['ng-maps'] = {}, global.ng.common, global.ng.core, global.control, global.proj, global.geom, global.ol, null, global.source, global.layer, global.Map, global.MousePosition, global.View, global.format, global.style, global.interaction, null, null, global.TileGrid, global.tilegrid, global.WMTS$1, global.WMTS, global.VectorTile$1));
}(this, (function (exports, common, core, control, proj, geom, ol, Feature, source, layer, Map, MousePosition, View, format, style, interaction, Kinetic, GeometryType, TileGrid, tilegrid, WMTS$1, WMTS, VectorTile$1) { 'use strict';

    Map = Map && Object.prototype.hasOwnProperty.call(Map, 'default') ? Map['default'] : Map;
    MousePosition = MousePosition && Object.prototype.hasOwnProperty.call(MousePosition, 'default') ? MousePosition['default'] : MousePosition;
    View = View && Object.prototype.hasOwnProperty.call(View, 'default') ? View['default'] : View;
    TileGrid = TileGrid && Object.prototype.hasOwnProperty.call(TileGrid, 'default') ? TileGrid['default'] : TileGrid;
    WMTS$1 = WMTS$1 && Object.prototype.hasOwnProperty.call(WMTS$1, 'default') ? WMTS$1['default'] : WMTS$1;
    WMTS = WMTS && Object.prototype.hasOwnProperty.call(WMTS, 'default') ? WMTS['default'] : WMTS;
    VectorTile$1 = VectorTile$1 && Object.prototype.hasOwnProperty.call(VectorTile$1, 'default') ? VectorTile$1['default'] : VectorTile$1;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["*"];
    var AttributionComponent = /** @class */ (function () {
        function AttributionComponent(elementRef) {
            this.elementRef = elementRef;
        }
        AttributionComponent.prototype.ngOnInit = function () {
            this.html = this.elementRef.nativeElement.innerHTML;
            this.instance = new control.Attribution(this);
        };
        AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(core.ɵɵdirectiveInject(core.ElementRef)); };
        AttributionComponent.ɵcmp = core.ɵɵdefineComponent({ type: AttributionComponent, selectors: [["map-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return AttributionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AttributionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-attribution',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, null); })();

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
        LayerComponent.ɵfac = function LayerComponent_Factory(t) { core.ɵɵinvalidFactory(); };
        LayerComponent.ɵdir = core.ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [core.ɵɵNgOnChangesFeature] });
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
        SourceComponent.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(core.ɵɵdirectiveInject(LayerComponent)); };
        SourceComponent.ɵdir = core.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });
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
        AttributionsComponent.ɵfac = function AttributionsComponent_Factory(t) { return new (t || AttributionsComponent)(core.ɵɵdirectiveInject(SourceComponent, 1)); };
        AttributionsComponent.ɵcmp = core.ɵɵdefineComponent({ type: AttributionsComponent, selectors: [["map-attributions"]], contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, AttributionComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.attributions = _t);
            } }, ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function AttributionsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return AttributionsComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AttributionsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-attributions',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: SourceComponent, decorators: [{
                    type: core.Host
                }] }]; }, { attributions: [{
                type: core.ContentChildren,
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
            this.olClick = new core.EventEmitter();
            this.dblClick = new core.EventEmitter();
            this.moveStart = new core.EventEmitter();
            this.moveEnd = new core.EventEmitter();
            this.pointerDrag = new core.EventEmitter();
            this.pointerMove = new core.EventEmitter();
            this.onpostrender = new core.EventEmitter();
            this.postRender = new core.EventEmitter();
            this.onprerender = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
            this.singleClick = new core.EventEmitter();
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
        MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(core.ɵɵdirectiveInject(core.ElementRef)); };
        MapComponent.ɵcmp = core.ɵɵdefineComponent({ type: MapComponent, selectors: [["map-map"]], inputs: { width: "width", height: "height", pixelRatio: "pixelRatio", keyboardEventTarget: "keyboardEventTarget", loadTilesWhileAnimating: "loadTilesWhileAnimating", loadTilesWhileInteracting: "loadTilesWhileInteracting", logo: "logo", renderer: "renderer" }, outputs: { olClick: "olClick", dblClick: "dblClick", moveStart: "moveStart", moveEnd: "moveEnd", pointerDrag: "pointerDrag", pointerMove: "pointerMove", onpostrender: "onpostrender", postRender: "postRender", onprerender: "onprerender", propertyChange: "propertyChange", singleClick: "singleClick" }, features: [core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$2, decls: 2, vars: 4, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelement(0, "div");
                core.ɵɵprojection(1);
            } if (rf & 2) {
                core.ɵɵstyleProp("width", ctx.width)("height", ctx.height);
            } }, encapsulation: 2 });
        return MapComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MapComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-map',
                    template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { width: [{
                type: core.Input
            }], height: [{
                type: core.Input
            }], pixelRatio: [{
                type: core.Input
            }], keyboardEventTarget: [{
                type: core.Input
            }], loadTilesWhileAnimating: [{
                type: core.Input
            }], loadTilesWhileInteracting: [{
                type: core.Input
            }], logo: [{
                type: core.Input
            }], renderer: [{
                type: core.Input
            }], olClick: [{
                type: core.Output
            }], dblClick: [{
                type: core.Output
            }], moveStart: [{
                type: core.Output
            }], moveEnd: [{
                type: core.Output
            }], pointerDrag: [{
                type: core.Output
            }], pointerMove: [{
                type: core.Output
            }], onpostrender: [{
                type: core.Output
            }], postRender: [{
                type: core.Output
            }], onprerender: [{
                type: core.Output
            }], propertyChange: [{
                type: core.Output
            }], singleClick: [{
                type: core.Output
            }] }); })();

    var _c0$3 = ["*"];
    var LayerGroupComponent = /** @class */ (function (_super) {
        __extends(LayerGroupComponent, _super);
        function LayerGroupComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerGroupComponent.prototype.ngOnInit = function () {
            // console.log(`creating ol.layer.Group instance with:`, this);
            this.instance = new layer.Group(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerGroupComponent.ɵfac = function LayerGroupComponent_Factory(t) { return new (t || LayerGroupComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(LayerGroupComponent, 12)); };
        LayerGroupComponent.ɵcmp = core.ɵɵdefineComponent({ type: LayerGroupComponent, selectors: [["map-layer-group"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function LayerGroupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return LayerGroupComponent;
    }(LayerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LayerGroupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-layer-group',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                    type: core.SkipSelf
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    var _c0$4 = ["*"];
    var LayerVectorComponent = /** @class */ (function (_super) {
        __extends(LayerVectorComponent, _super);
        function LayerVectorComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerVectorComponent.prototype.ngOnInit = function () {
            this.instance = new layer.Vector(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerVectorComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerVectorComponent.ɵfac = function LayerVectorComponent_Factory(t) { return new (t || LayerVectorComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
        LayerVectorComponent.ɵcmp = core.ɵɵdefineComponent({ type: LayerVectorComponent, selectors: [["map-layer-vector"]], inputs: { renderBuffer: "renderBuffer", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$4, decls: 1, vars: 0, template: function LayerVectorComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return LayerVectorComponent;
    }(LayerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LayerVectorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-layer-vector',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { renderBuffer: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], updateWhileAnimating: [{
                type: core.Input
            }], updateWhileInteracting: [{
                type: core.Input
            }] }); })();

    var _c0$5 = ["*"];
    var SourceVectorComponent = /** @class */ (function (_super) {
        __extends(SourceVectorComponent, _super);
        function SourceVectorComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceVectorComponent.prototype.ngOnInit = function () {
            this.instance = new source.Vector(this);
            this.host.instance.setSource(this.instance);
        };
        SourceVectorComponent.ɵfac = function SourceVectorComponent_Factory(t) { return new (t || SourceVectorComponent)(core.ɵɵdirectiveInject(LayerVectorComponent, 1)); };
        SourceVectorComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceVectorComponent, selectors: [["map-source-vector"]], inputs: { overlaps: "overlaps", useSpatialIndex: "useSpatialIndex", wrapX: "wrapX", url: "url", format: "format", strategy: "strategy" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceVectorComponent; }) }]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function SourceVectorComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceVectorComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceVectorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-vector',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceVectorComponent; }) }]
                }]
        }], function () { return [{ type: LayerVectorComponent, decorators: [{
                    type: core.Host
                }] }]; }, { overlaps: [{
                type: core.Input
            }], useSpatialIndex: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], format: [{
                type: core.Input
            }], strategy: [{
                type: core.Input
            }] }); })();

    var _c0$6 = ["*"];
    var FeatureComponent = /** @class */ (function () {
        function FeatureComponent(host) {
            this.host = host;
            this.componentType = 'feature';
        }
        FeatureComponent.prototype.ngOnInit = function () {
            this.instance = new ol.Feature();
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
        FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(core.ɵɵdirectiveInject(SourceVectorComponent)); };
        FeatureComponent.ɵcmp = core.ɵɵdefineComponent({ type: FeatureComponent, selectors: [["map-feature"]], inputs: { id: "id" }, features: [core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return FeatureComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FeatureComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-feature',
                    template: ' <ng-content></ng-content>'
                }]
        }], function () { return [{ type: SourceVectorComponent }]; }, { id: [{
                type: core.Input
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
        SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        SimpleGeometryComponent.ɵdir = core.ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } });
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
            this.instance = new geom.LineString([
                [0, 0],
                [1, 1]
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryLinestringComponent.ɵfac = function GeometryLinestringComponent_Factory(t) { return new (t || GeometryLinestringComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryLinestringComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryLinestringComponent, selectors: [["map-geometry-linestring"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$7, decls: 1, vars: 0, template: function GeometryLinestringComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryLinestringComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryLinestringComponent, [{
            type: core.Component,
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
            this.instance = new geom.MultiLineString([
                [
                    [0, 0],
                    [1, 1]
                ]
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryMultiLinestringComponent.ɵfac = function GeometryMultiLinestringComponent_Factory(t) { return new (t || GeometryMultiLinestringComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryMultiLinestringComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryMultiLinestringComponent, selectors: [["map-geometry-multilinestring"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function GeometryMultiLinestringComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryMultiLinestringComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryMultiLinestringComponent, [{
            type: core.Component,
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
            this.instance = new geom.MultiPoint([
                [0, 0],
                [1, 1]
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryMultiPointComponent.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryMultiPointComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["map-geometry-multipoint"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$9, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryMultiPointComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryMultiPointComponent, [{
            type: core.Component,
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
            this.instance = new geom.MultiPolygon([
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
        GeometryMultiPolygonComponent.ɵfac = function GeometryMultiPolygonComponent_Factory(t) { return new (t || GeometryMultiPolygonComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryMultiPolygonComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryMultiPolygonComponent, selectors: [["map-geometry-multipolygon"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function GeometryMultiPolygonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryMultiPolygonComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryMultiPolygonComponent, [{
            type: core.Component,
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
            this.instance = new geom.Polygon([
                [
                    [0, 0],
                    [1, 1],
                    [0, 1]
                ]
            ]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryPolygonComponent.ɵfac = function GeometryPolygonComponent_Factory(t) { return new (t || GeometryPolygonComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryPolygonComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryPolygonComponent, selectors: [["map-geometry-polygon"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$b, decls: 1, vars: 0, template: function GeometryPolygonComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryPolygonComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryPolygonComponent, [{
            type: core.Component,
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
                        transformedCoordinates = this.coordinates.map(function (c) { return proj.transform(c, _this.srid, _this.mapSrid); });
                        break;
                    case 'geometry-polygon':
                    case 'geometry-multilinestring':
                        transformedCoordinates = this.coordinates.map(function (cc) {
                            return cc.map(function (c) { return proj.transform(c, _this.srid, _this.mapSrid); });
                        });
                        break;
                    case 'geometry-multipolygon':
                        transformedCoordinates = this.coordinates.map(function (ccc) {
                            return ccc.map(function (cc) { return cc.map(function (c) { return proj.transform(c, _this.srid, _this.mapSrid); }); });
                        });
                        break;
                    default:
                        break;
                }
            }
            // tslint:disable-next-line: no-non-null-assertion no-unnecessary-type-assertion
            this.host.instance.setCoordinates(transformedCoordinates);
        };
        CollectionCoordinatesComponent.ɵfac = function CollectionCoordinatesComponent_Factory(t) { return new (t || CollectionCoordinatesComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(GeometryLinestringComponent, 8), core.ɵɵdirectiveInject(GeometryPolygonComponent, 8), core.ɵɵdirectiveInject(GeometryMultiPointComponent, 8), core.ɵɵdirectiveInject(GeometryMultiLinestringComponent, 8), core.ɵɵdirectiveInject(GeometryMultiPolygonComponent, 8)); };
        CollectionCoordinatesComponent.ɵcmp = core.ɵɵdefineComponent({ type: CollectionCoordinatesComponent, selectors: [["map-collection-coordinates"]], inputs: { coordinates: "coordinates", srid: "srid" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-collection-coordinates"]], template: function CollectionCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return CollectionCoordinatesComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CollectionCoordinatesComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-collection-coordinates',
                    template: ' <div class="map-collection-coordinates"></div> '
                }]
        }], function () { return [{ type: MapComponent }, { type: GeometryLinestringComponent, decorators: [{
                    type: core.Optional
                }] }, { type: GeometryPolygonComponent, decorators: [{
                    type: core.Optional
                }] }, { type: GeometryMultiPointComponent, decorators: [{
                    type: core.Optional
                }] }, { type: GeometryMultiLinestringComponent, decorators: [{
                    type: core.Optional
                }] }, { type: GeometryMultiPolygonComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { coordinates: [{
                type: core.Input
            }], srid: [{
                type: core.Input
            }] }); })();

    var _c0$c = ["*"];
    var ContentComponent = /** @class */ (function () {
        function ContentComponent(elementRef) {
            this.elementRef = elementRef;
        }
        ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(core.ɵɵdirectiveInject(core.ElementRef)); };
        ContentComponent.ɵcmp = core.ɵɵdefineComponent({ type: ContentComponent, selectors: [["map-content"]], ngContentSelectors: _c0$c, decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ContentComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ContentComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-content',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, null); })();

    var ControlAttributionComponent = /** @class */ (function () {
        function ControlAttributionComponent(map, element) {
            this.map = map;
            this.element = element;
            this.componentType = 'control';
        }
        ControlAttributionComponent.prototype.ngOnInit = function () {
            this.target = this.element.nativeElement;
            this.instance = new control.Attribution(this);
            this.map.instance.addControl(this.instance);
        };
        ControlAttributionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlAttributionComponent.ɵfac = function ControlAttributionComponent_Factory(t) { return new (t || ControlAttributionComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(core.ElementRef)); };
        ControlAttributionComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlAttributionComponent, selectors: [["map-control-attribution"]], inputs: { collapsible: "collapsible" }, decls: 0, vars: 0, template: function ControlAttributionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return ControlAttributionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlAttributionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-attribution',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }, { type: core.ElementRef }]; }, { collapsible: [{
                type: core.Input
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
                this.instance = new control.Control(this);
                this.map.instance.addControl(this.instance);
            }
        };
        ControlComponent.prototype.ngOnDestroy = function () {
            if (this.instance) {
                this.map.instance.removeControl(this.instance);
            }
        };
        ControlComponent.ɵfac = function ControlComponent_Factory(t) { return new (t || ControlComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlComponent, selectors: [["map-control"]], contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.content = _t.first);
            } }, ngContentSelectors: _c0$d, decls: 1, vars: 0, template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { content: [{
                type: core.ContentChild,
                args: [ContentComponent, { static: true }]
            }] }); })();

    var DefaultControlComponent = /** @class */ (function () {
        function DefaultControlComponent(map) {
            this.map = map;
        }
        DefaultControlComponent.prototype.ngOnInit = function () {
            var _this = this;
            // console.log('ol.control.defaults init: ', this);
            this.instance = control.defaults(this);
            this.instance.forEach(function (c) { _this.map.instance.addControl(c); });
        };
        DefaultControlComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            // console.log('removing aol-control-defaults');
            this.instance.forEach(function (c) { return _this.map.instance.removeControl(c); });
        };
        DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DefaultControlComponent.ɵcmp = core.ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["map-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DefaultControlComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DefaultControlComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-defaults',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { attribution: [{
                type: core.Input
            }], attributionOptions: [{
                type: core.Input
            }], rotate: [{
                type: core.Input
            }], rotateOptions: [{
                type: core.Input
            }], zoom: [{
                type: core.Input
            }], zoomOptions: [{
                type: core.Input
            }] }); })();

    var _c0$e = ["*"];
    var ControlFullScreenComponent = /** @class */ (function () {
        function ControlFullScreenComponent(map) {
            this.map = map;
            // console.log('instancing aol-control-fullscreen');
        }
        ControlFullScreenComponent.prototype.ngOnInit = function () {
            this.instance = new control.FullScreen(this);
            this.map.instance.addControl(this.instance);
        };
        ControlFullScreenComponent.prototype.ngOnDestroy = function () {
            // console.log('removing aol-control-fullscreen');
            this.map.instance.removeControl(this.instance);
        };
        ControlFullScreenComponent.ɵfac = function ControlFullScreenComponent_Factory(t) { return new (t || ControlFullScreenComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlFullScreenComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlFullScreenComponent, selectors: [["map-control-fullscreen"]], inputs: { className: "className", label: "label", labelActive: "labelActive", tipLabel: "tipLabel", keys: "keys" }, ngContentSelectors: _c0$e, decls: 1, vars: 0, template: function ControlFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlFullScreenComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlFullScreenComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-fullscreen',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { className: [{
                type: core.Input
            }], label: [{
                type: core.Input
            }], labelActive: [{
                type: core.Input
            }], tipLabel: [{
                type: core.Input
            }], keys: [{
                type: core.Input
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
        ControlMousePositionComponent.ɵfac = function ControlMousePositionComponent_Factory(t) { return new (t || ControlMousePositionComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(core.ElementRef)); };
        ControlMousePositionComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlMousePositionComponent, selectors: [["map-control-mouseposition"]], inputs: { coordinateFormat: "coordinateFormat", projection: "projection" }, decls: 0, vars: 0, template: function ControlMousePositionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return ControlMousePositionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlMousePositionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-mouseposition',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }, { type: core.ElementRef }]; }, { coordinateFormat: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }] }); })();

    var _c0$f = ["*"];
    var ControlOverviewMapComponent = /** @class */ (function () {
        function ControlOverviewMapComponent(map) {
            this.map = map;
        }
        ControlOverviewMapComponent.prototype.ngOnInit = function () {
            this.instance = new control.OverviewMap(this);
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
            this.instance = new control.OverviewMap(this);
            this.map.instance.addControl(this.instance);
        };
        ControlOverviewMapComponent.ɵfac = function ControlOverviewMapComponent_Factory(t) { return new (t || ControlOverviewMapComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlOverviewMapComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlOverviewMapComponent, selectors: [["map-control-overviewmap"]], inputs: { collapsed: "collapsed", collapseLabel: "collapseLabel", collapsible: "collapsible", label: "label", layers: "layers", target: "target", tipLabel: "tipLabel", view: "view" }, features: [core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$f, decls: 1, vars: 0, template: function ControlOverviewMapComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlOverviewMapComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlOverviewMapComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-overviewmap',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { collapsed: [{
                type: core.Input
            }], collapseLabel: [{
                type: core.Input
            }], collapsible: [{
                type: core.Input
            }], label: [{
                type: core.Input
            }], layers: [{
                type: core.Input
            }], target: [{
                type: core.Input
            }], tipLabel: [{
                type: core.Input
            }], view: [{
                type: core.Input
            }] }); })();

    var _c0$g = ["*"];
    var ControlRotateComponent = /** @class */ (function () {
        function ControlRotateComponent(map) {
            this.map = map;
        }
        ControlRotateComponent.prototype.ngOnInit = function () {
            this.instance = new control.Rotate(this);
            this.map.instance.addControl(this.instance);
        };
        ControlRotateComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlRotateComponent.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlRotateComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["map-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlRotateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlRotateComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-rotate',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { className: [{
                type: core.Input
            }], label: [{
                type: core.Input
            }], tipLabel: [{
                type: core.Input
            }], duration: [{
                type: core.Input
            }], autoHide: [{
                type: core.Input
            }] }); })();

    var _c0$h = ["*"];
    var ControlScaleLineComponent = /** @class */ (function () {
        function ControlScaleLineComponent(map) {
            this.map = map;
        }
        ControlScaleLineComponent.prototype.ngOnInit = function () {
            this.instance = new control.ScaleLine(this);
            this.map.instance.addControl(this.instance);
        };
        ControlScaleLineComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlScaleLineComponent.ɵfac = function ControlScaleLineComponent_Factory(t) { return new (t || ControlScaleLineComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlScaleLineComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlScaleLineComponent, selectors: [["map-control-scaleline"]], inputs: { units: "units" }, ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function ControlScaleLineComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlScaleLineComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlScaleLineComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-scaleline',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { units: [{
                type: core.Input
            }] }); })();

    var _c0$i = ["*"];
    var ControlZoomComponent = /** @class */ (function () {
        function ControlZoomComponent(map) {
            this.map = map;
        }
        ControlZoomComponent.prototype.ngOnInit = function () {
            this.instance = new control.Zoom(this);
            this.map.instance.addControl(this.instance);
        };
        ControlZoomComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlZoomComponent.ɵfac = function ControlZoomComponent_Factory(t) { return new (t || ControlZoomComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlZoomComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlZoomComponent, selectors: [["map-control-zoom"]], inputs: { duration: "duration", zoomInLabel: "zoomInLabel", zoomOutLabel: "zoomOutLabel", zoomInTipLabel: "zoomInTipLabel", zoomOutTipLabel: "zoomOutTipLabel", delta: "delta" }, ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function ControlZoomComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlZoomComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlZoomComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-zoom',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { duration: [{
                type: core.Input
            }], zoomInLabel: [{
                type: core.Input
            }], zoomOutLabel: [{
                type: core.Input
            }], zoomInTipLabel: [{
                type: core.Input
            }], zoomOutTipLabel: [{
                type: core.Input
            }], delta: [{
                type: core.Input
            }] }); })();

    var _c0$j = ["*"];
    var ControlZoomSliderComponent = /** @class */ (function () {
        function ControlZoomSliderComponent(map) {
            this.map = map;
        }
        ControlZoomSliderComponent.prototype.ngOnInit = function () {
            this.instance = new control.ZoomSlider(this);
            this.map.instance.addControl(this.instance);
        };
        ControlZoomSliderComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlZoomSliderComponent.ɵfac = function ControlZoomSliderComponent_Factory(t) { return new (t || ControlZoomSliderComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlZoomSliderComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlZoomSliderComponent, selectors: [["map-control-zoomslider"]], inputs: { className: "className", duration: "duration", maxResolution: "maxResolution", minResolution: "minResolution" }, ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function ControlZoomSliderComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlZoomSliderComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlZoomSliderComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-zoomslider',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }]; }, { className: [{
                type: core.Input
            }], duration: [{
                type: core.Input
            }], maxResolution: [{
                type: core.Input
            }], minResolution: [{
                type: core.Input
            }] }); })();

    var _c0$k = ["*"];
    var ControlZoomToExtentComponent = /** @class */ (function () {
        function ControlZoomToExtentComponent(map) {
            this.map = map;
        }
        ControlZoomToExtentComponent.prototype.ngOnInit = function () {
            this.instance = new control.ZoomToExtent(this);
            this.map.instance.addControl(this.instance);
        };
        ControlZoomToExtentComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeControl(this.instance);
        };
        ControlZoomToExtentComponent.ɵfac = function ControlZoomToExtentComponent_Factory(t) { return new (t || ControlZoomToExtentComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ControlZoomToExtentComponent.ɵcmp = core.ɵɵdefineComponent({ type: ControlZoomToExtentComponent, selectors: [["map-control-zoomtoextent"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", extent: "extent" }, ngContentSelectors: _c0$k, decls: 1, vars: 0, template: function ControlZoomToExtentComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ControlZoomToExtentComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ControlZoomToExtentComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control-zoomtoextent',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: MapComponent }]; }, { className: [{
                type: core.Input
            }], label: [{
                type: core.Input
            }], tipLabel: [{
                type: core.Input
            }], extent: [{
                type: core.Input
            }] }); })();

    var _c0$l = ["*"];
    var GeometryCircleComponent = /** @class */ (function (_super) {
        __extends(GeometryCircleComponent, _super);
        function GeometryCircleComponent(map, host) {
            var _this = _super.call(this, map, host) || this;
            _this.componentType = 'geometry-circle';
            // defaulting coordinates to [0,0]. To be overridden in child component.
            _this.instance = new geom.Circle([0, 0]);
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
        GeometryCircleComponent.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryCircleComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["map-geometry-circle"]], inputs: { radius: "radius" }, features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$l, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryCircleComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryCircleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-geometry-circle',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }, { type: FeatureComponent }]; }, { radius: [{
                type: core.Input
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
            this.instance = new geom.Point([0, 0]);
            _super.prototype.ngOnInit.call(this);
        };
        GeometryPointComponent.ɵfac = function GeometryPointComponent_Factory(t) { return new (t || GeometryPointComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(FeatureComponent)); };
        GeometryPointComponent.ɵcmp = core.ɵɵdefineComponent({ type: GeometryPointComponent, selectors: [["map-geometry-point"]], features: [core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$m, decls: 1, vars: 0, template: function GeometryPointComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GeometryPointComponent;
    }(SimpleGeometryComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GeometryPointComponent, [{
            type: core.Component,
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
                this.instance = new ol.Overlay(this);
                this.map.instance.addOverlay(this.instance);
            }
        };
        OverlayComponent.prototype.ngOnDestroy = function () {
            if (this.instance) {
                this.map.instance.removeOverlay(this.instance);
            }
        };
        OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        OverlayComponent.ɵcmp = core.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["map-overlay"]], contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.content = _t.first);
            } }, inputs: { id: "id", offset: "offset", positioning: "positioning", stopEvent: "stopEvent", insertFirst: "insertFirst", autoPan: "autoPan", autoPanAnimation: "autoPanAnimation", autoPanMargin: "autoPanMargin" }, ngContentSelectors: _c0$n, decls: 1, vars: 0, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return OverlayComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OverlayComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-overlay',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: MapComponent }]; }, { content: [{
                type: core.ContentChild,
                args: [ContentComponent, { static: true }]
            }], id: [{
                type: core.Input
            }], offset: [{
                type: core.Input
            }], positioning: [{
                type: core.Input
            }], stopEvent: [{
                type: core.Input
            }], insertFirst: [{
                type: core.Input
            }], autoPan: [{
                type: core.Input
            }], autoPanAnimation: [{
                type: core.Input
            }], autoPanMargin: [{
                type: core.Input
            }] }); })();

    var _c0$o = ["*"];
    var ViewComponent = /** @class */ (function () {
        function ViewComponent(host) {
            this.host = host;
            this.componentType = 'view';
            this.zoomAnimation = false;
            this.changeZoom = new core.EventEmitter();
            this.changeResolution = new core.EventEmitter();
            this.changeCenter = new core.EventEmitter();
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
        ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ViewComponent.ɵcmp = core.ɵɵdefineComponent({ type: ViewComponent, selectors: [["map-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", zoomAnimation: "zoomAnimation" }, outputs: { changeZoom: "changeZoom", changeResolution: "changeResolution", changeCenter: "changeCenter" }, features: [core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$o, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return ViewComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ViewComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-view',
                    template: ' <ng-content></ng-content>'
                }]
        }], function () { return [{ type: MapComponent }]; }, { constrainRotation: [{
                type: core.Input
            }], enableRotation: [{
                type: core.Input
            }], extent: [{
                type: core.Input
            }], maxResolution: [{
                type: core.Input
            }], minResolution: [{
                type: core.Input
            }], maxZoom: [{
                type: core.Input
            }], minZoom: [{
                type: core.Input
            }], resolution: [{
                type: core.Input
            }], resolutions: [{
                type: core.Input
            }], rotation: [{
                type: core.Input
            }], zoom: [{
                type: core.Input
            }], zoomFactor: [{
                type: core.Input
            }], center: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], zoomAnimation: [{
                type: core.Input
            }], changeZoom: [{
                type: core.Output
            }], changeResolution: [{
                type: core.Output
            }], changeCenter: [{
                type: core.Output
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
                : transformedCoordinates = proj.transform([this.x, this.y], this.srid, this.mapSrid);
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
        CoordinateComponent.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(ViewComponent, 8), core.ɵɵdirectiveInject(GeometryPointComponent, 8), core.ɵɵdirectiveInject(GeometryCircleComponent, 8), core.ɵɵdirectiveInject(OverlayComponent, 8)); };
        CoordinateComponent.ɵcmp = core.ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["map-coordinate"]], inputs: { x: "x", y: "y", srid: "srid" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return CoordinateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CoordinateComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-coordinate',
                    template: ' <div class="map-coordinate"></div>'
                }]
        }], function () { return [{ type: MapComponent }, { type: ViewComponent, decorators: [{
                    type: core.Optional
                }] }, { type: GeometryPointComponent, decorators: [{
                    type: core.Optional
                }] }, { type: GeometryCircleComponent, decorators: [{
                    type: core.Optional
                }] }, { type: OverlayComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { x: [{
                type: core.Input
            }], y: [{
                type: core.Input
            }], srid: [{
                type: core.Input
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
            _this.instance = new format.MVT(_this);
            return _this;
        }
        FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); };
        FormatMVTComponent.ɵcmp = core.ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["map-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [core.ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: core.forwardRef(function () { return FormatMVTComponent; }) }]), core.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return FormatMVTComponent;
    }(FormatComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FormatMVTComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-format-mvt',
                    template: '',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: FormatComponent, useExisting: core.forwardRef(function () { return FormatMVTComponent; }) }]
                }]
        }], function () { return []; }, { featureClass: [{
                type: core.Input
            }], geometryName: [{
                type: core.Input
            }], layerName: [{
                type: core.Input
            }], layers: [{
                type: core.Input
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
                this.instance = new ol.Graticule(properties);
            }
            this.instance.setMap(this.map.instance);
        };
        GraticuleComponent.prototype.ngAfterContentInit = function () {
            this.instance = new ol.Graticule({
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
        GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        GraticuleComponent.ɵcmp = core.ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["map-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$p, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return GraticuleComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GraticuleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-graticule',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: MapComponent }]; }, { strokeStyle: [{
                type: core.Input
            }], showLabels: [{
                type: core.Input
            }], lonLabelPosition: [{
                type: core.Input
            }], latLabelPosition: [{
                type: core.Input
            }] }); })();

    var DefaultInteractionComponent = /** @class */ (function () {
        function DefaultInteractionComponent(map) {
            this.map = map;
        }
        DefaultInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = interaction.defaults();
            this.instance.forEach(function (i) { _this.map.instance.addInteraction(i); });
        };
        DefaultInteractionComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            this.instance.forEach(function (i) { return _this.map.instance.removeInteraction(i); });
        };
        DefaultInteractionComponent.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DefaultInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["map-interaction-default"]], decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DefaultInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DefaultInteractionComponent, [{
            type: core.Component,
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
            this.instance = new interaction.DoubleClickZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        DoubleClickZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DoubleClickZoomInteractionComponent.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) { return new (t || DoubleClickZoomInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DoubleClickZoomInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DoubleClickZoomInteractionComponent, selectors: [["map-interaction-doubleclickzoom"]], inputs: { duration: "duration", delta: "delta" }, decls: 0, vars: 0, template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DoubleClickZoomInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DoubleClickZoomInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-doubleclickzoom',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { duration: [{
                type: core.Input
            }], delta: [{
                type: core.Input
            }] }); })();

    var DragAndDropInteractionComponent = /** @class */ (function () {
        function DragAndDropInteractionComponent(map) {
            this.map = map;
        }
        DragAndDropInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragAndDrop(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragAndDropInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragAndDropInteractionComponent.ɵfac = function DragAndDropInteractionComponent_Factory(t) { return new (t || DragAndDropInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DragAndDropInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DragAndDropInteractionComponent, selectors: [["map-interaction-draganddrop"]], inputs: { formatConstructors: "formatConstructors", projection: "projection", target: "target" }, decls: 0, vars: 0, template: function DragAndDropInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DragAndDropInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DragAndDropInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-draganddrop',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { formatConstructors: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], target: [{
                type: core.Input
            }] }); })();

    var DragBoxInteractionComponent = /** @class */ (function () {
        function DragBoxInteractionComponent(map) {
            this.map = map;
        }
        DragBoxInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragBox(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragBoxInteractionComponent.ɵfac = function DragBoxInteractionComponent_Factory(t) { return new (t || DragBoxInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DragBoxInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DragBoxInteractionComponent, selectors: [["map-interaction-dragbox"]], inputs: { className: "className", condition: "condition", boxEndCondition: "boxEndCondition" }, decls: 0, vars: 0, template: function DragBoxInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DragBoxInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DragBoxInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-dragbox',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { className: [{
                type: core.Input
            }], condition: [{
                type: core.Input
            }], boxEndCondition: [{
                type: core.Input
            }] }); })();

    var DragPanInteractionComponent = /** @class */ (function () {
        function DragPanInteractionComponent(map) {
            this.map = map;
        }
        DragPanInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragPan(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragPanInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragPanInteractionComponent.ɵfac = function DragPanInteractionComponent_Factory(t) { return new (t || DragPanInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DragPanInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DragPanInteractionComponent, selectors: [["map-interaction-dragpan"]], inputs: { condition: "condition", kinetic: "kinetic" }, decls: 0, vars: 0, template: function DragPanInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DragPanInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DragPanInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-dragpan',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { condition: [{
                type: core.Input
            }], kinetic: [{
                type: core.Input
            }] }); })();

    var DragRotateInteractionComponent = /** @class */ (function () {
        function DragRotateInteractionComponent(map) {
            this.map = map;
        }
        DragRotateInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragRotate(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragRotateInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragRotateInteractionComponent.ɵfac = function DragRotateInteractionComponent_Factory(t) { return new (t || DragRotateInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DragRotateInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DragRotateInteractionComponent, selectors: [["map-interaction-dragrotate"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DragRotateInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DragRotateInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-dragrotate',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { condition: [{
                type: core.Input
            }], duration: [{
                type: core.Input
            }] }); })();

    var DragRotateAndZoomInteractionComponent = /** @class */ (function () {
        function DragRotateAndZoomInteractionComponent(map) {
            this.map = map;
        }
        DragRotateAndZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragRotateAndZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragRotateAndZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragRotateAndZoomInteractionComponent.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) { return new (t || DragRotateAndZoomInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DragRotateAndZoomInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DragRotateAndZoomInteractionComponent, selectors: [["map-interaction-dragrotateandzoom"]], inputs: { condition: "condition", duration: "duration" }, decls: 0, vars: 0, template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DragRotateAndZoomInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DragRotateAndZoomInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-dragrotateandzoom',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { condition: [{
                type: core.Input
            }], duration: [{
                type: core.Input
            }] }); })();

    var DragZoomInteractionComponent = /** @class */ (function () {
        function DragZoomInteractionComponent(map) {
            this.map = map;
        }
        DragZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.DragZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        DragZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        DragZoomInteractionComponent.ɵfac = function DragZoomInteractionComponent_Factory(t) { return new (t || DragZoomInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DragZoomInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DragZoomInteractionComponent, selectors: [["map-interaction-dragzoom"]], inputs: { className: "className", condition: "condition", duration: "duration", out: "out" }, decls: 0, vars: 0, template: function DragZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DragZoomInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DragZoomInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-dragzoom',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { className: [{
                type: core.Input
            }], condition: [{
                type: core.Input
            }], duration: [{
                type: core.Input
            }], out: [{
                type: core.Input
            }] }); })();

    var DrawInteractionComponent = /** @class */ (function () {
        function DrawInteractionComponent(map) {
            this.map = map;
            this.olChange = new core.EventEmitter();
            this.olChangeActive = new core.EventEmitter();
            this.drawEnd = new core.EventEmitter();
            this.drawStart = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
        }
        DrawInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Draw(this);
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
        DrawInteractionComponent.ɵfac = function DrawInteractionComponent_Factory(t) { return new (t || DrawInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        DrawInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: DrawInteractionComponent, selectors: [["map-interaction-draw"]], inputs: { clickTolerance: "clickTolerance", features: "features", source: "source", snapTolerance: "snapTolerance", type: "type", maxPoints: "maxPoints", minPoints: "minPoints", finishCondition: "finishCondition", style: "style", geometryFunction: "geometryFunction", geometryName: "geometryName", condition: "condition", freehandCondition: "freehandCondition", freehand: "freehand", wrapX: "wrapX" }, outputs: { olChange: "olChange", olChangeActive: "olChangeActive", drawEnd: "drawEnd", drawStart: "drawStart", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function DrawInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DrawInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DrawInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-draw',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { clickTolerance: [{
                type: core.Input
            }], features: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], snapTolerance: [{
                type: core.Input
            }], type: [{
                type: core.Input
            }], maxPoints: [{
                type: core.Input
            }], minPoints: [{
                type: core.Input
            }], finishCondition: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], geometryFunction: [{
                type: core.Input
            }], geometryName: [{
                type: core.Input
            }], condition: [{
                type: core.Input
            }], freehandCondition: [{
                type: core.Input
            }], freehand: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], olChange: [{
                type: core.Output
            }], olChangeActive: [{
                type: core.Output
            }], drawEnd: [{
                type: core.Output
            }], drawStart: [{
                type: core.Output
            }], propertyChange: [{
                type: core.Output
            }] }); })();

    var ModifyInteractionComponent = /** @class */ (function () {
        function ModifyInteractionComponent(map) {
            this.map = map;
            this.modifyEnd = new core.EventEmitter();
            this.modifyStart = new core.EventEmitter();
            this.olChange = new core.EventEmitter();
            this.olChangeActive = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
        }
        ModifyInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Modify(this);
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
        ModifyInteractionComponent.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        ModifyInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["map-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { modifyEnd: "modifyEnd", modifyStart: "modifyStart", olChange: "olChange", olChangeActive: "olChangeActive", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return ModifyInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ModifyInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-modify',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { condition: [{
                type: core.Input
            }], deleteCondition: [{
                type: core.Input
            }], pixelTolerance: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], features: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], modifyEnd: [{
                type: core.Output
            }], modifyStart: [{
                type: core.Output
            }], olChange: [{
                type: core.Output
            }], olChangeActive: [{
                type: core.Output
            }], propertyChange: [{
                type: core.Output
            }] }); })();

    var MouseWheelZoomInteractionComponent = /** @class */ (function () {
        function MouseWheelZoomInteractionComponent(map) {
            this.map = map;
        }
        MouseWheelZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.MouseWheelZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        MouseWheelZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        MouseWheelZoomInteractionComponent.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) { return new (t || MouseWheelZoomInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        MouseWheelZoomInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: MouseWheelZoomInteractionComponent, selectors: [["map-interaction-mousewheelzoom"]], inputs: { duration: "duration", timeout: "timeout", useAnchor: "useAnchor" }, decls: 0, vars: 0, template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return MouseWheelZoomInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MouseWheelZoomInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-mousewheelzoom',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { duration: [{
                type: core.Input
            }], timeout: [{
                type: core.Input
            }], useAnchor: [{
                type: core.Input
            }] }); })();

    var PinchZoomInteractionComponent = /** @class */ (function () {
        function PinchZoomInteractionComponent(map) {
            this.map = map;
        }
        PinchZoomInteractionComponent.prototype.ngOnInit = function () {
            this.instance = new interaction.PinchZoom(this);
            this.map.instance.addInteraction(this.instance);
        };
        PinchZoomInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        PinchZoomInteractionComponent.ɵfac = function PinchZoomInteractionComponent_Factory(t) { return new (t || PinchZoomInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        PinchZoomInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: PinchZoomInteractionComponent, selectors: [["map-interaction-pinchzoom"]], inputs: { duration: "duration", constrainResolution: "constrainResolution" }, decls: 0, vars: 0, template: function PinchZoomInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return PinchZoomInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PinchZoomInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-pinchzoom',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { duration: [{
                type: core.Input
            }], constrainResolution: [{
                type: core.Input
            }] }); })();

    var SelectInteractionComponent = /** @class */ (function () {
        function SelectInteractionComponent(map) {
            this.map = map;
            this.olChange = new core.EventEmitter();
            this.olSelect = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
        }
        SelectInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Select(this);
            this.instance.on('change', function (event) { _this.olChange.emit(event); });
            this.instance.on('select', function (event) { _this.olSelect.emit(event); });
            this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
            this.map.instance.addInteraction(this.instance);
        };
        SelectInteractionComponent.prototype.ngOnDestroy = function () {
            this.map.instance.removeInteraction(this.instance);
        };
        SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        SelectInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["map-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olSelect: "olSelect", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return SelectInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SelectInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-select',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { addCondition: [{
                type: core.Input
            }], condition: [{
                type: core.Input
            }], layers: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], removeCondition: [{
                type: core.Input
            }], toggleCondition: [{
                type: core.Input
            }], multi: [{
                type: core.Input
            }], features: [{
                type: core.Input
            }], filter: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], olChange: [{
                type: core.Output
            }], olSelect: [{
                type: core.Output
            }], propertyChange: [{
                type: core.Output
            }] }); })();

    var TranslateInteractionComponent = /** @class */ (function () {
        function TranslateInteractionComponent(map) {
            this.map = map;
            this.olChange = new core.EventEmitter();
            this.propertyChange = new core.EventEmitter();
            this.translateEnd = new core.EventEmitter();
            this.translateStart = new core.EventEmitter();
            this.translating = new core.EventEmitter();
        }
        TranslateInteractionComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new interaction.Translate(this);
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
        TranslateInteractionComponent.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(core.ɵɵdirectiveInject(MapComponent)); };
        TranslateInteractionComponent.ɵcmp = core.ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["map-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return TranslateInteractionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TranslateInteractionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-interaction-translate',
                    template: ''
                }]
        }], function () { return [{ type: MapComponent }]; }, { features: [{
                type: core.Input
            }], layers: [{
                type: core.Input
            }], hitTolerance: [{
                type: core.Input
            }], olChange: [{
                type: core.Output
            }], propertyChange: [{
                type: core.Output
            }], translateEnd: [{
                type: core.Output
            }], translateStart: [{
                type: core.Output
            }], translating: [{
                type: core.Output
            }] }); })();

    var _c0$q = ["*"];
    var LayerImageComponent = /** @class */ (function (_super) {
        __extends(LayerImageComponent, _super);
        function LayerImageComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerImageComponent.prototype.ngOnInit = function () {
            this.instance = new layer.Image(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerImageComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerImageComponent.ɵfac = function LayerImageComponent_Factory(t) { return new (t || LayerImageComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
        LayerImageComponent.ɵcmp = core.ɵɵdefineComponent({ type: LayerImageComponent, selectors: [["map-layer-image"]], inputs: { opacity: "opacity", visible: "visible", extent: "extent", minResolution: "minResolution", maxResolution: "maxResolution", zIndex: "zIndex" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$q, decls: 1, vars: 0, template: function LayerImageComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return LayerImageComponent;
    }(LayerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LayerImageComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-layer-image',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { opacity: [{
                type: core.Input
            }], visible: [{
                type: core.Input
            }], extent: [{
                type: core.Input
            }], minResolution: [{
                type: core.Input
            }], maxResolution: [{
                type: core.Input
            }], zIndex: [{
                type: core.Input
            }] }); })();

    var _c0$r = ["*"];
    var LayerTileComponent = /** @class */ (function (_super) {
        __extends(LayerTileComponent, _super);
        function LayerTileComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerTileComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.layer.Tile instance with:', this);
            this.instance = new layer.Tile(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerTileComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerTileComponent.ɵfac = function LayerTileComponent_Factory(t) { return new (t || LayerTileComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
        LayerTileComponent.ɵcmp = core.ɵɵdefineComponent({ type: LayerTileComponent, selectors: [["map-layer-tile"]], inputs: { preload: "preload", useInterimTilesOnError: "useInterimTilesOnError" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$r, decls: 1, vars: 0, template: function LayerTileComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return LayerTileComponent;
    }(LayerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LayerTileComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-layer-tile',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { preload: [{
                type: core.Input
            }], useInterimTilesOnError: [{
                type: core.Input
            }] }); })();

    var _c0$s = ["*"];
    var LayerVectorTileComponent = /** @class */ (function (_super) {
        __extends(LayerVectorTileComponent, _super);
        function LayerVectorTileComponent(map, group) {
            return _super.call(this, group || map) || this;
        }
        LayerVectorTileComponent.prototype.ngOnInit = function () {
            // console.log('creating ol.layer.VectorTile instance with:', this);
            this.instance = new layer.VectorTile(this);
            _super.prototype.ngOnInit.call(this);
        };
        LayerVectorTileComponent.prototype.ngOnChanges = function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        LayerVectorTileComponent.ɵfac = function LayerVectorTileComponent_Factory(t) { return new (t || LayerVectorTileComponent)(core.ɵɵdirectiveInject(MapComponent), core.ɵɵdirectiveInject(LayerGroupComponent, 8)); };
        LayerVectorTileComponent.ɵcmp = core.ɵɵdefineComponent({ type: LayerVectorTileComponent, selectors: [["map-layer-vectortile"]], inputs: { renderBuffer: "renderBuffer", renderMode: "renderMode", renderOrder: "renderOrder", style: "style", updateWhileAnimating: "updateWhileAnimating", updateWhileInteracting: "updateWhileInteracting", visible: "visible" }, features: [core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$s, decls: 1, vars: 0, template: function LayerVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return LayerVectorTileComponent;
    }(LayerComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LayerVectorTileComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-layer-vectortile',
                    template: ' <ng-content></ng-content> '
                }]
        }], function () { return [{ type: MapComponent }, { type: LayerGroupComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { renderBuffer: [{
                type: core.Input
            }], renderMode: [{
                type: core.Input
            }], renderOrder: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], updateWhileAnimating: [{
                type: core.Input
            }], updateWhileInteracting: [{
                type: core.Input
            }], visible: [{
                type: core.Input
            }] }); })();

    var SourceBingmapsComponent = /** @class */ (function (_super) {
        __extends(SourceBingmapsComponent, _super);
        function SourceBingmapsComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.imagerySet = 'Aerial';
            return _this;
        }
        SourceBingmapsComponent.prototype.ngOnInit = function () {
            this.instance = new source.BingMaps(this);
            this.host.instance.setSource(this.instance);
        };
        SourceBingmapsComponent.ɵfac = function SourceBingmapsComponent_Factory(t) { return new (t || SourceBingmapsComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 1)); };
        SourceBingmapsComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceBingmapsComponent, selectors: [["map-source-bingmaps"]], inputs: { cacheSize: "cacheSize", hidpi: "hidpi", culture: "culture", key: "key", imagerySet: "imagerySet", maxZoom: "maxZoom", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", wrapX: "wrapX" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceBingmapsComponent; }) }]), core.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "aol-source-bingmaps"]], template: function SourceBingmapsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return SourceBingmapsComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceBingmapsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-bingmaps',
                    template: ' <div class="aol-source-bingmaps"></div> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceBingmapsComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Host
                }] }]; }, { cacheSize: [{
                type: core.Input
            }], hidpi: [{
                type: core.Input
            }], culture: [{
                type: core.Input
            }], key: [{
                type: core.Input
            }], imagerySet: [{
                type: core.Input
            }], maxZoom: [{
                type: core.Input
            }], reprojectionErrorThreshold: [{
                type: core.Input
            }], tileLoadFunction: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }] }); })();

    var _c0$t = ["*"];
    var SourceClusterComponent = /** @class */ (function (_super) {
        __extends(SourceClusterComponent, _super);
        function SourceClusterComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceClusterComponent.prototype.ngAfterContentInit = function () {
            this.source = this.sourceVectorComponent.instance;
            this.instance = new source.Cluster(this);
            this.host.instance.setSource(this.instance);
        };
        SourceClusterComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance && changes.hasOwnProperty('distance')) {
                this.instance.setDistance(this.distance);
            }
        };
        SourceClusterComponent.ɵfac = function SourceClusterComponent_Factory(t) { return new (t || SourceClusterComponent)(core.ɵɵdirectiveInject(LayerVectorComponent, 1)); };
        SourceClusterComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceClusterComponent, selectors: [["map-source-cluster"]], contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, SourceVectorComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.sourceVectorComponent = _t.first);
            } }, inputs: { distance: "distance", geometryFunction: "geometryFunction", wrapX: "wrapX" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceClusterComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$t, decls: 1, vars: 0, template: function SourceClusterComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceClusterComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceClusterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-cluster',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceClusterComponent; }) }]
                }]
        }], function () { return [{ type: LayerVectorComponent, decorators: [{
                    type: core.Host
                }] }]; }, { distance: [{
                type: core.Input
            }], geometryFunction: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], sourceVectorComponent: [{
                type: core.ContentChild,
                args: [SourceVectorComponent]
            }] }); })();

    var _c0$u = ["*"];
    var SourceGeoJSONComponent = /** @class */ (function (_super) {
        __extends(SourceGeoJSONComponent, _super);
        function SourceGeoJSONComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceGeoJSONComponent.prototype.ngOnInit = function () {
            this.format = new format.GeoJSON(this);
            this.instance = new source.Vector(this);
            this.host.instance.setSource(this.instance);
        };
        SourceGeoJSONComponent.ɵfac = function SourceGeoJSONComponent_Factory(t) { return new (t || SourceGeoJSONComponent)(core.ɵɵdirectiveInject(LayerVectorComponent, 1)); };
        SourceGeoJSONComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceGeoJSONComponent, selectors: [["map-source-geojson"]], inputs: { defaultDataProjection: "defaultDataProjection", featureProjection: "featureProjection", geometryName: "geometryName", url: "url" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceGeoJSONComponent; }) }]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$u, decls: 1, vars: 0, template: function SourceGeoJSONComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceGeoJSONComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceGeoJSONComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-geojson',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceGeoJSONComponent; }) }]
                }]
        }], function () { return [{ type: LayerVectorComponent, decorators: [{
                    type: core.Host
                }] }]; }, { defaultDataProjection: [{
                type: core.Input
            }], featureProjection: [{
                type: core.Input
            }], geometryName: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }] }); })();

    var _c0$v = ["*"];
    var SourceImageArcGISRestComponent = /** @class */ (function (_super) {
        __extends(SourceImageArcGISRestComponent, _super);
        function SourceImageArcGISRestComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.ratio = 1.5;
            _this.imageLoadStart = new core.EventEmitter();
            _this.imageLoadEnd = new core.EventEmitter();
            _this.imageLoadError = new core.EventEmitter();
            return _this;
        }
        SourceImageArcGISRestComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new source.ImageArcGISRest(this);
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
        SourceImageArcGISRestComponent.ɵfac = function SourceImageArcGISRestComponent_Factory(t) { return new (t || SourceImageArcGISRestComponent)(core.ɵɵdirectiveInject(LayerImageComponent, 1)); };
        SourceImageArcGISRestComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceImageArcGISRestComponent, selectors: [["map-source-imagearcgisrest"]], inputs: { projection: "projection", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", params: "params", ratio: "ratio", resolutions: "resolutions", wrapX: "wrapX" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageArcGISRestComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$v, decls: 1, vars: 0, template: function SourceImageArcGISRestComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceImageArcGISRestComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceImageArcGISRestComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-imagearcgisrest',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageArcGISRestComponent; }) }]
                }]
        }], function () { return [{ type: LayerImageComponent, decorators: [{
                    type: core.Host
                }] }]; }, { projection: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], attributions: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], imageLoadFunction: [{
                type: core.Input
            }], params: [{
                type: core.Input
            }], ratio: [{
                type: core.Input
            }], resolutions: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], imageLoadStart: [{
                type: core.Output
            }], imageLoadEnd: [{
                type: core.Output
            }], imageLoadError: [{
                type: core.Output
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
            _this.imageLoadStart = new core.EventEmitter();
            _this.imageLoadEnd = new core.EventEmitter();
            _this.imageLoadError = new core.EventEmitter();
            return _this;
        }
        SourceImageStaticComponent.prototype.setLayerSource = function () {
            var _this = this;
            this.instance = new source.ImageStatic(this);
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
        SourceImageStaticComponent.ɵfac = function SourceImageStaticComponent_Factory(t) { return new (t || SourceImageStaticComponent)(core.ɵɵdirectiveInject(LayerImageComponent, 1)); };
        SourceImageStaticComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceImageStaticComponent, selectors: [["map-source-imagestatic"]], inputs: { projection: "projection", imageExtent: "imageExtent", url: "url", attributions: "attributions", crossOrigin: "crossOrigin", imageLoadFunction: "imageLoadFunction", imageSize: "imageSize" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageStaticComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$w, decls: 1, vars: 0, template: function SourceImageStaticComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceImageStaticComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceImageStaticComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-imagestatic',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageStaticComponent; }) }]
                }]
        }], function () { return [{ type: LayerImageComponent, decorators: [{
                    type: core.Host
                }] }]; }, { projection: [{
                type: core.Input
            }], imageExtent: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], attributions: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], imageLoadFunction: [{
                type: core.Input
            }], imageSize: [{
                type: core.Input
            }], imageLoadStart: [{
                type: core.Output
            }], imageLoadEnd: [{
                type: core.Output
            }], imageLoadError: [{
                type: core.Output
            }] }); })();

    var _c0$x = ["*"];
    var SourceImageWMSComponent = /** @class */ (function (_super) {
        __extends(SourceImageWMSComponent, _super);
        function SourceImageWMSComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.imageLoadStart = new core.EventEmitter();
            _this.imageLoadEnd = new core.EventEmitter();
            _this.imageLoadError = new core.EventEmitter();
            return _this;
        }
        SourceImageWMSComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.instance = new source.ImageWMS(this);
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
        SourceImageWMSComponent.ɵfac = function SourceImageWMSComponent_Factory(t) { return new (t || SourceImageWMSComponent)(core.ɵɵdirectiveInject(LayerImageComponent, 1)); };
        SourceImageWMSComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceImageWMSComponent, selectors: [["map-source-imagewms"]], inputs: { attributions: "attributions", crossOrigin: "crossOrigin", hidpi: "hidpi", serverType: "serverType", imageLoadFunction: "imageLoadFunction", params: "params", projection: "projection", ratio: "ratio", resolutions: "resolutions", url: "url" }, outputs: { imageLoadStart: "imageLoadStart", imageLoadEnd: "imageLoadEnd", imageLoadError: "imageLoadError" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageWMSComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$x, decls: 1, vars: 0, template: function SourceImageWMSComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceImageWMSComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceImageWMSComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-imagewms',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceImageWMSComponent; }) }]
                }]
        }], function () { return [{ type: LayerImageComponent, decorators: [{
                    type: core.Host
                }] }]; }, { attributions: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], hidpi: [{
                type: core.Input
            }], serverType: [{
                type: core.Input
            }], imageLoadFunction: [{
                type: core.Input
            }], params: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], ratio: [{
                type: core.Input
            }], resolutions: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], imageLoadStart: [{
                type: core.Output
            }], imageLoadEnd: [{
                type: core.Output
            }], imageLoadError: [{
                type: core.Output
            }] }); })();

    var TileGridComponent = /** @class */ (function () {
        function TileGridComponent() {
        }
        TileGridComponent.prototype.ngOnInit = function () {
            (!this.resolutions)
                ? this.instance = tilegrid.createXYZ(this)
                : this.instance = new TileGrid(this);
        };
        TileGridComponent.prototype.ngOnChanges = function (changes) {
            (!this.resolutions)
                ? this.instance = tilegrid.createXYZ(this)
                : this.instance = new TileGrid(this);
        };
        TileGridComponent.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); };
        TileGridComponent.ɵcmp = core.ɵɵdefineComponent({ type: TileGridComponent, selectors: [["map-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [core.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return TileGridComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TileGridComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-tilegrid',
                    template: ''
                }]
        }], null, { extent: [{
                type: core.Input
            }], maxZoom: [{
                type: core.Input
            }], minZoom: [{
                type: core.Input
            }], tileSize: [{
                type: core.Input
            }], origin: [{
                type: core.Input
            }], resolutions: [{
                type: core.Input
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
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
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
            this.instance = new source.XYZ(this);
            this.instance.on('tileloadstart', function (event) { _this.tileLoadStart.emit(event); });
            this.instance.on('tileloadend', function (event) { _this.tileLoadEnd.emit(event); });
            this.instance.on('tileloaderror', function (event) { _this.tileLoadError.emit(event); });
            this._register(this.instance);
        };
        SourceXYZComponent.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 9)); };
        SourceXYZComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["map-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, TileGridComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
            } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceXYZComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$y, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceXYZComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceXYZComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-xyz',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceXYZComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }]; }, { cacheSize: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], opaque: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], reprojectionErrorThreshold: [{
                type: core.Input
            }], minZoom: [{
                type: core.Input
            }], maxZoom: [{
                type: core.Input
            }], tileGrid: [{
                type: core.Input
            }], tileLoadFunction: [{
                type: core.Input
            }], tilePixelRatio: [{
                type: core.Input
            }], tileSize: [{
                type: core.Input
            }], tileUrlFunction: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], urls: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], tileGridXYZ: [{
                type: core.ContentChild,
                args: [TileGridComponent]
            }], tileLoadStart: [{
                type: core.Output
            }], tileLoadEnd: [{
                type: core.Output
            }], tileLoadError: [{
                type: core.Output
            }] }); })();

    var SourceOsmComponent = /** @class */ (function (_super) {
        __extends(SourceOsmComponent, _super);
        function SourceOsmComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.layer = layer;
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
            return _this;
        }
        SourceOsmComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.tileGridXYZ) {
                this.tileGrid = this.tileGridXYZ.instance;
            }
            this.instance = new source.OSM(this);
            this.instance.on('tileloadstart', function (event) { _this.tileLoadStart.emit(event); });
            this.instance.on('tileloadend', function (event) { _this.tileLoadEnd.emit(event); });
            this.instance.on('tileloaderror', function (event) { _this.tileLoadError.emit(event); });
            this._register(this.instance);
        };
        SourceOsmComponent.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 9)); };
        SourceOsmComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["map-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceOsmComponent; }) }]), core.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "map-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return SourceOsmComponent;
    }(SourceXYZComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceOsmComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-osm',
                    template: ' <div class="map-source-osm"></div> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceOsmComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Host
                }] }]; }, { attributions: [{
                type: core.Input
            }], cacheSize: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], maxZoom: [{
                type: core.Input
            }], opaque: [{
                type: core.Input
            }], reprojectionErrorThreshold: [{
                type: core.Input
            }], tileLoadFunction: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], tileLoadStart: [{
                type: core.Output
            }], tileLoadEnd: [{
                type: core.Output
            }], tileLoadError: [{
                type: core.Output
            }] }); })();

    var _c0$z = ["*"];
    var SourceRasterComponent = /** @class */ (function (_super) {
        __extends(SourceRasterComponent, _super);
        function SourceRasterComponent(layer) {
            var _this = _super.call(this, layer) || this;
            _this.beforeOperations = new core.EventEmitter();
            _this.afterOperations = new core.EventEmitter();
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
            this.instance = new source.Raster(this);
            this.instance.on('beforeoperations', function (event) { _this.beforeOperations.emit(event); });
            this.instance.on('afteroperations', function (event) { _this.afterOperations.emit(event); });
            this._register(this.instance);
        };
        SourceRasterComponent.ɵfac = function SourceRasterComponent_Factory(t) { return new (t || SourceRasterComponent)(core.ɵɵdirectiveInject(LayerImageComponent, 1)); };
        SourceRasterComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceRasterComponent, selectors: [["map-source-raster"]], contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, SourceComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.source = _t.first);
            } }, inputs: { operation: "operation", threads: "threads", lib: "lib", operationType: "operationType" }, outputs: { beforeOperations: "beforeOperations", afterOperations: "afterOperations" }, features: [core.ɵɵProvidersFeature([
                    {
                        provide: SourceComponent,
                        // tslint:disable-next-line: no-forward-ref
                        useExisting: core.forwardRef(function () { return SourceRasterComponent; })
                    }
                ]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$z, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceRasterComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceRasterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-raster',
                    template: '<ng-content></ng-content>',
                    providers: [
                        {
                            provide: SourceComponent,
                            // tslint:disable-next-line: no-forward-ref
                            useExisting: core.forwardRef(function () { return SourceRasterComponent; })
                        }
                    ]
                }]
        }], function () { return [{ type: LayerImageComponent, decorators: [{
                    type: core.Host
                }] }]; }, { operation: [{
                type: core.Input
            }], threads: [{
                type: core.Input
            }], lib: [{
                type: core.Input
            }], operationType: [{
                type: core.Input
            }], beforeOperations: [{
                type: core.Output
            }], afterOperations: [{
                type: core.Output
            }], source: [{
                type: core.ContentChild,
                args: [SourceComponent]
            }] }); })();

    var _c0$A = ["*"];
    var SourceTileJSONComponent = /** @class */ (function (_super) {
        __extends(SourceTileJSONComponent, _super);
        function SourceTileJSONComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceTileJSONComponent.prototype.ngOnInit = function () {
            this.instance = new source.TileJSON(this);
            this.host.instance.setSource(this.instance);
        };
        SourceTileJSONComponent.ɵfac = function SourceTileJSONComponent_Factory(t) { return new (t || SourceTileJSONComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 1)); };
        SourceTileJSONComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceTileJSONComponent, selectors: [["map-source-tilejson"]], inputs: { url: "url" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileJSONComponent; }) }]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$A, decls: 1, vars: 0, template: function SourceTileJSONComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceTileJSONComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceTileJSONComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-tilejson',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileJSONComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Host
                }] }]; }, { url: [{
                type: core.Input
            }] }); })();

    var _c0$B = ["*"];
    var SourceTileWMSComponent = /** @class */ (function (_super) {
        __extends(SourceTileWMSComponent, _super);
        function SourceTileWMSComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceTileWMSComponent.prototype.ngOnInit = function () {
            this.instance = new source.TileWMS(this);
            this.host.instance.setSource(this.instance);
        };
        SourceTileWMSComponent.prototype.ngOnChanges = function (changes) {
            if (this.instance && changes.hasOwnProperty('params')) {
                this.instance.updateParams(this.params);
            }
        };
        SourceTileWMSComponent.ɵfac = function SourceTileWMSComponent_Factory(t) { return new (t || SourceTileWMSComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 1)); };
        SourceTileWMSComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceTileWMSComponent, selectors: [["map-source-tilewms"]], inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", gutter: "gutter", hidpi: "hidpi", params: "params", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", serverType: "serverType", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileWMSComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$B, decls: 1, vars: 0, template: function SourceTileWMSComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceTileWMSComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceTileWMSComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-tilewms',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileWMSComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Host
                }] }]; }, { cacheSize: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], gutter: [{
                type: core.Input
            }], hidpi: [{
                type: core.Input
            }], params: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], reprojectionErrorThreshold: [{
                type: core.Input
            }], serverType: [{
                type: core.Input
            }], tileGrid: [{
                type: core.Input
            }], tileLoadFunction: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], urls: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
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
        TileGridWMTSComponent.ɵcmp = core.ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["map-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [core.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return TileGridWMTSComponent;
    }(TileGridComponent));
    var ɵTileGridWMTSComponent_BaseFactory = core.ɵɵgetInheritedFactory(TileGridWMTSComponent);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TileGridWMTSComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-tilegrid-wmts',
                    template: ''
                }]
        }], null, { origin: [{
                type: core.Input
            }], origins: [{
                type: core.Input
            }], resolutions: [{
                type: core.Input
            }], matrixIds: [{
                type: core.Input
            }], sizes: [{
                type: core.Input
            }], tileSizes: [{
                type: core.Input
            }], widths: [{
                type: core.Input
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
            _this.tileLoadStart = new core.EventEmitter();
            _this.tileLoadEnd = new core.EventEmitter();
            _this.tileLoadError = new core.EventEmitter();
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
        SourceTileWMTSComponent.ɵfac = function SourceTileWMTSComponent_Factory(t) { return new (t || SourceTileWMTSComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 1)); };
        SourceTileWMTSComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceTileWMTSComponent, selectors: [["map-source-tilewmts"]], contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, TileGridWMTSComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tileGridWMTS = _t.first);
            } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", tileGrid: "tileGrid", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", requestEncoding: "requestEncoding", layer: "layer", style: "style", tileClass: "tileClass", tilePixelRatio: "tilePixelRatio", version: "version", format: "format", matrixSet: "matrixSet", dimensions: "dimensions", url: "url", tileLoadFunction: "tileLoadFunction", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileWMTSComponent; }) }]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$C, decls: 1, vars: 0, template: function SourceTileWMTSComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceTileWMTSComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceTileWMTSComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-tilewmts',
                    template: '<ng-content></ng-content>',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceTileWMTSComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Host
                }] }]; }, { cacheSize: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], tileGrid: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], reprojectionErrorThreshold: [{
                type: core.Input
            }], requestEncoding: [{
                type: core.Input
            }], layer: [{
                type: core.Input
            }], style: [{
                type: core.Input
            }], tileClass: [{
                type: core.Input
            }], tilePixelRatio: [{
                type: core.Input
            }], version: [{
                type: core.Input
            }], format: [{
                type: core.Input
            }], matrixSet: [{
                type: core.Input
            }], dimensions: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], tileLoadFunction: [{
                type: core.Input
            }], urls: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], tileLoadStart: [{
                type: core.Output
            }], tileLoadEnd: [{
                type: core.Output
            }], tileLoadError: [{
                type: core.Output
            }], tileGridWMTS: [{
                type: core.ContentChild,
                args: [TileGridWMTSComponent]
            }] }); })();

    var _c0$D = ["*"];
    var SourceUTFGridComponent = /** @class */ (function (_super) {
        __extends(SourceUTFGridComponent, _super);
        function SourceUTFGridComponent(layer) {
            return _super.call(this, layer) || this;
        }
        SourceUTFGridComponent.prototype.ngOnInit = function () {
            this.instance = new source.UTFGrid(this);
            this.host.instance.setSource(this.instance);
        };
        SourceUTFGridComponent.ɵfac = function SourceUTFGridComponent_Factory(t) { return new (t || SourceUTFGridComponent)(core.ɵɵdirectiveInject(LayerTileComponent, 1)); };
        SourceUTFGridComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceUTFGridComponent, selectors: [["map-source-utfgrid"]], inputs: { tileJSON: "tileJSON", url: "url" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceUTFGridComponent; }) }]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$D, decls: 1, vars: 0, template: function SourceUTFGridComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceUTFGridComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceUTFGridComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-utfgrid',
                    template: '<ng-content></ng-content>',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceUTFGridComponent; }) }]
                }]
        }], function () { return [{ type: LayerTileComponent, decorators: [{
                    type: core.Host
                }] }]; }, { tileJSON: [{
                type: core.Input
            }], url: [{
                type: core.Input
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
        SourceVectorTileComponent.ɵfac = function SourceVectorTileComponent_Factory(t) { return new (t || SourceVectorTileComponent)(core.ɵɵdirectiveInject(LayerVectorTileComponent, 1)); };
        SourceVectorTileComponent.ɵcmp = core.ɵɵdefineComponent({ type: SourceVectorTileComponent, selectors: [["map-source-vectortile"]], contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, FormatComponent, true);
                core.ɵɵcontentQuery(dirIndex, TileGridComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.formatComponent = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tileGridComponent = _t.first);
            } }, inputs: { cacheSize: "cacheSize", overlaps: "overlaps", projection: "projection", tilePixelRatio: "tilePixelRatio", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [core.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceVectorTileComponent; }) }]), core.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$E, decls: 1, vars: 0, template: function SourceVectorTileComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return SourceVectorTileComponent;
    }(SourceComponent));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SourceVectorTileComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-source-vectortile',
                    template: ' <ng-content></ng-content> ',
                    // tslint:disable-next-line: no-forward-ref
                    providers: [{ provide: SourceComponent, useExisting: core.forwardRef(function () { return SourceVectorTileComponent; }) }]
                }]
        }], function () { return [{ type: LayerVectorTileComponent, decorators: [{
                    type: core.Host
                }] }]; }, { cacheSize: [{
                type: core.Input
            }], overlaps: [{
                type: core.Input
            }], projection: [{
                type: core.Input
            }], tilePixelRatio: [{
                type: core.Input
            }], tileUrlFunction: [{
                type: core.Input
            }], url: [{
                type: core.Input
            }], urls: [{
                type: core.Input
            }], wrapX: [{
                type: core.Input
            }], formatComponent: [{
                type: core.ContentChild,
                args: [FormatComponent]
            }], tileGridComponent: [{
                type: core.ContentChild,
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
            this.instance = new style.Style(this);
            this.host.instance.setStyle(this.instance);
        };
        StyleComponent.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(core.ɵɵdirectiveInject(FeatureComponent, 8), core.ɵɵdirectiveInject(LayerVectorComponent, 8)); };
        StyleComponent.ɵcmp = core.ɵɵdefineComponent({ type: StyleComponent, selectors: [["map-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0$F, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return StyleComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StyleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-style',
                    template: '<ng-content></ng-content>'
                }]
        }], function () { return [{ type: FeatureComponent, decorators: [{
                    type: core.Optional
                }] }, { type: LayerVectorComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { geometry: [{
                type: core.Input
            }], fill: [{
                type: core.Input
            }], image: [{
                type: core.Input
            }], stroke: [{
                type: core.Input
            }], text: [{
                type: core.Input
            }], zIndex: [{
                type: core.Input
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
            this.instance = new style.Circle(this);
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
        StyleCircleComponent.ɵfac = function StyleCircleComponent_Factory(t) { return new (t || StyleCircleComponent)(core.ɵɵdirectiveInject(StyleComponent, 1)); };
        StyleCircleComponent.ɵcmp = core.ɵɵdefineComponent({ type: StyleCircleComponent, selectors: [["map-style-circle"]], inputs: { fill: "fill", radius: "radius", snapToPixel: "snapToPixel", stroke: "stroke" }, features: [core.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$G, decls: 1, vars: 0, template: function StyleCircleComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2 });
        return StyleCircleComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StyleCircleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-style-circle',
                    template: ' <ng-content></ng-content>'
                }]
        }], function () { return [{ type: StyleComponent, decorators: [{
                    type: core.Host
                }] }]; }, { fill: [{
                type: core.Input
            }], radius: [{
                type: core.Input
            }], snapToPixel: [{
                type: core.Input
            }], stroke: [{
                type: core.Input
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
            this.instance = new style.Text(this);
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
        StyleTextComponent.ɵfac = function StyleTextComponent_Factory(t) { return new (t || StyleTextComponent)(core.ɵɵdirectiveInject(StyleComponent, 8)); };
        StyleTextComponent.ɵcmp = core.ɵɵdefineComponent({ type: StyleTextComponent, selectors: [["map-style-text"]], inputs: { font: "font", offsetX: "offsetX", offsetY: "offsetY", scale: "scale", rotateWithView: "rotateWithView", rotation: "rotation", text: "text", textAlign: "textAlign", textBaseLine: "textBaseLine" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "aol-style-text"]], template: function StyleTextComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return StyleTextComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StyleTextComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-style-text',
                    template: '<div class="aol-style-text"></div>'
                }]
        }], function () { return [{ type: StyleComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { font: [{
                type: core.Input
            }], offsetX: [{
                type: core.Input
            }], offsetY: [{
                type: core.Input
            }], scale: [{
                type: core.Input
            }], rotateWithView: [{
                type: core.Input
            }], rotation: [{
                type: core.Input
            }], text: [{
                type: core.Input
            }], textAlign: [{
                type: core.Input
            }], textBaseLine: [{
                type: core.Input
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
            this.instance = new style.Fill(this);
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
        StyleFillComponent.ɵfac = function StyleFillComponent_Factory(t) { return new (t || StyleFillComponent)(core.ɵɵdirectiveInject(StyleComponent, 8), core.ɵɵdirectiveInject(StyleCircleComponent, 8), core.ɵɵdirectiveInject(StyleTextComponent, 8)); };
        StyleFillComponent.ɵcmp = core.ɵɵdefineComponent({ type: StyleFillComponent, selectors: [["map-style-fill"]], inputs: { color: "color" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-fill"]], template: function StyleFillComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return StyleFillComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StyleFillComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-style-fill',
                    template: ' <div class="map-style-fill"></div>'
                }]
        }], function () { return [{ type: StyleComponent, decorators: [{
                    type: core.Optional
                }] }, { type: StyleCircleComponent, decorators: [{
                    type: core.Optional
                }] }, { type: StyleTextComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { color: [{
                type: core.Input
            }] }); })();

    var StyleIconComponent = /** @class */ (function () {
        function StyleIconComponent(host) {
            this.host = host;
        }
        StyleIconComponent.prototype.ngOnInit = function () {
            this.instance = new style.Icon(this);
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
                this.instance = new style.Icon(this);
                this.host.instance.setImage(this.instance);
            }
            this.host.update();
        };
        StyleIconComponent.ɵfac = function StyleIconComponent_Factory(t) { return new (t || StyleIconComponent)(core.ɵɵdirectiveInject(StyleComponent, 1)); };
        StyleIconComponent.ɵcmp = core.ɵɵdefineComponent({ type: StyleIconComponent, selectors: [["map-style-icon"]], inputs: { anchor: "anchor", anchorXUnits: "anchorXUnits", anchorYUnits: "anchorYUnits", anchorOrigin: "anchorOrigin", color: "color", crossOrigin: "crossOrigin", img: "img", offset: "offset", offsetOrigin: "offsetOrigin", opacity: "opacity", scale: "scale", snapToPixel: "snapToPixel", rotateWithView: "rotateWithView", rotation: "rotation", size: "size", imgSize: "imgSize", src: "src" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-icon"]], template: function StyleIconComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return StyleIconComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StyleIconComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-style-icon',
                    template: ' <div class="map-style-icon"></div>'
                }]
        }], function () { return [{ type: StyleComponent, decorators: [{
                    type: core.Host
                }] }]; }, { anchor: [{
                type: core.Input
            }], anchorXUnits: [{
                type: core.Input
            }], anchorYUnits: [{
                type: core.Input
            }], anchorOrigin: [{
                type: core.Input
            }], color: [{
                type: core.Input
            }], crossOrigin: [{
                type: core.Input
            }], img: [{
                type: core.Input
            }], offset: [{
                type: core.Input
            }], offsetOrigin: [{
                type: core.Input
            }], opacity: [{
                type: core.Input
            }], scale: [{
                type: core.Input
            }], snapToPixel: [{
                type: core.Input
            }], rotateWithView: [{
                type: core.Input
            }], rotation: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }], imgSize: [{
                type: core.Input
            }], src: [{
                type: core.Input
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
            this.instance = new style.Stroke(this);
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
        StyleStrokeComponent.ɵfac = function StyleStrokeComponent_Factory(t) { return new (t || StyleStrokeComponent)(core.ɵɵdirectiveInject(StyleComponent, 8), core.ɵɵdirectiveInject(StyleCircleComponent, 8), core.ɵɵdirectiveInject(StyleTextComponent, 8)); };
        StyleStrokeComponent.ɵcmp = core.ɵɵdefineComponent({ type: StyleStrokeComponent, selectors: [["map-style-stroke"]], inputs: { color: "color", lineCap: "lineCap", lineDash: "lineDash", lineJoin: "lineJoin", miterLimit: "miterLimit", width: "width" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-style-stroke"]], template: function StyleStrokeComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "div", 0);
            } }, encapsulation: 2 });
        return StyleStrokeComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StyleStrokeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-style-stroke',
                    template: '<div class="map-style-stroke"></div>'
                }]
        }], function () { return [{ type: StyleComponent, decorators: [{
                    type: core.Optional
                }] }, { type: StyleCircleComponent, decorators: [{
                    type: core.Optional
                }] }, { type: StyleTextComponent, decorators: [{
                    type: core.Optional
                }] }]; }, { color: [{
                type: core.Input
            }], lineCap: [{
                type: core.Input
            }], lineDash: [{
                type: core.Input
            }], lineJoin: [{
                type: core.Input
            }], miterLimit: [{
                type: core.Input
            }], width: [{
                type: core.Input
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
        AngularOpenlayersModule.ɵmod = core.ɵɵdefineNgModule({ type: AngularOpenlayersModule });
        AngularOpenlayersModule.ɵinj = core.ɵɵdefineInjector({ factory: function AngularOpenlayersModule_Factory(t) { return new (t || AngularOpenlayersModule)(); }, imports: [[common.CommonModule]] });
        return AngularOpenlayersModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(AngularOpenlayersModule, { declarations: [MapComponent,
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
            AttributionComponent], imports: [common.CommonModule], exports: [MapComponent,
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
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AngularOpenlayersModule, [{
            type: core.NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [common.CommonModule],
                    exports: COMPONENTS
                }]
        }], null, null); })();

    exports.AngularOpenlayersModule = AngularOpenlayersModule;
    exports.AttributionComponent = AttributionComponent;
    exports.AttributionsComponent = AttributionsComponent;
    exports.CollectionCoordinatesComponent = CollectionCoordinatesComponent;
    exports.ContentComponent = ContentComponent;
    exports.ControlAttributionComponent = ControlAttributionComponent;
    exports.ControlComponent = ControlComponent;
    exports.ControlFullScreenComponent = ControlFullScreenComponent;
    exports.ControlMousePositionComponent = ControlMousePositionComponent;
    exports.ControlOverviewMapComponent = ControlOverviewMapComponent;
    exports.ControlRotateComponent = ControlRotateComponent;
    exports.ControlScaleLineComponent = ControlScaleLineComponent;
    exports.ControlZoomComponent = ControlZoomComponent;
    exports.ControlZoomSliderComponent = ControlZoomSliderComponent;
    exports.ControlZoomToExtentComponent = ControlZoomToExtentComponent;
    exports.CoordinateComponent = CoordinateComponent;
    exports.DefaultControlComponent = DefaultControlComponent;
    exports.DefaultInteractionComponent = DefaultInteractionComponent;
    exports.DoubleClickZoomInteractionComponent = DoubleClickZoomInteractionComponent;
    exports.DragAndDropInteractionComponent = DragAndDropInteractionComponent;
    exports.DragBoxInteractionComponent = DragBoxInteractionComponent;
    exports.DragPanInteractionComponent = DragPanInteractionComponent;
    exports.DragRotateAndZoomInteractionComponent = DragRotateAndZoomInteractionComponent;
    exports.DragRotateInteractionComponent = DragRotateInteractionComponent;
    exports.DragZoomInteractionComponent = DragZoomInteractionComponent;
    exports.DrawInteractionComponent = DrawInteractionComponent;
    exports.FeatureComponent = FeatureComponent;
    exports.FormatMVTComponent = FormatMVTComponent;
    exports.GeometryCircleComponent = GeometryCircleComponent;
    exports.GeometryLinestringComponent = GeometryLinestringComponent;
    exports.GeometryMultiLinestringComponent = GeometryMultiLinestringComponent;
    exports.GeometryMultiPointComponent = GeometryMultiPointComponent;
    exports.GeometryMultiPolygonComponent = GeometryMultiPolygonComponent;
    exports.GeometryPointComponent = GeometryPointComponent;
    exports.GeometryPolygonComponent = GeometryPolygonComponent;
    exports.GraticuleComponent = GraticuleComponent;
    exports.LayerComponent = LayerComponent;
    exports.LayerGroupComponent = LayerGroupComponent;
    exports.LayerImageComponent = LayerImageComponent;
    exports.LayerTileComponent = LayerTileComponent;
    exports.LayerVectorComponent = LayerVectorComponent;
    exports.LayerVectorTileComponent = LayerVectorTileComponent;
    exports.MapComponent = MapComponent;
    exports.ModifyInteractionComponent = ModifyInteractionComponent;
    exports.MouseWheelZoomInteractionComponent = MouseWheelZoomInteractionComponent;
    exports.OverlayComponent = OverlayComponent;
    exports.PinchZoomInteractionComponent = PinchZoomInteractionComponent;
    exports.SelectInteractionComponent = SelectInteractionComponent;
    exports.SimpleGeometryComponent = SimpleGeometryComponent;
    exports.SourceBingmapsComponent = SourceBingmapsComponent;
    exports.SourceClusterComponent = SourceClusterComponent;
    exports.SourceComponent = SourceComponent;
    exports.SourceGeoJSONComponent = SourceGeoJSONComponent;
    exports.SourceImageArcGISRestComponent = SourceImageArcGISRestComponent;
    exports.SourceImageStaticComponent = SourceImageStaticComponent;
    exports.SourceImageWMSComponent = SourceImageWMSComponent;
    exports.SourceOsmComponent = SourceOsmComponent;
    exports.SourceRasterComponent = SourceRasterComponent;
    exports.SourceTileJSONComponent = SourceTileJSONComponent;
    exports.SourceTileWMSComponent = SourceTileWMSComponent;
    exports.SourceTileWMTSComponent = SourceTileWMTSComponent;
    exports.SourceUTFGridComponent = SourceUTFGridComponent;
    exports.SourceVectorComponent = SourceVectorComponent;
    exports.SourceVectorTileComponent = SourceVectorTileComponent;
    exports.SourceXYZComponent = SourceXYZComponent;
    exports.StyleCircleComponent = StyleCircleComponent;
    exports.StyleComponent = StyleComponent;
    exports.StyleFillComponent = StyleFillComponent;
    exports.StyleIconComponent = StyleIconComponent;
    exports.StyleStrokeComponent = StyleStrokeComponent;
    exports.StyleTextComponent = StyleTextComponent;
    exports.TileGridComponent = TileGridComponent;
    exports.TileGridWMTSComponent = TileGridWMTSComponent;
    exports.TranslateInteractionComponent = TranslateInteractionComponent;
    exports.ViewComponent = ViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-maps.umd.js.map
