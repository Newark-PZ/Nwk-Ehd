import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { SidebarLink } from '../shared/interfaces/other.interface';
import { FooterList } from '../shared/models';
import { LinkService } from '../shared/services/link.service';
import { StoreService } from '../store/store.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-main',
  template: '<router-outlet></router-outlet>'
})

export class EhdMainComponent implements OnInit {
  routes: Array<SidebarLink>;
  officeRoutes: FooterList;
  constructor(
    public linker: LinkService,
    public storeService: StoreService
    ) {
    this.linker.initRoutes('rentcontrol');
    this.officeRoutes = {
      text: 'EHD Main Office',
      path: ['/', 'ehd'],
      children: this.linker.ehd.map(ehd => ({
        text: ehd.title,
        path: ['/', ehd.fullPath],
        disabled: ehd.disabled
      })
      )
    };
    this.storeService.setFooter(this.officeRoutes);
  }
  @HostBinding('class.content-container') class = true;

  ngOnInit(): void {
    this.linker.initRoutes('ehd');
  }
}
