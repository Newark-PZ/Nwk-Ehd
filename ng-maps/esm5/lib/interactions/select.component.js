import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from 'ol';
import { Select } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
var SelectInteractionComponent = /** @class */ (function () {
    function SelectInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.olSelect = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    SelectInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Select(this);
        this.instance.on('change', function (event) { _this.olChange.emit(event); });
        this.instance.on('select', function (event) { _this.olSelect.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    SelectInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) { return new (t || SelectInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    SelectInteractionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectInteractionComponent, selectors: [["map-interaction-select"]], inputs: { addCondition: "addCondition", condition: "condition", layers: "layers", style: "style", removeCondition: "removeCondition", toggleCondition: "toggleCondition", multi: "multi", features: "features", filter: "filter", wrapX: "wrapX" }, outputs: { olChange: "olChange", olSelect: "olSelect", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function SelectInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return SelectInteractionComponent;
}());
export { SelectInteractionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-select',
                template: ''
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { addCondition: [{
            type: Input
        }], condition: [{
            type: Input
        }], layers: [{
            type: Input
        }], style: [{
            type: Input
        }], removeCondition: [{
            type: Input
        }], toggleCondition: [{
            type: Input
        }], multi: [{
            type: Input
        }], features: [{
            type: Input
        }], filter: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], olChange: [{
            type: Output
        }], olSelect: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUV6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFaEQ7SUFzQkUsb0NBQXFCLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFKbkIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDM0MsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRTNCLENBQUM7SUFFMUMsNkNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFrQixJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBa0IsSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsS0FBa0IsSUFBTyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzt3R0FoQ1UsMEJBQTBCO21FQUExQiwwQkFBMEI7cUNBZHZDO0NBK0NDLEFBckNELElBcUNDO1NBakNZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgQ29uZGl0aW9uIH0gZnJvbSAnb2wvZXZlbnRzL2NvbmRpdGlvbic7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJGdW5jdGlvbiwgU2VsZWN0RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9TZWxlY3QnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWludGVyYWN0aW9uLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFNlbGVjdDtcblxuICBASW5wdXQoKSBhZGRDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KCkgbGF5ZXJzPzogQXJyYXk8TGF5ZXI+IHwgKChsYXllcjogTGF5ZXIpID0+IGJvb2xlYW4pO1xuICBASW5wdXQoKSBzdHlsZT86IFN0eWxlIHwgQXJyYXk8U3R5bGU+IHwgU3R5bGVGdW5jdGlvbjtcbiAgQElucHV0KCkgcmVtb3ZlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKSB0b2dnbGVDb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpIG11bHRpPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZmVhdHVyZXM/OiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICBASW5wdXQoKSBmaWx0ZXI/OiBGaWx0ZXJGdW5jdGlvbjtcbiAgQElucHV0KCkgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBvbFNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBwcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2VsZWN0RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTZWxlY3QodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB7IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NlbGVjdCcsIChldmVudDogU2VsZWN0RXZlbnQpID0+IHsgdGhpcy5vbFNlbGVjdC5lbWl0KGV2ZW50KTsgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IFNlbGVjdEV2ZW50KSA9PiB7IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCk7IH0pO1xuXG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19