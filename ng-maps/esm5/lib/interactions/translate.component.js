import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Collection } from 'ol';
import { Translate } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as i0 from "@angular/core";
import * as i1 from "../map.component";
var TranslateInteractionComponent = /** @class */ (function () {
    function TranslateInteractionComponent(map) {
        this.map = map;
        this.olChange = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.translateEnd = new EventEmitter();
        this.translateStart = new EventEmitter();
        this.translating = new EventEmitter();
    }
    TranslateInteractionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instance = new Translate(this);
        this.instance.on('change', function (event) { _this.olChange.emit(event); });
        this.instance.on('propertychange', function (event) { _this.propertyChange.emit(event); });
        this.instance.on('translateend', function (event) { _this.translateEnd.emit(event); });
        this.instance.on('translatestart', function (event) { _this.translateStart.emit(event); });
        this.instance.on('translating', function (event) { _this.translating.emit(event); });
        this.map.instance.addInteraction(this.instance);
    };
    TranslateInteractionComponent.prototype.ngOnDestroy = function () {
        this.map.instance.removeInteraction(this.instance);
    };
    TranslateInteractionComponent.ɵfac = function TranslateInteractionComponent_Factory(t) { return new (t || TranslateInteractionComponent)(i0.ɵɵdirectiveInject(i1.MapComponent)); };
    TranslateInteractionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TranslateInteractionComponent, selectors: [["map-interaction-translate"]], inputs: { features: "features", layers: "layers", hitTolerance: "hitTolerance" }, outputs: { olChange: "olChange", propertyChange: "propertyChange", translateEnd: "translateEnd", translateStart: "translateStart", translating: "translating" }, decls: 0, vars: 0, template: function TranslateInteractionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return TranslateInteractionComponent;
}());
export { TranslateInteractionComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslateInteractionComponent, [{
        type: Component,
        args: [{
                selector: 'map-interaction-translate',
                template: ''
            }]
    }], function () { return [{ type: i1.MapComponent }]; }, { features: [{
            type: Input
        }], layers: [{
            type: Input
        }], hitTolerance: [{
            type: Input
        }], olChange: [{
            type: Output
        }], propertyChange: [{
            type: Output
        }], translateEnd: [{
            type: Output
        }], translateStart: [{
            type: Output
        }], translating: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvaW50ZXJhY3Rpb25zL3RyYW5zbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLElBQUksQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFaEQ7SUFpQkUsdUNBQXFCLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0lBQ3hELENBQUM7SUFFRCxnREFBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQXFCLElBQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQXFCLElBQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUFxQixJQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFxQixJQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBcUIsSUFBTyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1EQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQzs4R0FuQ1UsNkJBQTZCO3NFQUE3Qiw2QkFBNkI7d0NBWDFDO0NBK0NDLEFBeENELElBd0NDO1NBcENZLDZCQUE2QjtrREFBN0IsNkJBQTZCO2NBSnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsRUFBRTthQUNiOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNsYXRlRXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9UcmFuc2xhdGUnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWludGVyYWN0aW9uLXRyYW5zbGF0ZScsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IFRyYW5zbGF0ZTtcblxuICBASW5wdXQoKSBmZWF0dXJlcz86IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpIGxheWVycz86IEFycmF5PExheWVyPiB8ICgobGF5ZXI6IExheWVyKSA9PiBib29sZWFuKTtcbiAgQElucHV0KCkgaGl0VG9sZXJhbmNlPzogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdHJhbnNsYXRlRW5kOiBFdmVudEVtaXR0ZXI8VHJhbnNsYXRlRXZlbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdHJhbnNsYXRlU3RhcnQ6IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSB0cmFuc2xhdGluZzogRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIHRoaXMub2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFRyYW5zbGF0ZUV2ZW50PigpO1xuICAgIHRoaXMudHJhbnNsYXRlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgICB0aGlzLnRyYW5zbGF0ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgICB0aGlzLnRyYW5zbGF0aW5nID0gbmV3IEV2ZW50RW1pdHRlcjxUcmFuc2xhdGVFdmVudD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVHJhbnNsYXRlKHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4geyB0aGlzLm9sQ2hhbmdlLmVtaXQoZXZlbnQpOyB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogVHJhbnNsYXRlRXZlbnQpID0+IHsgdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KTsgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlZW5kJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4geyB0aGlzLnRyYW5zbGF0ZUVuZC5lbWl0KGV2ZW50KTsgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndHJhbnNsYXRlc3RhcnQnLCAoZXZlbnQ6IFRyYW5zbGF0ZUV2ZW50KSA9PiB7IHRoaXMudHJhbnNsYXRlU3RhcnQuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RyYW5zbGF0aW5nJywgKGV2ZW50OiBUcmFuc2xhdGVFdmVudCkgPT4geyB0aGlzLnRyYW5zbGF0aW5nLmVtaXQoZXZlbnQpOyB9KTtcblxuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZEludGVyYWN0aW9uKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==