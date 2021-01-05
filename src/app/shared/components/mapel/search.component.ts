import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Overlay } from 'ol';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchFeature } from '../../models';
import { MongodbService } from '../../services/mongodb.service';

@Component({
    selector: 'map-search-bar',
    // tslint:disable: component-max-inline-declarations template-i18n template-use-track-by-function
    template: `
              <mat-icon style="flex: 1 1 auto; margin-right: .5rem;display: flex;justify-content: center;align-items: center">search</mat-icon>
              <input style="flex:1 1 75%; margin-right: .5rem; border:none;height:1.5rem;font-size: 1rem" type="text" [placeholder]="searchType === 'STREET_ADD' ? 'Type in an Address, (e.g., 920 Broad Street)' : 'Type in a Block-Lot (e.g., 5002-40)'"
                  aria-label="Search Bar" matInput [formControl]="searchControl" [matAutocomplete]="auto">
              <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn" (optionSelected)="goTo($event)">
                  <mat-option *ngFor="let option of filteredOptions | async; let i = index" [value]="option">
                  {{searchType === 'STREET_ADD' ? option.Address : option.BlockLot}}
                  </mat-option>
              </mat-autocomplete>
              <button mat-button style="flex: 1 1 auto;margin-left: -3rem" *ngIf="searchControl.value" mat-icon-button aria-label="Clear" (click)="searchControl.setValue('')">
                <mat-icon>close</mat-icon>
              </button>
              <button style="flex: 1 1 auto; height: 1.5rem; font-size: .85rem !important; display: flex; align-items: center; padding: 0.25rem 0.25rem 0.25rem 0rem; background: white; cursor: pointer; border: .1rem solid lightgrey;"
                (click)="switchSearchType()">
                  <mat-icon style="font-size: 1.1rem;display: flex;justify-content: center;align-items: center">autorenew</mat-icon>
                  {{searchType === 'STREET_ADD' ? 'BlockLot' : 'Address'}}
              </button>
    `
})
export class SearchBarComponent implements OnInit {
    @HostBinding('class') class = 'intro-pane';
    results: Array<SearchFeature> = [];
    searchControl = new FormControl();
    filteredOptions: Observable<Array<SearchFeature>>;
    searchType = 'STREET_ADD';
    @Input() overlay: Overlay;
    @Output() readonly searchEvt: EventEmitter<SearchFeature>;
    constructor(
      readonly searchData: MongodbService
    ) {
        this.searchEvt = new EventEmitter<SearchFeature>();
    }
    ngOnInit(): void {
      this.filteredOptions = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }

    private _filter(value: string): Array<SearchFeature> {
      this.searchData.searchAddr(value)
      .then(res => {
        this.results = [];
        res.forEach(r => {
            this.results.push(r);
          });
        })
        .catch(err => { console.error(err); });

      return this.results;
    }
    displayFn(opt: SearchFeature): string {
      switch (this.searchType) {
        case 'BLOCK_LOT':
          return opt && opt.BlockLot ? opt.BlockLot : '';
        default:
          return opt && opt.Address ? opt.Address : '';
      }
    }
    goTo(value: MatAutocompleteSelectedEvent): any {
        this.searchEvt.emit(value.option.value);
    }
    switchSearchType(): void {
      this.searchType = this.searchType === 'STREET_ADD' ? 'BLOCK_LOT' : 'STREET_ADD';
      this.searchControl.setValue('');
    }
}
