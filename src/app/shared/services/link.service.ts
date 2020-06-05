import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as RoutesArrayActions from '../../store/routes/routes.actions';
import * as fromStore from '../../store/store.reducers';
import { Link } from '../classes/link.class';
import { AppPage, BoardPage, HomePage, Page, StaffPage } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(
    public http: HttpClient,
    readonly store: Store<fromStore.StoreState>
  ) {}
  currentOffice: string;
  ehd = [
    new Link({id: 'home', title: 'EHD Home', office: 'ehd', icon: 'home' })
  ];
  planingzoningChildren = [
    // new Link({id: 'diagrams', title: 'Zoning Diagrams', office: 'planningzoning', parent: 'zoning', disabled: true }),
    new Link({id: 'regulations', title: 'Zoning Regulations', office: 'planningzoning', parent: 'zoning' }),
    new Link({id: 'documents', title: 'Resources: Documents', office: 'planningzoning', parent: 'resources' }),
    // new Link({id: 'faqs', title: 'Resources: FAQs', office: 'planningzoning', parent: 'resources', disabled: true }),
    new Link({id: 'cpb', title: 'Central Planning Board', office: 'planningzoning', parent: 'boards'}),
    // new Link({id: 'ec', title: 'Environmental Commission', office: 'planningzoning', parent: 'boards'}),
    // new Link({id: 'lhpc', title: 'Landmarks & Historic Preservation', office: 'planningzoning', parent: 'boards'}),
    new Link({id: 'zba', title: 'Zoning Board of Adjustment', office: 'planningzoning', parent: 'boards'})
    ];
  planningzoning = [
    new Link({id: 'virtualhearing', title: 'Virtual Hearing Dashboard', office: 'planningzoning', icon: 'live_tv', isChild: false}),
    new Link({id: 'home', title: 'OPZ Home', office: 'planningzoning', icon: 'home', isChild: false}),
    // new Link({id: 'applications', title: 'Applications & Payment', office: 'planningzoning', icon: 'assignment', isChild: false}),
    // new Link({id: 'team', title: 'Our Team', office: 'planningzoning', icon: 'people', isChild: false}),
    new Link({id: 'maps', title: 'Maps', office: 'planningzoning', icon: 'map', isChild: false}),
    new Link({id: 'boards', title: 'Boards & Commissions', office: 'planningzoning',
              children: this.planingzoningChildren.filter(v => v.parent === 'boards'), icon: 'people', isChild: false}),
    new Link({id: 'resources', title: 'Resources', office: 'planningzoning',
              children: this.planingzoningChildren.filter(v => v.parent === 'resources'), icon: 'file', isChild: false}),
    new Link({id: 'zoning', title: 'Zoning Regulations', office: 'planningzoning', icon: 'touch_app', isChild: false,
              children: this.planingzoningChildren.filter(v => v.parent === 'zoning')}),
    new Link({id: 'contact', title: 'Contact Us', office: 'planningzoning', icon: 'phone', isChild: false })
  ];
  initRoutes(office: 'ehd' | 'planningzoning'): Array<Link> {
    let officeLinks: Array<Link>;
    switch (office) {
      case 'planningzoning':
        officeLinks = this.planningzoning;
        this.currentOffice = office;
        break;
      default:
        officeLinks = this.ehd;
        this.currentOffice = office;
        break;
    }
    this.store.dispatch(new RoutesArrayActions.SetCurrentOffice(office));
    this.store.dispatch(new RoutesArrayActions.SetRouteArray(officeLinks));

    return officeLinks;
  }
  getPage(id: string, language: string): Observable<any> {
    return this.http.get<Array<AppPage | BoardPage | HomePage | Page | StaffPage>>(`assets/i18n/${this.currentOffice}/${language}.json`)
    .pipe(
      map((p: Array<AppPage | BoardPage | HomePage | Page | StaffPage>) => p.find(page => page.id === id)));
  }
}
