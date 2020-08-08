import { Routes } from '@angular/router';
import { BoardPageComponent, PageComponent } from '../shared';
import { DashboardComponent } from './pages/dashboard.component';
import { OrcHomeComponent } from './pages/home.component';
import { MapsComponent } from './pages/maps.component';
import { OrcResourcesComponent } from './pages/resources.component';
export const ORC_ROUTES: Routes = [
  {
    path: 'virtualhearing/',
    pathMatch: 'full',
    redirectTo: 'virtualhearing'
  },
  {
    path: 'virtualhearing',
    component: DashboardComponent
  },
  {
    path: 'home',
    component: OrcHomeComponent
  },
  {
    path: 'boards/:id',
    component: BoardPageComponent
  },
  {
    path: 'resources/:id',
    component: OrcResourcesComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: ':id',
    component: PageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
