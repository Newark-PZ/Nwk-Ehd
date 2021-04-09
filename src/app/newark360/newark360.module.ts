import { CommonModule, ViewportScroller } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Event, Router, RouterModule, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedModule } from '../shared/shared.module';
import * as components from './index';
import { NEWARK360_ROUTES } from './newark360.routing';

@NgModule({
  declarations: [
    components.newark360Components
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(NEWARK360_ROUTES)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Newark360Module {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll)
       )
       .subscribe({
         next: e => {
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
    }});
  }
}
