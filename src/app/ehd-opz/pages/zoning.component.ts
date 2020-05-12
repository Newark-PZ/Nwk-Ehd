import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Page } from '../../shared/models';
import { LotComponent } from './diagrams/lot.component';
import { buildingTypes, getDimensions, getReqs } from './diagrams/models/zoning.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opz-zoning',
  template: '<app-page [page]="pageDetails"></app-page>'
})
export class OpzZoningComponent implements OnInit {
  @ViewChild(LotComponent) lotComponent: LotComponent;
  @ViewChild('reqReport') report: ElementRef;
  @Input() reportVal;
  zoneOptions: Array<string> = [
    'R-1',
    'R-2',
    'R-3',
    'R-4',
    'R-5',
    'R-6',
    'C-1',
    'C-2',
    'C-3',
    'I-1',
    'I-2',
    'I-3',
    'MX-1',
    'MX-2',
    'MX-3',
    'INST',
    'EWR-S'
  ];
  @Input() zoneName;
  @Input() zoneSelect;
  opened = false;
  buildingTypes: Iterable<string> = ['One-family'];
  @Input() bldgTypeSel;
  @Input() bldgType;
  @Input() dimensions: any;
  // tslint:disable-next-line: no-non-null-assertion
  currentReqs = getReqs('R-1', 'One-family');
  diagramUpdater = new FormGroup({
    bldgTypes: new FormControl('One-family', [ Validators.required ]),
    zones: new FormControl('R-1', [ Validators.required ])
  });
  activeFragment;
  activeViewName;
  pageDetails: Page = {
    title: 'Zoning',
    subtitle: this.activeFragment,
    introText: '',
    contentIntro: {text: 'This is our staff'},
    searchDisplay: 'none',
    buttonCategories: ['staff'],
    buttons: [
      { icon: 'calendar', category: 'staff', title: 'Our Leadership', link: 'leadership' },
      { icon: 'file', category: 'staff', title: 'Planning Staff', link: 'planners' },
      { icon: 'map', category: 'staff', title: 'Zoning & Support Staff', link: 'support' }
    ],
    subComponents: []
  };
  constructor(
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.dimensions = getDimensions('R-1', 'One-family');
  }

  changeTypes(zone): any {
    this.buildingTypes = buildingTypes(this.zoneName);
  }

  changeDiagram(newZone, newBldgType): void {
    this.dimensions = getDimensions(newZone, newBldgType);
    this.currentReqs = getReqs(newZone, newBldgType);
    this.bldgTypeSel = newBldgType;
    this.zoneSelect = newZone;
  }

  copyReqs(): any {
    this.reportVal = this.report.nativeElement.innerText;
    const pending = this.clipboard.beginCopy(this.reportVal);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      // tslint:disable-next-line: increment-decrement
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    setTimeout(attempt);
  }
  zoningColors(zonedist: string): any {
    switch (zonedist) {
        case 'R-1':
        case 'R-2':
        case 'R-3':
        case 'R-4':
        case 'R-5':
        case 'R-6':
            return '#F3F88F';
            break;
        case 'C-1':
        case 'C-2':
        case 'C-3':
            return '#F8B7FB';
            break;
        case 'I-1':
        case 'I-2':
        case 'I-3':
            return '#F8B7FB';
            break;
        case 'MX-1':
        case 'MX-2':
        case 'MX-3':
            return '#F8B7FB';
            break;
        case 'RDV':
            return '#dddddd';
            break;
        case 'PARK':
            return '#B5E6B9';
            break;
        case 'INST':
            return '#0063ff';
            break;
        case 'CEM':
            return '#F8B7FB';
            break;
        case 'PORT':
            return '#F8B7FB';
            break;
        case 'EWR':
        case 'EWR-S':
            return '#F8B7FB';
            break;
        default:
            return '#BCBCBB';
            break;
    }
  }
}
