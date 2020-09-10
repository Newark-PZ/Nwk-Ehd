
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DocGroup } from '../../models';
import { AirService } from '../../services/air.service';

@Component({
    selector: 'app-file-list',
    styleUrls: ['./filelist.component.scss'],
    // tslint:disable: component-max-inline-declarations template-i18n template-no-call-expression
    template: `
    <app-file-list-control></app-file-list-control>
    <div style="margin: -.5rem auto auto 30vw">
    <mat-table [dataSource]="dataSource" matSort matSortActive="label" matSortDirection="desc" style="width: 100%; height: 100%">
    <ng-container matColumnDef="label">
        <mat-cell *matCellDef="let row"><app-file></app-file></mat-cell>
    </ng-container>
    <mat-row class="row" *matRowDef="let row; columns: ['label'];" [class.selected]="selectedElement === row" style="padding: .5rem 0;"></mat-row>
    </mat-table>
    <mat-paginator [length]="dataSource.data.length" [pageSize]="10" [hidePageSize]="true" showFirstLastButtons  style="background: whitesmoke;"></mat-paginator>
    </div>
    `
})

export class FileListComponent  implements AfterViewInit {
    @Input() docGroups: Array<DocGroup>;
    fullScreen = false;
    iframeVis = false;
    isLoadingResults = false;
    cols: Array<any> = ['label'];
    selection = new SelectionModel<DocsFields>(false, []);
    filterValue;
    group: DocGroup;
    selectedGroup = {group: 'redev', type: 'Redevelopment Plans', link: 'plans'};
    selectedDoc: DocsFields | null;
    resultsLength = 0;
    dataSource = new MatTableDataSource<DataItem>();
    sideStatus = false;
    textHide = true;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    selectedElement: DocsFields | null;
    @Output() readonly groupChange: EventEmitter<DocGroup> = new EventEmitter<DocGroup>();
    constructor(
      readonly airData: AirService,
    ) {
      this.airData.getDocs('Resources', 'view=Redevelopment Plans')
      .subscribe(doc => this.dataSource.data = doc.records);
    }
    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.groupChange.emit('Redevelopment Plans');
    }
    applyFilter(text = ''): void {
      this.dataSource.filter = text.trim()
        .toLowerCase();
      if (text === '') { this.input.value = ''; }
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    groupSelect(group: DocGroup, optgroup: string): void {
      // tslint:disable: no-non-null-assertion
      if (group !== this.selectedGroup) { this.selectedGroup = group; }
      this.airData.getDocs(group.link, `view=${group.year ? group.year : group.type}`)
      .subscribe(
        doc => this.dataSource.data = doc.records
        );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.groupChange.emit(`${optgroup} ${group.type ? group.type : ''}`);
    }
    download(doc: DocsFields, docIndex = 0): any {
      window.open(doc.Files[docIndex].url);
    }
    shrinkSideNav(): void {
      this.sideStatus = !this.sideStatus;
      this.textHide = !this.textHide;
    }
    openDoc(doc: DocsFields, index: number): void {
      // tslint:disable-next-line: no-null-keyword
      this.selectedElement === doc ? this.selectedElement = null : this.selectedElement = doc;
      this.dialog.open(ModalComponent, {
        maxWidth: '100vw',
        data: {
          header: `<b>${doc.Name}${doc.Files.length > 1 ? [' | Document ', (index + 1).toString()].join(' ') : ''}</b><br><span>${doc.Published}</span>`,
          link: doc.Files[index].url
        }
      });
    }
}
