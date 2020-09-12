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
    @Input() board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA';
    @Input() agenda = '';
    @Input() fofId = '';
    @Input() type: 'popup' | undefined;
    cols = ['section', 'content'];
    hearing: Hearing;
    data: Array<EventTableRow>;
    @Output() readonly eventClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(readonly router: Router, readonly events: EventsService) {}
    ngOnInit(): void {

        this.hearing = this.events.hearings.filter(h => h.board === this.board && h.timeUntil >= -10800000)[0];
        this.data = this.setData(this.board, this.hearing, this.agenda, this.fofId);
        if (this.type === 'popup') {
            this.data.push({ section: 'Find More Info', content: 'Applications & Documents', link: `/${this.board === 'RC' ? 'rentcontrol' : 'planningzoning'}/virtualhearing/${this.board === 'RC' ? '' : this.board.toLowerCase()}` });
        }
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.board = changes.board ? changes.board.currentValue : this.board;
        this.agenda = changes.agenda ? changes.agenda.currentValue : this.agenda;
        this.fofId = changes.fofId ? changes.fofId.currentValue : this.fofId;
        this.hearing = this.events.hearings.filter(h => h.board === changes.board.currentValue && h.timeUntil >= -10800000)[0];
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
    setData(board: 'ZBA' | 'CPB' | 'EC' | 'LHPC' | 'RC', hearing: Hearing, agenda = '', fofId?: string ): Array<EventTableRow> {
        const idno = hearing ? hearing.link.substring(hearing.link.lastIndexOf('/') + 1) : '000 0000 0000';
        const hearingid = `${idno.slice(0, 3)} ${idno.slice(3, 7)} ${idno.slice(7)}`;
        const setRows = (idnum, id): Array<EventTableRow> => {
            switch (board) {
                case 'RC': return [
                    { section: 'Next Hearing', content: `${hearing ? hearing.start.toLocaleString() : 'TBD'} Eastern Time (US and Canada)`},
                    { section: 'Topic', content: agenda.length > 0 ? 'Download Agenda' : 'Coming Soon', link: agenda },
                    { section: 'To Join Online', content: hearing && hearing.link.length > 0 ? 'Go To Zoom Meeting' : 'Coming Soon',
                      link: hearing ? hearing.link : ''},
                    { section: 'Or Over iPhone One-Tap', content: 'US', numbers: [`6465588656,,${idno}#`, `3017158592,,${idno}#`]},
                    { section: 'Or Other Telephone<br>' +
                      '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
                      content: 'US',
                      extra: [`<b>Webinar ID</b>: ${hearingid}`, '<a href="https://newarknj.zoom.us/u/acqduOoBr">International Numbers Here<a>'],
                      numbers: ['(646) 558-8656', '(301) 715-8592', '(312) 626-6799', '(669) 900-9128', '(253) 215-8782', '(346) 248-7799']}
                ];
                case 'ZBA': return [
                    { section: 'Next Hearing', content: `${hearing ? hearing.start.toLocaleString() : 'TBD'} Eastern Time (US and Canada)`},
                    { section: 'Topic', content: agenda.length > 0 ? 'Download Agenda' : 'Coming Soon', link: agenda},
                    { section: 'Findings of Fact', content: fofId && fofId.length > 0 ? 'Download Findings' : 'Coming Soon', link: fofId },
                    { section: 'To Join Online', content: hearing && hearing.link.length > 0 ? 'Go To Zoom Meeting' : 'Coming Soon',
                      link: hearing ? hearing.link : ''},
                    { section: 'Or Over iPhone One-Tap', content: 'US', numbers: [`3017158592,,${idno}#`, `3126266799,,${idno}#`]},
                    { section: 'Or Other Telephone<br>' +
                      '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
                      content: 'US',
                      extra: [`<b>Webinar ID</b>: ${hearingid}`, '<a href="https://us02web.zoom.us/u/kiyTJuM8Y">International Numbers Here<a>'],
                      numbers: ['(929) 205-6099', '(301) 715-8592', '(312) 626-6799', '(669) 900-6833', '(253) 215-8782', '(346) 248-7799']}
                ];
                default: return [
                        { section: 'Next Hearing', content: `${hearing ? hearing.start.toLocaleString() : 'TBD'} Eastern Time (US and Canada)`},
                        { section: 'Topic', content: agenda.length > 0 ? 'Download Agenda' : 'Coming Soon', link: agenda },
                        { section: 'To Join Online', content: hearing && hearing.link.length > 0 ? 'Go To Zoom Meeting' : 'Coming Soon',
                          link: hearing ? hearing.link : ''},
                        { section: 'Or Over iPhone One-Tap', content: 'US', numbers: [`9292056099,,${idno}#`, `3017158592,,${idno}#`]},
                        { section: 'Or Other Telephone<br>' +
                          '<i class="hide-below-md">for higher quality, dial a number based on your current location</i>',
                          content: 'US',
                          extra: [`<b>Webinar ID</b>: ${hearingid}`, '<a href="https://newarknj.zoom.us/u/adVk4AnkaC">International Numbers Here<a>'],
                          numbers: ['(646) 558-8656', '(301) 715-8592', '(312) 626-6799', '(669) 900-9128', '(253) 215-8782', '(346) 248-7799']}
                ];
            }
        };

        return setRows(idno, hearingid);
    }
}
