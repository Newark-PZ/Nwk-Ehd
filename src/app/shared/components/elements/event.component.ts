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
    styles: ['.column-section {flex: 1 1 25%; padding-left: .5rem;} .column-content {flex: 1 1 75%; padding-right: .5rem; margin:0.25rem 0 0.25rem 0; justify-content: center}'],
    template: `
    <mat-table [dataSource]="data" multiTemplateDataRows>
      <ng-container matColumnDef="section">
          <mat-cell *matCellDef="let row" class="column-section"><span [innerHtml]="row.section"></span></mat-cell>
      </ng-container>
      <ng-container matColumnDef="content">
          <mat-cell *matCellDef="let row" class="column-content">
            <span *ngIf="!row.numbers" [ngClass]="row.link ? 'mat-raised-button mat-primary' : ''" (click)="goTo(row.link)">{{ row.content }}</span>
            <table *ngIf="row.numbers" style="width: 100%; font-size: 1rem">
                <tr class="flex-row">
                    <td class="flex-col cols-9" colspan="auto" style="max-height: 5rem;">
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
    @Input() board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA';
    @Input() agenda = '';
    @Input() fofId = '';
    @Input() type: 'popup' | undefined;
    @Input() hearing: Hearing;
    cols = ['section', 'content'];
    data: Array<EventTableRow>;
    @Output() readonly eventClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(readonly router: Router, readonly events: EventsService) {}
    ngOnInit(): void {
        if (this.hearing === undefined) {
            this.hearing = this.events.hearings.filter(h => h.board === this.board && h.timeUntil >= -10800000)[0]
            ? this.events.hearings.filter(h => h.board === this.board && h.timeUntil >= -10800000)[0]
            : new Hearing({id: 'Coming Soon', board: this.board, start: this.getNextWeek()
                .toDateString(), type: 'Regular'});
        }
        this.data = this.setData(this.board, this.hearing, this.agenda, this.fofId);
        if (this.type === 'popup') {
            this.data.splice(1, 0, { section: 'Info', content: 'Applications & Documents', link: `/${this.board === 'RC' ? 'rentcontrol' : 'planningzoning'}/virtualhearing/${this.board === 'RC' ? '' : this.board.toLowerCase()}` });
        }
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.board = changes.board ? changes.board.currentValue : this.board;
        this.agenda = changes.agenda ? changes.agenda.currentValue : this.agenda;
        this.fofId = changes.fofId ? changes.fofId.currentValue : this.fofId;
        this.hearing = changes.hearing ? changes.hearing.currentValue
            : this.events.hearings.filter(h => h.board === this.board && h.timeUntil >= -10800000)[0];
        this.data = this.setData(this.board, this.hearing, this.agenda, this.fofId);
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
    setData(board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA', hearing: Hearing, agenda = '', fofId?: string ): Array<EventTableRow> {
        const idno = hearing ? hearing.link.substring(
            hearing.link.lastIndexOf('/') + 1,
            hearing.link.includes('?pwd=') ? hearing.link.lastIndexOf('?pwd=') : undefined
            ) : '000 0000 0000';
        const pwd = hearing && hearing.link.includes('?pwd=') ? hearing.link.substring(hearing.link.lastIndexOf('?pwd=') + 5) : undefined;
        const hearingid = `${idno.slice(0, 3)} ${idno.slice(3, 7)} ${idno.slice(7)}`;
        const phoneNums = {
            oneTap: {
                CPB: ['3126266799', '6465588656'],
                EC: ['3017158592', '3126266799'],
                LHPC: ['3126266799', '6465588656'],
                RC: ['3017158592', '3126266799'],
                ZBA: ['3017158592', '3126266799']
            },
            basic: {
                CPB: ['(312) 626-6799', '(646) 558-8656', '(301) 715-8592', '(346) 248-7799', '(669) 900-9128', '(253) 215-8782'],
                EC: ['(301) 715-8592', '(312) 626-6799', '(646) 558-8656', '(253) 215-8782', '(346) 248-7799', '(669) 900-9128'],
                LHPC: ['(646) 558-8656', '(301) 715-8592', '(312) 626-6799', '(669) 900-9128', '(253) 215-8782', '(346) 248-7799'],
                RC: ['(301) 715-8592', '(312) 626-6799', '(646) 558-8656', '(253) 215-8782', '(346) 248-7799', '(669) 900-9128'],
                ZBA: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']
            },
            intl: {
                CPB: 'https://NewarkNJ.zoom.us/u/kttoHed67',
                EC: 'https://NewarkNJ.zoom.us/u/ad76DzorLo',
                LHPC: 'https://NewarkNJ.zoom.us/u/kenl9zssK7',
                RC: 'https://NewarkNJ.zoom.us/u/ab8geqNC0l',
                ZBA: 'https://us02web.zoom.us/u/kd1mbabqFf'
            }
        };
        const setRows = (): Array<EventTableRow> => [
            { section: 'Date & Time', content: hearing ? `${hearing.type === 'Cancelled' ? 'Cancelled' : hearing.start.toLocaleString('en-us')+' EST'}` : 'TBD'},
            { section: 'Agenda', content: agenda.length > 0 ? 'Download Agenda' : 'Coming Soon', link: agenda },
            ...(board === 'ZBA'
                ? [{ section: 'Findings of Fact', content: fofId && fofId.length > 0 ? 'Download Findings' : 'Coming Soon', link: fofId }]
                : []
            ),
            {
                section: 'Join Online',
                content: hearing?.link.length > 0 ? 'Go To Zoom Meeting' : 'Coming Soon',
                link: hearing ? hearing.link : ''
            },
            { section: 'iPhone One-Tap', content: 'US', numbers: phoneNums.oneTap[board].map((n: string) => `${n},,${idno}#`) },
            {
                section: 'Other Phone<br><i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
                content: 'US',
                extra: [
                    `<b>Webinar ID</b>: ${hearingid}`,
                    ...(pwd ? [`<b>Passcode</b>: ${board === 'EC' ? '63532' : pwd}`] : []),
                    `<a href="${phoneNums.intl[board]}">International Numbers Here<a>`
                ],
                numbers: phoneNums.basic[board]}
        ];

        return setRows();
    }
    getNextWeek(): Date {
        const today = new Date();
        const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

        return nextweek;
    }
}
