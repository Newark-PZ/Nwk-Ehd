import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FooterList } from '../shared/models';
import { LinkService } from '../shared/services/link.service';
import { StoreService } from '../store/store.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-opz',
  template: '<router-outlet></router-outlet>'
})

export class EhdOpzComponent implements OnInit {
  officeRoutes: FooterList;
  constructor(
    public linker: LinkService,
    public dialog: MatDialog,
    public storeService: StoreService) {
    this.linker.initRoutes('planningzoning');
    const pzLinks = this.linker.planningzoning.filter(pz => !pz.disabled && !pz.children && pz.id !== 'home')
    .map(pz => ({
      text: pz.title,
      path: ['/planningzoning', pz.id],
      disabled: pz.disabled
    }));
    this.officeRoutes = {
      text: 'Planning & Zoning',
      path: ['/', 'planningzoning'],
      children: pzLinks.concat(
        this.linker.planingzoningChildren.filter(pz => !pz.disabled && pz.parent !== 'boards')
          .map(pz => ({
            text: pz.title,
            path: ['/planningzoning', pz.parent, pz.id],
            disabled: pz.disabled
          })
          )
        )
    };
    this.storeService.setFooter(this.officeRoutes);
  }
  @HostBinding('class.content-container') class = true;

  ngOnInit(): void {
    // this.dialog.open(ModalComponent, {
    //   data: {
    //     header: '<b>March 8th ZBA Meeting Technical Difficulties</b>',
    //     message: `
    //     <p>The March 8th ZBA meeting will start a little late, due to technical difficulties; the meeting should be available momentarily. We apologize for any inconveniences or problems this causes.</p>
    //     `
    //   }
    // });
  }
}
