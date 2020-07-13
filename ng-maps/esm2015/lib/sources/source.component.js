import { Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layer.component";
export class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            // tslint:disable-next-line: no-null-keyword
            this.host.instance.setSource(null);
        }
    }
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
}
SourceComponent.ɵfac = function SourceComponent_Factory(t) { return new (t || SourceComponent)(i0.ɵɵdirectiveInject(i1.LayerComponent)); };
SourceComponent.ɵdir = i0.ɵɵdefineDirective({ type: SourceComponent, inputs: { attributions: "attributions" } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9zb3VyY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQUtqRCxNQUFNLE9BQWdCLGVBQWU7SUFNbkMsWUFBc0IsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFKMUMsa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFJb0IsQ0FBQztJQUU5QyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRVMsU0FBUyxDQUFDLENBQVM7UUFDM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OEVBbkJtQixlQUFlO29EQUFmLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICdvbC9zb3VyY2UnO1xuXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFNvdXJjZTtcbiAgY29tcG9uZW50VHlwZSA9ICdzb3VyY2UnO1xuXG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBMYXllckNvbXBvbmVudCkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ob3N0ICYmIHRoaXMuaG9zdC5pbnN0YW5jZSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1udWxsLWtleXdvcmRcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ob3N0KSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHMpO1xuICAgIH1cbiAgfVxufVxuIl19