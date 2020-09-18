
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocsFields } from '../../models';
import { ModalComponent } from '../elements/modal.component';

@Component({
    selector: 'app-file',
    styles: [':host {width: 100%} .row-card {width: 100%;border: .05rem solid lightgrey;border-radius: .3rem;box-shadow: none;}'],
    // tslint:disable: component-max-inline-declarations template-i18n template-no-call-expression
    template: `
        <mat-card class="row-card">
            <mat-card-title style="background-color: rgba(0,0,0,.04); font-size: 1.15rem; font-weight: 500; border-radius: .25rem; width: 100%; padding: .5rem;">
            {{data.Name ? replaceAll(data.Name) : 'Document Name'}}
            </mat-card-title>
            <mat-card-subtitle style="font-weight: 100;">
                Published: {{data.Published | date:'MMM-yyyy'}} | Uploaded: {{data.Uploaded | date:'MMM-yyyy'}}
            </mat-card-subtitle>
            <mat-card-content>
                <p
                [innerHtml]="data.Description ? data.Description : 'Description of Document'"></p>
                <span style=" font-size: 1rem; font-weight:500; flex: 1 1 66%">
                    <mat-chip-list>
                        <mat-chip [ngClass]="data.Type ? data.Type.replace(' ', '') : 'General'">{{data.Type ? data.Type : 'General'}}</mat-chip>
                        <mat-chip [ngClass]="tag.replace(' ', '')" *ngFor="let tag of data.Tags; trackBy: trackByFn">{{ tag }}</mat-chip>
                    </mat-chip-list>
                </span>
            </mat-card-content>
            <mat-card-actions>
                <span style="flex: 1 1 33%; text-align: center;" class="row-detail" *ngFor="let doc of data.Files; let i = index; trackBy: trackByFn">
                    <button mat-button color="primary" (click)="openDoc(data, i)" style="font-size: .75rem !important; height: 1.5rem; line-height: 1.5rem;">
                        <mat-icon style="font-size: .9rem;line-height: initial;margin-right: .25rem;">search</mat-icon>
                        View
                    </button>
                    <button mat-button color="primary" (click)="download(data, i)"style="font-size: .75rem !important; height: 1.5rem; line-height: 1.5rem;">
                        <mat-icon style="font-size: .9rem;line-height: initial;margin-right: .25rem;">get_app</mat-icon>
                        Download
                    </button>
                </span>
            </mat-card-actions>
        </mat-card>
    `
})

export class FileComponent {
    @Input() data: DocsFields;
    constructor(
        readonly dialog: MatDialog
    ) {}
    trackByFn(index: number, el: any): string {
        return `item_${index}`;
    }
    download(doc: DocsFields, docIndex = 0): void {
      window.open(doc.Files[docIndex].url);
    }
    openDoc(doc: DocsFields, index: number): void {
      this.dialog.open(ModalComponent, {
        maxWidth: '100vw',
        data: {
          header: `<b>${doc.Name}${doc.Files.length > 1 ? [' | Document ', (index + 1).toString()].join(' ') : ''}</b><br><span>${doc.Published}</span>`,
          link: doc.Files[index].url
        }
      });
    }
    replaceAll(name: string): string {
        return name.split('_')
            .join(' ');
    }
}
