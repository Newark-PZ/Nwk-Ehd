import { __values } from "tslib";
import { Component, Input } from '@angular/core';
import { Graticule } from 'ol';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
var _c0 = ["*"];
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
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    };
    GraticuleComponent.prototype.ngAfterContentInit = function () {
        this.instance = new Graticule({
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
    GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) { return new (t || GraticuleComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    GraticuleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GraticuleComponent, selectors: [["map-graticule"]], inputs: { strokeStyle: "strokeStyle", showLabels: "showLabels", lonLabelPosition: "lonLabelPosition", latLabelPosition: "latLabelPosition" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function GraticuleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return GraticuleComponent;
}());
export { GraticuleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GraticuleComponent, [{
        type: Component,
        args: [{
                selector: 'map-graticule',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { strokeStyle: [{
            type: Input
        }], showLabels: [{
            type: Input
        }], lonLabelPosition: [{
            type: Input
        }], latLabelPosition: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdGljdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZ3JhdGljdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRS9DO0lBa0JFLDRCQUE2QixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBWjlDLGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBTTVCLFVBQUssR0FBRztZQUNOLGFBQWE7WUFDYixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtTQUNuQixDQUFDO0lBQytDLENBQUM7SUFFbEQsd0NBQVcsR0FBWCxVQUFZLE9BQXNCOztRQUNoQyxJQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBRWhELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFFRCxLQUFrQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF6QixJQUFNLEdBQUcsV0FBQTtnQkFDWixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUM3QzthQUNGOzs7Ozs7Ozs7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO3dGQS9DVSxrQkFBa0I7MkRBQWxCLGtCQUFrQjs7WUFGbEIsa0JBQVk7OzZCQVB6QjtDQXlEQyxBQXBERCxJQW9EQztTQWhEWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7O2tCQUtFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JhdGljdWxlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWdyYXRpY3VsZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgR3JhdGljdWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogYW55O1xuICBjb21wb25lbnRUeXBlID0gJ2dyYXRpY3VsZSc7XG5cbiAgQElucHV0KCkgc3Ryb2tlU3R5bGU6IFN0cm9rZTtcbiAgQElucHV0KCkgc2hvd0xhYmVsczogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9uTGFiZWxQb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBsYXRMYWJlbFBvc2l0aW9uOiBudW1iZXI7XG4gIHByb3BzID0gW1xuICAgICdzdHJva2VTdHlsZScsXG4gICAgJ3Nob3dMYWJlbHMnLFxuICAgICdsb25MYWJlbFBvc2l0aW9uJyxcbiAgICAnbGF0TGFiZWxQb3NpdGlvbidcbiAgXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnByb3BzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JhdGljdWxlKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlLnNldE1hcCh0aGlzLm1hcC5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcmF0aWN1bGUoe1xuICAgICAgc3Ryb2tlU3R5bGU6IHRoaXMuc3Ryb2tlU3R5bGUsXG4gICAgICBzaG93TGFiZWxzOiB0aGlzLnNob3dMYWJlbHMsXG4gICAgICBsb25MYWJlbFBvc2l0aW9uOiB0aGlzLmxvbkxhYmVsUG9zaXRpb24sXG4gICAgICBsYXRMYWJlbFBvc2l0aW9uOiB0aGlzLmxhdExhYmVsUG9zaXRpb25cbiAgICB9KTtcbiAgICB0aGlzLmluc3RhbmNlLnNldE1hcCh0aGlzLm1hcC5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlLnNldE1hcCh1bmRlZmluZWQpO1xuICB9XG59XG4iXX0=