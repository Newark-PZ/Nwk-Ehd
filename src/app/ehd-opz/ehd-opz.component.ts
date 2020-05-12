import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ModalComponent } from '../shared';
import { SidebarLink } from '../shared/interfaces/other.interface';
import * as RoutesArrayActions from '../store/routes/routes.actions';
import * as fromStore from '../store/store.reducers';
import { PLANNING_ROUTES } from './ehd-opz.routing';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-opz',
  template: '<router-outlet></router-outlet>'
})

export class EhdOpzComponent implements OnInit {
  routes: Array<SidebarLink>;
  constructor(
    private readonly store: Store<fromStore.StoreState>,
    public dialog: MatDialog
  ) {
    this.routes = PLANNING_ROUTES.filter(r => r.title && r.title.length > 0)
    .map(r =>
      ({
          title: r.title,
          icon: r.icon,
          parentFragment: r.parentFragment,
          path: r.path,
          children: r.children ?  r.children.filter(child => child.title && child.title.length > 0) : undefined
        })
      ) as Array<SidebarLink>;
  }
  @HostBinding('class.content-container') class = true;

  ngOnInit(): void {
    this.store.dispatch(new RoutesArrayActions.SetRouteArray(this.routes));
    this.dialog.open(ModalComponent, {
      data: {
        header: '<b>Operations During COVID-19 Crisis</b>',
        message: `
        <p>The Newark Planning & Zoning Office (PZO) is closed and staff is working remotely during this time, until further notice, to minimize the potential spread of COVID-19. If you need assistance, please call <a href="tel:9737336575">(973) 733-6575</a> or send an email to <a href="mailto:ehd@ci.newark.nj.us">ehd@ci.newark.nj.us</a>. Please note that our response to inquiries received might be longer than usual.</p>
        <b>Board Applications</b>
        <p>PZO has temporarily revised board application filling procedures that apply to all boards - Central Planning Board, Zoning Board of Adjustment, Landmarks & Historic Preservation Commission Board and Environmental Commission Board. We will now accept online applications and payments. Please use tools on this webpage for submitting applications, making payments and uploading documents. We will also accept applications by mail, UPS or Federal Express.  Please email <a href="mailto:shindep@ci.newark.nj.us">shindep@ci.newark.nj.us</a> alerting us to the filing. Staff will also be available every Tuesday, between 10:00 am and 1:00 pm in room 112, to accept applications in person; only complete applications will be accepted. Please see the checklist here to submit all required documents.</p>
        <b>Board Public Hearings</b>
        <p>PZO is working on scheduling virtual hearings for all board hearings. Details of these hearings - dates, notices, agendas, video link for public access and link to documents, will be updated on this website from time to time. To learn more, please scroll to more tools and services below.</p>
        <p>Thank you for understanding and be safe</p>
        `
      }
    });
  }
}
