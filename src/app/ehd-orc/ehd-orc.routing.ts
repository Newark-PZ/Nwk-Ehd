import { Routes } from '@angular/router';
import { PageComponent } from '../shared';
import { OrcDashboardComponent } from './pages/dashboard.component';
import { OrcFAQComponent } from './pages/faq.component';
import { OrcHomeComponent } from './pages/home.component';
// import { OrcDashComponent } from './pages/orc-dash.component';
import { OrcResourcesComponent } from './pages/resources.component';
export const ORC_ROUTES: Routes = [
  {
    path: 'virtualhearing/',
    pathMatch: 'full',
    redirectTo: 'virtualhearing'
  },
  {
    path: 'virtualhearing',
    component: OrcDashboardComponent
  },
  {
    path: 'home',
    component: OrcHomeComponent
  },
  {
    path: 'resources',
    children: [
      {
        path: 'faqs',
        component: OrcFAQComponent
      },
      {
        path: ':id',
        component: OrcResourcesComponent
      }
    ]
  },
  // {
  //   path: 'dash',
  //   component: OrcDashComponent
  // },
  {
    path: ':id',
    component: PageComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
