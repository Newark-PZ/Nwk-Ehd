import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Page } from '../../shared/models/pages.model';

@Component({
  selector: 'app-planningzoning-faq',
  template: '<app-page [page]="faqPage"><app-faq [faqType]="link" childComponent></app-faq></app-page>'
})

export class OpzFAQComponent {
  link: string;
  faqPage: Page = {
    id: 'faq',
    splashIcon: 'forum',
    splashTitle: 'Frequently Asked Questions'
  };
  constructor(
    readonly route: ActivatedRoute
    ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.link = params.get('id') || 'newarkgo';
    });
  }
}
