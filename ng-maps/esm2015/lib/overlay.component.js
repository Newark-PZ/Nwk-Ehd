import { Component, ContentChild, Input } from '@angular/core';
import { Overlay } from 'ol';
import { ContentComponent } from './content.component';
import { MapComponent } from './map.component';
import * as i0 from "@angular/core";
import * as i1 from "./map.component";
const _c0 = ["*"];
export class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
OverlayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["map-overlay"]], contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵstaticContentQuery(dirIndex, ContentComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
    } }, inputs: { id: "id", offset: "offset", positioning: "positioning", stopEvent: "stopEvent", insertFirst: "insertFirst", autoPan: "autoPan", autoPanAnimation: "autoPanAnimation", autoPanMargin: "autoPanMargin" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{
                selector: 'map-overlay',
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { content: [{
            type: ContentChild,
            args: [ContentComponent, { static: true }]
        }], id: [{
            type: Input
        }], offset: [{
            type: Input
        }], positioning: [{
            type: Input
        }], stopEvent: [{
            type: Input
        }], insertFirst: [{
            type: Input
        }], autoPan: [{
            type: Input
        }], autoPanAnimation: [{
            type: Input
        }], autoPanMargin: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tYXBzLyIsInNvdXJjZXMiOlsibGliL292ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztBQUc3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFNL0MsTUFBTSxPQUFPLGdCQUFnQjtJQWUzQixZQUE2QixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBZDlDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBY3VCLENBQUM7SUFFbEQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0ZBN0JVLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzBDQUliLGdCQUFnQjs7Ozs7O1FBTm5CLGtCQUFZOztrREFFWixnQkFBZ0I7Y0FKNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztrQkFLRSxZQUFZO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRS9DLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgUGFuT3B0aW9ucyB9IGZyb20gJ29sL092ZXJsYXknO1xuaW1wb3J0IE92ZXJsYXlQb3NpdGlvbmluZyBmcm9tICdvbC9PdmVybGF5UG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLW92ZXJsYXknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbXBvbmVudFR5cGUgPSAnb3ZlcmxheSc7XG4gIGluc3RhbmNlOiBPdmVybGF5O1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIG9mZnNldDogQXJyYXk8bnVtYmVyPjtcbiAgQElucHV0KCkgcG9zaXRpb25pbmc6IE92ZXJsYXlQb3NpdGlvbmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc3RvcEV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKSBpbnNlcnRGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KCkgYXV0b1BhbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYXV0b1BhbkFuaW1hdGlvbjogUGFuT3B0aW9ucztcbiAgQElucHV0KCkgYXV0b1Bhbk1hcmdpbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcmxheSh0aGlzKTtcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZE92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZU92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=