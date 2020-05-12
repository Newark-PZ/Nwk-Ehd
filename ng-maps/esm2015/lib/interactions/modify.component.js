import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from 'ol';
import { Modify } from 'ol/interaction';
import { Vector } from 'ol/source';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
export class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => { this.olChange.emit(event); });
        this.instance.on('change:active', (event) => { this.olChangeActive.emit(event); });
        this.instance.on('propertychange', (event) => { this.propertyChange.emit(event); });
        this.instance.on('modifyend', (event) => { this.modifyEnd.emit(event); });
        this.instance.on('modifystart', (event) => { this.modifyStart.emit(event); });
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
}
ModifyInteractionComponent.ɵfac = function ModifyInteractionComponent_Factory(t) { return new (t || ModifyInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
ModifyInteractionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModifyInteractionComponent, selectors: [["map-interaction-modify"]], inputs: { condition: "condition", deleteCondition: "deleteCondition", pixelTolerance: "pixelTolerance", style: "style", features: "features", wrapX: "wrapX", source: "source" }, outputs: { modifyEnd: "modifyEnd", modifyStart: "modifyStart", olChange: "olChange", olChangeActive: "olChangeActive", propertyChange: "propertyChange" }, decls: 0, vars: 0, template: function ModifyInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModifyInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-modify',
                template: ''
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { condition: [{
            type: Input
        }], deleteCondition: [{
            type: Input
        }], pixelTolerance: [{
            type: Input
        }], style: [{
            type: Input
        }], features: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], source: [{
            type: Input
        }], modifyEnd: [{
            type: Output
        }], modifyStart: [{
            type: Output
        }], olChange: [{
            type: Output
        }], olChangeActive: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL21vZGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUV6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUduQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQU1oRCxNQUFNLE9BQU8sMEJBQTBCO0lBaUJyQyxZQUFxQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBTm5CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQzVDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUM5QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUMzQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDakQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO0lBRTNCLENBQUM7SUFFMUMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDOztvR0EvQlUsMEJBQTBCOytEQUExQiwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7a0JBSUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuaW1wb3J0IHsgTW9kaWZ5IH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTW9kaWZ5RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9Nb2RpZnknO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtaW50ZXJhY3Rpb24tbW9kaWZ5JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIE1vZGlmeUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogTW9kaWZ5O1xuXG4gIEBJbnB1dCgpIGNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KCkgZGVsZXRlQ29uZGl0aW9uPzogQ29uZGl0aW9uO1xuICBASW5wdXQoKSBwaXhlbFRvbGVyYW5jZT86IG51bWJlcjtcbiAgQElucHV0KCkgc3R5bGU/OiBTdHlsZSB8IEFycmF5PFN0eWxlPiB8IFN0eWxlRnVuY3Rpb247XG4gIEBJbnB1dCgpIGZlYXR1cmVzOiBDb2xsZWN0aW9uPEZlYXR1cmU+O1xuICBASW5wdXQoKSB3cmFwWD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNvdXJjZT86IFZlY3RvcjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9kaWZ5RW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vZGlmeVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9sQ2hhbmdlQWN0aXZlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxNb2RpZnlFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1vZGlmeSh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB7IHRoaXMub2xDaGFuZ2UuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTphY3RpdmUnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB7IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4geyB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpOyB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnllbmQnLCAoZXZlbnQ6IE1vZGlmeUV2ZW50KSA9PiB7IHRoaXMubW9kaWZ5RW5kLmVtaXQoZXZlbnQpOyB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb2RpZnlzdGFydCcsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHsgdGhpcy5tb2RpZnlTdGFydC5lbWl0KGV2ZW50KTsgfSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19