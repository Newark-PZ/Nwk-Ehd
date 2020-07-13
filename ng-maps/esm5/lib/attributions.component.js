import { Component, ContentChildren, Host, QueryList } from '@angular/core';
import { AttributionComponent } from './attribution.component';
import { SourceComponent } from './sources/source.component';
import * as i0 from "@angular/core";
import * as i1 from "./sources/source.component";
var _c0 = ["*"];
var AttributionsComponent = /** @class */ (function () {
    // tslint:disable-next-line: prefer-readonly
    function AttributionsComponent(source) {
        this.source = source;
    }
    /* we can do this at the very end */
    AttributionsComponent.prototype.ngAfterViewInit = function () {
        if (this.attributions.length) {
            this.instance = this.attributions.map(function (cmp) { return cmp.instance; });
            // console.log('setting attributions:', this.instance);
            this.source.instance.setAttributions(this.instance);
        }
    };
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
    return AttributionsComponent;
}());
export { AttributionsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvYXR0cmlidXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFN0Q7SUFTRSw0Q0FBNEM7SUFDNUMsK0JBQTRCLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQUcsQ0FBQztJQUV2RCxvQ0FBb0M7SUFDcEMsK0NBQWUsR0FBZjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxRQUFRLEVBQVosQ0FBWSxDQUFDLENBQUM7WUFDM0QsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBZSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzhGQWZVLHFCQUFxQjs4REFBckIscUJBQXFCO3dDQUdmLG9CQUFvQjs7Ozs7O1lBTDFCLGtCQUFZOztnQ0FQekI7Q0F5QkMsQUFwQkQsSUFvQkM7U0FoQlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7O3NCQU9jLElBQUk7O2tCQUhoQixlQUFlO21CQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBIb3N0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXR0cmlidXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWF0dHJpYnV0aW9ucycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGluc3RhbmNlOiBBcnJheTxBdHRyaWJ1dGlvbj47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBdHRyaWJ1dGlvbkNvbXBvbmVudCkgYXR0cmlidXRpb25zOiBRdWVyeUxpc3Q8QXR0cmlidXRpb25Db21wb25lbnQ+O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLXJlYWRvbmx5XG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNvdXJjZUNvbXBvbmVudCkge31cblxuICAvKiB3ZSBjYW4gZG8gdGhpcyBhdCB0aGUgdmVyeSBlbmQgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF0dHJpYnV0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmF0dHJpYnV0aW9ucy5tYXAoY21wID0+IGNtcC5pbnN0YW5jZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBhdHRyaWJ1dGlvbnM6JywgdGhpcy5pbnN0YW5jZSk7XG4gICAgICB0aGlzLnNvdXJjZS5pbnN0YW5jZS5zZXRBdHRyaWJ1dGlvbnModGhpcy5pbnN0YW5jZSBhcyBhbnkpO1xuICAgIH1cbiAgfVxufVxuIl19