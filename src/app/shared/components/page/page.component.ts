import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as HomePanelActions from '../../../store/home-panels/home-panels.actions';
import * as fromStore from '../../../store/store.reducers';
import { Page } from '../../models/pages.model';
import { AirService } from '../../services/air.service';
import { SnackbarComponent } from '../elements/snackbar.component';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html'
})

export class PageComponent implements OnInit, OnChanges {
  @Input() page: Page;
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  constructor(
    public airData: AirService,
    readonly router: Router,
    public breakpointObserver: BreakpointObserver,
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
        this.store.dispatch(new HomePanelActions.SetMulti(false));
        this.store.dispatch(new HomePanelActions.SetOpen(false));
        this.store.dispatch(new HomePanelActions.SetToggle(false));
      } else {
        this.store.dispatch(new HomePanelActions.SetMulti(true));
        this.store.dispatch(new HomePanelActions.SetOpen(true));
        this.store.dispatch(new HomePanelActions.SetToggle(true));
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
