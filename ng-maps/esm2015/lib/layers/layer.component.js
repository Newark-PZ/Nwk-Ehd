import { Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LayerComponent {
    constructor(host) {
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
    ngOnInit() {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers()
            .push(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.getLayers()
            .remove(this.instance);
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
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
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
}
LayerComponent.ɵfac = function LayerComponent_Factory(t) { i0.ɵɵinvalidFactory(); };
LayerComponent.ɵdir = i0.ɵɵdefineDirective({ type: LayerComponent, inputs: { opacity: "opacity", visible: "visible", extent: "extent", zIndex: "zIndex", minResolution: "minResolution", maxResolution: "maxResolution", prerender: "prerender", postrender: "postrender" }, features: [i0.ɵɵNgOnChangesFeature] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQStDLE1BQU0sZUFBZSxDQUFDOztBQU1uRixNQUFNLE9BQWdCLGNBQWM7SUF3QmxDLFlBQXNCLElBQXdDO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQW9DO1FBdEI5RCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQVd4QixVQUFLLEdBQUc7WUFDTixTQUFTO1lBQ1QsU0FBUztZQUNULFFBQVE7WUFDUixRQUFRO1lBQ1IsZUFBZTtZQUNmLGVBQWU7WUFDZixXQUFXO1lBQ1gsWUFBWTtTQUNiLENBQUM7SUFFK0QsQ0FBQztJQUVsRSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO2FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7YUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sVUFBVSxHQUE2QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzVDLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7UUFDRCxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7OzttREE5RG1CLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEV2ZW50IGZyb20gJ29sL2V2ZW50cy9FdmVudCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogYW55O1xuICBjb21wb25lbnRUeXBlID0gJ2xheWVyJztcblxuICBASW5wdXQoKSBvcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG5cbiAgQElucHV0KCkgcHJlcmVuZGVyOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcbiAgQElucHV0KCkgcG9zdHJlbmRlcjogKGV2dDogRXZlbnQpID0+IHZvaWQ7XG4gIHByb3BzID0gW1xuICAgICdvcGFjaXR5JyxcbiAgICAndmlzaWJsZScsXG4gICAgJ2V4dGVudCcsXG4gICAgJ3pJbmRleCcsXG4gICAgJ21pblJlc29sdXRpb24nLFxuICAgICdtYXhSZXNvbHV0aW9uJyxcbiAgICAncHJlcmVuZGVyJyxcbiAgICAncG9zdHJlbmRlcidcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTWFwQ29tcG9uZW50IHwgTGF5ZXJHcm91cENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmVyZW5kZXIgIT09IG51bGwgJiYgdGhpcy5wcmVyZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgdGhpcy5wcmVyZW5kZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3N0cmVuZGVyICE9PSBudWxsICYmIHRoaXMucG9zdHJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgdGhpcy5wb3N0cmVuZGVyKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmdldExheWVycygpXG4gICAgICAucHVzaCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKVxuICAgICAgLnJlbW92ZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5wcm9wcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgICBpZiAoa2V5ID09PSAncHJlcmVuZGVyJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3ByZXJlbmRlcicsIGNoYW5nZXNba2V5XS5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVyZW5kZXInLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSAncG9zdHJlbmRlcicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLnVuKCdwb3N0cmVuZGVyJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbGF5ZXIsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==