import { OpzApplicationsComponent } from './pages/applications.component';
import { OpzContactComponent } from './pages/contact.component';
import { OpzDashboardComponent } from './pages/dashboard.component';
// import { DiagramsComponent } from './pages/diagrams/diagrams.component';
// import { LotComponent } from './pages/diagrams/lot.component';
import { OpzFAQComponent } from './pages/faqs.component';
import { OpzHomeComponent } from './pages/home.component';
import { OpzMapComponent } from './pages/opz-map.component';
import { OpzResourcesComponent } from './pages/resources.component';
// import { OpzZoningInfoComponent } from './pages/sub-pages/info/info.component';
// import { OpzZoningRegsComponent } from './pages/sub-pages/regs/regs.component';
// import { OpzZoningResComponent } from './pages/sub-pages/res/res.component';
// import { OpzZoningComponent } from './pages/zoning.component';

export const planningComponents = [
  OpzApplicationsComponent,
  OpzContactComponent,
  OpzDashboardComponent,
  OpzFAQComponent,
  OpzHomeComponent,
  OpzMapComponent,
  OpzResourcesComponent
  // OpzZoningComponent,
];

export const planningZonesComponents = [
  // DiagramsComponent,
  // OpzZoningInfoComponent,
  // OpzZoningRegsComponent,
  // OpzZoningResComponent,
  // LotComponent
];

export * from './pages/applications.component';
export * from './pages/contact.component';
export * from './pages/faqs.component';
export * from './pages/home.component';
export * from './pages/opz-map.component';
export * from './pages/resources.component';

// export * from './pages/diagrams/diagrams.component';
// export * from './pages/diagrams/lot.component';
// export * from './pages/sub-pages/info/info.component';
// export * from './pages/sub-pages/regs/regs.component';
// export * from './pages/sub-pages/res/res.component';
