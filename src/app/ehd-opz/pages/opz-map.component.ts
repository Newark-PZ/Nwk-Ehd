import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  template: '<iframe src="https://newgin.maps.arcgis.com/apps/webappviewer/index.html?id=8364d36c5a204dfc8b60b4330af8b1df" style="width: 100%;height: calc(100vh - 4.7rem)"></iframe>',
  // template: `<app-basic-map [basemap]="'sat'" style="width: 100%;height: calc(100vh - 4.7rem)"></app-basic-map>`,
  styles: [':host { height: 60vh; width: 100%;display: flex;}']
})
export class OpzMapComponent {}
