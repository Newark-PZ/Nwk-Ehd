import { Component } from '@angular/core';

@Component({
  selector: 'app-emaps',
  template: '<app-editable-map style="width: 100%;height: calc(100vh - 4.7rem)"></app-editable-map>',
  styles: [':host { height: 60vh; width: 100%;display: flex;}']
})
export class EditableMapEXPComponent {

}
