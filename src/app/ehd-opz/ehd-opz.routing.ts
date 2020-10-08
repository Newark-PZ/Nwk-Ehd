import { Routes } from '@angular/router';
import { PageComponent } from '../shared';
import { OpzApplicationsComponent } from './pages/applications.component';
import { OpzContactComponent } from './pages/contact.component';
import { DashboardComponent } from './pages/dashboard.component';
import { OpzDoremusComponent } from './pages/doremus.component';
import { PlanningFAQComponent } from './pages/faqs.component';
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
    path: 'applying',
    component: OpzApplicationsComponent
  },
  {
    path: 'doremus',
    component: OpzDoremusComponent
  },
  {
    path: 'boards/:id',
    component: PageComponent
  },
  {
    path: 'zoning/:id',
    component: OpzZoningComponent
  },
  {
    path: 'resources',
    children: [
      {
        path: 'faqs',
        component: PlanningFAQComponent
      },
      {
        path: ':id',
        component: OpzResourcesComponent
      }
    ]
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
