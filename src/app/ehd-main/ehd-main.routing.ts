import { SidebarLink } from '../shared/interfaces/other.interface';
import * as components from './index';

const frag = '/ehd';
export const EHD_ROUTES: Array<SidebarLink> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: components.EhdHomeComponent,
    path: 'home',
    icon: 'home',
    title: 'EHD Home',
    parentFragment: frag,
    isChild: false
  },
  {
    component: components.EhdAboutComponent,
    path: 'about',
    title: 'About EHD',
    parentFragment: frag,
    isChild: false,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'leadership'
      },
      {
        path: 'leadership',
        icon: 'subdirectory_arrow_right',
        title: 'Our Leadership',
        parentFragment: `${frag}/about`,
        isChild: true
      },
      {
        path: 'support',
        icon: 'subdirectory_arrow_right',
        title: 'Supporting Staff',
        parentFragment: `${frag}/about`,
        isChild: true
      }
    ]
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
