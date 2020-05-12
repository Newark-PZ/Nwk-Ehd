import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-ehd-home',
  template: `
      <app-home [homePage]="homePageDetails"></app-home>
  `
})

export class EhdHomeComponent {
  homePageDetails: HomePage = {
    splashImgs: [
      {src: 'assets/img/NwkCitySky.png', alt: 'Newark Skyline'}
    ],
    buttonCategories: ['Dept of Economic & Housing Development', 'Divisions'],
    buttons: [
      { icon: 'house', category: 'Divisions', title: 'Affordable Housing', subtext: 'Vacant', parent: '/affordablehousing', link: 'home' },
      { icon: 'house', category: 'Divisions', title: 'Housing', subtext: 'Jenine Hazzard-Williams',
        parent: '/housingfinance', link: 'home' },
      { icon: 'house', category: 'Divisions', title: 'Opportunity Zones', subtext: 'Chi', parent: '/opportunityzones', link: 'home' },
      { icon: 'house', category: 'Divisions', title: 'Planning & Zoning',
        subtext: 'Chris Watson', parent: '/planningzoning', link: 'home' },
      { icon: 'house', category: 'Divisions', title: 'Property Management', subtext: 'Keith Hamilton', parent: '/propertymanagement', link: 'home' },
      { icon: 'house', category: 'Divisions', title: 'Rent Control', subtext: 'Jay Lee', parent: '/rentcontrol', link: 'home'},
      { icon: 'house', category: 'Divisions', title: 'Tenant Legal Services', subtext: 'Khabirah', parent: '/tenantlegalservices', link: 'home' }
    ],
    contentIntro: {
      header: 'Upcoming Hearings',
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
    splashTitle: 'Welcome to EHD',
    searchDisplay: 'none',
    officer: {
      name: 'Allison Ladd',
      pic: 'Allison_Fitzgibbon.png'
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
}
