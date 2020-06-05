import { Routes } from '@angular/router';
import { EhdHomeComponent } from './pages/home.component';

export const EHD_ROUTES: Routes = [
  {
    path: 'home',
    component: EhdHomeComponent
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
