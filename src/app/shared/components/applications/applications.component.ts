import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/store.reducers';
import { Page } from '../../models/pages.model';
import { slideshowAnimation } from '../../util/animations';
import { SnackbarComponent } from '../elements/snackbar.component';

@Component({
  animations: [slideshowAnimation],
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-applications',
  styleUrls: ['./applications.component.scss'],
  templateUrl: './applications.component.html'
})

export class ApplicationsComponent {
  @Input() page: Page;
  @Input() data$: Array<any> = [];
  constructor(
    readonly store: Store<fromStore.StoreState>,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) { }
  goTo(url?: string): void {
    if (url) {window.open(url, '_self'); }
  }
  headerClick(): any {
    window.scrollTo(0, 150);
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: { message: 'Copied!', detail: object }
    });
  }
}
