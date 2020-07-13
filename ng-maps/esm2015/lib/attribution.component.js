import { Component, ElementRef } from '@angular/core';
import { Attribution } from 'ol/control';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class AttributionComponent {
    // tslint:disable-next-line: prefer-readonly
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    }
}
AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AttributionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AttributionComponent, selectors: [["map-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'map-attribution',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBTXpDLE1BQU0sT0FBTyxvQkFBb0I7SUFZL0IsNENBQTRDO0lBQzVDLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBRTlDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O3dGQWxCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7UUFGcEIsa0JBQVk7O2tEQUVaLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtYXR0cmlidXRpb24nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xuICBodG1sOiBzdHJpbmc7XG5cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBIVE1MRWxlbWVudCB8IHN0cmluZztcbiAgY29sbGFwc2libGU/OiBib29sZWFuO1xuICBjb2xsYXBzZWQ/OiBib29sZWFuO1xuICB0aXBMYWJlbD86IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcbiAgY29sbGFwc2VMYWJlbD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLXJlYWRvbmx5XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBBdHRyaWJ1dGlvbih0aGlzKTtcbiAgfVxufVxuIl19