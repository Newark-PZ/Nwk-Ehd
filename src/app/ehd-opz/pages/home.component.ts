import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-opz-home',
  template: `<app-home [homePage]="homePageDetails" [office]="'/planningzoning'"></app-home>`
})

export class OpzHomeComponent {
  homePageDetails: HomePage = {
    id: 'home',
    splashImg: {src: 'assets/img/headerPhotos/HalseyStreet_image7.png', alt: 'Halsey Street'},
    buttonCategories: ['Boards & Commissions', 'Projects', 'Tools'],
    buttons: [
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Central Planning Board', parent: '/planningzoning/boards', link: 'cpb'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Environmental Commission', parent: '/planningzoning/boards', link: 'ec'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Landmarks & Historic Preservation', parent: '/planningzoning/boards', link: 'lhpc'
      },
      {
        icon: 'house', category: 'Boards & Commissions', title: 'Zoning Board of Adjustment', parent: '/planningzoning/boards', link: 'zba'
      },
      {
        icon: 'date_range', category: 'Boards & Commissions', title: '2021 Full Boards Calendar', extUrl: 'https://drive.google.com/file/d/1nEc7GBHq5MD-jfUexrRN2Z6tterheS3m/view?usp=sharing'
      },
      {
        icon: 'campaign', category: 'Projects', title: 'Doremus Port-Industrial District', parent: '/planningzoning', link: 'doremus'
      },
      {
        icon: 'newarkgo', category: 'Projects', title: 'NewarkGo: A Newark Mobility Program',
        parent: '/planningzoning', link: 'newarkgo'
      },
      {
        icon: 'payment', category: 'Tools', title: 'Applications & Payment', parent: '/planningzoning', link: 'applying', new: true
      },
      {
        icon: 'map', category: 'Tools', title: 'Interactive Zoning Map', parent: '/planningzoning', link: 'maps'
      },
      {
        icon: 'info', category: 'Tools', title: 'Our Zoning Code', extUrl: '/zoning-ordinance', disabled: false
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Master Plan', parent: '/planningzoning/resources', link: 'documents',
        params: {group: 'res', type: 'Master_Plan'}
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Redevelopment Plans', parent: '/planningzoning/resources', link: 'documents'
      },
      {
        icon: 'attachment', category: 'Tools', title: 'Other Documents/Forms', parent: '/planningzoning/resources', link: 'documents',
        params: {group: 'res', type: 'Other'}
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
