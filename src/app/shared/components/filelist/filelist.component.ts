
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DocGroup, DocsFields } from '../../models';
import { AirService } from '../../services/air.service';

@Component({
    selector: 'app-file-list',
    styleUrls: ['./filelist.component.scss'],
    // tslint:disable: component-max-inline-declarations template-i18n template-no-call-expression
    template: `
    <app-file-list-control [docGroups]="docGroups" [selectedGroup]="selectedGroup"
      (groupChange)="groupSelected($event)" (filter)="searchFilter($event)"></app-file-list-control>
    <div class="table-container">
      <mat-table [dataSource]="dataSource" matSort matSortActive="label" matSortDirection="desc" style="width: 100%; height: 100%">
        <ng-container matColumnDef="label">
            <mat-cell *matCellDef="let row"><app-file [data]="row"></app-file></mat-cell>
        </ng-container>
        <mat-row class="row" *matRowDef="let row; columns: ['label'];" [class.selected]="selectedElement === row" style="padding: .25rem 0;"></mat-row>
      </mat-table>
      <mat-paginator [length]="dataSource.data.length" [pageSize]="10" [hidePageSize]="true" showFirstLastButtons  style="background: whitesmoke;"></mat-paginator>
    </div>
    `
})

export class FileListComponent  implements AfterViewInit {
    @Input() docGroups: Array<DocGroup>;
    selectedGroup: DocGroup;
    filterValue;
    resultsLength = 0;
    dataSource = new MatTableDataSource<DocsFields>();
    textHide = true;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    selectedElement: DocsFields | null;
    @Output() readonly groupChange: EventEmitter<DocGroup> = new EventEmitter<DocGroup>();
    constructor(
      readonly airData: AirService
    ) {}
    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    searchFilter(text = ''): void {
      this.dataSource.filter = text.trim()
        .toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    groupSelected(group: DocGroup): void {
      // tslint:disable: no-non-null-assertion
      if (group !== this.selectedGroup) { this.selectedGroup = group; }
      this.airData.getDocs(group.group === 'res' ? 'Resources' : group.group, `view=${group.year ? group.year : ''}${group.year ? ' ' : ''}${group.type}`)
      .subscribe(
        doc => this.dataSource.data = doc.records.map(r => ({
            Name: r.fields ? r.fields['Name'] : 'Name of Document',
            Published: r.fields ? r.fields['Published'] : '01/01/1900',
            Uploaded: r.fields ? r.fields['Uploaded'] : '01/01/1900',
            Files: r.fields ? r.fields['Files'] : [],
            Type: r.fields ? r.fields['Type'] : 'General',
            Tags: r.fields ? r.fields['Tags'] : 'Planning & Zoning',
            Description: r.fields ? r.fields['Description'] : 'Description of Document'
          }))
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.groupChange.emit(group);
    }
}
