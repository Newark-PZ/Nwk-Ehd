import { Component, ContentChildren, Host, QueryList } from '@angular/core';
import { AttributionComponent } from './attribution.component';
import { SourceComponent } from './sources/source.component';
import * as i0 from "@angular/core";
import * as i1 from "./sources/source.component";
const _c0 = ["*"];
export class AttributionsComponent {
    // tslint:disable-next-line: prefer-readonly
    constructor(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    ngAfterViewInit() {
        if (this.attributions.length) {
            this.instance = this.attributions.map(cmp => cmp.instance);
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    }
}
AttributionsComponent.ɵfac = function AttributionsComponent_Factory(t) { return new (t || AttributionsComponent)(i0.ɵɵdirectiveInject(i1.SourceComponent, 1)); };
AttributionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AttributionsComponent, selectors: [["map-attributions"]], contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, AttributionComponent, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.attributions = _t);
    } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AttributionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AttributionsComponent, [{
        type: Component,
        args: [{
                selector: 'map-attributions',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i1.SourceComponent, decorators: [{
                type: Host
            }] }]; }, { attributions: [{
            type: ContentChildren,
            args: [AttributionComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvYXR0cmlidXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFNN0QsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyw0Q0FBNEM7SUFDNUMsWUFBNEIsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFBRyxDQUFDO0lBRXZELG9DQUFvQztJQUNwQyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQWUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7MEZBZlUscUJBQXFCOzBEQUFyQixxQkFBcUI7b0NBR2Ysb0JBQW9COzs7Ozs7UUFMMUIsa0JBQVk7O2tEQUVaLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7c0JBT2MsSUFBSTs7a0JBSGhCLGVBQWU7bUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEhvc3QsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2VzL3NvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtYXR0cmlidXRpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgaW5zdGFuY2U6IEFycmF5PEF0dHJpYnV0aW9uPjtcblxuICBAQ29udGVudENoaWxkcmVuKEF0dHJpYnV0aW9uQ29tcG9uZW50KSBhdHRyaWJ1dGlvbnM6IFF1ZXJ5TGlzdDxBdHRyaWJ1dGlvbkNvbXBvbmVudD47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItcmVhZG9ubHlcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU291cmNlQ29tcG9uZW50KSB7fVxuXG4gIC8qIHdlIGNhbiBkbyB0aGlzIGF0IHRoZSB2ZXJ5IGVuZCAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXR0cmlidXRpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuYXR0cmlidXRpb25zLm1hcChjbXAgPT4gY21wLmluc3RhbmNlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIGF0dHJpYnV0aW9uczonLCB0aGlzLmluc3RhbmNlKTtcbiAgICAgIHRoaXMuc291cmNlLmluc3RhbmNlLnNldEF0dHJpYnV0aW9ucyh0aGlzLmluc3RhbmNlIGFzIGFueSk7XG4gICAgfVxuICB9XG59XG4iXX0=