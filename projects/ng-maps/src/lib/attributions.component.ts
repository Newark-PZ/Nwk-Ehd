import { AfterViewInit, Component, ContentChildren, Host, QueryList } from '@angular/core';
import { Attribution } from 'ol/control';
import { AttributionComponent } from './attribution.component';
import { SourceComponent } from './sources/source.component';

@Component({
  selector: 'map-attributions',
  template: '<ng-content></ng-content>'
})
export class AttributionsComponent implements AfterViewInit {
  instance: Array<Attribution>;

  @ContentChildren(AttributionComponent) attributions: QueryList<AttributionComponent>;

  constructor(@Host() private readonly source: SourceComponent) {}

  /* we can do this at the very end */
  ngAfterViewInit(): void {
    if (this.attributions.length) {
      this.instance = this.attributions.map(cmp => cmp.instance);
      // console.log('setting attributions:', this.instance);
      this.source.instance.setAttributions(this.instance as any);
    }
  }
}
