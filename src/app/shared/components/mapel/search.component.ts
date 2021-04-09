import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Overlay } from 'ol';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArcAddressPt } from '../../models';
import { JsonDataService } from '../../services/get-json-data.service';

@Component({
    selector: 'map-search-bar',
    // tslint:disable: component-max-inline-declarations template-i18n template-use-track-by-function
    template: `
              <mat-icon style="flex: 1 1 auto; margin-right: .5rem;display: flex;justify-content: center;align-items: center">search</mat-icon>
              <input style="flex:1 1 75%; margin-right: .5rem; border:none;height:1.5rem;font-size: 0.85rem" type="text" [placeholder]="placeholderText[searchType]"
                  aria-label="Search Bar" matInput [formControl]="searchControl" [matAutocomplete]="auto" (ngModelChange)="_filter($event, searchType)">
              <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn" (optionSelected)="goTo($event)">
                  <mat-option *ngFor="let option of (filteredOptions | async); let i = index" [value]="option">
                  {{option[searchType]}}
                  </mat-option>
              </mat-autocomplete>
              <button mat-button style="flex: 1 1 auto;margin-left: -3rem" *ngIf="searchControl.value" mat-icon-button aria-label="Clear" (click)="searchControl.setValue('')">
                <mat-icon>close</mat-icon>
              </button>
              <mat-select style="flex: 1 1 auto;font-size: 0.85rem !important;padding: 0.15rem 0.25rem;border-radius: 0.25rem;background: white;cursor: pointer;border:.1rem solid lightgrey;width: 8rem;" [(value)]="searchType" (selectionChange)="this.searchControl.setValue('')">
                <mat-option *ngFor="let opt of [['BLOCK_LOT','BlockLot'], ['ADDR_STREET','Address-St'], ['ADDR_LEGAL','Address-Legal']]" [value]="opt[0]">{{ opt[1] }}</mat-option>
              </mat-select>
    `
})
export class SearchBarComponent {
    @HostBinding('class') class = 'intro-pane';
    results: Array<ArcAddressPt['attributes']> = [];
    searchControl = new FormControl();
    filteredOptions: Observable<Array<ArcAddressPt['attributes']>>;
    searchType: 'BLOCK_LOT' | 'ADDR_STREET' | 'ADDR_LEGAL' = 'ADDR_STREET';
    placeholderText = {
      ADDR_LEGAL: 'Type any Legal Address (ex: 906-934 BROAD ST)',
      ADDR_STREET: 'Type any Address (ex: 920 Broad Street)',
      BLOCK_LOT: 'Type any Block-Lot (ex: 873-1.01)'
    };
    @Input() overlay: Overlay;
    @Output() readonly searchEvt: EventEmitter<ArcAddressPt['attributes']>;
    constructor(
      readonly searchData: JsonDataService
    ) {
        this.searchEvt = new EventEmitter<ArcAddressPt['attributes']>();
    }
    _filter(value: any, type: 'BLOCK_LOT' | 'ADDR_STREET' | 'ADDR_LEGAL'): void {
      this.filteredOptions = this.searchData.getSearchOptions(value, type)
        .pipe(
          map( res => res.features.map(r => r.properties))
        );
    }
    displayFn(opt: ArcAddressPt['attributes']): string {
      return opt && opt[this.searchType] ? opt[this.searchType] : '';
    }
    goTo(value: MatAutocompleteSelectedEvent): any {
        this.searchEvt.emit(value.option.value);
    }
}
