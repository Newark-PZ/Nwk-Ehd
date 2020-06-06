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
    id: 'home',
    splashImgs: [
      {src: 'assets/img/NwkCitySky.png', alt: 'Newark Skyline'}
    ],
    buttonCategories: ['Divisions', 'Important Partners'],
    buttons: [
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Affordable Housing', subtext: 'Jerrah Crowder', extUrl: 'https://www.newarknj.gov/departments/affordable-housing' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Housing', subtext: 'Jenine Hazzard-Williams',
        parent: '/housingfinance', link: 'home' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Opportunity Zones', subtext: 'Chiagorom Osu', parent: '/opportunityzones', link: 'home' },
      { disabled: false, icon: 'house', category: 'Divisions', title: 'Planning & Zoning',
        subtext: 'Chris Watson', parent: '/planningzoning', link: 'home' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Property Management', subtext: 'Keith Hamilton', parent: '/propertymanagement', link: 'home' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Rent Control', subtext: 'Jacquea Lee', parent: '/rentcontrol', link: 'home'},
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Tenant Legal Services', subtext: 'Khabirah Myers',
        parent: '/tenantlegalservices', link: 'home' },
      { disabled: true, icon: 'business_center', category: 'Important Partners', title: 'Invest Newark',
        extUrl: 'https://investnewark.org/' },
      { disabled: true, icon: 'business_center', category: 'Important Partners', title: 'Greater Newark Convention & Visitor Bureau',
        extUrl: 'https://www.newarkhappening.com/' }
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
      right: {text: 'Our Divisions & Partners'}
    },
    splashTitle: 'Welcome to EHD',
    officer: {
      name: 'Allison Ladd',
      pic: 'Allison_Fitzgibbon.png'
    },
    splashBlurb: {
      text: 'The mission of the Department of Economic and Housing Development is to create economic opportunity for Newark residents and enhance the vibrancy of our city. To this end, the department seeks to position Newark to take advantage of its unique assets, including its strategic location, a diverse and underutilized workforce, a large amount of developable land, concentration of corporate and business service firms, several major universities, and a wealth of arts and cultural assets.'
    }
  };
}
