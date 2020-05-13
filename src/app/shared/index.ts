import { ApplicationsComponent } from './components/applications/applications.component';
import { BoardPageComponent } from './components/boardpage/board-page.component';
import { BottomSheetComponent } from './components/elements/bottomsheet.component';
import { ModalComponent } from './components/elements/modal.component';
import { SnackbarComponent } from './components/elements/snackbar.component';
import { BlockLotFormComponent } from './components/form/blocklot.component';
import { FormComponent } from './components/form/form.component';
import { QuestionComponent } from './components/form/question.component';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';
import { SplashComponent } from './components/splash/splash.component';
import { StaffComponent } from './components/staff/staff.component';
import { AirService } from './services/air.service';
import { CartoService } from './services/carto.service';
import { FilterCatPipe } from './services/filter.pipe';
import { JsonDataService } from './services/get-json-data.service';
import { GetRegsService } from './services/getregs.service';
import { GoogleService } from './services/google.service';
import { QuestionControlService } from './services/question-control.service';
import { QuestionService } from './services/question.service';

import { IntroPaneComponent } from './components/mapels/intro-pane.component';
import { MapPaneComponent } from './components/mapels/map-pane.component';
import { PropPaneComponent } from './components/mapels/prop-pane.component';
import { PropSnackbarComponent } from './components/mapels/prop-snackbar.component';

export const components = [
    HomeComponent,
    PageComponent,
    ApplicationsComponent,
    BoardPageComponent,
    BottomSheetComponent,
    FormComponent,
    ModalComponent,
    SidebarButtonComponent,
    SnackbarComponent,
    SplashComponent,
    StaffComponent,
    QuestionComponent,
    FilterCatPipe,
    BlockLotFormComponent,
    PropSnackbarComponent,
    PropPaneComponent,
    MapPaneComponent,
    IntroPaneComponent
];

export const services = [
    AirService,
    CartoService,
    JsonDataService,
    GetRegsService,
    QuestionService,
    QuestionControlService,
    GoogleService
];

export * from './components/applications/applications.component';
export * from './components/boardpage/board-page.component';
export * from './components/elements/modal.component';
export * from './components/elements/snackbar.component';
export * from './components/form/blocklot.component';
export * from './components/form/form.component';
export * from './components/form/question.component';
export * from './components/home/home.component';
export * from './components/mapels/intro-pane.component';
export * from './components/mapels/map-pane.component';
export * from './components/page/page.component';
export * from './components/mapels/prop-snackbar.component';
export * from './components/mapels/prop-pane.component';
export * from './components/sidebar-button/sidebar-button.component';
export * from './components/splash/splash.component';
export * from './components/staff/staff.component';

export * from './services/air.service';
export * from './services/carto.service';
export * from './services/filter.pipe';
export * from './services/get-json-data.service';
export * from './services/getregs.service';
export * from './services/google.service';
export * from './services/layers.service';
export * from './services/maplayers.service';
export * from './services/question-control.service';
export * from './services/question.service';
