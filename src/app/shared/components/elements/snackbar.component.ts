import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

/**
 * @title Snack-bar with a custom component
 */
// tslint:disable: template-i18n
@Component({
    selector: 'app-snackbar',
    styleUrls: ['./snackbar.component.scss'],
    template: `
       <div><h3>{{data.message}}</h3>
       <p>{{data.detail}}</p></div>
       <button mat-icon-button matTooltip="Close" matTooltipPosition="after" (click)="closeSnackbar()"><mat-icon>close</mat-icon></button>
    `
})
export class SnackbarComponent {

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: any,
        readonly _snackBar: MatSnackBar
    ) {}
    closeSnackbar(): void {
        this._snackBar.dismiss();
    }
}
