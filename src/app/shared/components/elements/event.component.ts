import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

export interface EventTableRow {
    section: string;
    content: string;
    extra?: Array<string>;
    numbers?: Array<string>;
    link?: string;
    expanded?: boolean;
    action?(): () => void;
}
/**
 * @title Table to Display Event Information
 */
// tslint:disable: template-i18n component-max-inline-declarations template-use-track-by-function template-no-call-expression
@Component({
    selector: 'app-event-detail',
    styles: ['.column-section {flex: 1 1 25%; padding-left: .5rem;} .column-content {flex: 1 1 75%; padding-right: .5rem; justify-content: center}'],
    template: `
    <mat-table [dataSource]="data" multiTemplateDataRows>
      <ng-container matColumnDef="section">
          <mat-cell *matCellDef="let row" class="column-section" style="width: 33%"><span [innerHtml]="row.section"></span></mat-cell>
      </ng-container>
      <ng-container matColumnDef="content">
          <mat-cell *matCellDef="let row" class="column-content" style="width: 66%">
            <span *ngIf="!row.numbers" [ngClass]="row.link ? 'mat-raised-button mat-primary' : ''" (click)="goTo(row.link)">{{ row.content }}</span>
            <table *ngIf="row.numbers" style="width: 100%">
                <tr class="flex-row">
                    <td class="flex-col cols-9" colspan="auto" style="max-height: 8rem;">
                        <a *ngFor="let num of row.numbers" mat-button class="cols-4" [href]="'tel:+1'+ fixPhone(num)">
                        <mat-icon style="font-size: 1rem">phone</mat-icon>
                        {{num}}
                        </a>
                    </td>
                </tr>
                <tr *ngIf="row.extra"><td class="flex-row justify-content-center" colspan="3" [innerHtml]="row.extra[0]"></td></tr>
                <tr *ngIf="row.extra"><td class="flex-row justify-content-center" colspan="3" [innerHtml]="row.extra[1]"></td></tr>
            </table>
          </mat-cell>
        </ng-container>
      <mat-row class="row" *matRowDef="let row; columns: cols;"></mat-row>
      </mat-table>
    `
})
export class EventComponent implements OnChanges {
    @Input() board: 'CPB' | 'EC' | 'LHCP' | 'ZBA' = 'CPB';
    @Input() date: string;
    @Input() link: string;
    @Input() fofId = '';
    cols = ['section', 'content'];
    data: Array<EventTableRow> = [
        { section: 'When', content: `${this.date ? this.date : ''} Eastern Time (US and Canada)`},
        { section: 'Topic', content: 'Find Agendas & Information', link: `planningzoning/virtualhearing/${this.board ? this.board.toLowerCase() : 'cpb'}`},
        { section: 'To Join Online', content: 'Go To Zoom Meeting', link: this.link ? this.link : ''},
        { section: 'Or Over iPhone One-Tap', content: 'US', numbers: ['9292056099,,82787409169#', '3017158592,,82787409169#']},
        { section: 'Or Other Telephone<br>' +
          '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
          content: 'US',
          extra: ['<b>Webinar ID</b>: 827 8740 9169', '<a href="https://us02web.zoom.us/u/kiyTJuM8Y">International Numbers Here<a>'],
          numbers: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']}
    ];
    @Output() readonly eventClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(readonly router: Router) {}
    ngOnChanges(changes: SimpleChanges): void {
        this.data = changes.board.currentValue !== 'ZBA'
        ? [
            { section: 'When', content: `${changes.date.currentValue} Eastern Time (US and Canada)`},
            { section: 'Topic', content: 'See Agendas & Information', link: `planningzoning/virtualhearing/${changes.board.currentValue.toLowerCase()}`},
            { section: 'To Join Online', content: 'Go To Zoom Meeting', link: changes.link.currentValue},
            { section: 'Or Over iPhone One-Tap', content: 'US', numbers: ['9292056099,,82787409169#', '3017158592,,82787409169#']},
            { section: 'Or Other Telephone<br>' +
              '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
              content: 'US',
              extra: ['<b>Webinar ID</b>: 827 8740 9169', '<a href="https://us02web.zoom.us/u/kiyTJuM8Y">International Numbers Here<a>'],
              numbers: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']}
            ]
        : [
            { section: 'When', content: `${changes.date.currentValue} Eastern Time (US and Canada)`},
            { section: 'Topic', content: 'Find Agendas & Information', link: `planningzoning/virtualhearing/${changes.board.currentValue.toLowerCase()}`},
            { section: 'Findings of Fact', content: 'Download Findings of Fact', link: `https://drive.google.com/file/d/${changes.fofId.currentValue}/view?usp=sharing` },
            { section: 'To Join Online', content: 'Go To Zoom Meeting', link: changes.link.currentValue},
            { section: 'Or Over iPhone One-Tap', content: 'US', numbers: ['9292056099,,82787409169#', '3017158592,,82787409169#']},
            { section: 'Or Other Telephone<br>' +
              '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
              content: 'US',
              extra: ['<b>Webinar ID</b>: 827 8740 9169', '<a href="https://us02web.zoom.us/u/kiyTJuM8Y">International Numbers Here<a>'],
              numbers: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']}
        ];
    }
    fixPhone(num: string): string {
        return num.replace('(', '')
            .replace(')', '')
            .replace(' ', '')
            .replace('-', '');
    }
    goTo(url?: string): void {
        if (url && url.startsWith('http')) {
            window.open(url, '_self');
        } else if (url && url.startsWith('assets')) {
            window.open(url);
        } else if (url) {
            this.router.navigate([url])
                .catch(err => { console.error(err); });
            this.eventClicked.emit(true);
        }
    }
}
