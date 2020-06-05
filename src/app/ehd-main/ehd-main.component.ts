import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { SidebarLink } from '../shared/interfaces/other.interface';
import { LinkService } from '../shared/services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-main',
  template: '<router-outlet></router-outlet>'
})

export class EhdMainComponent implements OnInit {
  routes: Array<SidebarLink>;
  constructor(
    readonly linker: LinkService
  ) {}
  @HostBinding('class.content-container') class = true;

  ngOnInit(): void {
    this.linker.initRoutes('ehd');
  }
}
