import { ChangeDetectionStrategy,  Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Link } from '../../shared/classes/link.class';
import { VirtualHearingTab } from '../../shared/models/pages.model';
import { EventsService } from '../../shared/services/events.service';
import { LinkService } from '../../shared/services/link.service';
import * as fromStore from '../../store/store.reducers';
import { StoreService } from '../../store/store.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-orc-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class OrcDashboardComponent {
  currentUrl: string;
  currentImg: string;
  window: Window;
  link: string;
  currentLink: Link;
  currentLanguage$: Observable<string>;
  currentTab: number;
  agendaUrl = 'http';
  fofUrl = 'http';
  colRegex = /[A-Z]/gi;
  boardTabs: Array<{board: string; label: string; data: Observable<VirtualHearingTab>}>;
  constructor(
    readonly store: Store<fromStore.StoreState>,
    readonly getEvents: EventsService,
    readonly route: ActivatedRoute,
    readonly linker: LinkService,
    public storeService: StoreService
    ) {
      this.boardTabs = [
        {
          board: 'RC',
          label: 'Rent Control Board',
          data: this.store.select(state => state.hearing.rcTab)
        }
      ];
      this.route.paramMap.subscribe({
        next: (params: ParamMap) => {
        this.link = params.get('id') || 'RC';
        this.currentLink = this.linker.planningzoning[0];
        this.setTab(this.link.toUpperCase());
        this.storeService.setPageCurrent({
          splashTitle: this.currentLink.title,
          splashIcon: this.currentLink.icon,
          id: this.link
        });
      }});
    }
  goToUrl(url: string): void {
    if (url === '') {
      return;
    } else if (url.startsWith('http')) {
      window.open(url);
    } else {
      location.href = url;
    }
  }
  setTab(tabId: 'CPB' | 'EC' | 'LHPC' | 'ZBA' | string): void {
    this.currentTab = this.boardTabs.findIndex(t => t.board === tabId);
  }
}
