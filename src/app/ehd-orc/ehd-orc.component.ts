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
    const rcLinks = this.linker.rentcontrol.filter(rc => !rc.children && rc.id !== 'home')
    .map(rc => ({
      text: rc.title,
      path: ['/rentcontrol', rc.id],
      disabled: rc.disabled
    }));
    this.officeRoutes = {
      text: 'Rent Control',
      path: ['/', 'rentcontrol'],
      children: rcLinks.concat(
        this.linker.rentcontrolChildren.filter(rc => !rc.disabled && rc.parent !== 'boards')
          .map(rc => ({
            text: rc.title,
            path: ['/rentcontrol', rc.parent, rc.id],
            disabled: rc.disabled
          })
          )
        )
    };
    this.storeService.setFooter(this.officeRoutes);
  }
  @HostBinding('class.content-container') class = true;
}
