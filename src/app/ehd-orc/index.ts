import { RCBoardComponent } from './pages/board.component';
import { OrcDashboardComponent } from './pages/dashboard.component';
import { OrcFAQComponent } from './pages/faq.component';
import { OrcHomeComponent } from './pages/home.component';
import { OrcDashComponent } from './pages/orc-dash.component';
import { OrcResourcesComponent } from './pages/resources.component';

export const rcComponents = [
  OrcHomeComponent,
  OrcDashComponent,
  OrcResourcesComponent,
  OrcDashboardComponent,
  RCBoardComponent,
  OrcFAQComponent
];

export * from './pages/faq.component';
export * from './pages/home.component';
export * from './pages/orc-dash.component';
export * from './pages/resources.component';
export * from './pages/board.component';
