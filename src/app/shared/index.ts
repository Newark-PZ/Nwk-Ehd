import { ApplicationsComponent } from './components/applications/applications.component';
import { MapImageComponent } from './components/elements/basic-map.component';
import { BottomSheetComponent } from './components/elements/bottomsheet.component';
import { EventComponent } from './components/elements/event.component';
import { ModalComponent } from './components/elements/modal.component';
import { SnackbarComponent } from './components/elements/snackbar.component';
import { FaqComponent } from './components/faq/faq.component';
import { FileComponent } from './components/filelist/file.component';
import { FileListControlComponent } from './components/filelist/filelist-control.component';
import { FileListComponent } from './components/filelist/filelist.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AreaPaneComponent } from './components/mapels/area-pane.component';
import { IntroPaneComponent } from './components/mapels/intro-pane.component';
import { MapPaneComponent } from './components/mapels/map-pane.component';
import { PropPaneComponent } from './components/mapels/prop-pane.component';
import { PropSnackbarComponent } from './components/mapels/prop-snackbar.component';
import { PageComponent } from './components/page/page.component';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';
import { AirService } from './services/air.service';
import { CartoService } from './services/carto.service';
import { FaqCatPipe } from './services/faqfilter.pipe';
import { FilterCatPipe } from './services/filter.pipe';
import { JsonDataService } from './services/get-json-data.service';
import { GetRegsService } from './services/getregs.service';
import { GoogleService } from './services/google.service';

export const components = [
    ApplicationsComponent,
    AreaPaneComponent,
    BottomSheetComponent,
    EventComponent,
    FaqComponent,
    FileComponent,
    FileListComponent,
    FileListControlComponent,
    FooterComponent,
    HomeComponent,
    IntroPaneComponent,
    MapPaneComponent,
    MapImageComponent,
    ModalComponent,
    PageComponent,
    PropPaneComponent,
    PropSnackbarComponent,
    SidebarButtonComponent,
    SnackbarComponent
];

export const services = [
    AirService,
    CartoService,
    JsonDataService,
    GetRegsService,
    GoogleService
];

export const pipes = [
    FaqCatPipe,
    FilterCatPipe
];

export * from './components/applications/applications.component';
export * from './components/elements/basic-map.component';
export * from './components/elements/modal.component';
export * from './components/elements/snackbar.component';
export * from './components/elements/event.component';
export * from './components/faq/faq.component';
export * from './components/filelist/file.component';
export * from './components/filelist/filelist.component';
export * from './components/filelist/filelist-control.component';
export * from './components/footer/footer.component';
export * from './components/home/home.component';
export * from './components/mapels/area-pane.component';
export * from './components/mapels/intro-pane.component';
export * from './components/mapels/map-pane.component';
export * from './components/page/page.component';
export * from './components/mapels/prop-snackbar.component';
export * from './components/mapels/prop-pane.component';
export * from './components/sidebar-button/sidebar-button.component';

export * from './services/air.service';
export * from './services/carto.service';
export * from './services/faqfilter.pipe';
export * from './services/filter.pipe';
export * from './services/get-json-data.service';
export * from './services/getregs.service';
export * from './services/google.service';
export * from './services/layers.service';
export * from './services/link.service';
