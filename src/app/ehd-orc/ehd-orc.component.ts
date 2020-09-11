import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FooterList } from '../shared/models';
import { LinkService } from '../shared/services/link.service';
import { StoreService } from '../store/store.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-orc',
  template: '<router-outlet></router-outlet>'
})

export class EhdOrcComponent {
  officeRoutes: FooterList;
  constructor(
    public linker: LinkService,
    public storeService: StoreService
    ) {
    this.linker.initRoutes('rentcontrol');
    this.officeRoutes = {
      text: 'Rent Control',
      path: ['/', 'rentcontrol'],
      children: this.linker.rentcontrol.map(rc => ({
        text: rc.title,
        path: ['/', rc.fullPath],
        disabled: rc.disabled
      })
      )
    };
    this.storeService.setFooter(this.officeRoutes);
  }
  @HostBinding('class.content-container') class = true;
}
