import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import * as components from './index';

import { EHD_ROUTES } from './ehd-main.routing';

import { EhdMainComponent } from './ehd-main.component';

@NgModule({
  declarations: [
    components.ehdComponents
  ],
  entryComponents: [EhdMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EHD_ROUTES),
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EhdMainModule { }
