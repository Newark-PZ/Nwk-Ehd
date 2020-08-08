import { RCBoardComponent } from './pages/board.component';
import { DashboardComponent } from './pages/dashboard.component';
import { DocsComponent } from './pages/docs.component';
import { OrcHomeComponent } from './pages/home.component';
import { MapsComponent } from './pages/maps.component';
import { OrcResourcesComponent } from './pages/resources.component';

export const rcComponents = [
  OrcHomeComponent,
  MapsComponent,
  OrcResourcesComponent,
  DashboardComponent,
  DocsComponent,
  RCBoardComponent
];

export * from './pages/home.component';
export * from './pages/maps.component';
export * from './pages/resources.component';
export * from './pages/docs.component';
export * from './pages/board.component';
