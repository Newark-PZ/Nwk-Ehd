import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarComponent } from '../../shared';
import { AppPage } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opz-applications',
  template:  '<app-applications [page]="page" [data$]="data"></app-applications>'
})

export class OpzApplicationsComponent implements OnInit {
  activeFragment;
  activeViewName;
  page: AppPage = {
    title: 'Applications & Payment',
    icon: 'assessment',
    contentIntro: {text: ''},
    startingButtons: [
      {
        icon: 'ballot',
        title: 'Applications',
        subtext: 'Fill out and submit an application to the Central Planning Board or Zoning Board of Adjustment',
        link: '',
        category: 'AppButtons'
      },
      {
        icon: 'developer_board',
        title: 'Application Status',
        subtext: 'Check the status of a submitted application, where it is in the overall process, and what documents have or have not been recieved',
        link: '',
        category: 'AppButtons'
      },
      {
        icon: 'payment',
        title: 'Payments',
        subtext: 'One stop payment portal for any fees owed to the Office of Planning & Zoning',
        link: '',
        category: 'AppButtons'
      },
      {
        icon: 'edit',
        title: 'Other Forms',
        subtext: 'Fill out and submit other forms owed to the Office of Planning & Zoning: including...',
        link: '',
        category: 'AppButtons'
      },
      {
        icon: 'question_answer',
        title: 'Frequently Asked Questions',
        link: '',
        category: 'AppButtons'
      },
      {
        icon: 'info',
        title: 'More Info on Process, Legal Requirements, etc.',
        link: '',
        category: 'AppButtons'
      }
    ],
    hideBottomBar: true
  };
  data = [];
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) {
    }

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
