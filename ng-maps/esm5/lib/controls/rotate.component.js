import { Component, Input } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
var _c0 = ["*"];
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
    ControlRotateComponent.ɵfac = function ControlRotateComponent_Factory(t) { return new (t || ControlRotateComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    ControlRotateComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ControlRotateComponent, selectors: [["map-control-rotate"]], inputs: { className: "className", label: "label", tipLabel: "tipLabel", duration: "duration", autoHide: "autoHide" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ControlRotateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return ControlRotateComponent;
}());
export { ControlRotateComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlRotateComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-rotate',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { className: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvcm90YXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFaEQ7SUFhRSxnQ0FBcUIsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUN0QyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztnR0FuQlUsc0JBQXNCOytEQUF0QixzQkFBc0I7O1lBRnJCLGtCQUFZOztpQ0FOMUI7Q0E0QkMsQUF4QkQsSUF3QkM7U0FwQlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FKbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7O2tCQUlFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm90YXRlIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWNvbnRyb2wtcm90YXRlJyxcbiAgdGVtcGxhdGU6ICcgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAnXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xSb3RhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBSb3RhdGU7XG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIGF1dG9IaWRlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG1hcDogTWFwQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFJvdGF0ZSh0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19