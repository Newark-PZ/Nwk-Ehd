import { Routes } from '@angular/router';
import { EditableMapEXPComponent } from './pages/edit-exp.component';
import { N360HomeComponent } from './pages/home.component';
import { NewarkTodayComponent } from './pages/newark-today.component';

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
    component: NewarkTodayComponent
  },
  {
    path: 'edit',
    component: EditableMapEXPComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
