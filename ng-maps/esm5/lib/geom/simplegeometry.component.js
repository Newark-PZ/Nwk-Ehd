import { Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "../feature.component";
var SimpleGeometryComponent = /** @class */ (function () {
    function SimpleGeometryComponent(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    SimpleGeometryComponent.prototype.ngOnInit = function () {
        this.host.instance.setGeometry(this.instance);
    };
    SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) { return new (t || SimpleGeometryComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.FeatureComponent)); };
    SimpleGeometryComponent.ɵdir = i0.ɵɵdefineDirective({ type: SimpleGeometryComponent, inputs: { srid: "srid" } });
    return SimpleGeometryComponent;
}());
export { SimpleGeometryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9nZW9tL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBSzlDO0lBTUUsaUNBQXNCLEdBQWlCLEVBQVksSUFBc0I7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFZLFNBQUksR0FBSixJQUFJLENBQWtCO1FBSnpFLGtCQUFhLEdBQUcsaUJBQWlCLENBQUM7SUFJMEMsQ0FBQztJQUU3RSwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO2tHQVZtQix1QkFBdUI7Z0VBQXZCLHVCQUF1QjtrQ0FMN0M7Q0FnQkMsQUFYRCxJQVdDO1NBWHFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBTaW1wbGVHZW9tZXRyeSBmcm9tICdvbC9nZW9tL1NpbXBsZUdlb21ldHJ5JztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFNpbXBsZUdlb21ldHJ5O1xuICBjb21wb25lbnRUeXBlID0gJ3NpbXBsZS1nZW9tZXRyeSc7XG5cbiAgQElucHV0KCkgc3JpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtYXA6IE1hcENvbXBvbmVudCwgcHJvdGVjdGVkIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEdlb21ldHJ5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=