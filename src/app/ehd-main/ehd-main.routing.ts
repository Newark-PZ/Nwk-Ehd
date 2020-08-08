import { Routes } from '@angular/router';
import { DataDashComponent } from './pages/data-dash.component';
import { EhdHomeComponent } from './pages/home.component';

export const EHD_ROUTES: Routes = [
  {
    path: 'home',
    component: EhdHomeComponent
  },
  {
    path: 'data-dashboard',
    component: DataDashComponent
  },
  {
    path: 'home/',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
