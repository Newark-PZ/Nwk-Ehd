import { Routes } from '@angular/router';
import { PageComponent } from '../shared';
import { N360HomeComponent } from './pages/home.component';

export const NEWARK360_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: N360HomeComponent
  },
  {
    path: ':id',
    component: PageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
