import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LinkService } from '../shared/services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-opz',
  template: '<router-outlet></router-outlet>'
})

export class EhdOpzComponent implements OnInit {
  constructor(
    public linker: LinkService,
    public dialog: MatDialog
    ) {
    this.linker.initRoutes('planningzoning');
  }
  @HostBinding('class.content-container') class = true;

  ngOnInit(): void {

    // this.dialog.open(ModalComponent, {
    //   data: {
    //     header: '<b>Operations During COVID-19 Crisis</b>',
    //     message: `
    //     <p>The Newark Planning & Zoning Office (PZO) is open but will only be available at City Hall by appointment, until further notice, to minimize the potential spread of COVID-19. If you need assistance, please call <a href="tel:9737336575">(973) 733-6575</a> or send an email to <a href="mailto:newarkpzo@ci.newark.nj.us">newarkpzo@ci.newark.nj.us</a>. Please note that our response to inquiries received might be longer than usual.</p>
    //     <b>Board Applications</b>
    //     <p>PZO has temporarily revised board application filling procedures that apply to all boards - Central Planning Board, Zoning Board of Adjustment, Landmarks & Historic Preservation Commission Board and Environmental Commission Board. We will now accept online applications and payments. We will also accept applications by mail, UPS or Federal Express.  Please email <a href="mailto:shindep@ci.newark.nj.us">shindep@ci.newark.nj.us</a> alerting us to the filing. Staff will also be available every Tuesday, between 10:00 am and 1:00 pm in room 112, to accept applications in person; only complete applications will be accepted.</p>
    //     <b>Board Public Hearings</b>
    //     <p>PZO is working on scheduling virtual hearings for all board hearings. Details of these hearings - dates, notices, agendas, video link for public access and link to documents, will be updated on this website from time to time. To learn more, please scroll to more tools and services below.</p>
    //     <p>Thank you for understanding and be safe</p>
    //     `
    //   }
    // });
  }
}
