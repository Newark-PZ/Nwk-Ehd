import { CommonModule, ViewportScroller } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Event, Router, RouterModule, Scroll } from '@angular/router';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { APP_ROUTES } from './app-routing';
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';
import { clearState, storeReducers, StoreState } from './store/store.reducers';

export const metaReducers: Array<MetaReducer<StoreState>> = [clearState];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, EhdMainComponent, EhdOpzComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'nwk-ehd' }),
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    HammerModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.config.firebase),
    RouterModule.forRoot(APP_ROUTES, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    StoreModule.forRoot(storeReducers, {
      metaReducers,
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
