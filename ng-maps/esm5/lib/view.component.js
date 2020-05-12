import { __values } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
var _c0 = ["*"];
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
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    ViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["map-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", zoomAnimation: "zoomAnimation" }, outputs: { changeZoom: "changeZoom", changeResolution: "changeResolution", changeCenter: "changeCenter" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ViewComponent;
}());
export { ViewComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'map-view',
                template: ' <ng-content></ng-content>'
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { constrainRotation: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFJekcsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUUvQztJQTRDRSx1QkFBcUIsSUFBa0I7UUFBbEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQXRDdkMsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFnQmQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFWixlQUFVLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDeEUscUJBQWdCLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFDOUUsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUM3RixVQUFLLEdBQUc7WUFDTixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLFFBQVE7WUFDUixlQUFlO1lBQ2YsZUFBZTtZQUNmLFNBQVM7WUFDVCxTQUFTO1lBQ1QsWUFBWTtZQUNaLGFBQWE7WUFDYixVQUFVO1lBQ1YsTUFBTTtZQUNOLFlBQVk7WUFDWixRQUFRO1lBQ1IsWUFBWTtZQUNaLGVBQWU7U0FDaEIsQ0FBQztJQUN3QyxDQUFDO0lBRTNDLGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxLQUFrQixJQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxLQUFrQixJQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxLQUFrQixJQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxPQUFzQjs7UUFDaEMsSUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7O1lBQ0QsS0FBa0IsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQSxnQkFBQSw0QkFBRTtnQkFBekIsSUFBTSxHQUFHLFdBQUE7Z0JBQ1osSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUMvQixRQUFRLEdBQUcsRUFBRTt3QkFDWCxLQUFLLE1BQU07NEJBQ1QscUVBQXFFOzRCQUNyRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0NBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDOzZCQUM1RDtpQ0FBTTtnQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7NkJBQ2xEOzRCQUNELE1BQU07d0JBQ1IsS0FBSyxZQUFZOzRCQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQzFDLE1BQU07d0JBQ1I7NEJBQ0UsTUFBTTtxQkFDVDtvQkFDRCxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztpQkFDN0M7YUFDRjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7OEVBOUVVLGFBQWE7c0RBQWIsYUFBYTs7WUFGWixrQkFBWTs7d0JBVDFCO0NBMEZDLEFBbkZELElBbUZDO1NBL0VZLGFBQWE7a0RBQWIsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSw0QkFBNEI7YUFDdkM7O2tCQUtFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC12aWV3JyxcbiAgdGVtcGxhdGU6ICcgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFZpZXc7XG4gIGNvbXBvbmVudFR5cGUgPSAndmlldyc7XG5cbiAgQElucHV0KCkgY29uc3RyYWluUm90YXRpb246IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVJvdGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KCkgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKSByZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJlc29sdXRpb25zOiBBcnJheTxudW1iZXI+O1xuICBASW5wdXQoKSByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSB6b29tOiBudW1iZXI7XG4gIEBJbnB1dCgpIHpvb21GYWN0b3I6IG51bWJlcjtcbiAgQElucHV0KCkgY2VudGVyOiBDb29yZGluYXRlO1xuICBASW5wdXQoKSBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHpvb21BbmltYXRpb24gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIHByb3BzID0gW1xuICAgICdjb25zdHJhaW5Sb3RhdGlvbicsXG4gICAgJ2VuYWJsZVJvdGF0aW9uJyxcbiAgICAnZXh0ZW50JyxcbiAgICAnbWF4UmVzb2x1dGlvbicsXG4gICAgJ21pblJlc29sdXRpb24nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ3Jlc29sdXRpb24nLFxuICAgICdyZXNvbHV0aW9ucycsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnem9vbScsXG4gICAgJ3pvb21GYWN0b3InLFxuICAgICdjZW50ZXInLFxuICAgICdwcm9qZWN0aW9uJyxcbiAgICAnem9vbUFuaW1hdGlvbidcbiAgXTtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTp6b29tJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4geyB0aGlzLmNoYW5nZVpvb20uZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4geyB0aGlzLmNoYW5nZVJlc29sdXRpb24uZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB7IHRoaXMuY2hhbmdlQ2VudGVyLmVtaXQoZXZlbnQpOyB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5wcm9wcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3pvb20nOlxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXG4gICAgICAgICAgICBpZiAodGhpcy56b29tQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYW5pbWF0ZSh7IHpvb206IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldFpvb20oY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcm9qZWN0aW9uJzpcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==