import { CommonModule, ViewportScroller } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Event, Router, RouterModule, Scroll } from '@angular/router';
import { AngularOpenlayersModule } from 'ng-maps';
import { filter } from 'rxjs/operators';
import { SharedModule } from '../shared/shared.module';
import { ORC_ROUTES } from './ehd-orc.routing';
import * as components from './index';

@NgModule({
  declarations: [
    components.rcComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularOpenlayersModule,
    RouterModule.forChild(ORC_ROUTES)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EhdOrcModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll)
       )
       .subscribe(e => {
        if (e.position) {
          // backward navigation
          viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          // anchor navigation
          viewportScroller.scrollToAnchor(e.anchor);
        } else {
          // forward navigation
          viewportScroller.scrollToPosition([0, 0]);
         }
    });
  }
}
