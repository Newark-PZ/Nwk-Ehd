import { Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layer.component";
var SourceComponent = /** @class */ (function () {
    function SourceComponent(host) {
        this.host = host;
        this.componentType = 'source';
    }
    SourceComponent.prototype.ngOnDestroy = function () {
        if (this.host && this.host.instance) {
            // tslint:disable-next-line: no-null-keyword
            this.host.instance.setSource(null);
        }
    };
    SourceComponent.prototype._register = function (s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    };
    SourceComponent.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(i0.ɵɵdirectiveInject(i1.LayerComponent)); };
    SourceComponent.ɵdir = i0.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });
    return SourceComponent;
}());
export { SourceComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQUtqRDtJQU1FLHlCQUFzQixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUoxQyxrQkFBYSxHQUFHLFFBQVEsQ0FBQztJQUlvQixDQUFDO0lBRTlDLHFDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkMsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFUyxtQ0FBUyxHQUFuQixVQUFvQixDQUFTO1FBQzNCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7a0ZBbkJtQixlQUFlO3dEQUFmLGVBQWU7MEJBTHJDO0NBeUJDLEFBcEJELElBb0JDO1NBcEJxQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcblxuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBTb3VyY2U7XG4gIGNvbXBvbmVudFR5cGUgPSAnc291cmNlJztcblxuICBASW5wdXQoKSBhdHRyaWJ1dGlvbnM6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTGF5ZXJDb21wb25lbnQpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG9zdCAmJiB0aGlzLmhvc3QuaW5zdGFuY2UpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbnVsbC1rZXl3b3JkXG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXIoczogU291cmNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==