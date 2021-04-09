import { Routes } from '@angular/router';
// import { EhdMainComponent } from './ehd-main/ehd-main.component';
import { EhdOpzComponent } from './ehd-opz/ehd-opz.component';
import { EhdOrcComponent } from './ehd-orc/ehd-orc.component';
import { Newark360Component } from './newark360/newark360.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'planningzoning'
  },
  {
    component: EhdOpzComponent,
    loadChildren: async () => import('./ehd-opz/ehd-opz.module')
      .then(m => m.EhdOpzModule),
    path: 'planningzoning'
  },
  {
    component: EhdOrcComponent,
    loadChildren: async () => import('./ehd-orc/ehd-orc.module')
      .then(m => m.EhdOrcModule),
    path: 'rentcontrol'
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
    redirectTo: 'planningzoning'
  },
  {
    path: 'zoning-ordinance',
    loadChildren: async () => new Promise( () => {
      if (window.location.href.match(/zoning-ordinance/)) {
        window.location.href = 'https://drive.google.com/file/d/1d_7DnJQ5M5jdfhwx5RwATWMef5R8EOzu/view';
      }})
  },
  // {
  //   component: EhdMainComponent,
  //   loadChildren: async () => import('./ehd-main/ehd-main.module')
  //     .then(m => m.EhdMainModule),
  //   path: 'ehd'
  // },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'planningzoning'
  }
];
