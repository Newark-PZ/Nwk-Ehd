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
        title: 'Board Application',
        subtext: 'Fill out and submit an application to the Central Planning Board or Zoning Board of Adjustment',
        extUrl: 'https://dl.airtable.com/.attachments/99a7eb789049f71e524678c58237d3ae/06eca401/feb2020.pdf',
        category: 'AppButtons'
      },
      {
        icon: 'developer_board',
        title: 'Coming Soon: Application Status',
        subtext: 'Check the status of a submitted application, where it is in the overall process, and what documents have or have not been recieved',
        link: '',
        category: 'AppButtons',
        disabled: true
      },
      {
        icon: 'payment',
        title: 'Coming Soon: Payment Portal',
        subtext: 'One stop payment portal for any fees owed to the Office of Planning & Zoning',
        link: '',
        category: 'AppButtons',
        disabled: true
      },
      {
        icon: 'edit',
        title: 'Other Forms',
        subtext: 'Fill out and submit other forms owed to the Office of Planning & Zoning: including Zoning Determination, Zoning Certification, etc.',
        parent: '/planningzoning/resources',
        link: 'documents',
        params: {group: 'res', type: 'Other_Documents'},
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
        title: 'Application Instructions',
        extUrl: 'https://dl.airtable.com/.attachments/e20291159fd3765b4b6908e52564ba3f/452bd251/Instructions.pdf',
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
