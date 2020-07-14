import { Routes } from '@angular/router';
import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';
import { Newark360Component } from './newark360/newark360.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ehd'
  },
  {
    component: EhdMainComponent,
    loadChildren: async () => import('./ehd-main/ehd-main.module')
      .then(m => m.EhdMainModule),
    path: 'ehd'
  },
  {
    component: EhdOpzComponent,
    loadChildren: async () => import('./ehd-opz/ehd-opz.module')
      .then(m => m.EhdOpzModule),
    path: 'planningzoning'
  },
  {
    component: Newark360Component,
    loadChildren: async () => import('./newark360/newark360.module')
      .then(m => m.Newark360Module),
    path: '360'
  },
  {
    path: 'ehd/',
    pathMatch: 'full',
    redirectTo: 'ehd'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'ehd'
  }
];
