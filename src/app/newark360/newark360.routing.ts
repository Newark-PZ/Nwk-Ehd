import { Routes } from '@angular/router';
import { N360HomeComponent } from './pages/home.component';
import { MapsComponent } from './pages/maps.component';

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
    path: 'newark-today',
    component: MapsComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
