import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalConfig } from '../../interfaces/other.interface';

@Component({
  selector: 'app-modal',
  template: `
<h1 mat-dialog-title [innerHtml]="data.header"></h1>
<div mat-dialog-content [innerHtml]="data.message"></div>
<div mat-dialog-actions><button mat-raised-button color="primary" (click)="dialogRef.close()" i18n="@@modalButton | Close Modal">Close</button></div>
  `
})

export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalConfig
    ) { }
  @HostListener('click') onClick(e): void {
    this.dialogRef.close();
  }
}
