import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../shared';
import { StaffPage } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-staff',
  template: '<app-staff [page]="pageDetails" [data$]="data"></app-staff>'
})

export class OpzStaffComponent implements OnInit {
  activeFragment;
  activeViewName;
  data: Array<any> = [];
  pageDetails: StaffPage = {
    title: 'Our Staff',
    icon: 'people',
    subtitle: this.activeFragment,
    introText: '',
    contentIntro: {text: 'This is our staff'},
    searchDisplay: 'none',
    staffClasses: ['leadership', 'planning', 'support'],
    buttons: []
  };

  constructor(
    readonly clipboard: Clipboard,
    readonly _snackBar: MatSnackBar,
    readonly router: Router
    ) {
      // this.firestore.collection('staff')
      // .get()
      // .subscribe(resp => this.data = resp.docs.map(doc => doc.data())
      //   .sort(d => d.Hierarchy));
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      panelClass: 'mat-snackbar',
      duration: 500,
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
