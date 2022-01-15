import { Routes } from '@angular/router';
import { PageComponent } from '../shared';
import { OpzApplicationsComponent } from './pages/applications.component';
import { OpzContactComponent } from './pages/contact.component';
import { OpzDashboardComponent } from './pages/dashboard.component';
import { OpzFAQComponent } from './pages/faqs.component';
import { OpzHomeComponent } from './pages/home.component';
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
    component: OpzDashboardComponent,
    data: {title: 'Virtual Hearings', parent: 'PZO'}
  },
  {
    path: 'home',
    component: OpzHomeComponent,
    data: {title: 'Home', parent: 'PZO'}
  },
  {
    path: 'contact',
    component: OpzContactComponent,
    data: {title: 'Contact', parent: 'PZO'}
  },
  {
    path: 'applying',
    component: OpzApplicationsComponent,
    data: {title: 'Applying', parent: 'PZO'}
  },
  {
    path: 'boards/:id',
    component: PageComponent,
    data: {title: 'Boards', parent: 'PZO'}
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
        path: 'corrals',
        component: PageComponent
      },
      {
        path: 'faqs',
        component: OpzFAQComponent
      },
      {
        path: ':id',
        component: OpzResourcesComponent,
        data: {title: 'Documents', parent: 'PZO'}
      }
    ]
  },
  // { path: 'newarkgo', redirectTo: 'home', pathMatch: 'full' },
  {
    path: ':id',
    component: PageComponent,
    data: {title: 'Program', parent: 'PZO'}
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
