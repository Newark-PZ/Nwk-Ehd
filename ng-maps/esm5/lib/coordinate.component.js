import { Component, Input, Optional } from '@angular/core';
import { transform } from 'ol/proj';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { MapComponent } from './map.component';
import { OverlayComponent } from './overlay.component';
import { ViewComponent } from './view.component';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
import * as i2 from "./view.component";
import * as i3 from "./geom/geometrypoint.component";
import * as i4 from "./geom/geometrycircle.component";
import * as i5 from "./overlay.component";
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
    CoordinateComponent.ɵfac = function CoordinateComponent_Factory(t) { return new (t || CoordinateComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.ViewComponent, 8), i0.ɵɵdirectiveInject(i3.GeometryPointComponent, 8), i0.ɵɵdirectiveInject(i4.GeometryCircleComponent, 8), i0.ɵɵdirectiveInject(i5.OverlayComponent, 8)); };
    CoordinateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CoordinateComponent, selectors: [["map-coordinate"]], inputs: { x: "x", y: "y", srid: "srid" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [[1, "map-coordinate"]], template: function CoordinateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return CoordinateComponent;
}());
export { CoordinateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoordinateComponent, [{
        type: Component,
        args: [{
                selector: 'map-coordinate',
                template: ' <div class="map-coordinate"></div>'
            }]
    }], function () { return [{ type: i1.MapComponent }, { type: i2.ViewComponent, decorators: [{
                type: Optional
            }] }, { type: i3.GeometryPointComponent, decorators: [{
                type: Optional
            }] }, { type: i4.GeometryCircleComponent, decorators: [{
                type: Optional
            }] }, { type: i5.OverlayComponent, decorators: [{
                type: Optional
            }] }]; }, { x: [{
            type: Input
        }], y: [{
            type: Input
        }], srid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL2Nvb3JkaW5hdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7OztBQUVqRDtJQVlFLDZCQUNtQixHQUFpQixFQUN0QixRQUF1QixFQUN2QixpQkFBeUMsRUFDekMsa0JBQTJDLEVBQzNDLFdBQTZCO1FBSnhCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFQNUIsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQUlyQixTQUFJLEdBQUcsV0FBVyxDQUFDO1FBUzFCLElBQUksaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7U0FDL0I7YUFBTSxJQUFJLGtCQUFrQixLQUFLLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO1NBQ2hDO2FBQU0sSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQSxDQUFDLElBQU0sS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7YUFDdkMsYUFBYSxFQUFFO2FBQ2YsT0FBTyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyw4Q0FBZ0IsR0FBeEIsVUFBeUIsS0FBSztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDdkMsYUFBYSxFQUFFO2FBQ2YsT0FBTyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sa0RBQW9CLEdBQTVCO1FBQ0UsSUFBSSxzQkFBcUMsQ0FBQztRQUUxQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM1QixDQUFDLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhGLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsS0FBSyxnQkFBZ0I7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBQ1IsS0FBSyxpQkFBaUIsQ0FBQztZQUN2QixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3JELE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3ZELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDOzBGQWxFVSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQUZsQix5QkFBa0M7OzhCQVZoRDtDQStFQyxBQXZFRCxJQXVFQztTQW5FWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLHFDQUFxQzthQUNoRDs7c0JBV0ksUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsUUFBUTs7a0JBVFYsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJhbnNmb3JtIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBHZW9tZXRyeUNpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlQb2ludENvbXBvbmVudCB9IGZyb20gJy4vZ2VvbS9nZW9tZXRyeXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29vcmRpbmF0ZScsXG4gIHRlbXBsYXRlOiAnIDxkaXYgY2xhc3M9XCJtYXAtY29vcmRpbmF0ZVwiPjwvZGl2Pidcbn0pXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBob3N0OiBhbnk7XG4gIHByaXZhdGUgbWFwU3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIEBJbnB1dCgpIHg6IG51bWJlcjtcbiAgQElucHV0KCkgeTogbnVtYmVyO1xuICBASW5wdXQoKSBzcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSB2aWV3SG9zdDogVmlld0NvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeVBvaW50SG9zdDogR2VvbWV0cnlQb2ludENvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBnZW9tZXRyeUNpcmNsZUhvc3Q6IEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIG92ZXJsYXlIb3N0OiBPdmVybGF5Q29tcG9uZW50XG4gICkge1xuICAgIGlmIChnZW9tZXRyeVBvaW50SG9zdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlQb2ludEhvc3Q7XG4gICAgfSBlbHNlIGlmIChnZW9tZXRyeUNpcmNsZUhvc3QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5Q2lyY2xlSG9zdDtcbiAgICB9IGVsc2UgaWYgKHZpZXdIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSB2aWV3SG9zdDtcbiAgICB9IGVsc2UgaWYgKG92ZXJsYXlIb3N0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhvc3QgPSBvdmVybGF5SG9zdDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCBlID0+IHsgdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpOyB9KTtcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZS5nZXRWaWV3KClcbiAgICAgIC5nZXRQcm9qZWN0aW9uKClcbiAgICAgIC5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNmb3JtQ29vcmRpbmF0ZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NYXBWaWV3Q2hhbmdlZChldmVudCk6IHZvaWQge1xuICAgIHRoaXMubWFwU3JpZCA9IGV2ZW50LnRhcmdldC5nZXQoZXZlbnQua2V5KVxuICAgICAgLmdldFByb2plY3Rpb24oKVxuICAgICAgLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUNvb3JkaW5hdGVzKCk6IHZvaWQge1xuICAgIGxldCB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzOiBBcnJheTxudW1iZXI+O1xuXG4gICAgKHRoaXMuc3JpZCA9PT0gdGhpcy5tYXBTcmlkKVxuICAgID8gdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9IFt0aGlzLngsIHRoaXMueV1cbiAgICA6IHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMgPSB0cmFuc2Zvcm0oW3RoaXMueCwgdGhpcy55XSwgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpO1xuXG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xuICAgICAgY2FzZSAnZ2VvbWV0cnktcG9pbnQnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q29vcmRpbmF0ZXModHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ2VvbWV0cnktY2lyY2xlJzpcbiAgICAgIGNhc2UgJ3ZpZXcnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q2VudGVyKHRyYW5zZm9ybWVkQ29vcmRpbmF0ZXMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ292ZXJsYXknOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0UG9zaXRpb24odHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=