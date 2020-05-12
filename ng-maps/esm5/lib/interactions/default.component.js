import { Component } from '@angular/core';
import { defaults } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
var DefaultInteractionComponent = /** @class */ (function () {
    function DefaultInteractionComponent(map) {
        this.map = map;
    }
    DefaultInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = defaults();
        this.instance.forEach(function (i) { _this.map.instance.addInteraction(i); });
    };
    DefaultInteractionComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.instance.forEach(function (i) { return _this.map.instance.removeInteraction(i); });
    };
    DefaultInteractionComponent.ɵfac = function DefaultInteractionComponent_Factory(t) { return new (t || DefaultInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    DefaultInteractionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultInteractionComponent, selectors: [["map-interaction-default"]], decls: 0, vars: 0, template: function DefaultInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DefaultInteractionComponent;
}());
export { DefaultInteractionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-default',
                template: ''
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9kZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsUUFBUSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFaEQ7SUFPRSxxQ0FBNkIsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFbEQsOENBQVEsR0FBUjtRQUFBLGlCQUdDO1FBRkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsaURBQVcsR0FBWDtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7MEdBWlUsMkJBQTJCO29FQUEzQiwyQkFBMkI7c0NBVHhDO0NBc0JDLEFBakJELElBaUJDO1NBYlksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FKdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgZGVmYXVsdHMsIEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1pbnRlcmFjdGlvbi1kZWZhdWx0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248SW50ZXJhY3Rpb24+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKCk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGkgPT4geyB0aGlzLm1hcC5pbnN0YW5jZS5hZGRJbnRlcmFjdGlvbihpKTsgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goaSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbihpKSk7XG4gIH1cbn1cbiJdfQ==