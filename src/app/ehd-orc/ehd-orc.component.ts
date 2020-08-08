import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { LinkService } from '../shared/services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-ehd-orc',
  template: '<router-outlet></router-outlet>'
})

export class EhdOrcComponent {
  constructor(
    public linker: LinkService
    ) {
    this.linker.initRoutes('rentcontrol');
  }
  @HostBinding('class.content-container') class = true;
}
