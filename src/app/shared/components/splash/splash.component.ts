import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { JsonDataService } from '../../services/get-json-data.service';

@Component({
  selector: 'app-splash',
  styleUrls: ['./splash.component.scss'],
  templateUrl: './splash.component.html'
})

export class SplashComponent implements OnInit {
  @Input() parentFragment = '/ehd';
  @Input() backgroundSetting: TemplateRef<any>;
  @Input() logoSrc = 'assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_ehd.svg';
  @Input() searchDisplay = 'none';
  results: Array<any>;
  page;
  searchControl = new FormControl();
  filteredOptions: Observable<Array<string>>;

  constructor(
    readonly searchData: JsonDataService,
    readonly route: ActivatedRoute,
    readonly router: Router
    ) {  }
  ngOnInit(): void {
    this.parentFragment = this.router.url.substr(0, 4);
    this.logoSrc = `assets/img/NwkEhdLogos/SVG/NwkEhd_Divs_web_${this.router.url.substr(1, 3)}.svg`;
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Array<string> {
    const filterValue = value.toLowerCase();
    this.searchData.getSiteMap()
    .then(res => {
      this.results = res;
    });

    return this.results.filter(option => option.toLowerCase()
      .includes(filterValue));
  }
  goTo(value): any {
    (value.parent)
    ? window.open(`/${value.office}/${value.parent}/${value.path}`, '_self')
    : window.open(`/${value.office}/${value.path}`, '_self');
  }
}
