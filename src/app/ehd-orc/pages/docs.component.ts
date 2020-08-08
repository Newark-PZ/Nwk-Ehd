import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AirService, JsonDataService, ModalComponent } from '../../shared';
import { DataItem, DocGroup, DocsFields } from '../../shared/models';

@Component({
  selector: 'app-orc-docs',
  styleUrls: ['./docs.component.scss'],
  templateUrl: './docs.component.html'
})
// tslint:disable: no-string-literal
export class DocsComponent implements AfterViewInit {
  data: Array<DocsFields>;
  fullScreen = false;
  iframeVis = false;
  isLoadingResults = false;
  cols: Array<any> = ['label'];
  selection = new SelectionModel<DocsFields>(false, []);
  filterValue;
  group: DocGroup;
  boards: Array<{group: string; name: string; disabled: boolean, docs: Array<{type?: string; link: string; year?: number}>}> = [
    {group: 'res', name: 'Resources', disabled: false, docs: [
      {type: 'Redevelopment Plans', link: 'Resources'}, {type: 'Other Documents', link: 'Resources'}
    ]},
    {group: 'cpb', name: 'Central Planning Board', disabled: false, docs: [
      {type: '2018 Minutes', link: 'CPB-Minutes', year: 2018}, {type: '2019 Minutes', link: 'CPB-Minutes', year: 2019}, {type: '2020 Minutes', link: 'CPB-Minutes', year: 2020},
      {type: '2018 Agendas', link: 'CPB-Agendas', year: 2018}, {type: '2019 Agendas', link: 'CPB-Agendas', year: 2019}, {type: '2020 Agendas', link: 'CPB-Agendas', year: 2020}
    ]},
    {group: 'zba', name: 'Zoning Board of Adjustment', disabled: false, docs: [
      {type: '2018 Minutes', link: 'ZBA-Minutes', year: 2018}, {type: '2019 Minutes', link: 'ZBA-Minutes', year: 2019}, {type: '2020 Minutes', link: 'ZBA-Minutes', year: 2020},
      {type: '2018 Agendas', link: 'ZBA-Agendas', year: 2018}, {type: '2019 Agendas', link: 'ZBA-Agendas', year: 2019}, {type: '2020 Agendas', link: 'ZBA-Agendas', year: 2020}
    ]}
  ];
  selectedGroup = {group: 'redev', type: 'Redevelopment Plans', link: 'plans'};
  selectedDoc: DocsFields | null;
  resultsLength = 0;
  dataSource = new MatTableDataSource<DataItem>();
  sideStatus = false;
  textHide = true;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatInput, {static: true}) input: MatInput;
  setDocsControl = new FormControl();
  isExpansionDetailRow = (i: number, row: DocsFields) => row.hasOwnProperty('expanded');
  selectedElement: DocsFields | null;
  @Output() readonly groupChange: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    public jsonData: JsonDataService,
    readonly airData: AirService,
    public dialog: MatDialog
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
