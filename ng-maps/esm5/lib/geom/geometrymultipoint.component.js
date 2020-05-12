import { __extends } from "tslib";
import { Component } from '@angular/core';
import { MultiPoint } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
var _c0 = ["*"];
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
    GeometryMultiPointComponent.ɵfac = function GeometryMultiPointComponent_Factory(t) { return new (t || GeometryMultiPointComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); };
    GeometryMultiPointComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeometryMultiPointComponent, selectors: [["map-geometry-multipoint"]], features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryMultiPointComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryMultiPointComponent;
}(SimpleGeometryComponent));
export { GeometryMultiPointComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeometryMultiPointComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-multipoint',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: i1.MapComponent }, { type: i2.FeatureComponent }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9nZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztBQUVyRTtJQUlpRCwrQ0FBdUI7SUFJdEUsb0RBQW9EO0lBQ3BELHFDQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFBckQsWUFDRSxrQkFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQ2pCO1FBTkQsbUJBQWEsR0FBRyxxQkFBcUIsQ0FBQzs7SUFNdEMsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNQLENBQUMsQ0FBQztRQUNILGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7MEdBZlUsMkJBQTJCO29FQUEzQiwyQkFBMkI7O1lBRjFCLGtCQUFZOztzQ0FSMUI7Q0EwQkMsQUFwQkQsQ0FJaUQsdUJBQXVCLEdBZ0J2RTtTQWhCWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLDZCQUE2QjthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNdWx0aVBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWdlb21ldHJ5LW11bHRpcG9pbnQnLFxuICB0ZW1wbGF0ZTogJyA8bmctY29udGVudD48L25nLWNvbnRlbnQ+ICdcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LW11bHRpcG9pbnQnO1xuICBpbnN0YW5jZTogTXVsdGlQb2ludDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVubmVjZXNzYXJ5LWNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlQb2ludChbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMSwgMV1cbiAgICBdKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=