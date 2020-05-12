import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as HomePanelActions from '../../../store/home-panels/home-panels.actions';
import * as fromStore from '../../../store/store.reducers';
import { Page } from '../../models/pages.model';
import { AirService } from '../../services/air.service';
import { SnackbarComponent } from '../elements/snackbar.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { PageCompsFields } from '../../models';

@Component({
  selector: 'app-page',
  styleUrls: ['./page.component.scss'],
  templateUrl: './page.component.html'
})

export class PageComponent implements OnInit {
  @Input() page: Page;
  activeFragment;
  activeViewName;
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
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.getTab(this.activeFragment);
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
    if (!this.page.title) {
      this.airData.getRecords('PageComps', `filterByFormula=%7BName%7D%3D'${this.router.url.substr(1, 3)}+Homepage+Splash+Title'`)
        .subscribe(
          data => this.page.title = (data.records[0].fields as PageCompsFields).content,
          err => { console.error(err); } );
    }
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
  getTab(view: 'Leadership' | string): any {
    this.activeViewName = view;
  }
}
