import { Clipboard } from '@angular/cdk/clipboard';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import { Page } from '../../models/pages.model';
import { JsonDataService } from '../../services/get-json-data.service';
import { slideshowAnimation } from '../../util/animations';
import { SnackbarComponent } from '../elements/snackbar.component';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-staff',
  styleUrls: ['./staff.component.scss'],
  templateUrl: './staff.component.html'
})

export class StaffComponent implements AfterViewInit {
  @Input() page: Page =  {
    id: 'staff',
    splashTitle: 'Our Staff',
    splashIcon: 'people',
    contentIntro: {left: {text: "The Office of Planning & Zoning is devoted to furthering Mayor Baraka's Newark Forward Agenda of Equitable Growth by shaping the city's built environment. Planning and Zoning staff maintain and propose updates to the city's Master Plan and Zoning Ordinance to reflect Newark's needs and values, support the Planning Board and Zoning Board in exercising their roles, review and process applications for new development, draft redevelopment plans to catalyze new development and growth, research best practices for improving the quality of the built environment, and collaborate with other agencies across the city to share and implement these best practices."}}
  };
  @Input() data$: Array<any> = [];
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(
    readonly store: Store<fromStore.StoreState>,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar,
    readonly jsonData: JsonDataService
    ) {
      this.jsonData.getStaff()
        .then(r => this.data$ = r.sort((d1, d2) => d1.Hierarchy - d2.Hierarchy))
        .catch(err => { console.error(err); });
    }
  ngAfterViewInit(): void {
    this.accordion._headers.first.panel.open();
  }
  filterCat(category): void {
    return category;
  }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
  headerClick(): any {
    window.scrollTo(0, 150);
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: { message: 'Copied!', detail: object }
    });
  }
}
