import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PLANNING_ROUTES } from './ehd-opz.routing';

import * as components from './index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// tslint:disable-next-line: no-implicit-dependencies
import { AngularOpenlayersModule } from 'ng-maps';

@NgModule({
  declarations: [
    components.planningComponents,
    components.planningResComponents,
    components.planningZonesComponents,
    components.boardsComponents
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularOpenlayersModule,
    RouterModule.forChild(PLANNING_ROUTES)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EhdOpzModule { }
