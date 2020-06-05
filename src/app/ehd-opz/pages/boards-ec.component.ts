import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JsonDataService } from '../../shared';
import { BoardPage, HomeCard } from '../../shared/models';
import * as PageStateActions from '../../store/page-state/page-state.actions';
import * as fromStore from '../../store/store.reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-opz-boards-ec',
  template: `
      <app-board-page [page]="pageDetails" [view]="'environmental'"></app-board-page>
  `
})

export class EcComponent implements OnInit {
  activeFragment;
  boardMembers$: Observable<Array<HomeCard>>;
  constructor(readonly getData: JsonDataService, readonly store: Store<fromStore.StoreState>) {
      this.boardMembers$ = this.store.select(state => state.pageState.boardEC);
  }
  pageDetails: BoardPage = {
    id: 'ec',
    splashImgs: [
      {src: 'assets/img/NwkCitySky.png', alt: 'Newark Skyline'}
    ],
    buttonCategories: ['Environmental Commission', 'Resources'],
    title: 'Environmental Commission',
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
      header: 'Upcoming Events',
      events: [
        {
          icon: 'notification_important',
          event: 'Central Planning Board',
          date: 'Mon, May 11 @ 6pm'
        },
        {
          icon: 'notification_important',
          event: 'Environmental Commission',
          date: 'Wed, May 13 @ 6pm'
        }
      ],
      right: {text: 'More Tools and Services Below'}
    },
    searchDisplay: 'none',
    officer: {
      name: 'Chris Watson',
      position: 'City Planning Officer',
      pic: 'headerPhotos/APANJTreatPl.jpeg'
    },
    splashBlurb: {
      text: "Planning & Zoning works hard everyday to ensure a fair, open and efficient process for updating our City's built environment. We advise developers and homeowners alike on how they can help to build a Newark that will benefit all Newarkers. Learn more by exploring the online tools and services we offer below, including:",
      buttons: [
        {text: 'Applications', parent: '/opz/applications', link: 'info' },
        { text: 'Payments', parent: '/opz/applications', link: 'payments' },
        { text: 'Zoning Map', parent: '/opz/maps', link: 'zoning' }
      ]
    }
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
    this.getData.getBoardMembers('Environmental Commission')
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
    .then(() => {this.store.dispatch(new PageStateActions.SetBoardEC(buttons)); })
    .catch(err => { console.error(err); });

    return buttons;
  }
}
