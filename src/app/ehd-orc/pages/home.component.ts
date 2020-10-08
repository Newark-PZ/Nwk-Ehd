import { Component } from '@angular/core';
import { HomePage } from '../../shared/models';

@Component({
  selector: 'app-orc-home',
  template: `
      <app-home [homePage]="homePageDetails" [office]="'/rentcontrol'"></app-home>
  `
})

export class OrcHomeComponent {
  homePageDetails: HomePage = {
    id: 'home',
    splashImg: { src: 'assets/img/headerPhotos/hahnesbldg.jpg', alt: 'Newark Hahnes Building' },
    buttonCategories: ['Info'],
    buttons: [
      {
        disabled: true, icon: 'map', category: 'Info', title: 'Interactive Rent Control Map', parent: '/rentcontrol', link: 'maps'
      },
      {
        icon: 'attachment', category: 'Info', title: 'Frequently Asked Questions', parent: '/rentcontrol/resources', link: 'faqs'
      },
      {
        icon: 'attachment', category: 'Info', title: 'Documents', parent: '/rentcontrol/resources', link: 'documents'
      }
    ],
    contentIntro: {
      header: 'Upcoming Hearings',
      right: { text: 'More Info and Resources Below' }
    },
    splashTitle: 'Welcome to the Office of Rent Control',
    officer: {
      name: 'Ras J. Baraka',
      position: 'Mayor'
    },
    splashBlurb: {
      text: "The Office of Rent Control assists landlords & tenants in understanding the impact of Newark's Municipal Rent Control Ordinance. Technical assistance is provided on a variety of rental issues, including: which apartments are subject to local rent control laws, legal base rent, rent increases the law permits, see below for more. We maintain files on all residential properties for public inspection if owners and/or tenants have questions regarding a particular property.‍"
    },
    sections: [{
      header: 'What We Do & Don’t Do',
      text: '<p>The Newark Rent Ordinance regulates rents for certain residential rental units in Newark, New Jersey. There is no commercial rent control in Newark.</p>'
        + '<p>The Rent Control Board’s primary function is to conduct hearings and mediation of tenant and landlord petitions regarding the adjustment of rents under the City’s rent control laws.</p>'
        + '<p>The Rent Control Board cannot arbitrate matters that are not part of the Title 19, Chapter 2, Rent Control Regulations, Rent Control Board, of the Revised General Ordinances of the City of Newark. For example, we do not have jurisdiction to adjudicate alleged breaches of a rental agreement, which must be decided in court. The Rent Control Board also cannot hear cases concerning issues of discrimination, harassment or retaliation, as such matters are outside of our jurisdiction. Please contact the Department of Community Affairs regarding these issues.'
        + '<p>The Rent Control Board provides counseling information on subjects that are covered by the Rent Ordinance ONLY. Please understand that our staff CANNOT give legal advice and they are instructed to let you know when your question is one that should properly be answered by a lawyer.</p>'
        + '<p>While we cannot refer you to individual attorneys, our staff will be glad to direct you to the appropriate resources for advice and assistance. A list of these resources is available through the referral listing on our website. Please note that you do not need a lawyer to file a petition at the Rent Control Office.</p>'
        + '<p>Due to high demand and a limited number of staff, there can sometimes be delays in speaking with a representative. It is helpful if you have your questions written down before you speak with a representative.</p>'
    }],
    contact: {
      header: 'How to Contact Us',
      contacts: [
        {
          text: 'For any inquiries:',
          officer: 'Jacquea A. Lee',
          officerTitle: 'Rent Regulation Officer',
          img: 'assets/img/people/jay.jpg',
          room: '111',
          phone: '9737333675',
          fax: '9737336366',
          email: 'rentcontrol@ci.newark.nj.us'
        }
      ]
    }
  };
}
