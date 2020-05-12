import { __extends } from "tslib";
import { Component, forwardRef, Host, Input } from '@angular/core';
import { TileWMS } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
var _c0 = ["*"];
var SourceTileWMSComponent = /** @class */ (function (_super) {
    __extends(SourceTileWMSComponent, _super);
    function SourceTileWMSComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceTileWMSComponent.prototype.ngOnInit = function () {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    };
    SourceTileWMSComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    };
    SourceTileWMSComponent.ɵfac = function SourceTileWMSComponent_Factory(t) { return new (t || SourceTileWMSComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 1)); };
    SourceTileWMSComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SourceTileWMSComponent, selectors: [["map-source-tilewms"]], inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", gutter: "gutter", hidpi: "hidpi", params: "params", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", serverType: "serverType", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", url: "url", urls: "urls", wrapX: "wrapX" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMSComponent; }) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceTileWMSComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceTileWMSComponent;
}(SourceComponent));
export { SourceTileWMSComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SourceTileWMSComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-tilewms',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceTileWMSComponent; }) }]
            }]
    }], function () { return [{ type: i1.LayerTileComponent, decorators: [{
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], gutter: [{
            type: Input
        }], hidpi: [{
            type: Input
        }], params: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], serverType: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZXdtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFcEMsT0FBTyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXJEO0lBTTRDLDBDQUFlO0lBZ0J6RCxnQ0FBb0IsS0FBeUI7ZUFDM0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO2dHQTdCVSxzQkFBc0I7K0RBQXRCLHNCQUFzQixnWkFGdEIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLENBQUMsRUFBRSxDQUFDOztZQUZwRixrQkFBWTs7aUNBVDFCO0NBMkNDLEFBcENELENBTTRDLGVBQWUsR0E4QjFEO1NBOUJZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QywyQ0FBMkM7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFFLENBQUM7YUFDakc7O3NCQWlCYyxJQUFJOztrQkFkaEIsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaWxlV01TIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1zb3VyY2UtdGlsZXdtcycsXG4gIHRlbXBsYXRlOiAnIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1mb3J3YXJkLXJlZlxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVGlsZVdNU0NvbXBvbmVudCkgfV1cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFRpbGVXTVM7XG4gIEBJbnB1dCgpIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBjcm9zc09yaWdpbjogc3RyaW5nO1xuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgQElucHV0KCkgcHJvamVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKSBzZXJ2ZXJUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgQElucHV0KCkgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgdXJsczogQXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgd3JhcFg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlV01TKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==