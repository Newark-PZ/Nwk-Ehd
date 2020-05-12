import { Component, ElementRef } from '@angular/core';
import { Attribution } from 'ol/control';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var AttributionComponent = /** @class */ (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0FBRXpDO0lBaUJFLDhCQUE2QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUV2RCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOzRGQWxCVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjs7WUFGcEIsa0JBQVk7OytCQU56QjtDQTJCQyxBQXZCRCxJQXVCQztTQW5CWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUpoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBFdmVudCB9IGZyb20gJ29sJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1hdHRyaWJ1dGlvbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogQXR0cmlidXRpb247XG4gIGh0bWw6IHN0cmluZztcblxuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRhcmdldD86IEhUTUxFbGVtZW50IHwgc3RyaW5nO1xuICBjb2xsYXBzaWJsZT86IGJvb2xlYW47XG4gIGNvbGxhcHNlZD86IGJvb2xlYW47XG4gIHRpcExhYmVsPzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICBjb2xsYXBzZUxhYmVsPzogc3RyaW5nIHwgSFRNTEVsZW1lbnQ7XG4gIHJlbmRlcj86IChwMDogTWFwRXZlbnQpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xuICB9XG59XG4iXX0=