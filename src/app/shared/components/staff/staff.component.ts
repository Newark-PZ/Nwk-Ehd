import { Clipboard } from '@angular/cdk/clipboard';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import { StaffPage } from '../../models/pages.model';
import { slideshowAnimation } from '../../util/animations';
import { SnackbarComponent } from '../elements/snackbar.component';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-staff',
  styleUrls: ['./staff.component.scss'],
  templateUrl: './staff.component.html'
})

export class StaffComponent implements AfterViewInit, OnChanges {
  @Input() page: StaffPage;
  @Input() data$: Array<any> = [];
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(
    readonly store: Store<fromStore.StoreState>,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) { }
  ngAfterViewInit(): void {
    this.accordion._headers.first.panel.open();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data$ = changes.data$.currentValue;
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
