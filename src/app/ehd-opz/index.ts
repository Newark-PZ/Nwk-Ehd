import { OpzApplicationsComponent } from './pages/applications.component';
import { OpzContactComponent } from './pages/contact.component';
import { DashboardComponent } from './pages/dashboard.component';
import { DiagramsComponent } from './pages/diagrams/diagrams.component';
import { LotComponent } from './pages/diagrams/lot.component';
import { PlanningFAQComponent } from './pages/faqs.component';
import { OpzHomeComponent } from './pages/home.component';
import { MapsComponent } from './pages/maps.component';
import { OpzResourcesComponent } from './pages/resources.component';
import { OpzStaffComponent } from './pages/staff.component';
import { OpzZoningInfoComponent } from './pages/sub-pages/info/info.component';
import { OpzZoningRegsComponent } from './pages/sub-pages/regs/regs.component';
import { OpzZoningResComponent } from './pages/sub-pages/res/res.component';
import { OpzZoningComponent } from './pages/zoning.component';

export const planningComponents = [
  OpzHomeComponent,
  OpzApplicationsComponent,
  OpzStaffComponent,
  MapsComponent,
  OpzResourcesComponent,
  OpzZoningComponent,
  OpzContactComponent,
  DashboardComponent,
  PlanningFAQComponent
];

export const planningZonesComponents = [
  DiagramsComponent,
  OpzZoningInfoComponent,
  OpzZoningRegsComponent,
  OpzZoningResComponent,
  LotComponent
];

export * from './pages/applications.component';
export * from './pages/contact.component';
export * from './pages/faqs.component';
export * from './pages/home.component';
export * from './pages/maps.component';
export * from './pages/resources.component';
export * from './pages/staff.component';
export * from './pages/zoning.component';

export * from './pages/diagrams/diagrams.component';
export * from './pages/diagrams/lot.component';
export * from './pages/sub-pages/info/info.component';
export * from './pages/sub-pages/regs/regs.component';
export * from './pages/sub-pages/res/res.component';
