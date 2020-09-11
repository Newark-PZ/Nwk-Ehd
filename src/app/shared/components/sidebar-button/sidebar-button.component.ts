import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/store.reducers';
import { StoreService } from '../../../store/store.service';
import {
  shownStateTrigger,
  sidebarButtonStateTrigger
} from '../../util/animations';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss'],
  animations: [sidebarButtonStateTrigger, shownStateTrigger]
})
export class SidebarButtonComponent {
  @Input() iconName;
  @Input() treeControl;
  sidebarOpened$: Observable<boolean>;
  sidebarRightOpened$: Observable<boolean>;

  constructor(
    private readonly store: Store<fromStore.StoreState>,
    public storeService: StoreService
    ) {
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
    this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
  }
  toggleSidebar(): void {
    this.storeService.toggleSidebar();
    this.treeControl.collapseAll();
  }
  toggleRightSidebar(): void {
    this.storeService.toggleRightSidebar();
  }
}
