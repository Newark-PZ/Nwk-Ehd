import { SidebarLink } from '../shared/interfaces/other.interface';
import * as components from './index';

const div = '/planningzoning';
export const PLANNING_ROUTES: Array<SidebarLink> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: components.OpzHomeComponent,
    path: 'home',
    icon: 'home',
    title: 'OPZ Home',
    parentFragment: div,
    isChild: false
  },
  {
    component: components.OpzAboutComponent,
    path: 'about',
    icon: 'info',
    title: 'About OPZ',
    parentFragment: div,
    isChild: false
  },
  {
    component: components.OpzApplicationsComponent,
    path: 'applications',
    icon: 'assignment',
    title: 'Applications & Payment',
    parentFragment: div,
    isChild: false
  },
  {
    component: components.OpzStaffComponent,
    path: 'team',
    icon: 'people',
    title: 'Our Team',
    parentFragment: div,
    isChild: false
  },
  {
    component: components.MapsComponent,
    path: 'maps',
    icon: 'explore',
    title: 'Maps',
    parentFragment: div,
    isChild: false
  },
  {
    component: components.OpzPlanningComponent,
    path: 'planning',
    icon: 'all_inclusive',
    title: 'Planning',
    parentFragment: div,
    isChild: false
  },
  {
    children: [
      { path: '', redirectTo: 'zoning', pathMatch: 'full' },
      {
        component: components.CpbComponent,
        path: 'planning',
        parentFragment: `${div}/boards`,
        icon: 'subdirectory_arrow_right',
        title: 'Planning Board',
        isChild: true
      },
      {
        component: components.EcComponent,
        path: 'environmental',
        parentFragment: `${div}/boards`,
        icon: 'subdirectory_arrow_right',
        title: 'Environmental Commission',
        isChild: true
      },
      {
        component: components.LhpcComponent,
        path: 'lhpc',
        parentFragment: `${div}/boards`,
        icon: 'subdirectory_arrow_right',
        title: 'Landmarks & Historic Preservation',
        isChild: true
      },
      {
        component: components.ZbaComponent,
        path: 'zoning',
        parentFragment: `${div}/boards`,
        icon: 'subdirectory_arrow_right',
        title: 'Zoning Board',
        isChild: true
      }
    ],
    path: 'boards',
    icon: 'users',
    title: 'Boards & Commissions',
    parentFragment: div,
    isChild: false
  },
  {
    children: [
      { path: '', redirectTo: 'zone-info', pathMatch: 'full' },
      {
        component: components.OpzZoningInfoComponent,
        path: 'zone-info',
        title: 'Zoning Info',
        parentFragment: `${div}/zoning`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      },
      {
        component: components.OpzZoningResComponent,
        path: 'zone-res',
        title: 'Residential Zoning',
        parentFragment: `${div}/zoning`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      },
      {
        component: components.DiagramsComponent,
        path: 'diagrams',
        title: 'Zoning Diagrams',
        parentFragment: `${div}/zoning`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      },
      {
        component: components.OpzZoningRegsComponent,
        path: 'zone-regs',
        title: 'Zoning Regulations',
        parentFragment: `${div}/zoning`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      }
    ],
    component: components.OpzZoningComponent,
    path: 'zoning',
    icon: 'cloud-chart',
    title: 'Zoning',
    isChild: false
  },
  {
    children: [
      { path: '', redirectTo: 'res-apps', pathMatch: 'full' },
      {
        component: components.ApplicationsDataComponent,
        path: 'res-apps',
        title: 'Applications',
        parentFragment: `${div}/resources`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      },
      {
        path: 'res-redev',
        title: 'Revelopment Plans',
        parentFragment: `${div}/resources`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      },
      {
        component: components.BoardsDocsDataComponent,
        path: 'res-minutes',
        title: 'Minutes & Agendas',
        parentFragment: `${div}/resources`,
        icon: 'subdirectory_arrow_right',
        isChild: true
      }
    ],
    component: components.OpzResourcesComponent,
    path: 'resources',
    icon: 'book',
    title: 'Resources',
    parentFragment: div,
    isChild: false
  },
  {
    component: components.OpzContactComponent,
    path: 'contact',
    icon: 'phone',
    title: 'Contact Us',
    parentFragment: div,
    isChild: false
  },
  {
    path: 'home/',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
