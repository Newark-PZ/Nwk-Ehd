import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JsonDataService, ModalComponent } from '../../shared';
import { BoardPage, HomeCard } from '../../shared/models';
import * as PageStateActions from '../../store/page-state/page-state.actions';
import * as fromStore from '../../store/store.reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-boards-cpb',
  template: `
      <app-board-page [page]="pageDetails" [view]="'planning'"></app-board-page>
  `
})

export class CpbComponent implements OnInit {
  activeFragment;
  boardMembers$: Observable<Array<HomeCard>>;
  live = true;
  constructor(readonly getData: JsonDataService, readonly store: Store<fromStore.StoreState>, public dialog: MatDialog) {
      this.boardMembers$ = this.store.select(state => state.pageState.boardCPB);
  }
  pageDetails: BoardPage = {
    id: 'cpb',
    splashImgs: [
      {src: 'assets/img/NwkCitySky.png', alt: 'Newark Skyline'}
    ],
    buttonCategories: ['Central Planning Board', 'Resources'],
    title: 'Central Planning Board',
    buttons: [
      {
        icon: 'attach_file', category: 'Resources', title: 'Agendas',
        subtext: '2019-2020', subtexticon: 'info', parent: '/opz/resources', link: 'res-minutes'
      },
      {
        icon: 'attach_file', category: 'Resources', title: 'Minutes',
        subtext: '2019-2020', subtexticon: 'info', parent: '/opz/resources', link: 'res-minutes'
      }
    ],
    contentIntro: {
      header: 'Upcoming Hearings',
      events: [
        {
          icon: 'event',
          event: 'Central Planning Board',
          date: 'Tue, July 7 @ 6pm'
        },
        {
          icon: 'event',
          event: 'Central Planning Board',
          date: 'Mon, July 20 @ 6pm'
        }
      ],
      right: {text: 'More Info Below'}
    },
    searchDisplay: 'none',
    introText: `<img class="intro-pic" src="assets/img/NwkLibrary.jpg">The Central Planning Board is entrusted  with preparation of the City's Master Plan, review of applications for development for site plan and subdivision approval, and make recommendations to the Municipal Council on any proposed changes to the Zoning Ordinance.`,
    infoButtons: [
      // tslint:disable-next-line: max-line-length
      { text: 'Link to Virtual Hearing', icon: this.live ? 'live_tv' : 'tv_off', parent: '/opz/boards/planning', link: 'live', live: this.live },
      { text: 'Upcoming Meeting Agenda', parent: '/opz/applications', link: 'payments' }
      ],
    sections: [{
      header: 'Applications to the Central Planning Board',
      text: `
      <ul>
        <li>Site plan reviews where no “d” variance is required as defined in N.J.S.A.40:55d.</li>
        <li>Subdivision or conditional use reviews where no “d” variance is required as defined in N.J.S.A.40:55d.</li>
        <li>Conditional uses where all conditions are met.</li>
        <li>Site plan, or subdivision reviews where a “c” variance is requested as defined in N.J.S. A.40:55d.</li>
      </ul>
      `
    }]
  };
  ngOnInit(): void {
    this.boardMembers$.subscribe(data => {
      data.length > 0
      ? data.forEach(btn => this.pageDetails.buttons.push(btn))
      : this.getBoard();
    });
  }
  getBoard(): Array<HomeCard> {
    const buttons: Array<HomeCard> = [];
    this.getData.getBoardMembers('Central Planning Board')
    .then(
      data => {
        data.forEach(val => buttons.push({
          icon: 'person',
          title: `
          ${val.nameFirst} ${val.nameLast} ${val.nameExtra ? val.nameExtra : ''}
          `,
          category: `${val.boardCommission}`,
          subtext: `${val.position ? val.position : ''}`
        }));
      }
    )
    .then(() => {this.store.dispatch(new PageStateActions.SetBoardCPB(buttons)); })
    .catch(err => { console.error(err); });

    return buttons;
  }
  getEventInfo(event): void {
  this.dialog.open(ModalComponent, {
    data: {
      header: event.title,
      message: `
      <p>${event.date}</p>
      <ul><
      `
    }
  });
  }
}
