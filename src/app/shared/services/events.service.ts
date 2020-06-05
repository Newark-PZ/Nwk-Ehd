import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as PageActions from '../../store/page-state/page-state.actions';
import * as fromStore from '../../store/store.reducers';
import { Hearing } from '../classes/hearing';
import { GCalEvent, GCalResponse } from '../models';
import { JsonDataService } from './get-json-data.service';
/**
 * Service to query data from NZLUR Carto
 * @method initHearings() Set the initial hearings
 */
@Injectable({
    providedIn: 'root'
})
export class EventsService {
    hearings: Array<Hearing> = [];
    constructor(
        readonly store: Store<fromStore.StoreState>,
        readonly getData: JsonDataService,
        readonly http: HttpClient
    ) {  }
    /**
     * Set the initial overlay layers as empty in the store, and add them to target layer group
     * @param overlayGroup layergroup component target for the layers to initialize inside
     */
    initHearings(): Array<Hearing> {
        // tslint:disable: max-line-length newline-before-return
        this.getBoardEvents()
            .then(
                evt => {
                    evt.forEach((v, i) => this.hearings
                    .push(new Hearing({
                        id: v.id, title: v.summary, start: v.start.dateTime, end: v.end.dateTime, description: v.description
                        })
                    ));
                }
            )
            .then(() => {
                this.hearings.sort((h1, h2) => h1.start.getTime() - h2.start.getTime());
                this.store.dispatch(new PageActions.SetCPBHearings(this.hearings.filter(h => h.board === 'CPB')));
                this.store.dispatch(new PageActions.SetLHCPHearings(this.hearings.filter(h => h.board === 'LHCP')));
                this.store.dispatch(new PageActions.SetZBAHearings(this.hearings.filter(h => h.board === 'ZBA')));
            })
            .catch(err => { console.error(err); });

        return this.hearings;

    }
    getNextHearings(board: 'ZBA' | 'CPB' | 'LHCP' | 'EC'): Hearing {
        return this.hearings.filter(h => h.board === board)
            .filter(h => h.timeUntil !== 'passed')
            .sort((h1, h2) => (h1.timeUntil as number) + (h2.timeUntil as number))[0];
    }
    async getBoardEvents(
        board?: 'Central Planning Board' | 'Zoning Board of Adjustment' | 'Landmark & Historic Preservation Committee',
        query?: string
        ): Promise<Array<GCalEvent>> {
        const qParam = query ? `q=${query}` : '';
        const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/4r20ts9f6qm2qp7023dkmr9qks@group.calendar.google.com/events?' +
        `${qParam}&key=${environment.config.GCAL_API_KEY}`;

        return this.http.get<GCalResponse>(`${baseUrl}`)
            .toPromise()
            // tslint:disable-next-line: no-non-null-assertion
            .then(res => board
                ? res.items.filter(f => f.summary === `${board} Hearing`)
                : res.items
            );
    }
    resetService(): void {
        this.hearings = [];
    }
}
