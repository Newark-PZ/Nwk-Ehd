import { Pipe, PipeTransform } from '@angular/core';
import { Faq, HomeCard } from '../models/pages.model';

@Pipe({
    name: 'FaqCat',
    // tslint:disable-next-line: no-pipe-impure
    pure: false
})
export class FaqCatPipe implements PipeTransform {
  transform(items: Array<Faq | HomeCard>, filter: string): any {
    if (!items || !filter) {
        return items;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
        item => (item as any).category
        ? (item as HomeCard).category.indexOf(filter) !== -1
        : (item as Faq).Categories.indexOf(filter) !== -1
        );
    }
}
