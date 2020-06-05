import { Clipboard } from '@angular/cdk/clipboard';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SnackbarComponent } from '../../shared/';
import { DataItem, Page } from '../../shared/models';
import { BoardsDocsDataComponent } from './sub-pages/boards-docs/boards-docs.component';

@Component({
  selector: 'app-opz-resources',
  styles: ['.mat-raised-button {margin: 1rem auto auto 5rem; width: auto; min-width: 15rem !important}'],
  // tslint:disable: component-max-inline-declarations template-use-track-by-function
  template: `<app-page [page]="pageDetails">
      <mat-select class="mat-raised-button" [formControl]="setDocsControl" subtitleDrop [value]="selectedGroup" [placeholder]="'Change Documents'">
        <mat-optgroup *ngFor="let board of boards" [label]="board.name" [disabled]="board.disabled">
        <mat-option *ngFor="let docs of board.docs" [value]="docs" (onSelectionChange)="groupSelect($event.source.value, board.name)">
            {{docs.type ? docs.type : board.name}}
        </mat-option>
        </mat-optgroup>
      </mat-select><app-res-minutes (groupChange)="setSubtitle($event)" childComponent></app-res-minutes></app-page>
    `
})

export class OpzResourcesComponent implements AfterViewInit {
  @ViewChild(BoardsDocsDataComponent) docsComp: BoardsDocsDataComponent;
  pageDetails: Page = {
    id: 'documents',
    title: 'Resources',
    hideBottomBar: true
  };
  boards: Array<{group: string; name: string; disabled: boolean, docs: Array<{type?: string; link: string; year?: number}>}> = [
    {group: 'redev', name: 'Redevelopment Plans', disabled: false, docs: [{link: 'plans'}]},
    {group: 'cpb', name: 'Central Planning Board', disabled: false, docs: [
      {type: '2019 Minutes', link: 'cpb/minutes', year: 2019}, {type: '2020 Minutes', link: 'cpb/minutes', year: 2020},
      {type: '2019 Agendas', link: 'cpb/agendas', year: 2019}, {type: '2020 Agendas', link: 'cpb/agendas', year: 2020}
    ]},
    {group: 'ec', name: 'Environmental Commission', disabled: true, docs: []},
    {group: 'lhcp', name: 'Landmarks & Historic Preservation', disabled: true, docs: []},
    {group: 'zba', name: 'Zoning Board of Adjustment', disabled: false, docs: [
      {type: '2019 Minutes', link: 'zba/minutes', year: 2019}, {type: '2020 Minutes', link: 'zba/minutes', year: 2020},
      {type: '2019 Agendas', link: 'zba/agendas', year: 2019}, {type: '2020 Agendas', link: 'zba/agendas', year: 2020}
    ]}
  ];
  selectedGroup: DataItem = {label: ''};
  setDocsControl: FormControl = new FormControl('Redevelopment Plans');
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) { }
  ngAfterViewInit(): void {
      this.setDocsControl = this.docsComp.setDocsControl;
      this.selectedGroup = this.docsComp.selectedGroup;
      this.route.queryParams.pipe(
        filter(params => params.group && params.type)
      )
      .subscribe(params => {
        console.log(params); // {order: "popular"}
        if (params.group !== 'redev') {
          this.docsComp.groupSelect({
            group: params.group, type: params.type,
            link: `${params.group}/${params.type}`,
            year: params.year},
            params.group);
        } else {
          this.docsComp.groupSelect({
            group: params.group,
            type: params.type,
            link: 'plans'
          }, params.group);
        }
        this.setSubtitle(params.group);
        this.setDocsControl = this.docsComp.setDocsControl;
        this.selectedGroup = this.docsComp.selectedGroup;
      });
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: { message: 'Copied!', detail: object }
    });
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
  setSubtitle(group: string): void {
    const curboard = this.boards.find(b => b.group === group)!.name;
    // tslint:disable-next-line: no-non-null-assertion
    this.pageDetails.title = `Documents: ${curboard}`;
  }
  groupSelect(group, optgroup): void {
    this.docsComp.groupSelect(group, optgroup);
  }
}
