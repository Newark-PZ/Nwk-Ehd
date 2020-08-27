import { Component } from '@angular/core';
import { FaqPage } from '../../shared/models/pages.model';

@Component({
  selector: 'app-planningzoning-faq',
  template: '<app-faq [faqPage]="faqPage"></app-faq>'
})

export class PlanningFAQComponent {
  faqPage: FaqPage = {
    type: 'Tenant',
    icon: 'people',
    title: 'Newark Tenants FAQs'
  };
}
