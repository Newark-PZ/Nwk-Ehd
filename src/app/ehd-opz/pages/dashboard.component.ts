import { ChangeDetectionStrategy,  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { JsonDataService } from '../../shared';
import { Hearing } from '../../shared/classes/hearing';
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
export class DashboardComponent implements OnInit {
  nextCPB$: Observable<Hearing>;
  nextZBA$: Observable<Hearing>;
  currentUrl: string;
  currentImg: string;
  window: Window;
  link: string;
  currentLink: Link;
  currentType: 'img' | 'iframe';
  currentLanguage$: Observable<string>;
  currentTab: number;
  id$: Observable<string>;
  agendaUrl = 'http';
  fofUrl = 'http';
  @ViewChild('frame') frame: ElementRef;
  docContent: Observable<any>;
  boardTabs: Array<VirtualHearingTab> = [];
  constructor(
    public sanitizer: DomSanitizer,
    readonly store: Store<fromStore.StoreState>,
    readonly getEvents: EventsService,
    readonly route: ActivatedRoute,
    readonly linker: LinkService,
    readonly getFiles: JsonDataService
    ) {
      this.docContent = this.store.select(state => state.pageState.currentPage);
      this.currentLanguage$ = this.store.select(state => state.i18n.currentLanguage);
      this.nextCPB$ = this.store.select(state => state.pageState.hearingsCPB[0]);
      this.nextZBA$ = this.store.select(state => state.pageState.hearingsZBA[0]);
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.link = params.get('id')
          ?.toUpperCase() || 'CPB';
        this.store
        .select(state => state.i18n.currentLanguage)
        .subscribe(currentLang => {
          if (currentLang) {
            // tslint:disable-next-line: no-non-null-assertion
            this.currentLink = this.linker.planningzoning.find(p => p.id === 'virtualhearing')!;
            this.currentType = this.currentLink.id === 'reopening' ? 'iframe' : 'img';
            this.setTab(this.link);
            this.store.dispatch(new PageStateActions.SetPageCurrent({
              title: this.currentLink.title,
              icon: this.currentLink.icon,
              id: this.link,
              hideBottomBar: true
            }));
          }
        });
      });
      this.getFiles.getZBAFolderItem(['agenda', 'findings of facts'])
      .then(r => { this.setBoardTabs(r); })
      .catch(err => { console.error(err); });
    }
  ngOnInit(): void {
    this.setTab(this.link);
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
  setBoardTabs(resp) {
    this.boardTabs = [
      {
        board: 'CPB',
        label: 'Central Planning Board',
        live: false,
        agenda: '',
        event: this.nextCPB$,
        data: [
          {board: 'CPB', app: '19-79', address: '316-330 Mt. Pleasant Avenue, 94 Clay Street & 1239-1243 McCarter Highway', folderlink: 'https://drive.google.com/drive/folders/1PZLEW-Pwh15A8NfK6yc5_UNpebMS9IEr' },
          {board: 'CPB', app: '20-08', address: '420 Springfield Ave', folderlink: 'https://drive.google.com/drive/folders/1AbsOewRUVq_5Op8pryhrp6B82FzWFARf' },
          {board: 'CPB', app: '20-09',
          address: '246, 248-250, 252, 254-256, 258-262 & 264-268 Jelliff Avenue (Achieve Charter School)', folderlink: 'https://drive.google.com/drive/folders/1SyODI8B7ARpGssFIHdXPf0VYJKyzRcLv' },
          {board: 'CPB', app: '20-18', address: '11-43 Raymond Plaza West, 1 Gateway Center Redevelopment', folderlink: 'https://drive.google.com/drive/folders/1rzwpwl7wfpr6dlumRDSM6kiz5z7I83tZ' }
        ]
      },
      {
        board: 'ZBA',
        label: 'Zoning Board of Adjustment',
        live: false,
        agenda: '',
        fofId: resp[0].id,
        data: [
          {board: 'ZBA', app: '20-001', address: '114 Clifford Street', folderlink: 'https://drive.google.com/open?id=1qBzUlXLa9Q7ICUCaiGlifh8sIuy1LC20' },
          {board: 'ZBA', app: '19-078', address: '43 Lentz Avenue', folderlink: 'https://drive.google.com/open?id=1ch_EymOrp-KMgHqQuc7kyfE-Oyms0_K3' },
          {board: 'ZBA', app: '19-105', address: '173 Camden Street', folderlink: 'https://drive.google.com/open?id=1ol_XqoDws80Bt4oypk_otO-bq0rmEvcP' },
          {board: 'ZBA', app: '20-005',
            address: '653 South 10th Street', folderlink: 'https://drive.google.com/open?id=1V9lxeWakZbEm38hPX9tqLUwWOpizC9Tu' },
          {board: 'ZBA', app: '19-108', address: '212 North 9th Stret', folderlink: 'https://drive.google.com/open?id=1VDHZFPn4z0ibIeEadW9XOCx-fL_K2jRB' }
        ],
        event: this.nextZBA$
      }
    ];
  }
}
