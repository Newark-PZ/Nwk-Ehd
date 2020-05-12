import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { JsonDataService } from '../../../../shared/';
import { DataItem, TreeDataItem } from '../../../../shared/models';
import { contentToggle, shownStateTrigger, sidebarButtonStateTrigger, sideToggle } from '../../../../shared/util/animations';

@Component({
  animations: [sidebarButtonStateTrigger, shownStateTrigger, contentToggle, sideToggle],
  selector: 'app-res-minutes',
  templateUrl: './boards-docs.component.html'
})

export class BoardsDocsDataComponent implements AfterViewInit {
  data: Array<DataItem>;
  fullScreen = false;
  iframeVis = false;
  isLoadingResults = false;
  cols: Array<any> = ['select', 'id', 'label', 'pubDate'];
  selection = new SelectionModel<DataItem>(false, []);
  filterValue;
  filesTree: Array<TreeDataItem> = [
    {
    children: [
      {
        children: [
          {
            data: {link: 'zba/agendas', year: 2019},
            level: 2,
            label: '2019 Meeting Agendas'
          },
          {
            data: {link: 'zba/agendas', year: 2020},
            level: 2,
            label: '2020 Meeting Agendas'
        }],
        label: 'Agendas',
        level: 1,
        expandable: true
      },
      {
        children: [
          {
            data: {link: 'zba/minutes', year: 2019},
            label: '2019 Meeting Minutes'
          },
          {
            data: {link: 'zba/minutes', year: 2020},
            label: '2020 Meeting Minutes'
        }],
        label: 'Minutes',
        level: 1,
        expandable: true
      }
    ],
    label: 'Zoning Board',
    level: 0,
    expandable: true
    },
    {
    children: [
      {
        children: [
        {
          data: {link: 'cpb/agendas', year: 2019},
          level: 2,
          label: '2019 Meeting Agendas'
        },
        {
          data: {link: 'cpb/agendas', year: 2020},
          level: 2,
          label: '2020 Meeting Agendas'
        }],
        label: 'Agendas',
        level: 1,
        expandable: true
      },
      {
        children: [
          {
            data: {link: 'cpb/minutes', year: 2019},
            level: 2,
            label: '2019 Meeting Minutes'
          },
          {
            data: {link: 'cpb/minutes', year: 2020},
            level: 2,
            label: '2020 Meeting Minutes'
        }],
        data: '',
        label: 'Minutes',
        level: 1,
        expandable: true
      }],
    label: 'Central Planning Board',
    level: 0,
    expandable: true
    }
  ];
  hasChild = (_: number, node: TreeDataItem) => node.expandable;
  readonly _transformer = (node: TreeDataItem, level: number) => ({
      data: node.data,
      expandable: !!node.children && node.children.length > 0,
      name: node.label,
      level
  });
  treeControl = new FlatTreeControl<TreeDataItem>(node => node.level, node => !!node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children as Array<TreeDataItem>
    );
  treeDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  selectedGroup: TreeDataItem | null = {label: 'Redevelopment Plans', level: 0, expandable: false};
  selectedDoc: DataItem | null;
  resultsLength = 0;
  dataSource = new MatTableDataSource<DataItem>();
  sideStatus = false;
  textHide = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatInput, {static: true}) input: MatInput;
  constructor(
    public jsonData: JsonDataService
  ) {
    this.jsonData.getFiles('plans')
    .subscribe(doc => this.dataSource.data = doc.data);
    this.treeDataSource.data = this.filesTree;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
  applyFilter(text = ''): void {
    this.dataSource.filter = text.trim()
      .toLowerCase();
    if (text === '') { this.input.value = ''; }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  nodeSelect(group: TreeDataItem): void {
    // tslint:disable: no-non-null-assertion
    if (group !== this.selectedGroup) { this.selectedGroup = group; }
    this.jsonData.getFiles(group.data.link)
    .subscribe(
      doc => this.dataSource.data = doc.data.filter(
       file => file.pubDate!.toString()
        .startsWith(group.data.year)
      )
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  download(doc: DataItem): any {
    window.open(`https://drive.google.com/uc?export=download&id=${doc.docId}`, '_blank');
  }
  shrinkSideNav(): void {
    this.sideStatus = !this.sideStatus;
    this.textHide = !this.textHide;
    this.treeControl.collapseAll();
  }
}
