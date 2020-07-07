import { Routes } from '@angular/router';
import { PageComponent } from '../shared';
import { OpzHomeComponent } from './pages/home.component';

export const NEWARK360_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'virtualhearing/cpb'
  },
  {
    path: 'home',
    component: OpzHomeComponent
  },
  {
    path: ':id',
    component: PageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
