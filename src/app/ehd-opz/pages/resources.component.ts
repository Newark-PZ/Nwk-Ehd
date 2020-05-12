import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarComponent } from '../../shared/';
import { Page } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opz-resources',
  template: '<app-page [page]="pageDetails"></app-page>'
})

export class OpzResourcesComponent implements OnInit {
  activeFragment;
  activeViewName;
  pageDetails: Page = {
    title: 'Resources',
    subtitle: 'Documents and Other FIles',
    searchDisplay: 'none',
    subComponents: [
      { label: 'Applications', path: 'res-apps' },
      { label: 'Redevelopment Plans', path: 'res-redev' },
      { label: 'Board Minutes', path: 'res-minutes' }
    ]
  };
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.getTab(this.activeFragment);
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: { message: 'Copied!', detail: object }
    });
  }
  getTab(view): any {
    this.activeViewName = view;
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
}
