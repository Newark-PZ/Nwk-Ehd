import { Component, forwardRef, Input } from '@angular/core';
import { MVT } from 'ol/format';
import { FormatComponent } from './format.component';
import * as i0 from "@angular/core";
export class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
}
FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); };
FormatMVTComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["map-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [i0.ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]), i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'map-format-mvt',
                template: '',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]
            }]
    }], function () { return []; }, { featureClass: [{
            type: Input
        }], geometryName: [{
            type: Input
        }], layerName: [{
            type: Input
        }], layers: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0cy9tdnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFRckQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7SUFRckQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7b0ZBWFUsa0JBQWtCO3VEQUFsQixrQkFBa0Isc0xBRmxCLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2tEQUVqRixrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLDJDQUEyQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2FBQzdGOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNsYXNzIH0gZnJvbSAnb2wvRmVhdHVyZSc7XG5pbXBvcnQgeyBNVlQgfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi9mb3JtYXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWZvcm1hdC1tdnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZm9yd2FyZC1yZWZcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBGb3JtYXRDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1hdE1WVENvbXBvbmVudCkgfV1cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0TVZUQ29tcG9uZW50IGV4dGVuZHMgRm9ybWF0Q29tcG9uZW50IHtcbiAgaW5zdGFuY2U6IE1WVDtcblxuICBASW5wdXQoKSBmZWF0dXJlQ2xhc3M6IEZlYXR1cmVDbGFzcztcbiAgQElucHV0KCkgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxheWVyTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYXllcnM6IEFycmF5PHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1WVCh0aGlzKTtcbiAgfVxufVxuIl19