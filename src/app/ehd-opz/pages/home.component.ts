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
    id: 'home',
    splashImgs: [
      {src: 'assets/img/HalseyStreet_image7.png', alt: 'Halsey Street'},
      {src: 'assets/img/headerPhotos/newarkfall.jpg', alt: 'Newark Skyline'}
    ],
    buttonCategories: ['Boards & Commissions', 'Tools'],
    buttons: [
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Central Planning Board', subtext: 'Next Hearing: <b>June 1</b>',
        isEvent: true, subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'cpb'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Zoning Board of Adjustment', isEvent: true,
        subtext: 'Next Hearing: <b>June 4</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'zba'
      },
      // {
      //   icon: 'house', category: 'Boards & Commissions', title: 'Landmarks & Historic Preservation', isEvent: true,
      //   subtext: 'Next Hearing: <b>May 20</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'lhpc'
      // },
      // {
      //   icon: 'house', category: 'Boards & Commissions', title: 'Environmental Commission', isEvent: true,
      //   subtext: 'Next Hearing: <b>May 13</b>', subtexticon: 'notification_important', parent: '/planningzoning/boards', link: 'ec'
      // },
      // {
      //   icon: 'info', category: 'Tools', title: 'Application Submission & Status', parent: '/planningzoning/zoning', link: 'zba'
      // },
      {
        icon: 'map', category: 'Tools', title: 'Interactive Zoning Map', parent: '/planningzoning', link: 'maps'
      },
      {
        icon: 'info', category: 'Tools', title: 'Our Zoning Code', parent: '/planningzoning/zoning', link: 'regs'
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Redevelopment Plans', parent: '/planningzoning/resources', link: 'documents'
      }
      // {
      //   icon: 'people', category: 'Our Office', title: 'Our Team', parent: '/planningzoning', link: 'team'
      // },
      // {
      //   icon: 'info', category: 'Our Office', title: 'Contact Us', parent: '/planningzoning', link: 'contact'
      // }
    ],
    contentIntro: {
      header: 'Upcoming Hearings',
      events: [
        {
          icon: 'notification_important',
          event: 'Zoning Board',
          board: 'ZBA',
          eventType: 'Virtual Hearing',
          date: 'Thu, June 11th @ 6pm'
        },
        {
          icon: 'notification_important',
          event: 'Planning Board',
          board: 'CPB',
          eventType: 'Virtual Hearing',
          date: 'Mon, June 15th @ 6pm'
        }
      ],
      right: {text: 'More Tools and Resources Below'}
    },
    splashTitle: 'Welcome to the Office of Planning & Zoning',
    officer: {
      name: 'Christopher A. Watson',
      position: 'City Planning Officer'
    },
    splashBlurb: {
      text: "Planning & Zoning works hard everyday to ensure a fair, open and efficient process for updating our City's built environment. We advise developers and homeowners alike on how they can help to build a Newark that will benefit all Newarkers. Learn more by exploring the online tools and services we offer below. Look below to find information and agendas for an upcoming hearing."
    }
  };
}
