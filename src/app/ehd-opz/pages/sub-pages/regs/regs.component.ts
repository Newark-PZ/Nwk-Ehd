import { Component } from '@angular/core';

@Component({
  selector: 'opz-zoning-regs',
  styles: [`
  .airtable-embed { width:95%; height: 80vh; background: transparent; border: 1px solid #ccc; margin: auto;}
  :host {display: flex; margin: auto;}
  `],
  templateUrl: './regs.component.html'
})
export class OpzZoningRegsComponent {
  title: 'Click Through Our Zoning Regulations Below';

}
