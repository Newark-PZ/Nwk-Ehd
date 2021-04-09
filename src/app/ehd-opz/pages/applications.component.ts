import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opz-applications',
  template:  '<app-applications [page]="page" [data$]="data"></app-applications>'
})

export class OpzApplicationsComponent implements OnInit {
  activeFragment;
  activeViewName;
  page: Page = {
    id: 'applications',
    splashTitle: 'Applications & Payment',
    splashIcon: 'assessment',
    specialButtons: [
      {
        icon: 'payment',
        title: 'Payment Portal',
        subtext: 'One stop online payment portal, powered by nCourt. Pay online or by phone through their bilingual call center: (973) 494-5881',
        specialIcon: 'nCourt',
        extUrl: 'https://www.ncourt.com/x-press/x-onlinepayments.aspx?juris=D21F796A-0BE0-40A1-8CC3-6EB5E0E6AD97',
        category: 'AppButtons'
      },
      {
        icon: 'ballot',
        title: 'Board Application',
        subtext: 'Fill out and submit an application to the Central Planning Board or Zoning Board of Adjustment',
        extUrl: 'https://dl.airtable.com/.attachments/99a7eb789049f71e524678c58237d3ae/06eca401/feb2020.pdf',
        category: 'AppButtons'
      },
      {
        icon: 'developer_board',
        title: 'Coming Soon: Application Status',
        subtext: 'Check the status of a submitted application, where it is in the overall process, and what documents have or have not been recieved',
        link: '',
        category: 'AppButtons',
        disabled: true
      },
      {
        icon: 'edit',
        title: 'Other Documents/Forms',
        subtext: 'Fill out and submit other forms owed to the Office of Planning & Zoning: including Zoning Determination, Zoning Certification, etc.',
        parent: '/planningzoning/resources',
        link: 'documents',
        params: {group: 'res', type: 'Other'},
        category: 'AppButtons'
      },
      {
        icon: 'question_answer',
        title: 'Frequently Asked Questions',
        link: '',
        category: 'AppButtons'
      },
      {
        icon: 'info',
        title: 'Application Instructions',
        extUrl: 'https://dl.airtable.com/.attachments/3b71833616393715af10eb301ba1b5b1/7a2bda05/PZO_BoardApp_Instructions_2021_04_01.pdf',
        category: 'AppButtons'
      }
    ],
    sections: [
      {
        header: 'Schedule of Fees',
        text: 'Look below for the different fees we charge, or download the pdf of <a href="https://dl.airtable.com/.attachments/eb001f0193b530d17f21dcf635d8f964/fc172c65/FeeSchedule_NZLUR_2019_07_10.pdf">the Official Schedule of Fees here</a>.',
        tables: [
          {
            title: 'General Fees',
            columns: ['Application', 'Category', 'Fee'],
            rows: [
                {Application: 'Zoning Determination',	Category: 'Residential', Fee: '$250'},
                {Application: 'Zoning Determination',	Category: 'Mixed Use', Fee: '$300'},
                {Application: 'Zoning Determination',	Category: 'Commercial', Fee: '$300'},
                {Application: 'Zoning Determination',	Category: 'Industrial', Fee: '$350'},
                {Application: 'Zoning Determination',	Category: 'Others not specified', Fee: '$300'},
                {Application: 'Zoning Determination',	Category: 'Affordable Housing 21% and over', Fee: 'None'},
                {Application: 'Zoning Determination',	Category: 'Public & Municipal Use', Fee: 'None'},
                {Application: 'Legal Use Letters',	Category: 'All Categories', Fee: '$25'},
                {Application: 'Certificate of Non Conformity', Category: 'All Categories', Fee: '$300'},
                {Application: 'Extension of CPB or BOA Approval', Category: 'All Categories', Fee: '$500'},
                {Application: 'Special Meeting by CPB or BOA', Category: 'All Categories', Fee: '$5000'},
                {Application: 'Subdivision', Category: 'Minor Subdivision: 2 acres or less', Fee: '$1100'},
                {Application: 'Subdivision', Category: 'Minor Subdivision: Over 2 acres', Fee: '$2000'},
                {Application: 'Subdivision', Category: 'Preliminary Major Subdivision', Fee: '$2500'},
                {Application: 'Subdivision',	Category: 'Final Major Subdivision',	Fee: '$1300'},
                {Application: 'Conditional Use',	Category: 'All categories except cell antenna', Fee: '$750'},
                {Application: 'Conditional Use',	Category: 'Cell Antenna', Fee: '$3000'}
            ]
          },
          {
            title: 'Site Plans',
            columns: ['Application', 'Category', 'Fee'],
            rows: [
              { Application: 'Minor Site Plan', Category: 'Residential', Fee: '$750'},
              { Application: 'Minor Site Plan', Category: 'Commercial', Fee: '$850'},
              { Application: 'Minor Site Plan', Category: 'Industrial', Fee: '$900'},
              { Application: 'Minor Site Plan', Category: 'Affordable Housing', Fee: '$400'},
              { Application: 'Minor Site Plan', Category: 'Others not specified', Fee: '$850'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential 3-5 dwelling units', Fee: '$750'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential 6-10 dwelling units', Fee: '$850'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential 11-20 dwelling units', Fee: '$1150'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential 21-50 dwelling units', Fee: '$1250'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential 51-100 dwelling units', Fee: '$1750'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential over 100 dwelling units', Fee: '$3000'},
              { Application: 'Preliminary Major Site Plan', Category: 'Residential over 300 dwelling units', Fee: '$4000'},
              { Application: 'Preliminary Major Site Plan', Category: 'Commercial less than 5,000 sq. ft.', Fee: '$850'},
              { Application: 'Preliminary Major Site Plan', Category: 'Commercial 5,000 to 20,000 sq. ft.', Fee: '$2000'},
              { Application: 'Preliminary Major Site Plan', Category: 'Commercial 20,001 to 100,000 sq. ft.', Fee: '$3250'},
              { Application: 'Preliminary Major Site Plan', Category: 'Commercial over 100,000 sq. ft.', Fee: '$5500'},
              { Application: 'Preliminary Major Site Plan', Category: 'Additional: Application subject to EJCIO Basic Form', Fee: '$500'},
              { Application: 'Preliminary Major Site Plan', Category: 'Additional: Application subject to EJCIO Full Form', Fee: '$1000'},
              { Application: 'Preliminary Major Site Plan', Category: 'Industrial less than 5,000 sq. ft.', Fee: '$1000'},
              { Application: 'Preliminary Major Site Plan', Category: 'Industrial 5,000 to 20,000 sq. ft.', Fee: '$2250'},
              { Application: 'Preliminary Major Site Plan', Category: 'Industrial 20,001 to 100,000 sq. ft.', Fee: '$3500'},
              { Application: 'Preliminary Major Site Plan', Category: 'Industrial over 100,000 sq. ft.', Fee: '$6500'},
              { Application: 'Preliminary Major Site Plan', Category: 'Additional: Application subject to EJCIO Basic Form', Fee: '$1500'},
              { Application: 'Preliminary Major Site Plan', Category: 'Additional: Application subject to EJCIO Full Form', Fee: '$3000'},
              { Application: 'Final Major Site Plan', Category: 'Residential 3-5 dwelling units', Fee: '$375'},
              { Application: 'Final Major Site Plan', Category: 'Residential 6-10 dwelling units', Fee: '$500'},
              { Application: 'Final Major Site Plan', Category: 'Residential 11-20 dwelling units', Fee: '$525'},
              { Application: 'Final Major Site Plan', Category: 'Residential 21-50 dwelling units', Fee: '$550'},
              { Application: 'Final Major Site Plan', Category: 'Residential 51-100 dwelling units', Fee: '$1000'},
              { Application: 'Final Major Site Plan', Category: 'Residential 101-300 dwelling units', Fee: '$1500'},
              { Application: 'Final Major Site Plan', Category: 'Residential over 300 dwelling units', Fee: '$2000'},
              { Application: 'Final Major Site Plan', Category: 'Commercial less than 5,000 sq. ft.', Fee: '$500'},
              { Application: 'Final Major Site Plan', Category: 'Commercial 5,000 to 20,000 sq. ft.', Fee: '$1000'},
              { Application: 'Final Major Site Plan', Category: 'Commercial 20,001 to 100,00 sq. ft.', Fee: '$1625'},
              { Application: 'Final Major Site Plan', Category: 'Commercial over 100,000 sq. ft.', Fee: '$3000'},
              { Application: 'Final Major Site Plan', Category: 'Additional: Application subject to EJCIO Basic Form', Fee: '$250'},
              { Application: 'Final Major Site Plan', Category: 'Additional: Application subject to EJCIO Full Form', Fee: '$500'},
              { Application: 'Final Major Site Plan', Category: 'Industrial less than 5,000 sq. ft.', Fee: '$625'},
              { Application: 'Final Major Site Plan', Category: 'Industrial 5,000 to 20,000 sq. ft.', Fee: '$1250'},
              { Application: 'Final Major Site Plan', Category: 'Industrial 20,001 to 100,000 sq. ft.', Fee: '$1875'},
              { Application: 'Final Major Site Plan', Category: 'Industrial over 100,000 sq. ft.', Fee: '$3500'},
              { Application: 'Final Major Site Plan', Category: 'Additional: Application subject to EJCIO Basic Form', Fee: '$750'},
              { Application: 'Final Major Site Plan', Category: 'Additional: Application subject to EJCIO Full Form', Fee: '$1500'}
            ]
          },
          {
            title: 'Variance Fees',
            columns: ['Type', 'C Variance Fee', 'D Variance Fee'],
            rows: [
             {Type: 'Residential: 3-5 dwelling units', 'C Variance Fee': '$300', 'D Variance Fee': '$2000'},
             {Type: 'Residential: 6-10 dwelling units', 'C Variance Fee': '$500', 'D Variance Fee': '$2150'},
             {Type: 'Residential: 11-20 dwelling units', 'C Variance Fee': '$500', 'D Variance Fee': '$2500'},
             {Type: 'Residential: 21-50 dwelling units', 'C Variance Fee': '$750', 'D Variance Fee': '$2750'},
             {Type: 'Residential: 51-100 dwelling units', 'C Variance Fee': '$1000', 'D Variance Fee': '$3000'},
             {Type: 'Residential: Over 100 dwelling units', 'C Variance Fee': '$1250', 'D Variance Fee': '$3250'},
             {Type: 'Residential: Over 300 dwelling units', 'C Variance Fee': '$1500', 'D Variance Fee': '$3500'},
             {Type: 'Commercial: Less than 5,000 sq. ft.', 'C Variance Fee': '$500', 'D Variance Fee': '$2250'},
             {Type: 'Commercial: 5,001 to 20,000 sq. ft.', 'C Variance Fee': '$750', 'D Variance Fee': '$2500'},
             {Type: 'Commercial: 20,001 to 100,000 sq. ft.', 'C Variance Fee': '$1000', 'D Variance Fee': '$2750'},
             {Type: 'Commercial: Over 100,000 sq. ft.', 'C Variance Fee': '$1250', 'D Variance Fee': '$3000'},
             {Type: 'Non-Industrial Additional: Application subject to EJCIO Basic Form', 'C Variance Fee': '$350',
              'D Variance Fee': '$500'},
             {Type: 'Non-Industrial Additional: Application subject to EJCIO Full Form', 'C Variance Fee': '$500',
              'D Variance Fee': '$500'},
             {Type: 'Industrial: Less than 5,000 sq. ft.', 'C Variance Fee': '$750', 'D Variance Fee': '$2500'},
             {Type: 'Industrial: 50,001 to 20,000 sq. ft.', 'C Variance Fee': '$1000', 'D Variance Fee': '$2750'},
             {Type: 'Industrial: 20,001 to 100,000 sq. ft.', 'C Variance Fee': '$1250', 'D Variance Fee': '$3000'},
             {Type: 'Industrial: Over 100,000 sq. ft.', 'C Variance Fee': '$1500', 'D Variance Fee': '$3500'},
             {Type: 'Industrial Additional: Application subject to EJCIO Basic Form', 'C Variance Fee': '$500', 'D Variance Fee': '$750'},
             {Type: 'Industrial Additional: Application subject to EJCIO Full Form', 'C Variance Fee': '$750', 'D Variance Fee': '$1000'},
             {Type: 'Cell Antenna', 'C Variance Fee': '$2000', 'D Variance Fee': '$4000'}
            ]
          },
          {
            title: 'Landmarks & Historic Preservation Commission',
            columns: ['Application', 'Category', 'Fee'],
            rows: [
              {Application: 'Certificate of No Effect', Category:	'Non-Residential', Fee:	'$50'},
              {Application: 'Certificate of No Effect', Category:	'Residential', Fee: '$40'},
              {Application: 'Certificate of No Effect', Category:	'Sign/Awning Application', Fee: '$100'},
              {Application: 'Certificate of No Effect', Category:	'Façade and/or Store Front Application', Fee: '$150'},
              {Application: 'Certificate of No Effect', Category:	'Sidewalk Repair or Replacement Application', Fee: '$	50'},
              {Application: 'Certificate of No Effect',
               Category: 'Demolition Application (when not filed concurrently with other work)', Fee: '$500'},
              {Application: 'Certificate of Appropriateness', Category:	'Residential: New construction on vacant land', Fee: '$500'},
              {Application: 'Certificate of Appropriateness', Category:	'Residential: 1 to 4 dwelling units', Fee: '$100'},
              {Application: 'Certificate of Appropriateness', Category:	'Residential: 5 dwelling units and over', Fee: '$25 per dwelling unit up to a maximum of $1,000'},
              {Application: 'Certificate of Appropriateness', Category:	'Non-Residential: With principal building', Fee: '$100 per 1,000 sq. ft. of GFA or part thereof'},
              {Application: 'Certificate of Appropriateness', Category:	'Non-Residential: Without principal building', Fee: '$100 per 1,000 sq. ft. of lot area or part thereof'},
              {Application: 'Extension of COA approval', Category: '', Fee: '$200'},
              {Application: 'Special Meeting requested by applicant', Category: '', Fee: '$500'}
            ]
          }
        ]
      }
    ]
  };
  data = [];
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
    ) {
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
  }
}
