import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-ehd-home',
  template: `
      <app-home [homePage]="homePageDetails" [office]="'/ehd'"></app-home>
  `
})

export class EhdHomeComponent {
  homePageDetails: HomePage = {
    id: 'home',
    splashImg: {src: 'assets/img/headerPhotos/NwkCitySky.png', alt: 'Newark Skyline'},
    buttonCategories: ['Divisions', 'Important Partners'],
    buttons: [
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Affordable Housing', subtext: 'Jerrah Crowder', extUrl: 'https://www.newarknj.gov/departments/affordable-housing' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Housing', subtext: 'Jenine Hazzard-Williams',
        parent: '/housingfinance', link: 'home' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Opportunity Zones', subtext: 'Chiagorom Osu', parent: '/opportunityzones', link: 'home' },
      { disabled: false, icon: 'house', category: 'Divisions', title: 'Planning & Zoning',
        subtext: 'Chris Watson', parent: '/planningzoning', link: 'home' },
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Property Management', subtext: 'Keith Hamilton', parent: '/propertymanagement', link: 'home' },
      { disabled: false, icon: 'house', category: 'Divisions', title: 'Rent Control', subtext: 'Jacquea Lee', parent: '/rentcontrol', link: 'home'},
      { disabled: true, icon: 'house', category: 'Divisions', title: 'Tenant Legal Services', subtext: 'Khabirah Myers',
        parent: '/tenantlegalservices', link: 'home' },
      { disabled: true, icon: 'business_center', category: 'Important Partners', title: 'Invest Newark',
        extUrl: 'https://investnewark.org/' },
      { disabled: true, icon: 'business_center', category: 'Important Partners', title: 'Greater Newark Convention & Visitor Bureau',
        extUrl: 'https://www.newarkhappening.com/' }
    ],
    contentIntro: {
      header: 'Upcoming Hearings',
      right: {text: 'Our Divisions & Partners'}
    },
    splashTitle: 'Welcome to EHD',
    officer: {
      name: 'Allison Ladd',
      position: 'Director & Deputy Mayor',
      pic: 'Allison_Fitzgibbon.png'
    },
    splashBlurb: {
      text: 'The Department of Economic and Housing Development works to create economic opportunity for all Newarkers and enhance the vibrancy of our city. To position Newark to take advantage of its unique assets, including its strategic location, diverse workforce, large amount of developable land, concentration of corporate and business service firms, several major universities, and a wealth of arts and cultural assets.'
    }
  };
}
