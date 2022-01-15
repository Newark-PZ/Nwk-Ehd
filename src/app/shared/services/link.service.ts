import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from '../../store/store.service';
import { Link } from '../classes/link.class';
import { HomePage, Page } from '../models/pages.model';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  constructor(
    public http: HttpClient,
    public storeService: StoreService
  ) {}
  currentOffice: string;
  ehd = [
    new Link({id: 'home', title: 'EHD Home', office: 'ehd', icon: 'home' })
  ];
  planingzoningChildren = [
    // new Link({id: 'diagrams', title: 'Zoning Diagrams', office: 'planningzoning', parent: 'zoning', disabled: true }),
    new Link({id: 'regulations', title: 'Zoning Regulations', office: 'planningzoning', parent: 'zoning', disabled: true }),
    new Link({id: 'documents', title: 'Resources: Documents', office: 'planningzoning', parent: 'resources' }),
    new Link({id: 'faqs', title: 'Resources: FAQs', office: 'planningzoning', parent: 'resources', disabled: true }),
    new Link({id: 'cpb', title: 'Central Planning Board', office: 'planningzoning', parent: 'boards'}),
    new Link({id: 'ec', title: 'Environmental Commission', office: 'planningzoning', parent: 'boards'}),
    new Link({id: 'lhpc', title: 'Landmarks & Historic Preservation', office: 'planningzoning', parent: 'boards'}),
    new Link({id: 'zba', title: 'Zoning Board of Adjustment', office: 'planningzoning', parent: 'boards'})
    ];
  planningzoning = [
    new Link({id: 'virtualhearing', title: 'Virtual Hearing Dashboard', office: 'planningzoning', icon: 'live_tv', isChild: false}),
    new Link({id: 'home', title: 'OPZ Home', office: 'planningzoning', icon: 'home', isChild: false}),
    new Link({id: 'applying', title: 'Applications & Payment', office: 'planningzoning', icon: 'assignment', isChild: false}),
    new Link({id: 'doremus', title: 'Doremus Port-Industrial District', office: 'planningzoning', icon: 'campaign', isChild: false}),
    new Link({id: 'newarkgo', title: 'NewarkGo', office: 'planningzoning', icon: 'campaign', isChild: false }),
    new Link({id: 'newarkgo-application', title: 'NewarkGo Application', office: 'planningzoning', icon: 'campaign', isChild: false, hidden: true }),
    new Link({id: 'corrals', title: 'Propose Corrals', office: 'planningzoning', icon: 'campaign', isChild: false }),
    // new Link({id: 'team', title: 'Our Team', office: 'planningzoning', icon: 'people', isChild: false}),
    new Link({id: 'boards', title: 'Boards & Commissions', office: 'planningzoning',
              children: this.planingzoningChildren.filter(v => v.parent === 'boards'), icon: 'people', isChild: false}),
    new Link({id: 'resources', title: 'Resources', office: 'planningzoning',
              children: this.planingzoningChildren.filter(v => v.parent === 'resources'), icon: 'file', isChild: false}),
    new Link({id: 'zoning', title: 'Zoning Regulations', office: 'planningzoning', icon: 'touch_app', isChild: false, disabled: true,
              children: this.planingzoningChildren.filter(v => v.parent === 'zoning')})
  ];
  n360 = [
    new Link({id: 'home', title: 'Newark 360 Home', office: '360', icon: 'home', isChild: false}),
    new Link({id: 'newark-today', title: 'Newark Today', office: '360', icon: 'map', isChild: false})
  ];
  rentcontrolChildren = [
    new Link({id: 'documents', title: 'Resources: Documents', office: 'rentcontrol', parent: 'resources' }),
    new Link({id: 'faqs', title: 'Resources: FAQs', office: 'rentcontrol', parent: 'resources' })
  ];
  rentcontrol = [
    new Link({id: 'virtualhearing', title: 'Virtual Hearing Dashboard', office: 'rentcontrol', icon: 'live_tv', isChild: false}),
    new Link({id: 'home', title: 'Rent Control Home', office: 'rentcontrol', icon: 'home', isChild: false}),
    // new Link({id: 'dash', title: 'Maps', office: 'rentcontrol', icon: 'map', isChild: false, disabled: false}),
    new Link({id: 'board', title: 'Rent Control Board', office: 'rentcontrol', icon: 'people', isChild: false, disabled: true}),
    new Link({id: 'resources', title: 'Resources', office: 'rentcontrol', icon: 'file', isChild: false,
              children: this.rentcontrolChildren.filter(v => v.parent === 'resources')})
  ];
  initRoutes(office: '360' | 'ehd' | 'planningzoning' | 'rentcontrol'): Array<Link> {
    let officeLinks: Array<Link>;
    switch (office) {
      case '360':
        officeLinks = this.n360;
        this.currentOffice = office;
        break;
      case 'planningzoning':
        officeLinks = this.planningzoning;
        this.currentOffice = office;
        break;
      case 'rentcontrol':
        officeLinks = this.rentcontrol;
        this.currentOffice = office;
        break;
      default:
        officeLinks = this.ehd;
        this.currentOffice = office;
        break;
    }
    this.storeService.setCurrentOffice(office);
    this.storeService.setRoutesArray(officeLinks.filter(l => !l.hidden));

    return officeLinks;
  }
  getPage(id: string, language: string): Observable<any> {
    return this.http.get<Array<HomePage | Page>>(`assets/i18n/${this.currentOffice}/${language}.json`)
    .pipe(
      map((p: Array<HomePage | Page>) => p.find(page => page.id === id)));
  }
}
