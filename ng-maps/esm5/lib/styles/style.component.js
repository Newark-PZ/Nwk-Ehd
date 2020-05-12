import { Component, Input, Optional } from '@angular/core';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import * as i0 from "@angular/core";
import * as i1 from "../feature.component";
import * as i2 from "../layers/layervector.component";
var _c0 = ["*"];
var StyleComponent = /** @class */ (function () {
    function StyleComponent(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    StyleComponent.prototype.update = function () {
        this.host.instance.changed();
    };
    StyleComponent.prototype.ngOnInit = function () {
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.ɵfac = function StyleComponent_Factory(t) { return new (t || StyleComponent)(i0.ɵɵdirectiveInject(i1.FeatureComponent, 8), i0.ɵɵdirectiveInject(i2.LayerVectorComponent, 8)); };
    StyleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StyleComponent, selectors: [["map-style"]], inputs: { geometry: "geometry", fill: "fill", image: "image", stroke: "stroke", text: "text", zIndex: "zIndex" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function StyleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return StyleComponent;
}());
export { StyleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StyleComponent, [{
        type: Component,
        args: [{
                selector: 'map-style',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i1.FeatureComponent, decorators: [{
                type: Optional
            }] }, { type: i2.LayerVectorComponent, decorators: [{
                type: Optional
            }] }]; }, { geometry: [{
            type: Input
        }], fill: [{
            type: Input
        }], image: [{
            type: Input
        }], stroke: [{
            type: Input
        }], text: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvc3R5bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFFdkU7SUFnQkUsd0JBQXdCLFdBQTZCLEVBQWMsU0FBK0I7UUFUbEcsa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFVdEIscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Z0ZBM0JVLGNBQWM7dURBQWQsY0FBYzs7WUFGZCxrQkFBWTs7eUJBVHpCO0NBdUNDLEFBaENELElBZ0NDO1NBNUJZLGNBQWM7a0RBQWQsY0FBYztjQUoxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7O3NCQWFjLFFBQVE7O3NCQUFtQyxRQUFROztrQkFQL0QsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBGaWxsLCBJbWFnZSwgU3Ryb2tlLCBTdHlsZSwgVGV4dCB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IEdlb21ldHJ5RnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLXN0eWxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogRmVhdHVyZUNvbXBvbmVudCB8IExheWVyVmVjdG9yQ29tcG9uZW50O1xuICBpbnN0YW5jZTogU3R5bGU7XG4gIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUnO1xuXG4gIEBJbnB1dCgpIGdlb21ldHJ5OiBzdHJpbmcgfCBHZW9tZXRyeSB8IEdlb21ldHJ5RnVuY3Rpb247XG4gIEBJbnB1dCgpIGZpbGw6IEZpbGw7XG4gIEBJbnB1dCgpIGltYWdlOiBJbWFnZTtcbiAgQElucHV0KCkgc3Ryb2tlOiBTdHJva2U7XG4gIEBJbnB1dCgpIHRleHQ6IFRleHQ7XG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGZlYXR1cmVIb3N0OiBGZWF0dXJlQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBsYXllckhvc3Q6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZScpO1xuICAgIHRoaXMuaG9zdCA9ICEhZmVhdHVyZUhvc3QgPyBmZWF0dXJlSG9zdCA6IGxheWVySG9zdDtcbiAgICBpZiAoIXRoaXMuaG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUgbXVzdCBiZSBhcHBsaWVkIHRvIGEgZmVhdHVyZSBvciBhIGxheWVyJyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5jaGFuZ2VkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0eWxlKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHlsZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19