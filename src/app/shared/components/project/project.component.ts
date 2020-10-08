import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/store.reducers';
import { StoreService } from '../../../store/store.service';
import { Page } from '../../models/pages.model';
import { SnackbarComponent } from '../elements/snackbar.component';

@Component({
  selector: 'app-page-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html'
})

export class ProjectComponent implements OnInit, OnChanges {
  @Input() page: Page;
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  constructor(
    public breakpointObserver: BreakpointObserver,
    public storeService: StoreService,
    readonly store: Store<fromStore.StoreState>,
    readonly _snackBar: MatSnackBar
    ) {
      this.expansionOpen$ = this.store.select(state => state.homePanel.open);
      this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
      this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
    }
  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.storeService.setHomePanelMulti(false);
        this.storeService.setHomePanelOpen(false);
        this.storeService.setHomePanelToggle(false);
      } else {
        this.storeService.setHomePanelMulti(true);
        this.storeService.setHomePanelOpen(true);
        this.storeService.setHomePanelToggle(true);
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.page = changes.page.currentValue;
  }
  filterCat(category): void {
    return category;
  }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: { message: 'Copied!', detail: object }
    });
  }
}
