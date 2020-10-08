import { Component } from '@angular/core';
import { Page } from '../../shared/models/pages.model';

@Component({
  selector: 'app-planningzoning-faq',
  template: `<app-page [page]="faqPage"><app-faq [faqType]="'planningzoning'" childComponent></app-faq></app-page>`
})

export class PlanningFAQComponent {
  faqPage: Page = {
    id: 'faq',
    splashIcon: 'forum',
    splashTitle: 'Frequently Asked Questions'
  };
}
