import { Pipe, PipeTransform } from '@angular/core';
import { HomeCard, Staff } from '../models';

@Pipe({
    name: 'FilterCatPipe',
    // tslint:disable-next-line: no-pipe-impure
    pure: false
})
export class FilterCatPipe implements PipeTransform {
  transform(items: Array<HomeCard | Staff>, filter: string): any {
    if (!items || !filter) {
        return items;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
        item => {
            let filterRule;
            // tslint:disable-next-line: prefer-conditional-expression
            if ((item as Staff).Class) { filterRule = (item as Staff).Class.indexOf(filter) !== -1;
            } else if ((item as HomeCard).category) { filterRule = (item as HomeCard).category.indexOf(filter) !== -1;
            }

            return filterRule;
            }
        );
    }
}
