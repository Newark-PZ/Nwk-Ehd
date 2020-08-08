import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-opz-home',
  template: `
      <app-home [homePage]="homePageDetails" [office]="'/planningzoning'"></app-home>
  `
})

export class OpzHomeComponent {
  homePageDetails: HomePage = {
    id: 'home',
    splashImg: {src: 'assets/img/HalseyStreet_image7.png', alt: 'Halsey Street'},
    buttonCategories: ['Boards & Commissions', 'Tools'],
    buttons: [
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Central Planning Board', parent: '/planningzoning/boards', link: 'cpb'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Zoning Board of Adjustment', parent: '/planningzoning/boards', link: 'zba'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Landmarks & Historic Preservation', parent: '/planningzoning/boards', link: 'lhpc'
      },
      {
        icon: 'map', category: 'Tools', title: 'Interactive Zoning Map', parent: '/planningzoning', link: 'maps'
      },
      {
        icon: 'info', category: 'Tools', title: 'Our Zoning Code', parent: '/planningzoning/zoning', link: 'regs'
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Redevelopment Plans', parent: '/planningzoning/resources', link: 'documents'
      }
    ],
    contentIntro: {
      header: 'Upcoming Hearings',
      right: {text: 'More Tools and Resources Below'}
    },
    splashTitle: 'Welcome to the Office of Planning & Zoning',
    officer: {
      name: 'Ras J. Baraka',
      position: 'Mayor'
    },
    splashBlurb: {
      text: "Planning & Zoning works hard everyday to ensure a fair, open and efficient process for updating our City's built environment. Advising developers and homeowners alike on how they can help to build a Newark that will benefit all Newarkers. Learn more by exploring the online tools and services we offer below. Look below to find information and agendas for an upcoming hearing."
    }
  };
}
