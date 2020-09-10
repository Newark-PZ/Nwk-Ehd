import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
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
  @Input() pageDetails: Page = {
    id: 'documents',
    title: 'Resources',
    hideBottomBar: true
  };
  data: Array<DocGroup> = [
    {
      group: 'res', name: 'Resources', disabled: false, docs: [
        { name: 'Master Plan', group: 'res', type: 'Master_Plan'},
        { name: 'Redevelopment Plans', group: 'res', type: 'Redevelopment_Plans'},
        { name: 'Other Documents', group: 'res', type: 'Other'}
      ]
    },
    {
      group: 'cpb', name: 'Central Planning Board', disabled: false, docs: [
        { name: '2018 Minutes', group: 'cpb', type: 'Minutes', year: 2018 },
        { name: '2019 Minutes', group: 'cpb', type: 'Minutes', year: 2019 },
        { name: '2020 Minutes', group: 'cpb', type: 'Minutes', year: 2020 },
        { name: '2018 Agendas', group: 'cpb', type: 'Agendas', year: 2018 },
        { name: '2019 Agendas', group: 'cpb', type: 'Agendas', year: 2019 },
        { name: '2020 Agendas', group: 'cpb', type: 'Agendas', year: 2020 }
      ]
    },
    {
      group: 'zba', name: 'Zoning Board of Adjustment', disabled: false, docs: [
        { name: '2018 Minutes', group: 'zba', type: 'Minutes', year: 2018 },
        { name: '2019 Minutes', group: 'zba', type: 'Minutes', year: 2019 },
        { name: '2020 Minutes', group: 'zba', type: 'Minutes', year: 2020 },
        { name: '2018 Agendas', group: 'zba', type: 'Agendas', year: 2018 },
        { name: '2019 Agendas', group: 'zba', type: 'Agendas', year: 2019 },
        { name: '2020 Agendas', group: 'zba', type: 'Agendas', year: 2020 }
      ]
    }
  ];
  selectedGroup: DocGroup;
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
  ) { }
  ngAfterViewInit(): void {
    this.selectedGroup = this.fileList.selectedGroup;
    this.fileList.groupSelected({name: '', group: 'res', type: 'Redevelopment_Plans'});
    this.route.queryParams.pipe(
      filter(params => params.group && params.type)
    )
      .subscribe(params => {
          this.fileList.groupSelected({
            name: '',
            group: params.group,
            type: params.type,
            year: params.year ? params.year : undefined
          });
          this.setSubtitle({name: '', group: params.group, type: params.type, year: params.year});
          this.selectedGroup = this.fileList.selectedGroup;
      });
  }
  setSubtitle(docsubgroup: DocGroup): void {
    this.pageDetails.title = `Documents: ${
      docsubgroup && docsubgroup.group === 'res' ? '' : docsubgroup.group.toUpperCase()
    }${
      docsubgroup.year ? ' ' : ''
    }${
      docsubgroup.year ? docsubgroup.year.toString() : ''
    }${
      docsubgroup.year ? ' ' : ''
    }${
      docsubgroup.type ? docsubgroup.type.replace('_', ' ') : ''}`;
  }
}
