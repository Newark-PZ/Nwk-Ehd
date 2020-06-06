import { ChangeDetectionStrategy,  Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JsonDataService } from '../../shared';
import { Link } from '../../shared/classes/link.class';
import { VirtualHearingTab } from '../../shared/interfaces/other.interface';
import { EventsService } from '../../shared/services/events.service';
import { LinkService } from '../../shared/services/link.service';
import * as PageStateActions from '../../store/page-state/page-state.actions';
import * as fromStore from '../../store/store.reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
// tslint:disable: max-line-length
export class DashboardComponent {
  currentUrl: string;
  currentImg: string;
  window: Window;
  link: string;
  currentLink: Link;
  currentLanguage$: Observable<string>;
  currentTab: number;
  agendaUrl = 'http';
  fofUrl = 'http';
  @ViewChild('frame') frame: ElementRef;
  cpbTab$: Observable<VirtualHearingTab>;
  zbaTab$: Observable<VirtualHearingTab>;
  boardTabs: Array<any> = [
    {
      board: 'CPB',
      label: 'Central Planning Board',
      live: false
    },
    {
      board: 'ZBA',
      label: 'Zoning Board of Adjustment',
      live: false
    }
  ];
  constructor(
    public sanitizer: DomSanitizer,
    readonly store: Store<fromStore.StoreState>,
    readonly getEvents: EventsService,
    readonly route: ActivatedRoute,
    readonly linker: LinkService,
    readonly getFiles: JsonDataService
    ) {
      this.cpbTab$ = this.store.select(state => state.hearing.cpbTab);
      this.zbaTab$ = this.store.select(state => state.hearing.zbaTab);
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.link = params.get('id') || 'CPB';
        this.currentLink = this.linker.planningzoning[0];
        this.setTab(this.link.toUpperCase());
        this.getEvents.initHearings();
        this.store.dispatch(new PageStateActions.SetPageCurrent({
          title: this.currentLink.title,
          icon: this.currentLink.icon,
          id: this.link,
          hideBottomBar: true
        }));
      });
    }
  goToUrl(url: string): void {
    if (url.startsWith('http')) {
      window.open(url);
    } else {
      location.href = url;
    }
  }
  setTab(tabId: 'CPB' | 'EC' | 'LHPC' | 'ZBA' | string): void {
    this.currentTab = this.boardTabs.findIndex(t => t.board === tabId);
  }
}
