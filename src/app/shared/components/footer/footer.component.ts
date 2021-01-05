
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/store.reducers';
import { FooterList } from '../../models';

@Component({
    selector: 'app-footer',
    styleUrls: ['./footer.component.scss'],
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    linkLists: Array<FooterList> = [
        // {
        //     text: 'Economic & Housing Dev.',
        //     path: ['/', 'ehd'],
        //     disabled: false,
        //     children: [
        //         { text: 'Affordable Housing', url: 'https://www.newarknj.gov/departments/affordable-housing' },
        //         { text: 'Opportunity Zones', url: 'https://www.newarknj.gov/departments/opportunity-zones'},
        //         { text: 'Planning & Zoning', path: ['/', 'planningzoning']},
        //         { text: 'Property Management', disabled: true},
        //         { text: 'Rent Control', path: ['/', 'rentcontrol']},
        //         { text: 'Tenant Legal Services', url: 'https://www.newarknj.gov/departments/office-of-tenant-legal-services'}
        //     ]
        // },
        // {
        //     text: 'Helpful Resources',
        //     disabled: true,
        //     children: [
        //         { text: 'NewarkNJ.Gov', url: 'https://www.newarknj.gov/' },
        //         { text: 'Employment', url: 'https://www.newarknj.gov/departments/employment'},
        //         { text: 'Invest Newark', url: 'https://investnewark.org/'},
        //         { text: 'Greater Newark CVB', url: 'http://www.newarkhappening.com/' },
        //         { text: 'Newark Real Estate Auction', url: 'https://www.newarknj.gov/departments/newark-real-estate-auction'},
        //         { text: 'Phone Numbers', url: 'https://www.newarknj.gov/card/directory'}
        //     ]
        // }
    ];
    officeLink$: Observable<FooterList>;
    constructor(
        readonly store: Store<fromStore.StoreState>
    ) {
        this.officeLink$ = this.store.select(state => state.pageState.footer);
    }
    goTo(url?: string): void {
        if (url) {window.open(url, '_self'); }
    }
    scrollToTop(): void {
        document.documentElement.scrollBy({left: 0, top: -10000, behavior: 'smooth'});
    }
}
