import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as HearingActions from '../../store/hearing/hearing.actions';
import * as fromStore from '../../store/store.reducers';
import { Hearing } from '../classes/hearing';
import { DriveSearch, GSheetsValuesResponse } from '../models';
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
    folderLinks: Array<{id: string; board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA'; currenthearingid: string }> = [
        { id: '1VUq_Se2Kk2DcaD4S2qBUeaE_gRlINjuT', board: 'CPB', currenthearingid: '' },
        { id: '1zP3q4h5r7BJ249KAimygdgW_-5M29J0g', board: 'LHPC', currenthearingid: '' },
        { id: '15bRMsQ7N8nEbXPp6lakD4o0e9QeWRncy', board: 'ZBA', currenthearingid: '' }
    ];
    constructor(
        readonly store: Store<fromStore.StoreState>,
        readonly http: HttpClient
    ) {
        this.hearing$ = new Observable((observer: Observer<Array<Hearing>>) => {
            setTimeout(() => {
                this.hearings.length > 0
                ? observer.next([])
                : observer.next(this.initHearings());
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
                            this.hearings.filter(h => h.board === 'CPB' && h.timeUntil >= -19800000)[0].agenda =
                            r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                            this.store.dispatch(new HearingActions.SetTabCPB({
                                agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'CPB' && h.timeUntil >= -19800000)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'CPB' && h.withinLegalNotice)
                                    .map(h => ({event: h, data: h.data}))
                            }));
                    })
                    .catch(err => { console.error(err); });
                this.getHearingFolder('LHPC')
                    .then( r => {
                            this.hearings.filter(h => h.board === 'LHPC' && h.timeUntil >= -19800000)[0].agenda =
                                r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                            this.store.dispatch(new HearingActions.SetTabLHPC({
                                agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'LHPC' && h.timeUntil >= -19800000)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'LHPC' && h.withinLegalNotice)
                                    .map(h => ({event: h, data: h.data}))
                            }));
                    })
                    .catch(err => { console.error(err); });
                this.getHearingFolder('ZBA')
                    .then(r => {
                        this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= -19800000)[0].agenda =
                            r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                        this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= -19800000)[0].fof =
                            r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0] ? r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0].link : '';
                        this.store.dispatch(new HearingActions.SetTabZBA({
                            agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '',
                            data: r.length > 0 ? r : [],
                            event: this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= -19800000)[0],
                            fofId: r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0] ? r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0].link : '',
                            prevHearings: this.hearings.filter(h => h.board === 'ZBA' && h.withinLegalNotice)
                                .map(h => ({event: h, data: h.data}))
                        }));
                    })
                    .catch(err => { console.error(err); });
                this.getHearingFolder('RC')
                    .then( r => {
                            this.hearings.filter(h => h.board === 'RC' && h.timeUntil >= -19800000)[0].agenda =
                                r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                            this.store.dispatch(new HearingActions.SetTabRC({
                                agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'RC' && h.timeUntil >= -19800000)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'RC' && h.withinLegalNotice)
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
        boardName: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA',
        hearingID?: string
    ): Promise<Array<{board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA'; app: string; address: string; link: string; type: string | 'folders'}>> {
        const currentHearingID = hearingID ? hearingID : this.hearings.filter(h => h.board === boardName && h.timeUntil >= -19800000)[0].id;
        const baseUrl = `https://www.googleapis.com/drive/v3/files?q="${
            this.folderLinks.filter(l => l.board === boardName)[0].id
        }"%20in%20parents&key=${environment.config.GDRIVE_API_KEY}`;

        return this.http.get<DriveSearch>(`${baseUrl}`)
            .toPromise()
            .then(res => res.files.filter(l => l.name.startsWith(currentHearingID))[0] ? res.files.filter(l => l.name.startsWith(currentHearingID))[0].id : '')
            .then(v => v ? this.getDriveFolderList(boardName, v) : [{board: boardName, app: '000', address: 'Coming Soon', link: '', type: 'folders'}]);
    }
    async getDriveFolderList(
        boardName: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA',
        folderId: string
        ): Promise<Array<{board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA'; app: string; address: string; link: string; type: string | 'folders'}>> {
        const baseUrl = `https://www.googleapis.com/drive/v3/files?q="${folderId}"%20in%20parents&key=${environment.config.GDRIVE_API_KEY}`;

        return this.http.get<DriveSearch>(`${baseUrl}`)
            .toPromise()
            .then(
                res => res.files.length > 0 ? res.files.map(f => ({
                board: boardName,
                app: this.nameFix(f.name),
                address: this.address(f.name),
                type: f.mimeType === 'application/vnd.google-apps.folder' ? 'folders' : f.mimeType.slice(f.mimeType.lastIndexOf('/')),
                link: `https://drive.google.com/${f.mimeType === 'application/vnd.google-apps.folder' ? 'open?id=' : 'file/d/'}${f.id}`
            }))
            : [{board: boardName, app: '000', address: 'Coming Soon', link: '', type: 'folders'}]);
    }
    nameFix(name: string): string {
        if (name.includes('CPB')) {
            return name.split(',')[0]
                .replace('CPB', '');
        } else if (name.includes('H20', 0)) {
            return name.slice(1, 8);
        } else if (name.includes('ZBA')) {
            return name.slice(name.indexOf('ZBA') + 3)
                    .replace(/^-/, '');
        }

        return name;
    }
    address(name: string): string {
        if (name.includes('CPB')) {
            return name.split(',')[1] || name.replace('CPB', '');
        } else if (name.includes('H20', 0)) {
            return name.slice(8);
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
