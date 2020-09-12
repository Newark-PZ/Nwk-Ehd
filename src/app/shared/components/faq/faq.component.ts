import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromStore from '../../../store/store.reducers';
import { Faq, Page } from '../../models/pages.model';

@Component({
  selector: 'app-faq',
  styleUrls: ['./faq.component.scss'],
  templateUrl: './faq.component.html'
})

export class FaqComponent implements OnInit {
  document: Document;
  @Input() faqPage: Page;
  @Input() faqText: Array<Faq>;
  faqCategories: Array<string> = [];
  currentLanguage$: Observable<string>;
  selectedCol: number | undefined;
  constructor(
    readonly store: Store<fromStore.StoreState>
    ) {
    this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
  }
  ngOnInit(): void {
    this.store
      .select(state => state.i18n.currentLanguage)
      .subscribe((lang: string) => {
        this.store
        .select(state => state.i18n.currentLanguage)
        .pipe(take(1))
        .subscribe(currentLang => {
          if (currentLang && this.faqPage.id) {
            this.getFaq(this.faqPage.id, lang);
            this.faqCategories = this.getCategories(this.faqPage.id, lang);
          }
        });
      });
  }

  getFaq(faq: string, language: string): void {
    fetch(`assets/i18n/faqs/${faq.toLowerCase()}-${language}.json`)
      .then(response => response.json())
      .then(data => this.faqText = data)
      .catch(err => { console.error(err); });
  }
  getCategories(faq: string, language: string): Array<string> {
    let categories: Array<string> = [];
    switch (language) {
      default:
            categories = [
                'Applying', 'Payment/Escrow'
            ];
    }

    return categories;
  }
  filterCat(cat: any): any {
    return cat;
  }
  scrollTo(el: any): void {
    // tslint:disable-next-line: no-non-null-assertion
    document.querySelector(`#category${el}`)!.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
      }, 500);
  }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
}
