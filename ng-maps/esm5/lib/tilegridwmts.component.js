import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import * as i0 from "@angular/core";
var TileGridWMTSComponent = /** @class */ (function (_super) {
    __extends(TileGridWMTSComponent, _super);
    function TileGridWMTSComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileGridWMTSComponent.prototype.ngOnInit = function () {
        this.instance = new WMTS(this);
    };
    TileGridWMTSComponent.ɵfac = function TileGridWMTSComponent_Factory(t) { return ɵTileGridWMTSComponent_BaseFactory(t || TileGridWMTSComponent); };
    TileGridWMTSComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TileGridWMTSComponent, selectors: [["map-tilegrid-wmts"]], inputs: { origin: "origin", origins: "origins", resolutions: "resolutions", matrixIds: "matrixIds", sizes: "sizes", tileSizes: "tileSizes", widths: "widths" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function TileGridWMTSComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return TileGridWMTSComponent;
}(TileGridComponent));
export { TileGridWMTSComponent };
var ɵTileGridWMTSComponent_BaseFactory = i0.ɵɵgetInheritedFactory(TileGridWMTSComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TileGridWMTSComponent, [{
        type: Component,
        args: [{
                selector: 'map-tilegrid-wmts',
                template: ''
            }]
    }], null, { origin: [{
            type: Input
        }], origins: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], matrixIds: [{
            type: Input
        }], sizes: [{
            type: Input
        }], tileSizes: [{
            type: Input
        }], widths: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvdGlsZWdyaWR3bXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxJQUFJLE1BQU0sa0JBQWtCLENBQUM7QUFDcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXpEO0lBSTJDLHlDQUFpQjtJQUo1RDs7S0FrQkM7SUFIQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzRIQWJVLHFCQUFxQjs4REFBckIscUJBQXFCO2dDQVZsQztDQXdCQyxBQWxCRCxDQUkyQyxpQkFBaUIsR0FjM0Q7U0FkWSxxQkFBcUI7a0VBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5pbXBvcnQgV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTJztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtdGlsZWdyaWQtd210cycsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBXTVRTO1xuXG4gIEBJbnB1dCgpIG9yaWdpbj86IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpIG9yaWdpbnM/OiBBcnJheTxDb29yZGluYXRlPjtcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM6IEFycmF5PG51bWJlcj47XG4gIEBJbnB1dCgpIG1hdHJpeElkczogQXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgc2l6ZXM/OiBBcnJheTxTaXplPjtcbiAgQElucHV0KCkgdGlsZVNpemVzPzogQXJyYXk8U2l6ZT47XG4gIEBJbnB1dCgpIHdpZHRocz86IEFycmF5PG51bWJlcj47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xuICB9XG59XG4iXX0=