import { CommonModule, ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Event, Router, RouterModule, Scroll } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { APP_ROUTES } from './app-routing';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';
import { EhdOrcComponent } from './ehd-orc/ehd-orc.component';
import { Newark360Component } from './newark360/newark360.component';
import { storeReducers } from './store/store.reducers';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, EhdMainComponent, EhdOpzComponent, EhdOrcComponent, Newark360Component],
  imports: [
    BrowserModule.withServerTransition({ appId: 'nwk-ehd' }),
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    HammerModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    StoreModule.forRoot(storeReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false
      }
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
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
