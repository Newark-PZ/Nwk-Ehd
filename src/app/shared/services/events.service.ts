import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as HearingActions from '../../store/hearing/hearing.actions';
import * as fromStore from '../../store/store.reducers';
import { Hearing } from '../classes/hearing';
import { DriveSearch, GSheetsValuesResponse } from '../models';
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
    folderLinks: Array<{id: string; board: 'CPB' | 'EC' | 'LHPC' | 'ZBA'; currenthearingid: string }> = [
        { id: '1VUq_Se2Kk2DcaD4S2qBUeaE_gRlINjuT', board: 'CPB', currenthearingid: '' },
        { id: '1-PffP9_Bk9eF8AvCkQ0hfXUcov06aAi5', board: 'LHPC', currenthearingid: '' },
        { id: '15bRMsQ7N8nEbXPp6lakD4o0e9QeWRncy', board: 'ZBA', currenthearingid: '' }
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
            .then(() => {
                this.hearings.filter(h => h.withinLegalNotice)
                .forEach(h => { this.getDriveFolderList(h.board, h.folderId)
                    .then(v => h.data = v)
                    .catch(() => []); });
                }
            )
            .then(() => {
                this.getHearingFolder('CPB')
                    .then( r => {
                        if (r) {
                            this.store.dispatch(new HearingActions.SetTabCPB({
                                agenda:  r.length > 0 ? r.filter(v => v.app.includes('agenda'))[0].link : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'CPB' && h.timeUntil >= 0)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'CPB' && h.withinLegalNotice)
                                    .map(h => ({event: h, data: h.data}))
                            }));
                    }})
                    .catch(err => { console.error(err); });
                this.getHearingFolder('ZBA')
                    .then(r => {
                        this.store.dispatch(new HearingActions.SetTabZBA({
                            agenda: r.filter(v => v.app.includes('agenda'))[0].link,
                            data: r,
                            event: this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= 0)[0],
                            fofId: r.filter(v => v.app.includes('findings of fact'))[0].link,
                            prevHearings: this.hearings.filter(h => h.board === 'ZBA' && h.withinLegalNotice)
                                .map(h => ({event: h, data: h.data}))
                        }));
                    })
                    .catch(err => { console.error(err); });
            })
            .catch(evt => this.hearings = []);

        return this.hearings;

    }
    async getBoardEvents(): Promise<Array<Hearing>> {
        const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1xSUw71nRLvbHklKGy6Ozh3Tou02R8YCFRhUyUmhHASs/values/A2:F38?' +
        `&key=${environment.config.GSHEETS_API_KEY}`;

        return this.http.get<GSheetsValuesResponse>(`${baseUrl}`)
            .toPromise()
            // tslint:disable-next-line: no-non-null-assertion
            .then(res =>
                this.hearings = res.values.sort((h1, h2) => new Date(h1[2]).getTime() - new Date(h2[2]).getTime())
                    .map((v, i) => new Hearing({
                        id: v[0], start: v[2], board: v[1], link: v[4] ? v[4] : '', folderId: v[5] ? v[5] : ''
                        }))
            );
    }
    async getHearingFolder(
        boardName: 'CPB' | 'EC' | 'LHPC' | 'ZBA',
        hearingID?: string
    ): Promise<Array<{board: 'CPB' | 'EC' | 'LHPC' | 'ZBA'; app: string; address: string; link: string; type: string | 'folders'}>> {
        const currentHearingID = hearingID ? hearingID : this.hearings.filter(h => h.board === boardName && h.timeUntil >= 0)[0].id;
        const baseUrl = `https://www.googleapis.com/drive/v3/files?q="${
            this.folderLinks.filter(l => l.board === boardName)[0].id
        }"%20in%20parents&key=${environment.config.GDRIVE_API_KEY}`;

        return this.http.get<DriveSearch>(`${baseUrl}`)
            .toPromise()
            .then(res => res.files.filter(l => l.name.startsWith(currentHearingID))[0].id)
            .then(v => this.getDriveFolderList(boardName, v));
    }
    async getDriveFolderList(
        boardName: 'CPB' | 'EC' | 'LHPC' | 'ZBA',
        folderId: string
        ): Promise<Array<{board: 'CPB' | 'EC' | 'LHPC' | 'ZBA'; app: string; address: string; link: string; type: string | 'folders'}>> {
        const baseUrl = `https://www.googleapis.com/drive/v3/files?q="${folderId}"%20in%20parents&key=${environment.config.GDRIVE_API_KEY}`;

        return this.http.get<DriveSearch>(`${baseUrl}`)
            .toPromise()
            .then(
                res => res.files.map(f => ({
                board: boardName,
                app: this.nameFix(f.name),
                address: this.address(f.name),
                type: f.mimeType === 'application/vnd.google-apps.folder' ? 'folders' : f.mimeType.slice(f.mimeType.lastIndexOf('/')),
                link: `https://drive.google.com/${f.mimeType === 'application/vnd.google-apps.folder' ? 'open?id=' : 'file/d/'}${f.id}`
            })));
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
// [
//     {
//         event: new Hearing({start: '2020-06-01T22:00:00Z', id: 'CPB_HEARING_2020_06_01', board: 'CPB', link: ''}),
//         data: [
//             {board: 'CPB', app: 'video', address: 'Audio Recording of Meeting', link: 'https://drive.google.com/file/d/1ss0RSQZFUHqUj0UnB3GE3jdkutGLVgkO/view?usp=sharing', type: 'mp3'},
//             {board: 'CPB', app: '19-79', address: '316-330 Mt. Pleasant Avenue, 94 Clay Street & 1239-1243 McCarter Highway', link: 'https://drive.google.com/drive/folders/1PZLEW-Pwh15A8NfK6yc5_UNpebMS9IEr', type: 'folders' },
//             {board: 'CPB', app: '20-08', address: '420 Springfield Ave', link: 'https://drive.google.com/drive/folders/1AbsOewRUVq_5Op8pryhrp6B82FzWFARf', type: 'folders' },
//             {board: 'CPB', app: '20-09', address: '246, 248-250, 252, 254-256, 258-262 & 264-268 Jelliff Avenue (Achieve Charter School)', link: 'https://drive.google.com/drive/folders/1SyODI8B7ARpGssFIHdXPf0VYJKyzRcLv', type: 'folders' },
//             {board: 'CPB', app: '20-18', address: '11-43 Raymond Plaza West, 1 Gateway Center Redevelopment', link: 'https://drive.google.com/drive/folders/1rzwpwl7wfpr6dlumRDSM6kiz5z7I83tZ', type: 'folders' }
//         ]
//     }
// ]
