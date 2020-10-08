import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../shared/models';

@Component({
  selector: 'app-opz-doremus',
  template: `
  <app-page [page]="pageDetails"></app-page>
    `
})

export class OpzDoremusComponent {
  @Input() pageDetails: Page = {
    id: 'doremus',
    splashTitle: 'Forward-Bound Doremus',
    splashImg: { src: 'assets/img/headerPhotos/Doremus.jpg', alt: "Bird's Eye view of Doremus" },
    splashBlurb: {
      text: 'Forward-Bound Doremus is a shared vision and redevelopment plan for the Doremus Port-Industrial District. See more info below or go to the project website',
      buttons: [{ text: 'Project Website', extUrl: 'https://sites.google.com/view/forwardbounddoremus' }, { text: 'Youtube Channel', extUrl: 'https://www.youtube.com/channel/UC4ENrbInlnpAClFFrWEI0CA' }]
    },
    contentIntro: {
      left: {
        img: 'assets/img/headerPhotos/DoremusStudyArea.jpg'
      },
      right: {
        text: '<p>The City of Newark is embarking on a planning process that will engage stakeholders and residents in creating a shared vision for the city’s Port-Industrial District. The Forward-Bound Doremus Plan, aims to balance the needs of industry, the environment, and community while positioning the city for increased economic and environmental resilience as the region enters an exciting period of rapid growth.</p><p>The Forward-Bound Doremus Plan will focus on the core area of Newark’s Industrial District, which is anchored by the Doremus Avenue corridor. The plan’s study area is bound by the Passaic River to the north and east, I-78 and Port Newark to the south, and bound to the west by Routes 9 and 1 through to Foundry Street and Chapel Street where the port-industrial land uses come into contact with the residential neighborhoods of North Ironbound and East Ferry.</p>'
      }
    },
    sections: [
      {
        text: '“Our port area is essential to Newark’s economy”, said Mayor Baraka. “It provides thousands of jobs for residents in Newark’s most important industrial district. But it is also a major source of pollution that causes serious illness in the nearby residential community.  We are creating a comprehensive planning process that brings together residents, businesses, environmental leaders, city officials and other stakeholders to chart the future of the Doremus area. In this way, we can plan a future for the Port-Industrial District that is healthy, clean, and environmentally sustainable while strengthening economic vitality and preserving community values.”'
      },
      {
        header: 'THE LAUNCH',
        text: '<p>The public, the media and all stakeholders are invited to participate in the Virtual Project Launch Presentation of Forward-Bound Doremus, a Redevelopment Plan for the City of Newark Port-Industrial District, on <b>October 14, 2020 at 6pm, EST</b>. This will be a 1.5-hour presentation to introduce participants to the project goals, team, process, timeline and how to get involved! At the end of the presentation there will be a participatory group activity for participants to provide input.  Participants can attend this virtual meeting on Zoom, watch the live stream on the <a href="www.facebook.com/CityofNewark">City of Newark Facebook page</a>, or by following the <a href="https://www.youtube.com/channel/UC4ENrbInlnpAClFFrWEI0CA">Forward-Doremus Youtube Channel</a>.</p><p>The prime consultant for the Port-Industrial District Redevelopment Plan, leading a planning team with local familiarity is WRT an award-winning, national practice of planners, urban designers, architects, and landscape architects headquartered in Philadelphia, PA. The objective is to create a robust, inclusive, and equitable planning process that elevates the economic and environmental conversation and improves the health of the surrounding neighborhood, enabling stakeholders and residents to find mutually beneficial solutions.</p>'
      },
      {
        header: 'WHY',
        text: '<ul class="text-list"><li>Frequent and increasing flooding is causing disruption, health risks, and financial losses.</li><li>There is a need to invest in aging infrastructure&#8212;road networks, sewer, rail, electric&#8212;to support long-term sustainability and promote efficient operations within the industrial area.</li><li>The recent expansion and encroachment of industrial uses into residential areas has highlighted the need to better manage the interaction of industrial and non-industrial uses to achieve environmental justice and economic vitality.</li><li>Rapid change in maritime shipping, logistics and industrial technology, coupled with rapid loss of urban industrial land proximate to the ports and heavy transportation assets in the New York City metropolitan area make it critically important to deliberately shape the evolution of industrial land uses in Newark’s sought-after port-industrial area to achieve the desired mix and intensity of industrial uses.</li></ul>'
      },
      {
        header: 'THE PLANNING PROCESS',
        text: '<p>The planning process will be guided by a Steering Committee which will provide general guidelines (technical and experiential) to the core and planning team on the vision, strategies, and implementation of the project. The Steering Committee is composed of key stakeholders, local organizations, law makers, and residents.</p><p>Select members of Newark People’s Assembly, along with other neighborhood residents will be critical members of the planning process, serving as Community Ambassadors. Using the same mission, the Ambassadors will help support community outreach and engagement.</p><p>As part of Mayor Baraka’s initiative to empower communities, the Newark People’s Assembly gives organizations and individuals a space to make their voices heard to impact programs and services provided by the city. The Newark People’s Assembly serves as a bridge between the community and City Hall, empowering residents to become involved in organizations and programs that are improving their neighborhoods, like Forward-Bound Doremus.</p>'
      },
      {
        header: 'THE SCHEDULE',
        text: '<p>The Forward-Bound Doremus Project had a soft launch in January 2020 and was on track to deliver a collaborative Redevelopment Plan in August 2020. However, due to COVID-19 the project had to be put on hold to adjust the process to follow social distancing guidelines and virtual engagement. Now, the city is ready to begin working with you again to shape the future of the Doremus Port-Industrial District.</p><p>The plan will be developed through four flexible and overlapping phases, starting with the work done in January 2020 and finishing in May 2021. This sequence of steps has consistently delivered plans that are thorough, actionable, and supported by communities.<ul class="text-list"><li><b>Phase 1: INITIATION</b> – Project Launch + Existing Conditions Analysis (February – October 2020)</li><li><b>Phase 2: EXPLORATION</b> – Issues and Opportunities + Concept Plans (November-December 2020)</li><li><b>Phase 3: VALIDATION</b> – Plan Development (January-March 2021)</li><li><b>Phase 4: DOCUMENTATION</b> – Draft and Final Redevelopment Plan (April – May 2021)</li></ul>Visioning and consensus building meetings are included throughout the four phases, with the goal to continue building on the engagement the City has already conducted for the area.</p>'
      },
      {
        header: 'HOW TO ATTEND',
        text: '<p>All of the meetings that require more than 10 people will be virtual meetings using Zoom, a free video conference tool.  If you are not familiar with the software please visit the website, create an account, and download the program on your computer and smartphone before joining the meeting.<table class="text-table"><tr><td><b>Location</b></td><td><a href="https://zoom.us/j/94447543140">https://zoom.us/j/94447543140</a></td></tr><tr><td><b>Meeting information</b></td><td><b>Meeting ID</b>: 944 4754 3140<br><b>Passcode</b>: Forward</td></tr><tr><td><b>One tap mobile</b></td><td><a href="tel:+13017158592,,94447543140#,,,,,,0#,,772042#">+13017158592,,94447543140#,,,,,,0#,,772042# US (Germantown)</a><br><a href="tel:+13126266799,,94447543140#,,,,,,0#,,772042#">+13126266799,,94447543140#,,,,,,0#,,772042# US (Chicago)</a><br><b>Meeting ID</b>: 944 4754 3140<br><b>Passcode</b>: 772042</td></tr></table></p><p>You can also participate through the <a href="www.facebook.com/CityofNewark">City of Newark Facebook page</a> or by following the <a href="https://www.youtube.com/channel/UC4ENrbInlnpAClFFrWEI0CA">Forward-Doremus Youtube Channel</a>'
      }
    ],
    acknowledgments: [
      {
        header: 'ABOUT WRT',
        text: '<p><a href="https://www.wrtdesign.com/">WRT</a> is an award-winning, national practice of planners, urban designers, architects, and landscape architects headquartered in Philadelphia, PA. WRT focuses on building resilient communities—ones that demonstrate how growth can be guided in a sustainable manner that promotes economic vitality and enhances community identity and quality of life. This commitment is expressed in their sensitivity to the environment, inclusion of community values through public engagement, and leveraging of fiscally-sound projects to support vibrant places.</p><p>WRT will be supported by, among others, <a href="https://www.ninigretpartners.com/">Ninigret Partners</a>, an economic consulting firm that focuses primarily on industrial land uses; and <a href="http://www.tandmassociates.com/">T&M Associates</a>, a full-service engineering firm headquartered in New Jersey.</p><p>Throughout the planning process, the consultants will work closely with the City of Newark Department of Economic and Housing Development and the Office of Planning and Zoning. They will be supported by the City’s Office of Planning and Sustainability and Department of Engineering along with Bloomberg Associates.</p>'
      }
    ],
    contact: {
      header: 'CONTACT INFORMATION',
      contacts: [
        {
          officer: 'Frank Baraff',
          officerTitle: 'Communications Manager',
          phone: '9737336575',
          email: 'barafff@ci.newark.nj.us',
          room: '218',
          text: 'For Media Inquiries:'
        },
        {
          officer: 'Pallavi Shinde, PP, AICP',
          officerTitle: 'Supervising Planner',
          phone: '9737336253',
          email: 'shindep@ci.newark.nj.us',
          room: '419',
          text: 'For Other Inquiries:'
        }
      ]
    }
  };
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
  ) { }
}
