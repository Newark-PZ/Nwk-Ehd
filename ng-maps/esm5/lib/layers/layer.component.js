import { __values } from "tslib";
import { Input } from '@angular/core';
import * as i0 from "@angular/core";
var LayerComponent = /** @class */ (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
        this.props = [
            'opacity',
            'visible',
            'extent',
            'zIndex',
            'minResolution',
            'maxResolution',
            'prerender',
            'postrender'
        ];
    }
    LayerComponent.prototype.ngOnInit = function () {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers()
            .push(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.getLayers()
            .remove(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var e_1, _a;
        var properties = {};
        if (!this.instance) {
            return;
        }
        try {
            for (var _b = __values(this.props), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (changes.hasOwnProperty(key)) {
                    properties[key] = changes[key].currentValue;
                    if (key === 'prerender') {
                        this.instance.un('prerender', changes[key].previousValue);
                        this.instance.on('prerender', changes[key].currentValue);
                    }
                    if (key === 'postrender') {
                        this.instance.un('postrender', changes[key].previousValue);
                        this.instance.on('postrender', changes[key].currentValue);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    LayerComponent.ɵfac = function LayerComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
    LayerComponent.ɵdir = i0.ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [i0.ɵɵNgOnChangesFeature] });
    return LayerComponent;
}());
export { LayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUErQyxNQUFNLGVBQWUsQ0FBQzs7QUFNbkY7SUF3QkUsd0JBQXNCLElBQXdDO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQW9DO1FBdEI5RCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQVd4QixVQUFLLEdBQUc7WUFDTixTQUFTO1lBQ1QsU0FBUztZQUNULFFBQVE7WUFDUixRQUFRO1lBQ1IsZUFBZTtZQUNmLGVBQWU7WUFDZixXQUFXO1lBQ1gsWUFBWTtTQUNiLENBQUM7SUFFK0QsQ0FBQztJQUVsRSxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO2FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7YUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQXNCOztRQUNoQyxJQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjs7WUFDRCxLQUFrQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF6QixJQUFNLEdBQUcsV0FBQTtnQkFDWixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUM1QyxJQUFJLEdBQUcsS0FBSyxXQUFXLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7cUJBQzFEO29CQUNELElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTt3QkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDM0Q7aUJBQ0Y7YUFDRjs7Ozs7Ozs7O1FBQ0Qsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzt1REE5RG1CLGNBQWM7eUJBTnBDO0NBcUVDLEFBL0RELElBK0RDO1NBL0RxQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBFdmVudCBmcm9tICdvbC9ldmVudHMvRXZlbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IGFueTtcbiAgY29tcG9uZW50VHlwZSA9ICdsYXllcic7XG5cbiAgQElucHV0KCkgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKSB2aXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KCkgekluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHByZXJlbmRlcjogKGV2dDogRXZlbnQpID0+IHZvaWQ7XG4gIEBJbnB1dCgpIHBvc3RyZW5kZXI6IChldnQ6IEV2ZW50KSA9PiB2b2lkO1xuICBwcm9wcyA9IFtcbiAgICAnb3BhY2l0eScsXG4gICAgJ3Zpc2libGUnLFxuICAgICdleHRlbnQnLFxuICAgICd6SW5kZXgnLFxuICAgICdtaW5SZXNvbHV0aW9uJyxcbiAgICAnbWF4UmVzb2x1dGlvbicsXG4gICAgJ3ByZXJlbmRlcicsXG4gICAgJ3Bvc3RyZW5kZXInXG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IE1hcENvbXBvbmVudCB8IExheWVyR3JvdXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJlcmVuZGVyICE9PSBudWxsICYmIHRoaXMucHJlcmVuZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZXJlbmRlcicsIHRoaXMucHJlcmVuZGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zdHJlbmRlciAhPT0gbnVsbCAmJiB0aGlzLnBvc3RyZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIHRoaXMucG9zdHJlbmRlcik7XG4gICAgfVxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKVxuICAgICAgLnB1c2godGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKClcbiAgICAgIC5yZW1vdmUodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMucHJvcHMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByZXJlbmRlcicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLnVuKCdwcmVyZW5kZXInLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gJ3Bvc3RyZW5kZXInKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncG9zdHJlbmRlcicsIGNoYW5nZXNba2V5XS5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLWxheWVyLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG59XG4iXX0=