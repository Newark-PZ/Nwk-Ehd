import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { Circle } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
var _c0 = ["*"];
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
    GeometryCircleComponent.ɵfac = function GeometryCircleComponent_Factory(t) { return new (t || GeometryCircleComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); };
    GeometryCircleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeometryCircleComponent, selectors: [["map-geometry-circle"]], inputs: { radius: "radius" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GeometryCircleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GeometryCircleComponent;
}(SimpleGeometryComponent));
export { GeometryCircleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeometryCircleComponent, [{
        type: Component,
        args: [{
                selector: 'map-geometry-circle',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: i1.MapComponent }, { type: i2.FeatureComponent }]; }, { radius: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9nZW9tL2dlb21ldHJ5Y2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBRXJFO0lBSTZDLDJDQUF1QjtJQVdsRSxpQ0FBWSxHQUFpQixFQUFFLElBQXNCO1FBQXJELFlBQ0Usa0JBQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxTQUdqQjtRQWRELG1CQUFhLEdBQUcsaUJBQWlCLENBQUM7UUFZaEMsd0VBQXdFO1FBQ3hFLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFDckMsQ0FBQztJQVhELHNCQUFhLDJDQUFNO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25DLENBQUM7YUFDRCxVQUFXLE1BQWM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7a0dBTlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7O1lBRnRCLGtCQUFZOztrQ0FSMUI7Q0EwQkMsQUFwQkQsQ0FJNkMsdUJBQXVCLEdBZ0JuRTtTQWhCWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUpuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7a0JBS0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWdlb21ldHJ5LWNpcmNsZScsXG4gIHRlbXBsYXRlOiAnIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1jaXJjbGUnO1xuICBpbnN0YW5jZTogQ2lyY2xlO1xuXG4gIEBJbnB1dCgpIGdldCByYWRpdXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRSYWRpdXMoKTtcbiAgfVxuICBzZXQgcmFkaXVzKHJhZGl1czogbnVtYmVyKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXMocmFkaXVzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgICAvLyBkZWZhdWx0aW5nIGNvb3JkaW5hdGVzIHRvIFswLDBdLiBUbyBiZSBvdmVycmlkZGVuIGluIGNoaWxkIGNvbXBvbmVudC5cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZShbMCwgMF0pO1xuICB9XG59XG4iXX0=