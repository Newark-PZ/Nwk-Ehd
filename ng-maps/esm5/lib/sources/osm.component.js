import { __extends } from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Optional, Output } from '@angular/core';
import { OSM } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
var SourceOsmComponent = /** @class */ (function (_super) {
    __extends(SourceOsmComponent, _super);
    function SourceOsmComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceOsmComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', function (event) { _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    SourceOsmComponent.ɵfac = function SourceOsmComponent_Factory(t) { return new (t || SourceOsmComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 9)); };
    SourceOsmComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SourceOsmComponent, selectors: [["map-source-osm"]], inputs: { attributions: "attributions", cacheSize: "cacheSize", crossOrigin: "crossOrigin", maxZoom: "maxZoom", opaque: "opaque", reprojectionErrorThreshold: "reprojectionErrorThreshold", tileLoadFunction: "tileLoadFunction", url: "url", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceOsmComponent; }) }]), i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 0, consts: [[1, "map-source-osm"]], template: function SourceOsmComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } }, encapsulation: 2 });
    return SourceOsmComponent;
}(SourceXYZComponent));
export { SourceOsmComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SourceOsmComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-osm',
                template: ' <div class="map-source-osm"></div> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceOsmComponent; }) }]
            }]
    }], function () { return [{ type: i1.LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { attributions: [{
            type: Input
        }], cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], opaque: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9vc20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBSWhDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXJEO0lBTXdDLHNDQUFrQjtJQWlCeEQsNEJBQ2dDLEtBQXlCO1FBRHpELFlBR0Usa0JBQU0sS0FBSyxDQUFDLFNBQ2I7UUFIK0IsV0FBSyxHQUFMLEtBQUssQ0FBb0I7UUFMdEMsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbkYsaUJBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDakYsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7O0lBTXRHLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFBQSxpQkFXQztRQVZDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxLQUFzQixJQUFNLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBc0IsSUFBTSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQXNCLElBQU0sS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO3dGQWxDVSxrQkFBa0I7MkRBQWxCLGtCQUFrQiw2YUFGbEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUMsRUFBRSxDQUFDO1lBRmhGLHlCQUFrQzs7NkJBWGhEO0NBa0RDLEFBekNELENBTXdDLGtCQUFrQixHQW1DekQ7U0FuQ1ksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FOOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELDJDQUEyQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUUsQ0FBQzthQUM3Rjs7c0JBbUJJLFFBQVE7O3NCQUFJLElBQUk7O2tCQWZsQixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3QsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPU00gfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VYWVpDb21wb25lbnQgfSBmcm9tICcuL3h5ei5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtc291cmNlLW9zbScsXG4gIHRlbXBsYXRlOiAnIDxkaXYgY2xhc3M9XCJtYXAtc291cmNlLW9zbVwiPjwvZGl2PiAnLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWZvcndhcmQtcmVmXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VPc21Db21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZU9zbUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVhZWkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBpbnN0YW5jZTogT1NNO1xuXG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICBASW5wdXQoKSBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KCkgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKSBvcGFxdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHdyYXBYOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJvdGVjdGVkIGxheWVyOiBMYXllclRpbGVDb21wb25lbnRcbiAgKSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbGVHcmlkWFlaKSB7XG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFhZWi5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE9TTSh0aGlzKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4ge3RoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KTsgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4ge3RoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4ge3RoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KTsgfSk7XG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==