import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-opz-home',
  template: `
      <app-home [homePage]="homePageDetails"></app-home>
  `
})

export class OpzHomeComponent {
  homePageDetails: HomePage = {
    splashImgs: [
      {src: 'assets/img/HalseyStreet_image7.png', alt: 'Halsey Street'},
      {src: 'assets/img/NwkCitySky.png', alt: 'Newark Skyline'}
    ],
    buttonCategories: ['Boards & Commissions', 'Tools', 'Our Office'],
    buttons: [
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Central Planning Board',
        subtext: 'Next Hearing: <b>May 11</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'planning'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Zoning Board of Adjustment',
        subtext: 'Next Hearing: <b>May 14</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'zoning'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Landmarks & Historic Preservation',
        subtext: 'Next Hearing: <b>May 20</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'lhpc'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Environmental Commission',
        subtext: 'Next Hearing: <b>May 13</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'environmental'
      },
      {
        icon: 'info', category: 'Tools', title: 'Application Submission & Status', parent: '/planningzoning/zoning', link: 'zoning'
      },
      {
        icon: 'map', category: 'Tools', title: 'Interactive Zoning Map', parent: '/planningzoning/maps', link: 'zoning'
      },
      {
        icon: 'info', category: 'Tools', title: 'Our Zoning, Explained', parent: '/planningzoning/zoning', link: 'zoning'
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Redevelopment Plans', parent: '/planningzoning/resources', link: 'res-minutes'
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Master Plan', parent: '/planningzoning/resources', link: 'res-minutes'
      },
      {
        icon: 'people', category: 'Our Office', title: 'Our Team', parent: '/planningzoning/team', link: 'leadership'
      },
      {
        icon: 'info', category: 'Our Office', title: 'Contact Us', parent: '/planningzoning', link: 'contact'
      }
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
    splashTitle: 'Welcome to the Office of Planning & Zoning',
    searchDisplay: 'none',
    officer: {
      name: 'Chris Watson',
      position: 'City Planning Officer',
      pic: 'headerPhotos/APANJTreatPl.jpeg'
    },
    splashBlurb: {
      text: "Planning & Zoning works hard everyday to ensure a fair, open and efficient process for updating our City's built environment. We advise developers and homeowners alike on how they can help to build a Newark that will benefit all Newarkers. Learn more by exploring the online tools and services we offer below, including:",
      buttons: [
        {text: 'Applications', parent: '/planningzoning/applications', link: 'info' },
        { text: 'Payments', parent: '/planningzoning/applications', link: 'payments' },
        { text: 'Zoning Map', parent: '/planningzoning', link: 'maps' }
      ]
    }
  };
}
