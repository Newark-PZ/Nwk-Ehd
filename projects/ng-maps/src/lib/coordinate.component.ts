import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { transform } from 'ol/proj';
import { GeometryCircleComponent } from './geom/geometrycircle.component';
import { GeometryPointComponent } from './geom/geometrypoint.component';
import { MapComponent } from './map.component';
import { OverlayComponent } from './overlay.component';
import { ViewComponent } from './view.component';

@Component({
  selector: 'map-coordinate',
  template: ' <div class="map-coordinate"></div>'
})
export class CoordinateComponent implements OnChanges, OnInit {
  private readonly host: any;
  private mapSrid = 'EPSG:3857';

  @Input() x: number;
  @Input() y: number;
  @Input() srid = 'EPSG:3857';

  constructor(
    private readonly map: MapComponent,
    @Optional() viewHost: ViewComponent,
    @Optional() geometryPointHost: GeometryPointComponent,
    @Optional() geometryCircleHost: GeometryCircleComponent,
    @Optional() overlayHost: OverlayComponent
  ) {
    if (geometryPointHost !== null) {
      this.host = geometryPointHost;
    } else if (geometryCircleHost !== null) {
      this.host = geometryCircleHost;
    } else if (viewHost !== null) {
      this.host = viewHost;
    } else if (overlayHost !== null) {
      this.host = overlayHost;
    }
  }

  ngOnInit(): void {
    this.map.instance.on('change:view', e => { this.onMapViewChanged(e); });
    this.mapSrid = this.map.instance.getView()
      .getProjection()
      .getCode();
    this.transformCoordinates();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.transformCoordinates();
  }

  private onMapViewChanged(event): void {
    this.mapSrid = event.target.get(event.key)
      .getProjection()
      .getCode();
    this.transformCoordinates();
  }

  private transformCoordinates(): void {
    let transformedCoordinates: Array<number>;

    (this.srid === this.mapSrid)
    ? transformedCoordinates = [this.x, this.y]
    : transformedCoordinates = transform([this.x, this.y], this.srid, this.mapSrid);

    switch (this.host.componentType) {
      case 'geometry-point':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'geometry-circle':
      case 'view':
        this.host.instance.setCenter(transformedCoordinates);
        break;
      case 'overlay':
        this.host.instance.setPosition(transformedCoordinates);
        break;
      default:
        break;
    }
  }
}