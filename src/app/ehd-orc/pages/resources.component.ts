import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FileListComponent } from '../../shared/components/filelist/filelist.component';
import { DocGroup, Page } from '../../shared/models';

@Component({
  selector: 'app-orc-resources',
  template: `
    <app-page [page]="pageDetails">
      <app-file-list  [docGroups]="data" (groupChange)="setSubtitle($event)" childComponent></app-file-list>
    </app-page>
    `
})

export class OrcResourcesComponent implements AfterViewInit {
  @ViewChild(FileListComponent) fileList: FileListComponent;
  pageDetails: Page = {
    id: 'documents',
    splashTitle: 'Resources',
    splashIcon: 'document'
  };
  data: Array<DocGroup> = [
    {
      group: 'rc', name: 'Resources', disabled: false, docs: [
        { name: 'Regulations', group: 'rc', type: 'Regulations'},
        { name: 'Forms', group: 'rc', type: 'Forms'},
        { name: 'Other Documents', group: 'rc', type: 'Other'}
      ]
    }
  ];
  selectedGroup: DocGroup;
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
  ) {}
  ngAfterViewInit(): void {
    this.route.queryParams.pipe(
      filter(params => params.group && params.type)
    )
      .subscribe({
        next: params => {
          this.fileList.groupSelected({
            name: '',
            group: params.group,
            type: params.type,
            year: params.year ? params.year : undefined
          });
          this.setSubtitle({name: '', group: params.group, type: params.type, year: params.year});
          this.selectedGroup = this.fileList.selectedGroup;
      }});
    this.selectedGroup
      ? this.selectedGroup = this.selectedGroup
      : this.fileList.groupSelected({name: '', group: 'rc', type: 'Regulations'});
  }
  setSubtitle(docsubgroup: DocGroup): void {
    const title = () => `Documents: ${
      docsubgroup && docsubgroup.group === 'rc' ? '' : docsubgroup.group.toUpperCase()
    }${
      docsubgroup.year ? ' ' : ''
    }${
      docsubgroup.year ? docsubgroup.year.toString() : ''
    }${
      docsubgroup.year ? ' ' : ''
    }${
      docsubgroup.type ? docsubgroup.type.replace('_', ' ') : ''}`;
    this.pageDetails = {
      id: 'documents',
      splashTitle: title(),
      splashIcon: 'document'
    };
  }
}
