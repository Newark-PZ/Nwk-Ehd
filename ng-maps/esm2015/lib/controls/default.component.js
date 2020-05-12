import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach(c => { this.map.instance.addControl(c); });
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach(c => this.map.instance.removeControl(c));
    }
}
DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) { return new (t || DefaultControlComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
DefaultControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultControlComponent, selectors: [["map-control-defaults"]], inputs: { attribution: "attribution", attributionOptions: "attributionOptions", rotate: "rotate", rotateOptions: "rotateOptions", zoom: "zoom", zoomOptions: "zoomOptions" }, decls: 0, vars: 0, template: function DefaultControlComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2RlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQVcsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBSy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBTWhELE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFBcUIsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFMUMsUUFBUTtRQUNOLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxXQUFXO1FBQ1QsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OEZBcEJVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FKbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxFQUFFO2FBQ2I7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IENvbnRyb2wsIGRlZmF1bHRzIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIEF0dHJpYnV0aW9uT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvQXR0cmlidXRpb24nO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBSb3RhdGVPcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9Sb3RhdGUnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBab29tT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvWm9vbSc7XG5cbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29udHJvbC1kZWZhdWx0cycsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248Q29udHJvbD47XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbk9wdGlvbnM6IEF0dHJpYnV0aW9uT3B0aW9ucztcbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICBASW5wdXQoKSByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xuICBASW5wdXQoKSB6b29tOiBib29sZWFuO1xuICBASW5wdXQoKSB6b29tT3B0aW9uczogWm9vbU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ29sLmNvbnRyb2wuZGVmYXVsdHMgaW5pdDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGRlZmF1bHRzKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaChjID0+IHsgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbChjKTsgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZGVmYXVsdHMnKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goYyA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKGMpKTtcbiAgfVxufVxuIl19