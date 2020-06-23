import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JsonDataService, ModalComponent } from '../../../../shared/';
import { DataItem, DocGroup } from '../../../../shared/models';
import { rowExpand } from '../../../../shared/util/animations';

@Component({
  animations: [rowExpand],
  // tslint:disable:no-unused-css
  selector: 'app-res-minutes',
  styleUrls: ['./boards-docs.component.scss'],
  templateUrl: './boards-docs.component.html'
})

export class BoardsDocsDataComponent implements AfterViewInit {
  data: Array<DataItem>;
  fullScreen = false;
  iframeVis = false;
  isLoadingResults = false;
  cols: Array<any> = ['label'];
  selection = new SelectionModel<DataItem>(false, []);
  filterValue;
  group: DocGroup;
  selectedGroup = {group: 'redev', type: 'Redevelopment Plans', link: 'plans'};
  selectedDoc: DataItem | null;
  resultsLength = 0;
  dataSource = new MatTableDataSource<DataItem>();
  sideStatus = false;
  textHide = true;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatInput, {static: true}) input: MatInput;
  setDocsControl = new FormControl();
  isExpansionDetailRow = (i: number, row: DataItem) => row.hasOwnProperty('expanded');
  expandedElement: DataItem | null;
  @Output() readonly groupChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    public jsonData: JsonDataService,
    public dialog: MatDialog
  ) {
    this.jsonData.getFiles('plans')
    .subscribe(doc => this.dataSource.data = doc.data);
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
    this.jsonData.getFiles(group.link)
    .subscribe(
      doc => this.dataSource.data = doc.data.filter(
       file => group.year ? file.pubDate!.toString()
            .startsWith(group.year.toString()) : file )
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.groupChange.emit(`${optgroup} ${group.type ? group.type : ''}`);
  }
  download(doc: DataItem): any {
    window.open(`https://drive.google.com/uc?export=download&id=${doc.docId}`, '_blank');
  }
  shrinkSideNav(): void {
    this.sideStatus = !this.sideStatus;
    this.textHide = !this.textHide;
  }
  openDoc(doc: DataItem): void {
    this.dialog.open(ModalComponent, {
      maxWidth: '100vw',
      data: {
        header: `<b>${doc.label}</b><br><span>${new Date(doc.pubDate!).toDateString()}</span>`,
        link: doc.embedLink
      }
    });
  }
  setExpanded(row: DataItem): void {
    // tslint:disable-next-line: no-null-keyword
    this.expandedElement === row ? this.expandedElement = null : this.expandedElement = row;
  }
}
