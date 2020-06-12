import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as HearingActions from '../../store/hearing/hearing.actions';
import * as fromStore from '../../store/store.reducers';
import { Hearing } from '../classes/hearing';
import { DriveSearch, GCalEvent, GCalResponse } from '../models';
import { JsonDataService } from './get-json-data.service';
/**
 * Service to query data from NZLUR Carto
 * @method initHearings() Set the initial hearings
 */
@Injectable({
    providedIn: 'root'
})
// tslint:disable: max-line-length
export class EventsService {
    hearings: Array<Hearing> = [];
    hearing$: Observable<Array<Hearing>>;
    zbaFolder: Array<{id: string; name: string}> = [];
    folderLinks: Array<{id: string; board: 'CPB' | 'ZBA'; date: string; }> = [
        {id: '1Zgj1HXlJ0OJ3T1ZUgRPT39H-achaSxWy', board: 'ZBA', date: '2020_06_11'},
        {id: '1oL7fJdB5Ed1NQ5C55KFHNqTrTCSDOpih', board: 'CPB', date: '2020_06_15'}
    ];
    constructor(
        readonly store: Store<fromStore.StoreState>,
        readonly getData: JsonDataService,
        readonly http: HttpClient
    ) {
        this.hearing$ = new Observable((observer: Observer<Array<Hearing>>) => {
            setTimeout(() => {
                this.hearings.length > 0
                ? observer.next([])
                : observer.next(this.initHearings());
                // tslint:disable-next-line: no-console
                console.log(this.hearings);
            }, 1000);
          });
    }
    /**
     * Set the initial overlay layers as empty in the store, and add them to target layer group
     * @param overlayGroup layergroup component target for the layers to initialize inside
     */
    initHearings(): Array<Hearing> {
        this.getBoardEvents()
            .then(
                evt => this.hearings = evt.sort((h1, h2) => new Date(h1.start.dateTime).getTime() - new Date(h2.start.dateTime).getTime())
                    .map((v, i) => new Hearing({
                        id: v.id, title: v.summary, start: v.start.dateTime, end: v.end.dateTime, description: v.description
                        }))
            )
            .then(() => {
                this.getDriveFolderList('CPB', '2020_06_15')
                    .then( r => {
                        this.store.dispatch(new HearingActions.SetTabCPB({
                            agenda: r.filter(v => v.app === 'agenda' || v.app === 'agenda.pdf')[0].link,
                            data: r,
                            event: this.hearings.filter(h => h.board === 'CPB')[0],
                            oldData: [
                                {board: 'CPB', app: '19-79', address: '316-330 Mt. Pleasant Avenue, 94 Clay Street & 1239-1243 McCarter Highway', link: 'https://drive.google.com/drive/folders/1PZLEW-Pwh15A8NfK6yc5_UNpebMS9IEr', type: 'folders' },
                                {board: 'CPB', app: '20-08', address: '420 Springfield Ave', link: 'https://drive.google.com/drive/folders/1AbsOewRUVq_5Op8pryhrp6B82FzWFARf', type: 'folders' },
                                {board: 'CPB', app: '20-09', address: '246, 248-250, 252, 254-256, 258-262 & 264-268 Jelliff Avenue (Achieve Charter School)', link: 'https://drive.google.com/drive/folders/1SyODI8B7ARpGssFIHdXPf0VYJKyzRcLv', type: 'folders' },
                                {board: 'CPB', app: '20-18', address: '11-43 Raymond Plaza West, 1 Gateway Center Redevelopment', link: 'https://drive.google.com/drive/folders/1rzwpwl7wfpr6dlumRDSM6kiz5z7I83tZ', type: 'folders' }
                            ]
                        }));
                    })
                    .catch(err => { console.error(err); });
                this.getDriveFolderList('ZBA', '2020_06_11')
                    .then(r => {
                        this.store.dispatch(new HearingActions.SetTabZBA({
                            agenda: r.filter(v => v.app === 'agenda' || v.app === 'agenda.pdf')[0].link,
                            data: r,
                            event: this.hearings.filter(h => h.board === 'ZBA')[0],
                            fofId: r.filter(v => v.app === 'findings of fact' || v.app === 'findings of fact.pdf')[0].link,
                            oldData: [
                                {board: 'ZBA', app: '20-001', address: '114 Clifford Street', link: 'https://drive.google.com/open?id=1qBzUlXLa9Q7ICUCaiGlifh8sIuy1LC20', type: 'folders' },
                                {board: 'ZBA', app: '19-078', address: '43 Lentz Avenue', link: 'https://drive.google.com/open?id=1ch_EymOrp-KMgHqQuc7kyfE-Oyms0_K3', type: 'folders' },
                                {board: 'ZBA', app: '19-105', address: '173 Camden Street', link: 'https://drive.google.com/open?id=1ol_XqoDws80Bt4oypk_otO-bq0rmEvcP', type: 'folders' },
                                {board: 'ZBA', app: '20-005', address: '653 South 10th Street', link: 'https://drive.google.com/open?id=1V9lxeWakZbEm38hPX9tqLUwWOpizC9Tu', type: 'folders' },
                                {board: 'ZBA', app: '19-108', address: '212 North 9th Stret', link: 'https://drive.google.com/open?id=1VDHZFPn4z0ibIeEadW9XOCx-fL_K2jRB', type: 'folders' }
                            ]
                        }));
                    })
                    .catch(err => { console.error(err); });
            })
            .catch(evt => this.hearings = []);

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
    async getDriveFolderList(boardName: 'CPB' | 'ZBA', date: string): Promise<Array<{board: 'CPB' | 'ZBA'; app: string; address: string; link: string; type: string | 'folders'}>> {
        const folderId = this.folderLinks.filter(l => l.board === boardName && l.date === date)[0].id;
        const baseUrl = `https://www.googleapis.com/drive/v3/files?q="${folderId}"%20in%20parents&key=${environment.config.GDRIVE_API_KEY}`;
        const res = await this.http.get<DriveSearch>(`${baseUrl}`)
            .toPromise();

        return res.files.map(f => ({
                board: boardName,
                app: this.nameFix(f.name),
                address: this.address(f.name),
                type: f.mimeType === 'application/vnd.google-apps.folder' ? 'folders' : f.mimeType.slice(f.mimeType.lastIndexOf('/')),
                link: `https://drive.google.com/${f.mimeType === 'application/vnd.google-apps.folder' ? 'open?id=' : 'file/d/'}${f.id}`
            }));
    }
    nameFix(name: string): string {
        if (name.includes('CPB')) {
            return name.split(',')[0]
                .replace('CPB', '');
        } else if (name.includes('ZBA')) {
            return name.slice(name.indexOf('ZBA') + 3)
                    .replace(/^-/, '');
        }

        return name;
    }
    address(name: string): string {
        if (name.includes('CPB')) {
            return name.split(',')[1] || name.replace('CPB', '');
        } else if (name.includes('ZBA')) {
            return name.split(',')[0]
                .replace(/^[1-9]../, '');
        }

        return name.lastIndexOf('.') === -1 ? name : name.slice(0, name.lastIndexOf('.'));
    }
    resetService(): void {
        this.hearings = [];
    }
}
                        //  {board: 'CPB', app: '19-29', address: '323-327 Ferry Street', link: 'https://drive.google.com/drive/folders/1vwhvdDn246GfMSIMKFLY5PmQlGlaGbXi?usp=sharing' },
                        // {board: 'CPB', app: '20-21', address: '429 Delancy Street (Amazon Warehouse)', link: 'https://drive.google.com/drive/folders/1d3hmuYohxCgtLv6SWXYqC8maPKw58SMl?usp=sharing' },
                        // {board: 'CPB', app: '20-02', address: '100-102 Bruen Street', link: 'https://drive.google.com/drive/folders/1hZhhrJFOdW0qjLIZ2jSztMg-guFny0OI?usp=sharing' },
                        // {board: 'CPB', app: '20-03', address: '148-150 North 9th Street', link: 'https://drive.google.com/drive/folders/11qOobq640C8TMBf5SuaYc1NyRNMvJsLy?usp=sharing' },
                        // {board: 'CPB', app: '20-04', address: '223-229 Verona Avenue & 870-878 Mt Prospect Avenue', link: 'https://drive.google.com/drive/folders/1__amep0FXJ7_RXLPCbRIY8ZEKleH7PID?usp=sharing' }
                        //  [
                        //     {board: 'ZBA', app: '19-016', address: '857-861 Sanford Ave', folderlink: 'https://drive.google.com/drive/folders/1cdaVY5Mg_2OOzuVNcUe--Y5yowWTtKFl?usp=sharing' },
                        //     {board: 'ZBA', app: '19-037', address: '41-43 Bloomfield Ave', folderlink: 'https://drive.google.com/drive/folders/1xNemGFXvGAsMeUnsUQF-qZJpVU1X5Ah0?usp=sharing' },
                        //     {board: 'ZBA', app: '19-099', address: '396 East Kinney St', folderlink: 'https://drive.google.com/drive/folders/1hRDfJXcjMtJTz3VmPwCJzvUJr4rNbyLS?usp=sharing' },
                        //     {board: 'ZBA', app: '19-092', address: '728-738 S. 18th St', folderlink: 'https://drive.google.com/drive/folders/1sEj7ZUzEeXlFw3R0zpqRgKZDDvwGkvv7?usp=sharing' },
                        //     {board: 'ZBA', app: '19-106', address: '172-182 Pennsylvania Ave', folderlink: 'https://drive.google.com/drive/folders/1Pp-rWlw-Kt6jhYo0gs9huj2iUhyJ0jZb?usp=sharing' }
                        //   ],
