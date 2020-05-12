import { __extends } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { MVT } from 'ol/format';
import { FormatComponent } from './format.component';
import * as i0 from "@angular/core";
var FormatMVTComponent = /** @class */ (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) { return new (t || FormatMVTComponent)(); };
    FormatMVTComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FormatMVTComponent, selectors: [["map-format-mvt"]], inputs: { featureClass: "featureClass", geometryName: "geometryName", layerName: "layerName", layers: "layers" }, features: [i0.ɵɵProvidersFeature([{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent; }) }]), i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function FormatMVTComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return FormatMVTComponent;
}(FormatComponent));
export { FormatMVTComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormatMVTComponent, [{
        type: Component,
        args: [{
                selector: 'map-format-mvt',
                template: '',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent; }) }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvZm9ybWF0cy9tdnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRXJEO0lBTXdDLHNDQUFlO0lBUXJEO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQzt3RkFYVSxrQkFBa0I7MkRBQWxCLGtCQUFrQixzTEFGbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUMsRUFBRSxDQUFDOzZCQVQ5RjtDQXVCQyxBQWxCRCxDQU13QyxlQUFlLEdBWXREO1NBWlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLDJDQUEyQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUUsQ0FBQzthQUM3Rjs7a0JBSUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDbGFzcyB9IGZyb20gJ29sL0ZlYXR1cmUnO1xuaW1wb3J0IHsgTVZUIH0gZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybWF0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1mb3JtYXQtbXZ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWZvcndhcmQtcmVmXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRm9ybWF0Q29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtYXRNVlRDb21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdE1WVENvbXBvbmVudCBleHRlbmRzIEZvcm1hdENvbXBvbmVudCB7XG4gIGluc3RhbmNlOiBNVlQ7XG5cbiAgQElucHV0KCkgZmVhdHVyZUNsYXNzOiBGZWF0dXJlQ2xhc3M7XG4gIEBJbnB1dCgpIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYXllck5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbGF5ZXJzOiBBcnJheTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNVlQodGhpcyk7XG4gIH1cbn1cbiJdfQ==