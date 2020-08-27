import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    id: 'applications',
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
        subtext: 'Fill out and submit other forms owed to the Office of Planning & Zoning: including Zoning Determination, Zoning Certification, etc.',
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
    readonly router: Router
    ) {
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
  }
}
