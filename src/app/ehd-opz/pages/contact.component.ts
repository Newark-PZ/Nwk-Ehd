import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Page } from '../../shared/models';

@Component({
  selector: 'app-opz-resources',
  styles: [`
    .airtable-embed { width:95%; height: 80vh; background: transparent; border: 1px solid #ccc; margin-left: 2.5% !important;}
  `],
    // tslint:disable: template-no-call-expression
  template: `<app-page [page]="pageDetails">
      <iframe class="airtable-embed" childComponent [src]="sanitizer.bypassSecurityTrustResourceUrl(link)" frameborder="0" onmousewheel=""></iframe>
    </app-page>`
})

export class OpzContactComponent {
  pageDetails: Page = {
    id: 'contact',
    title: 'Submit the form below to contact us',
    hideBottomBar: true
  };
  link = 'https://airtable.com/embed/shrXXlLSQ5ZepfZo2?backgroundColor=purple';
  constructor(
    public sanitizer: DomSanitizer
    ) {

    }
}
