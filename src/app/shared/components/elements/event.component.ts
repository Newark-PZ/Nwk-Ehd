import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Hearing } from '../../classes/hearing';
import { EventsService } from '../../services/events.service';

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
export class EventComponent implements OnInit, OnChanges {
    @Input() board: 'CPB' | 'EC' | 'LHCP' | 'ZBA' = 'CPB';
    @Input() agenda;
    @Input() fofId = 'https://drive.google.com/file/d/16Jm1WOZMElujT1dwiLcJppg7-ozG5Zxh/view?usp=sharing';
    @Input() type: 'popup' | undefined;
    cols = ['section', 'content'];
    hearing: Hearing;
    data: Array<EventTableRow>;
    @Output() readonly eventClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(readonly router: Router, readonly events: EventsService) {}
    ngOnInit(): void {
        if (!this.agenda) {
            this.agenda = this.board === 'ZBA' ? 'https://drive.google.com/file/d/1EtpOlrFFacFw6ZmWF9qUjwBHkK3_DcyR/view?usp=sharing' : 'https://drive.google.com/file/d/1ASSj1bEBxv8NL69tRZ2yftP_L_mMnjiS/view?usp=sharing';
        }
        this.hearing = this.events.hearings.filter(h => h.board === this.board)[0];
        this.data = this.setData(this.board, this.hearing, this.agenda, this.fofId);
        if (this.type === 'popup') {
            this.data.push({ section: 'Find More Info', content: 'Applications & Documents', link: `/planningzoning/virtualhearing/${this.board.toLowerCase()}` });
        }
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.board = changes.board.currentValue;
        this.agenda = changes.agenda.currentValue;
        this.hearing = this.events.hearings.filter(h => h.board === this.board)[0];
        this.data = this.setData(changes.board.currentValue, this.hearing, this.agenda, this.fofId);
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
    setData(board: 'ZBA' | 'CPB' | 'EC' | 'LHCP', hearing: Hearing, agenda: string, fofId?: string ): Array<EventTableRow> {
    return board !== 'ZBA'  ? [
        { section: 'Next Hearing', content: `${hearing.start.toLocaleString()} Eastern Time (US and Canada)`},
        { section: 'Topic', content: 'Download Agenda', link: agenda },
        { section: 'To Join Online', content: 'Go To Zoom Meeting', link: hearing.link},
        { section: 'Or Over iPhone One-Tap', content: 'US', numbers: ['9292056099,,82787409169#', '3017158592,,82787409169#']},
        { section: 'Or Other Telephone<br>' +
          '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
          content: 'US',
          extra: ['<b>Webinar ID</b>: 827 8740 9169', '<a href="https://us02web.zoom.us/u/kiyTJuM8Y">International Numbers Here<a>'],
          numbers: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']}
        ]
    : [
        { section: 'Next Hearing', content: `${hearing.start.toLocaleString()} Eastern Time (US and Canada)`},
        { section: 'Topic', content: 'Download Agenda', link: agenda},
        { section: 'Findings of Fact', content: 'Download Findings of Fact', link: fofId },
        { section: 'To Join Online', content: 'Go To Zoom Meeting', link: hearing.link},
        { section: 'Or Over iPhone One-Tap', content: 'US', numbers: ['9292056099,,82787409169#', '3017158592,,82787409169#']},
        { section: 'Or Other Telephone<br>' +
          '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
          content: 'US',
          extra: ['<b>Webinar ID</b>: 827 8740 9169', '<a href="https://us02web.zoom.us/u/kiyTJuM8Y">International Numbers Here<a>'],
          numbers: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']}
    ];
    }
}
