import { Component } from '@angular/core';
import { Page } from '../../shared/models/pages.model';

@Component({
  selector: 'app-planningzoning-faq',
  template: '<app-faq [faqPage]="faqPage"></app-faq>'
})

export class PlanningFAQComponent {
  faqPage: Page = {
    id: 'Tenant',
    icon: 'people',
    title: 'Newark Tenants FAQs'
  };
}
