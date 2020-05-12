import { Component, EventEmitter, Input, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
const _c0 = ["*"];
export class ViewComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
        this.props = [
            'constrainRotation',
            'enableRotation',
            'extent',
            'maxResolution',
            'minResolution',
            'maxZoom',
            'minZoom',
            'resolution',
            'resolutions',
            'rotation',
            'zoom',
            'zoomFactor',
            'center',
            'projection',
            'zoomAnimation'
        ];
    }
    ngOnInit() {
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', (event) => { this.changeZoom.emit(event); });
        this.instance.on('change:resolution', (event) => { this.changeResolution.emit(event); });
        this.instance.on('change:center', (event) => { this.changeCenter.emit(event); });
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
ViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ViewComponent, selectors: [["map-view"]], inputs: { constrainRotation: "constrainRotation", enableRotation: "enableRotation", extent: "extent", maxResolution: "maxResolution", minResolution: "minResolution", maxZoom: "maxZoom", minZoom: "minZoom", resolution: "resolution", resolutions: "resolutions", rotation: "rotation", zoom: "zoom", zoomFactor: "zoomFactor", center: "center", projection: "projection", zoomAnimation: "zoomAnimation" }, outputs: { changeZoom: "changeZoom", changeResolution: "changeResolution", changeCenter: "changeCenter" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ViewComponent, [{
        type: Component,
        args: [{
                selector: 'map-view',
                template: ' <ng-content></ng-content>'
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { constrainRotation: [{
            type: Input
        }], enableRotation: [{
            type: Input
        }], extent: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], resolution: [{
            type: Input
        }], resolutions: [{
            type: Input
        }], rotation: [{
            type: Input
        }], zoom: [{
            type: Input
        }], zoomFactor: [{
            type: Input
        }], center: [{
            type: Input
        }], projection: [{
            type: Input
        }], zoomAnimation: [{
            type: Input
        }], changeZoom: [{
            type: Output
        }], changeResolution: [{
            type: Output
        }], changeCenter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL3ZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUl6RyxPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7QUFDM0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBTS9DLE1BQU0sT0FBTyxhQUFhO0lBd0N4QixZQUFxQixJQUFrQjtRQUFsQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBdEN2QyxrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQWdCZCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUVaLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUN4RSxxQkFBZ0IsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUM5RSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBQzdGLFVBQUssR0FBRztZQUNOLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsUUFBUTtZQUNSLGVBQWU7WUFDZixlQUFlO1lBQ2YsU0FBUztZQUNULFNBQVM7WUFDVCxZQUFZO1lBQ1osYUFBYTtZQUNiLFVBQVU7WUFDVixNQUFNO1lBQ04sWUFBWTtZQUNaLFFBQVE7WUFDUixZQUFZO1lBQ1osZUFBZTtTQUNoQixDQUFDO0lBQ3dDLENBQUM7SUFFM0MsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxFQUFFO29CQUNYLEtBQUssTUFBTTt3QkFDVCxxRUFBcUU7d0JBQ3JFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7eUJBQzVEOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt5QkFDbEQ7d0JBQ0QsTUFBTTtvQkFDUixLQUFLLFlBQVk7d0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDMUMsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7MEVBOUVVLGFBQWE7a0RBQWIsYUFBYTs7UUFGWixrQkFBWTs7a0RBRWIsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSw0QkFBNEI7YUFDdkM7O2tCQUtFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC12aWV3JyxcbiAgdGVtcGxhdGU6ICcgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFZpZXc7XG4gIGNvbXBvbmVudFR5cGUgPSAndmlldyc7XG5cbiAgQElucHV0KCkgY29uc3RyYWluUm90YXRpb246IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVJvdGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KCkgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKSByZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJlc29sdXRpb25zOiBBcnJheTxudW1iZXI+O1xuICBASW5wdXQoKSByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSB6b29tOiBudW1iZXI7XG4gIEBJbnB1dCgpIHpvb21GYWN0b3I6IG51bWJlcjtcbiAgQElucHV0KCkgY2VudGVyOiBDb29yZGluYXRlO1xuICBASW5wdXQoKSBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHpvb21BbmltYXRpb24gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIHByb3BzID0gW1xuICAgICdjb25zdHJhaW5Sb3RhdGlvbicsXG4gICAgJ2VuYWJsZVJvdGF0aW9uJyxcbiAgICAnZXh0ZW50JyxcbiAgICAnbWF4UmVzb2x1dGlvbicsXG4gICAgJ21pblJlc29sdXRpb24nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWluWm9vbScsXG4gICAgJ3Jlc29sdXRpb24nLFxuICAgICdyZXNvbHV0aW9ucycsXG4gICAgJ3JvdGF0aW9uJyxcbiAgICAnem9vbScsXG4gICAgJ3pvb21GYWN0b3InLFxuICAgICdjZW50ZXInLFxuICAgICdwcm9qZWN0aW9uJyxcbiAgICAnem9vbUFuaW1hdGlvbidcbiAgXTtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTp6b29tJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4geyB0aGlzLmNoYW5nZVpvb20uZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4geyB0aGlzLmNoYW5nZVJlc29sdXRpb24uZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB7IHRoaXMuY2hhbmdlQ2VudGVyLmVtaXQoZXZlbnQpOyB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5wcm9wcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3pvb20nOlxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXG4gICAgICAgICAgICBpZiAodGhpcy56b29tQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYW5pbWF0ZSh7IHpvb206IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldFpvb20oY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcm9qZWN0aW9uJzpcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==