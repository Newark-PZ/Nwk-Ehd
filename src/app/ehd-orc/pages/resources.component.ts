import { Clipboard } from '@angular/cdk/clipboard';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SnackbarComponent } from '../../shared/';
import { DataItem, Page } from '../../shared/models';
import { DocsComponent } from './docs.component';

@Component({
  selector: 'app-orc-resources',
  template: `<app-page [page]="pageDetails">
      <app-res-docs (groupChange)="setSubtitle($event)" childComponent></app-res-docs></app-page>
    `
})

export class OrcResourcesComponent implements AfterViewInit {
  @ViewChild(DocsComponent) docsComp: DocsComponent;
  pageDetails: Page = {
    id: 'documents',
    title: 'Resources',
    hideBottomBar: true
  };
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
        if (params.group !== 'res') {
          this.docsComp.groupSelect({
            group: params.group, type: params.type,
            link: `${params.group.toUpperCase()}-${params.type.charAt(0)
              .toUpperCase()}${params.type.slice(1)}`,
            year: params.year},
            params.group);
        } else {
          this.docsComp.groupSelect({
            group: params.group,
            type: params.type,
            link: 'Resources'
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
    // tslint:disable-next-line: no-non-null-assertion
    const curboard = this.docsComp.boards.find(b => b.group === group) ? this.docsComp.boards.find(b => b.group === group)!.name : group;
    this.pageDetails.title = `Documents: ${curboard}`;
  }
}
