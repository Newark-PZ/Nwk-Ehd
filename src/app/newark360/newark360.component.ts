import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { LinkService } from '../shared/services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-newark360',
  template: '<router-outlet></router-outlet>'
})

export class Newark360Component {
  constructor(
    public linker: LinkService
    ) {
    this.linker.initRoutes('360');
  }
  @HostBinding('class.content-container') class = true;

}
