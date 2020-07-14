import { OpzApplicationsComponent } from './pages/applications.component';
import { OpzContactComponent } from './pages/contact.component';
import { OpzHomeComponent } from './pages/home.component';
import { MapsComponent } from './pages/maps.component';
import { OpzResourcesComponent } from './pages/resources.component';
import { OpzStaffComponent } from './pages/staff.component';
import { OpzZoningComponent } from './pages/zoning.component';

// Resources page component imports
import { DocsDataComponent } from './pages/sub-pages/boards-docs/boards-docs.component';

import { DiagramsComponent } from './pages/diagrams/diagrams.component';
import { LotComponent } from './pages/diagrams/lot.component';
import { OpzZoningInfoComponent } from './pages/sub-pages/info/info.component';
import { OpzZoningRegsComponent } from './pages/sub-pages/regs/regs.component';
import { OpzZoningResComponent } from './pages/sub-pages/res/res.component';

// boards components
import { CpbComponent } from './pages/boards-cpb.component';
import { EcComponent } from './pages/boards-ec.component';
import { LhpcComponent } from './pages/boards-lhpc.component';
import { ZbaComponent } from './pages/boards-zba.component';
import { DashboardComponent } from './pages/dashboard.component';

export const planningComponents = [
  OpzHomeComponent,
  OpzApplicationsComponent,
  OpzStaffComponent,
  MapsComponent,
  OpzResourcesComponent,
  OpzZoningComponent,
  OpzContactComponent,
  DashboardComponent
];

export const planningResComponents = [
  DocsDataComponent
];

export const planningZonesComponents = [
  DiagramsComponent,
  OpzZoningInfoComponent,
  OpzZoningRegsComponent,
  OpzZoningResComponent,
  LotComponent
];
export const boardsComponents = [
  CpbComponent,
  EcComponent,
  LhpcComponent,
  ZbaComponent
];

export * from './pages/applications.component';
export * from './pages/contact.component';
export * from './pages/home.component';
export * from './pages/maps.component';
export * from './pages/resources.component';
export * from './pages/staff.component';
export * from './pages/zoning.component';

export * from './pages/sub-pages/boards-docs/boards-docs.component';
export * from './pages/diagrams/diagrams.component';
export * from './pages/diagrams/lot.component';
export * from './pages/sub-pages/info/info.component';
export * from './pages/sub-pages/regs/regs.component';
export * from './pages/sub-pages/res/res.component';

export * from './pages/boards-cpb.component';
export * from './pages/boards-ec.component';
export * from './pages/boards-lhpc.component';
export * from './pages/boards-zba.component';
