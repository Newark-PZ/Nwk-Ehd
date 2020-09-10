
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DocGroup } from '../../models';

@Component({
    selector: 'app-file',
    styleUrls: ['./filelist.component.scss'],
    // tslint:disable: component-max-inline-declarations template-i18n template-no-call-expression
    template: `
    <mat-card style="width: 100%;">
                <mat-card-title style="background-color: rgba(0,0,0,.04); font-size: 1.15rem; font-weight:500; border-radius: .25rem; width: 100%; padding: .5rem;">
                {{row.fields['Name']}}
                </mat-card-title>
                <mat-card-subtitle style="font-weight: 100;">
                    Published: {{row.fields['Published'] | date:'MMM-yyyy'}} | Uploaded: {{row.fields['Uploaded'] | date:'MMM-yyyy'}}
                </mat-card-subtitle>
                <mat-card-content>
                    <p [innerHtml]="row.fields['Description']"></p>
                    <span style=" font-size: 1rem; font-weight:500; flex: 1 1 66%">
                        <mat-chip-list>
                            <mat-chip [ngClass]="row.fields['Type'].replace(' ', '')">{{row.fields['Type']}}</mat-chip>
                            <mat-chip [ngClass]="tag.replace(' ', '')" *ngFor="let tag of row.fields['Tags']">{{ tag }}</mat-chip>
                        </mat-chip-list>
                    </span>
                </mat-card-content>
                <mat-card-actions>
                    <span style="flex: 1 1 33%; text-align: center;" class="row-detail" *ngFor="let doc of row.fields['Files']; let i = index">
                        <button mat-button color="primary" (click)="openDoc(row.fields, i)" style="font-size: .75rem !important; height: 1.5rem; line-height: 1.5rem;">
                            <mat-icon style="font-size: .9rem;line-height: initial;margin-right: .25rem;">search</mat-icon>
                            View
                        </button>
                        <button mat-button color="primary" (click)="download(row.fields, i)"style="font-size: .75rem !important; height: 1.5rem; line-height: 1.5rem;">
                            <mat-icon style="font-size: .9rem;line-height: initial;margin-right: .25rem;">get_app</mat-icon>
                            Download
                        </button>
                    </span>
                </mat-card-actions>
              </mat-card>
    `
})

export class FileComponent {
    @Input() docGroups: Array<DocGroup> = [];
    @Input() selectedGroup: DocGroup;
    @Output() readonly groupChange: EventEmitter<DocGroup> = new EventEmitter<DocGroup>();
    @Output() readonly filter: EventEmitter<string> = new EventEmitter<string>();
    filterValue: string;
    isLoadingResults = false;
    @ViewChild(MatInput, { static: true }) input: MatInput;
    treeControl = new NestedTreeControl<DocGroup>(node => node.docs);
    dataSource = new MatTreeNestedDataSource<DocGroup>();
    constructor() {
      this.dataSource.data = this.docGroups;
    }
    hasChild = (_: number, node: DocGroup) => !!node.docs && node.docs.length > 0;
    trackByFn(index: number, el: any): string {
        return `item_${index}`;
    }
    applyFilter(filterVal = ''): void {
        this.filter.emit(filterVal);
    }
    groupSelect(group: DocGroup): void {
        if (group !== this.selectedGroup) { this.selectedGroup = group; }
        this.groupChange.emit(group);
    }
}
