import { Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
export class SimpleGeometryComponent {
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
}
SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); };
SimpleGeometryComponent.ɵdir = i0.ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9nZW9tL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzlDLE1BQU0sT0FBZ0IsdUJBQXVCO0lBTTNDLFlBQXNCLEdBQWlCLEVBQVksSUFBc0I7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFZLFNBQUksR0FBSixJQUFJLENBQWtCO1FBSnpFLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7SUFJMEMsQ0FBQztJQUU3RSxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs4RkFWbUIsdUJBQXVCOzREQUF2Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBTaW1wbGVHZW9tZXRyeTtcbiAgY29tcG9uZW50VHlwZSA9ICdzaW1wbGUtZ2VvbWV0cnknO1xuXG4gIEBJbnB1dCgpIHNyaWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWFwOiBNYXBDb21wb25lbnQsIHByb3RlY3RlZCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRHZW9tZXRyeSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19