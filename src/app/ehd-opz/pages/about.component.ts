import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../shared';
import { Page } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opz-about',
  template: '<app-page [page]="pageDetails"></app-page>'
})

export class OpzAboutComponent implements OnInit {
  activeFragment;
  activeViewName;
  pageDetails: Page = {
    title: 'Zoning',
    subtitle: this.activeFragment,
    introText: '',
    contentIntro: {text: 'This is our staff'},
    searchDisplay: 'none',
    buttonCategories: ['staff'],
    buttons: [
      { icon: 'calendar', category: 'staff', title: 'Our Leadership', link: 'leadership' },
      { icon: 'file', category: 'staff', title: 'Planning Staff', link: 'planners' },
      { icon: 'map', category: 'staff', title: 'Zoning & Support Staff', link: 'support' }
    ],
    subComponents: []
  };

  constructor(
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar,
    private readonly router: Router
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
