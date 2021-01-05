import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularOpenlayersModule } from 'ng-maps';
import { SharedModule } from '../shared/shared.module';
import { EhdMainComponent } from './ehd-main.component';
import { EHD_ROUTES } from './ehd-main.routing';
import { EhdHomeComponent } from './pages/home.component';

@NgModule({
  declarations: [EhdHomeComponent],
  entryComponents: [EhdMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularOpenlayersModule,
    RouterModule.forChild(EHD_ROUTES)
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EhdMainModule { }
