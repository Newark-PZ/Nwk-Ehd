import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output } from '@angular/core';
import { XYZ } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import * as i0 from "@angular/core";
import * as i1 from "../layers/layertile.component";
const _c0 = ["*"];
export class SourceXYZComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.props = [
            'cacheSize',
            'crossOrigin',
            'opaque',
            'projection',
            'reprojectionErrorThreshold',
            'minZoom',
            'maxZoom',
            'tileGrid',
            'tileLoadFunction',
            'tilePixelRatio',
            'tileSize',
            'tileUrlFunction',
            'url',
            'urls',
            'wrapX'
        ];
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key of this.props) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    }
    init() {
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (event) => { this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', (event) => { this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', (event) => { this.tileLoadError.emit(event); });
        this._register(this.instance);
    }
}
SourceXYZComponent.ɵfac = function SourceXYZComponent_Factory(t) { return new (t || SourceXYZComponent)(i0.ɵɵdirectiveInject(i1.LayerTileComponent, 9)); };
SourceXYZComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SourceXYZComponent, selectors: [["map-source-xyz"]], contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, TileGridComponent, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tileGridXYZ = _t.first);
    } }, inputs: { cacheSize: "cacheSize", crossOrigin: "crossOrigin", opaque: "opaque", projection: "projection", reprojectionErrorThreshold: "reprojectionErrorThreshold", minZoom: "minZoom", maxZoom: "maxZoom", tileGrid: "tileGrid", tileLoadFunction: "tileLoadFunction", tilePixelRatio: "tilePixelRatio", tileSize: "tileSize", tileUrlFunction: "tileUrlFunction", url: "url", urls: "urls", wrapX: "wrapX" }, outputs: { tileLoadStart: "tileLoadStart", tileLoadEnd: "tileLoadEnd", tileLoadError: "tileLoadError" }, features: [i0.ɵɵProvidersFeature([{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SourceXYZComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SourceXYZComponent, [{
        type: Component,
        args: [{
                selector: 'map-source-xyz',
                template: ' <ng-content></ng-content> ',
                // tslint:disable-next-line: no-forward-ref
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }]
            }]
    }], function () { return [{ type: i1.LayerTileComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, { cacheSize: [{
            type: Input
        }], crossOrigin: [{
            type: Input
        }], opaque: [{
            type: Input
        }], projection: [{
            type: Input
        }], reprojectionErrorThreshold: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], tileGrid: [{
            type: Input
        }], tileLoadFunction: [{
            type: Input
        }], tilePixelRatio: [{
            type: Input
        }], tileSize: [{
            type: Input
        }], tileUrlFunction: [{
            type: Input
        }], url: [{
            type: Input
        }], urls: [{
            type: Input
        }], wrapX: [{
            type: Input
        }], tileGridXYZ: [{
            type: ContentChild,
            args: [TileGridComponent]
        }], tileLoadStart: [{
            type: Output
        }], tileLoadEnd: [{
            type: Output
        }], tileLoadError: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1hcHMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy94eXouY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHaEMsT0FBTyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBUXJELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBeUNyRCxZQUNnQyxLQUF5QjtRQUV2RCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGaUIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUF6QnpELFVBQUssR0FBRztZQUNOLFdBQVc7WUFDWCxhQUFhO1lBQ2IsUUFBUTtZQUNSLFlBQVk7WUFDWiw0QkFBNEI7WUFDNUIsU0FBUztZQUNULFNBQVM7WUFDVCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLEtBQUs7WUFDTCxNQUFNO1lBQ04sT0FBTztTQUNSLENBQUM7UUFJaUIsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbkYsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDakYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFNdEcsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUM3QztTQUNGO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDOztvRkFoRlUsa0JBQWtCO3VEQUFsQixrQkFBa0I7b0NBbUNmLGlCQUFpQjs7OzttaUJBckNwQixDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQzs7UUFGaEYsa0JBQVk7O2tEQUliLGtCQUFrQjtjQU45QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMkNBQTJDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7YUFDN0Y7O3NCQTJDSSxRQUFROztzQkFBSSxJQUFJOztrQkF4Q2xCLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQW1CTCxZQUFZO21CQUFDLGlCQUFpQjs7a0JBRTlCLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuaW1wb3J0IHsgWFlaIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiwgVXJsRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5cbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1zb3VyY2UteHl6JyxcbiAgdGVtcGxhdGU6ICcgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAnLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWZvcndhcmQtcmVmXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VYWVpDb21wb25lbnQpIH1dXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVhZWkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlOiBYWVo7XG4gIEBJbnB1dCgpIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBjcm9zc09yaWdpbjogc3RyaW5nO1xuICBASW5wdXQoKSBvcGFxdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb2plY3Rpb246IHN0cmluZztcbiAgQElucHV0KCkgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCkgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKSBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgQElucHV0KCkgdGlsZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KCkgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KCkgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XG4gIEBJbnB1dCgpIHRpbGVVcmxGdW5jdGlvbj86IFVybEZ1bmN0aW9uO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgdXJsczogQXJyYXk8c3RyaW5nPjtcbiAgQElucHV0KCkgd3JhcFg6IGJvb2xlYW47XG4gIHByb3BzID0gW1xuICAgICdjYWNoZVNpemUnLFxuICAgICdjcm9zc09yaWdpbicsXG4gICAgJ29wYXF1ZScsXG4gICAgJ3Byb2plY3Rpb24nLFxuICAgICdyZXByb2plY3Rpb25FcnJvclRocmVzaG9sZCcsXG4gICAgJ21pblpvb20nLFxuICAgICdtYXhab29tJyxcbiAgICAndGlsZUdyaWQnLFxuICAgICd0aWxlTG9hZEZ1bmN0aW9uJyxcbiAgICAndGlsZVBpeGVsUmF0aW8nLFxuICAgICd0aWxlU2l6ZScsXG4gICAgJ3RpbGVVcmxGdW5jdGlvbicsXG4gICAgJ3VybCcsXG4gICAgJ3VybHMnLFxuICAgICd3cmFwWCdcbiAgXTtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KSB0aWxlR3JpZFhZWjogVGlsZUdyaWRDb21wb25lbnQ7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRpbGVMb2FkU3RhcnQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRpbGVMb2FkRXJyb3I6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcm90ZWN0ZWQgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xuICAgIH1cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnByb3BzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBYWVoodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHsgdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpOyB9KTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB7IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCk7IH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4geyB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCk7IH0pO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==