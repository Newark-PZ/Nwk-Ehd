import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-360-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class N360HomeComponent implements OnInit {
  menuChecked = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.menuChecked = true;
    }, 500);
 }
}
