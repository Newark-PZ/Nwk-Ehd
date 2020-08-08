import { ChangeDetectionStrategy,  Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Link } from '../../shared/classes/link.class';
import { VirtualHearingTab } from '../../shared/interfaces/other.interface';
import { EventsService } from '../../shared/services/events.service';
import { LinkService } from '../../shared/services/link.service';
import * as PageStateActions from '../../store/page-state/page-state.actions';
import * as fromStore from '../../store/store.reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-orc-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  currentUrl: string;
  currentImg: string;
  window: Window;
  link: string;
  currentLink: Link;
  currentLanguage$: Observable<string>;
  agendaUrl = 'http';
  colRegex = /[A-Z]/gi;
  @ViewChild('frame') frame: ElementRef;
  rcTab$: Observable<VirtualHearingTab>;
  constructor(
    public sanitizer: DomSanitizer,
    readonly store: Store<fromStore.StoreState>,
    readonly getEvents: EventsService,
    readonly route: ActivatedRoute,
    readonly linker: LinkService
    ) {
      this.rcTab$ = this.store.select(state => state.hearing.rcTab);
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.link = 'RC';
        this.currentLink = this.linker.rentcontrol[0];
        this.store.dispatch(new PageStateActions.SetPageCurrent({
          title: this.currentLink.title,
          icon: this.currentLink.icon,
          id: this.link,
          hideBottomBar: true
        }));
      });
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
}
