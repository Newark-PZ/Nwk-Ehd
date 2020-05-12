import { Component, Input } from '@angular/core';
import { DragBox } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
var DragBoxInteractionComponent = /** @class */ (function () {
    function DragBoxInteractionComponent(map) {
        this.map = map;
    }
    DragBoxInteractionComponent.prototype.ngOnInit = function () {
        this.instance = new DragBox(this);
        this.map.instance.addInteraction(this.instance);
    };
    DragBoxInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    DragBoxInteractionComponent.ɵfac = function DragBoxInteractionComponent_Factory(t) { return new (t || DragBoxInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    DragBoxInteractionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DragBoxInteractionComponent, selectors: [["map-interaction-dragbox"]], inputs: { className: "className", condition: "condition", boxEndCondition: "boxEndCondition" }, decls: 0, vars: 0, template: function DragBoxInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DragBoxInteractionComponent;
}());
export { DragBoxInteractionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DragBoxInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-dragbox',
                template: ''
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { className: [{
            type: Input
        }], condition: [{
            type: Input
        }], boxEndCondition: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL2ludGVyYWN0aW9ucy9kcmFnYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWhEO0lBV0UscUNBQXFCLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRTFDLDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzswR0FoQlUsMkJBQTJCO29FQUEzQiwyQkFBMkI7c0NBVnhDO0NBMkJDLEFBckJELElBcUJDO1NBakJZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgRHJhZ0JveCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IEVuZENvbmRpdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uL0RyYWdCb3gnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1pbnRlcmFjdGlvbi1kcmFnYm94JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIERyYWdCb3hJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IERyYWdCb3g7XG5cbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbmRpdGlvbjogQ29uZGl0aW9uO1xuICBASW5wdXQoKSBib3hFbmRDb25kaXRpb246IEVuZENvbmRpdGlvbjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IERyYWdCb3godGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19