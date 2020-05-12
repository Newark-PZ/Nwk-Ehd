import { __extends } from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Output } from '@angular/core';
import { Raster } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layerimage.component";
var _c0 = ["*"];
var SourceRasterComponent = /** @class */ (function (_super) {
    __extends(SourceRasterComponent, _super);
    function SourceRasterComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.beforeOperations = new EventEmitter();
        _this.afterOperations = new EventEmitter();
        _this.sources = [];
        return _this;
    }
    Object.defineProperty(SourceRasterComponent.prototype, "source", {
        set: function (sourceComponent) {
            this.sources = [sourceComponent.instance];
            if (this.instance) {
                // Openlayer doesn't handle sources update. Just recreate Raster instance.
                this.init();
            }
        },
        enumerable: true,
        configurable: true
    });
    SourceRasterComponent.prototype.ngAfterContentInit = function () {
        this.init();
    };
    SourceRasterComponent.prototype.init = function () {
        var _this = this;
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', function (event) { _this.beforeOperations.emit(event); });
        this.instance.on('afteroperations', function (event) { _this.afterOperations.emit(event); });
        this._register(this.instance);
    };
    SourceRasterComponent.ɵfac = function SourceRasterComponent_Factory(t) { return new (t || SourceRasterComponent)(i0.ɵɵdirectiveInject(i1.LayerImageComponent, 1)); };
    SourceRasterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SourceRasterComponent, selectors: [["map-source-raster"]], contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SourceComponent, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.source = _t.first);
        } }, inputs: { operation: "operation", threads: "threads", lib: "lib", operationType: "operationType" }, outputs: { beforeOperations: "beforeOperations", afterOperations: "afterOperations" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: SourceComponent,
                    // tslint:disable-next-line: no-forward-ref
                    useExisting: forwardRef(function () { return SourceRasterComponent; })
                }
            ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceRasterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SourceRasterComponent;
}(SourceComponent));
export { SourceRasterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SourceRasterComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-raster',
                template: '<ng-content></ng-content>',
                providers: [
                    {
                        provide: SourceComponent,
                        // tslint:disable-next-line: no-forward-ref
                        useExisting: forwardRef(function () { return SourceRasterComponent; })
                    }
                ]
            }]
    }], function () { return [{ type: i1.LayerImageComponent, decorators: [{
                type: Host
            }] }]; }, { operation: [{
            type: Input
        }], threads: [{
            type: Input
        }], lib: [{
            type: Input
        }], operationType: [{
            type: Input
        }], beforeOperations: [{
            type: Output
        }], afterOperations: [{
            type: Output
        }], source: [{
            type: ContentChild,
            args: [SourceComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9yYXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQVUsTUFBTSxXQUFXLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXJEO0lBVzJDLHlDQUFlO0lBcUJ4RCwrQkFBb0IsS0FBMEI7UUFBOUMsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQWZrQixzQkFBZ0IsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDMUYscUJBQWUsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFNUcsYUFBTyxHQUFrQixFQUFFLENBQUM7O0lBWTVCLENBQUM7SUFWRCxzQkFBbUMseUNBQU07YUFBekMsVUFBMEMsZUFBZ0M7WUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLDBFQUEwRTtnQkFDMUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2I7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELGtEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFVBQUMsS0FBd0IsSUFBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxLQUF3QixJQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs4RkFsQ1UscUJBQXFCOzhEQUFyQixxQkFBcUI7d0NBYWxCLGVBQWU7Ozs7eU9BckJsQjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsMkNBQTJDO29CQUMzQyxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQztpQkFDckQ7YUFDRjs7WUFQVSxrQkFBWTs7Z0NBbEJ6QjtDQThEQyxBQTlDRCxDQVcyQyxlQUFlLEdBbUN6RDtTQW5DWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQVhqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QiwyQ0FBMkM7d0JBQzNDLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixDQUFDO3FCQUNyRDtpQkFDRjthQUNGOztzQkFzQmMsSUFBSTs7a0JBbEJoQixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFJTixZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFzdGVyLCBTb3VyY2UgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgT3BlcmF0aW9uLCBSYXN0ZXJTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9SYXN0ZXInO1xuXG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1zb3VyY2UtcmFzdGVyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1mb3J3YXJkLXJlZlxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlUmFzdGVyQ29tcG9uZW50KVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgaW5zdGFuY2U6IFJhc3RlcjtcblxuICBASW5wdXQoKSBvcGVyYXRpb24/OiBPcGVyYXRpb247XG4gIEBJbnB1dCgpIHRocmVhZHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxpYj86IGFueTtcbiAgQElucHV0KCkgb3BlcmF0aW9uVHlwZT86ICdwaXhlbCcgfCAnaW1hZ2UnO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBiZWZvcmVPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFmdGVyT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG5cbiAgc291cmNlczogQXJyYXk8U291cmNlPiA9IFtdO1xuXG4gIEBDb250ZW50Q2hpbGQoU291cmNlQ29tcG9uZW50KSBzZXQgc291cmNlKHNvdXJjZUNvbXBvbmVudDogU291cmNlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5zb3VyY2VzID0gW3NvdXJjZUNvbXBvbmVudC5pbnN0YW5jZV07XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIC8vIE9wZW5sYXllciBkb2Vzbid0IGhhbmRsZSBzb3VyY2VzIHVwZGF0ZS4gSnVzdCByZWNyZWF0ZSBSYXN0ZXIgaW5zdGFuY2UuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFJhc3Rlcih0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdiZWZvcmVvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4geyB0aGlzLmJlZm9yZU9wZXJhdGlvbnMuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHsgdGhpcy5hZnRlck9wZXJhdGlvbnMuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuX3JlZ2lzdGVyKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=