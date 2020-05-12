import { Component, Input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import * as i0 from "@angular/core";
export class TileGridComponent {
    ngOnInit() {
        (!this.resolutions)
            ? this.instance = createXYZ(this)
            : this.instance = new TileGrid(this);
    }
    ngOnChanges(changes) {
        (!this.resolutions)
            ? this.instance = createXYZ(this)
            : this.instance = new TileGrid(this);
    }
}
TileGridComponent.ɵfac = function TileGridComponent_Factory(t) { return new (t || TileGridComponent)(); };
TileGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TileGridComponent, selectors: [["map-tilegrid"]], inputs: { extent: "extent", maxZoom: "maxZoom", minZoom: "minZoom", tileSize: "tileSize", origin: "origin", resolutions: "resolutions" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function TileGridComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TileGridComponent, [{
        type: Component,
        args: [{
                selector: 'map-tilegrid',
                template: ''
            }]
    }], null, { extent: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], origin: [{
            type: Input
        }], resolutions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWFwcy8iLCJzb3VyY2VzIjpbImxpYi90aWxlZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBSW5GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7O0FBTTVDLE1BQU0sT0FBTyxpQkFBaUI7SUFVNUIsUUFBUTtRQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2tGQXBCVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLEVBQUU7YUFDYjs7a0JBSUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuaW1wb3J0IHsgY3JlYXRlWFlaIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLXRpbGVncmlkJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogVGlsZUdyaWQ7XG5cbiAgQElucHV0KCkgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKSB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcbiAgQElucHV0KCkgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM6IEFycmF5PG51bWJlcj47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgKCF0aGlzLnJlc29sdXRpb25zKVxuICAgID8gdGhpcy5pbnN0YW5jZSA9IGNyZWF0ZVhZWih0aGlzKVxuICAgIDogdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlR3JpZCh0aGlzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAoIXRoaXMucmVzb2x1dGlvbnMpXG4gICAgPyB0aGlzLmluc3RhbmNlID0gY3JlYXRlWFlaKHRoaXMpXG4gICAgOiB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xuICB9XG59XG4iXX0=