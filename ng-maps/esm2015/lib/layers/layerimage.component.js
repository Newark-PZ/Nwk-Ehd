import { Component, Input, Optional } from '@angular/core';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
import * as i2 from "./layergroup.component";
const _c0 = ["*"];
export class LayerImageComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        this.instance = new Image(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
LayerImageComponent.ɵfac = function LayerImageComponent_Factory(t) { return new (t || LayerImageComponent)(i0.ɵɵdirectiveInject(i1.MapComponent), i0.ɵɵdirectiveInject(i2.LayerGroupComponent, 8)); };
LayerImageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayerImageComponent, selectors: [["map-layer-image"]], inputs: { opacity: "opacity", visible: "visible", extent: "extent", minResolution: "minResolution", maxResolution: "maxResolution", zIndex: "zIndex" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function LayerImageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerImageComponent, [{
        type: Component,
        args: [{
                selector: 'map-layer-image',
                template: ' <ng-content></ng-content> '
            }]
    }], function () { return [{ type: i1.MapComponent }, { type: i2.LayerGroupComponent, decorators: [{
                type: Optional
            }] }]; }, { opacity: [{
            type: Input
        }], visible: [{
            type: Input
        }], extent: [{
            type: Input
        }], minResolution: [{
            type: Input
        }], maxResolution: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBTTdELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjO0lBVXJELFlBQVksR0FBaUIsRUFBYyxLQUEyQjtRQUNwRSxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O3NGQXJCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7UUFGbEIsa0JBQVk7O2tEQUViLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7c0JBV2lDLFFBQVE7O2tCQVB2QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgSW1hZ2VTb3VyY2UgZnJvbSAnb2wvc291cmNlL0ltYWdlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1sYXllci1pbWFnZScsXG4gIHRlbXBsYXRlOiAnIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gJ1xufSlcbmV4cG9ydCBjbGFzcyBMYXllckltYWdlQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHNvdXJjZTogSW1hZ2VTb3VyY2U7XG5cbiAgQElucHV0KCkgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KCkgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpIHtcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJbWFnZSh0aGlzKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG59XG4iXX0=