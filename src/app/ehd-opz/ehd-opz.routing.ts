import { Routes } from '@angular/router';
import { PageComponent } from '../shared';
import { OpzApplicationsComponent } from './pages/applications.component';
import { OpzContactComponent } from './pages/contact.component';
import { OpzDashboardComponent } from './pages/dashboard.component';
import { OpzFAQComponent } from './pages/faqs.component';
import { OpzHomeComponent } from './pages/home.component';
import { OpzMapComponent } from './pages/opz-map.component';
import { OpzResourcesComponent } from './pages/resources.component';
// import { OpzZoningComponent } from './pages/zoning.component';

export const PLANNING_ROUTES: Routes = [
  {
    path: 'virtualhearing',
    pathMatch: 'full',
    redirectTo: 'virtualhearing/cpb'
  },
  {
    path: 'virtualhearing/:id',
    component: OpzDashboardComponent
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
    path: 'boards/:id',
    component: PageComponent
  },
  // {
  //   path: 'zoning/:id',
  //   component: OpzZoningComponent
  // },
  // {
  //   path: 'faqs/:id',
  //   component: OpzFAQComponent
  // },
  {
    path: 'resources',
    children: [
      {
        path: 'faqs',
        component: OpzFAQComponent
      },
      {
        path: ':id',
        component: OpzResourcesComponent
      }
    ]
  },
  {
    path: 'maps',
    component: OpzMapComponent
  },
  // { path: 'newarkgo', redirectTo: 'home', pathMatch: 'full' },
  {
    path: ':id',
    component: PageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
