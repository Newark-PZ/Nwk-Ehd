import { Component, HostListener, OnInit } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-360-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class N360HomeComponent implements OnInit {
  menuOpen = false;
  changeNavPos = false;
  navButtons = [
    {color: 'blue', name: 'Newark Today', icon: 'analytics'},
    {color: 'green', name: 'Our Vision', icon: 'people'},
    {color: 'red', name: 'Our Values', icon: 'people'},
    {color: 'purple', name: 'Our Process', icon: 'people'},
    {color: 'orange', name: 'Planning', icon: 'people'},
    {color: 'lightblue', name: 'Communities', icon: 'people'}
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.menuOpen = false;
    }, 1000);
  }
  @HostListener('window:scroll') onScroll(e: Scroll): void {
    window.pageYOffset > 150 ? this.changeNavPos = true : this.changeNavPos = false;
  }
}
