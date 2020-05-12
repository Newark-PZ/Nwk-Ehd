import { Pipe, PipeTransform } from '@angular/core';
import { HomeownerFaq, TenantFaq } from '../interfaces/other.interface';
import { FirebaseStaff, HomeCard } from '../models';

@Pipe({
    name: 'FilterCatPipe',
    // tslint:disable-next-line: no-pipe-impure
    pure: false
})
export class FilterCatPipe implements PipeTransform {
  transform(items: Array<TenantFaq | HomeownerFaq | HomeCard | FirebaseStaff>, filter: string): any {
    if (!items || !filter) {
        return items;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
        item => (item as any).category
        ? (item as HomeCard).category.indexOf(filter) !== -1
        : (item as TenantFaq | HomeownerFaq).Categories.indexOf(filter) !== -1
        );
}
}
