import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { MapComponent, OverlayComponent } from 'ng-maps';
import { Observable } from 'rxjs';
import * as PropPaneActions from '../../../store/prop-pane/prop-pane.actions';
import * as fromStore from '../../../store/store.reducers';

@Component({
  selector: 'app-bottomsheet',
  styleUrls: ['./bottomsheet.component.scss'],
// tslint:disable: template-i18n component-max-inline-declarations
  template: `
<mat-tab-group mat-dialog-content [selectedIndex]="mapPane$ | async">
  <mat-tab label="Intro"><map-intro-pane [map]="data.map" [overlay]="data.overlay"></map-intro-pane></mat-tab>
  <mat-tab label="Layers"><map-pane [map]="data.map"></map-pane></mat-tab>
  <mat-tab label="Property Info"><map-prop-pane></map-prop-pane></mat-tab>
  <mat-tab label="Area Info"><map-area-pane></map-area-pane></mat-tab>
</mat-tab-group>
<div mat-dialog-actions><button mat-raised-button color="primary" (click)="_bottomSheetRef.dismiss()" i18n="@@modalButton | Close Modal">Close</button></div>
  `
})

export class BottomSheetComponent {
  mapPane$: Observable<number>;
  constructor(
    public _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {
      map: MapComponent;
      overlay: OverlayComponent;
    },
    readonly store: Store<fromStore.StoreState>
    ) {
        this.mapPane$ = this.store.select(state => state.mapPane.selectedModule);
        this._bottomSheetRef.afterDismissed()
        .subscribe(e => {
            this.store.dispatch(new PropPaneActions.SetOpened(false));
            }
        );
    }
}
