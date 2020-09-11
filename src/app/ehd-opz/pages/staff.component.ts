import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JsonDataService, SnackbarComponent } from '../../shared';
import { StaffPage } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-staff',
  template: '<app-staff [page]="pageDetails" [data$]="data"></app-staff>'
})

export class OpzStaffComponent implements OnInit {
  activeFragment: string;
  activeViewName: string;
  data: Array<any> = [];
  pageDetails: StaffPage;

  constructor(
    readonly clipboard: Clipboard,
    readonly _snackBar: MatSnackBar,
    readonly router: Router,
    readonly getData: JsonDataService
    ) {
      this.getData.getStaff()
        .then(resp => this.data = resp.sort((d1, d2) => d1.Hierarchy - d2.Hierarchy))
        .catch(err => { console.error(err); });
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.pageDetails = {
      id: 'staff',
      title: 'Our Staff',
      icon: 'people',
      subtitle: this.activeFragment,
      introText: '',
      contentIntro: {text: 'This is our staff'},
      searchDisplay: 'none',
      staffClasses: ['leadership', 'planning', 'support'],
      buttons: []
    };
  }
  copySuccess(object: string): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      panelClass: 'mat-snackbar',
      duration: 500,
      data: { message: 'Copied!', detail: object }
    });
  }
  getTab(view: string): any {
    this.activeViewName = view;
  }
  copyVal(val: string, object: string): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
}
