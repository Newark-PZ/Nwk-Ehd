import { Component } from '@angular/core';
import { Page } from '../../shared/models/pages.model';

@Component({
  selector: 'app-orc-faq',
  template: `<app-page [page]="faqPage"><app-faq [faqType]="'rentcontrol'" childComponent></app-faq></app-page>`
})

export class OrcFAQComponent {
  faqPage: Page = {
    id: 'faq',
    splashIcon: 'forum',
    splashTitle: 'Frequently Asked Questions'
  };
}
