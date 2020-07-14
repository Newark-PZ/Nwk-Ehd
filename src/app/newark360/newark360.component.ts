import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LinkService } from '../shared/services/link.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-newark360',
  template: '<router-outlet></router-outlet>'
})

export class Newark360Component {
  constructor(
    public linker: LinkService,
    public dialog: MatDialog
    ) {
    this.linker.initRoutes('planningzoning');
  }
  @HostBinding('class.content-container') class = true;

}
