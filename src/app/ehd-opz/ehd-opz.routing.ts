import { Routes } from '@angular/router';
import { BoardPageComponent, PageComponent, StaffComponent } from '../shared';
import { OpzContactComponent } from './pages/contact.component';
import { DashboardComponent } from './pages/dashboard.component';
import { OpzHomeComponent } from './pages/home.component';
import { MapsComponent } from './pages/maps.component';
import { OpzResourcesComponent } from './pages/resources.component';
import { OpzZoningComponent } from './pages/zoning.component';

export const PLANNING_ROUTES: Routes = [
  {
    path: 'virtualhearing',
    pathMatch: 'full',
    redirectTo: 'virtualhearing/cpb'
  },
  {
    path: 'virtualhearing/:id',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: OpzHomeComponent
  },
  {
    path: 'contact',
    component: OpzContactComponent
  },
  {
    path: 'boards/:id',
    component: BoardPageComponent
  },
  {
    path: 'zoning/:id',
    component: OpzZoningComponent
  },
  {
    path: 'resources/:id',
    component: OpzResourcesComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'team',
    component: StaffComponent
  },
  {
    path: ':id',
    component: PageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
