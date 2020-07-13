import { Component, ElementRef } from '@angular/core';
import { Attribution } from 'ol/control';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var AttributionComponent = /** @class */ (function () {
    // tslint:disable-next-line: prefer-readonly
    function AttributionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AttributionComponent.prototype.ngOnInit = function () {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    };
    AttributionComponent.ɵfac = function AttributionComponent_Factory(t) { return new (t || AttributionComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    AttributionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AttributionComponent, selectors: [["map-attribution"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return AttributionComponent;
}());
export { AttributionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AttributionComponent, [{
        type: Component,
        args: [{
                selector: 'map-attribution',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBRXpDO0lBZ0JFLDRDQUE0QztJQUM1Qyw4QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFOUMsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs0RkFsQlUsb0JBQW9COzZEQUFwQixvQkFBb0I7O1lBRnBCLGtCQUFZOzsrQkFMekI7Q0EwQkMsQUF2QkQsSUF1QkM7U0FuQlksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWF0dHJpYnV0aW9uJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBBdHRyaWJ1dGlvbjtcbiAgaHRtbDogc3RyaW5nO1xuXG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG4gIGNvbGxhcHNpYmxlPzogYm9vbGVhbjtcbiAgY29sbGFwc2VkPzogYm9vbGVhbjtcbiAgdGlwTGFiZWw/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG4gIGNvbGxhcHNlTGFiZWw/OiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1yZWFkb25seVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXR0cmlidXRpb24odGhpcyk7XG4gIH1cbn1cbiJdfQ==