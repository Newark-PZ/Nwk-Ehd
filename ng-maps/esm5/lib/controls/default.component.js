import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
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
    DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    DefaultControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["map-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DefaultControlComponent;
}());
export { DefaultControlComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultControlComponent, [{
        type: Component,
        args: [{
                selector: 'map-control-defaults',
                template: ''
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { attribution: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2RlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQVcsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBSy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWhEO0lBYUUsaUNBQXFCLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRTFDLDBDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBTSxLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUFBLGlCQUdDO1FBRkMsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDakUsQ0FBQztrR0FwQlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7a0NBYnBDO0NBa0NDLEFBekJELElBeUJDO1NBckJZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBBdHRyaWJ1dGlvbk9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL0F0dHJpYnV0aW9uJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgUm90YXRlT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvUm90YXRlJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgWm9vbU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1pvb20nO1xuXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWNvbnRyb2wtZGVmYXVsdHMnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBDb2xsZWN0aW9uPENvbnRyb2w+O1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYXR0cmlidXRpb25PcHRpb25zOiBBdHRyaWJ1dGlvbk9wdGlvbnM7XG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcm90YXRlT3B0aW9uczogUm90YXRlT3B0aW9ucztcbiAgQElucHV0KCkgem9vbTogYm9vbGVhbjtcbiAgQElucHV0KCkgem9vbU9wdGlvbnM6IFpvb21PcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLmRlZmF1bHRzIGluaXQ6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goYyA9PiB7IHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2woYyk7IH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWRlZmF1bHRzJyk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKGMgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbChjKSk7XG4gIH1cbn1cbiJdfQ==