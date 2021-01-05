import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  template: `<app-basic-map [basemap]="'sat'" style="width: 100%;height: calc(100vh - 4.7rem)"></app-basic-map>`,
  styles: [':host { height: 60vh; width: 100%;display: flex;}']
})
export class OpzMapComponent {}
