import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FileListComponent } from '../../shared/components/filelist/filelist.component';
import { DocGroup, Page } from '../../shared/models';

@Component({
  selector: 'app-opz-resources',
  template: `
    <app-page [page]="pageDetails">
      <app-file-list  [docGroups]="data" (groupChange)="setSubtitle($event)" childComponent></app-file-list>
    </app-page>
    `
})

export class OpzResourcesComponent {
  @ViewChild(FileListComponent) fileList: FileListComponent;
  @Input() pageDetails: Page = {
    id: 'documents',
    splashTitle: 'Documents',
    splashIcon: 'description'
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
        { name: '2019 Minutes', group: 'cpb', type: 'Minutes', year: 2019 },
        { name: '2020 Minutes', group: 'cpb', type: 'Minutes', year: 2020 },
        { name: '2021 Minutes', group: 'cpb', type: 'Minutes', year: 2021 },
        { name: '2019 Agendas', group: 'cpb', type: 'Agendas', year: 2019 },
        { name: '2020 Agendas', group: 'cpb', type: 'Agendas', year: 2020 },
        { name: '2021 Agendas', group: 'cpb', type: 'Agendas', year: 2021 }
      ]
    },
    {
      group: 'ec', name: 'Environmental Commission', disabled: false, docs: [
        { name: '2021 Minutes', group: 'ec', type: 'Minutes', year: 2021 },
        { name: '2021 Agendas', group: 'ec', type: 'Agendas', year: 2021 }
      ]
    },
    {
      group: 'lhpc', name: 'Landmarks & Historic Pres.', disabled: false, docs: [
        { name: '2020 Minutes', group: 'lhpc', type: 'Minutes', year: 2020 },
        { name: '2021 Minutes', group: 'lhpc', type: 'Minutes', year: 2021 },
        { name: '2020 Agendas', group: 'lhpc', type: 'Agendas', year: 2020 },
        { name: '2021 Agendas', group: 'lhpc', type: 'Agendas', year: 2021 }
      ]
    },
    {
      group: 'zba', name: 'Zoning Board of Adjustment', disabled: false, docs: [
        { name: '2019 Minutes', group: 'zba', type: 'Minutes', year: 2019 },
        { name: '2020 Minutes', group: 'zba', type: 'Minutes', year: 2020 },
        { name: '2021 Minutes', group: 'zba', type: 'Minutes', year: 2021 },
        { name: '2019 Agendas', group: 'zba', type: 'Agendas', year: 2019 },
        { name: '2020 Agendas', group: 'zba', type: 'Agendas', year: 2020 },
        { name: '2021 Agendas', group: 'zba', type: 'Agendas', year: 2021 }
      ]
    }
  ];
  selectedGroup: DocGroup;
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router
  ) {
    setTimeout(() => {
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
    this.selectedGroup ? this.selectedGroup = this.selectedGroup : this.fileList.groupSelected({name: '', group: 'res', type: 'Redevelopment_Plans'});
    }, 350);
  }
  setSubtitle(docsubgroup: DocGroup): void {
    this.pageDetails.splashTitle = `Documents: ${
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
