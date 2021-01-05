import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as HearingActions from '../../store/hearing/hearing.actions';
import * as fromStore from '../../store/store.reducers';
import { Hearing } from '../classes/hearing';
import { GSheetsValuesResponse, HearingFolders, HearingInfo } from '../models';
/**
 * Service to dynamically get Hearing Information
 * @method initHearings() Set the initial hearings
 */
@Injectable({
    providedIn: 'root'
})
export class EventsService {
    hearings: Array<Hearing> = [];
    hearing$: Observable<Array<Hearing>>;
    folderData: Array<{board: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA'; folderData: HearingFolders}> = [];
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
            .then(r => {
                this.hearings = r;
                this.hearings.filter(h => h.withinLegalNotice && h.board !== 'RC')
                    .forEach((h, i) => {
                        this.getHearingFolderList(h.board, h.id)
                            .then(resp => h.data = resp)
                            .catch(err => {
                                console.error(err, `get hearing folder list of within legal notice failed at ${i}`);
                        });
                    });
                }
            )
            .finally(() => {
                this.getHearingFolderList('CPB')
                    .then( r => {
                            this.hearings.filter(h => h.board === 'CPB' && h.timeUntil >= -19800000)[0].agenda =
                                r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                            this.store.dispatch(HearingActions.setTabCPB({
                                agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0]
                                    ? r.filter(v => v.app.match(/(agenda)/ig))[0].link
                                    : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'CPB' && h.timeUntil >= -19800000)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'CPB' && h.withinLegalNotice)
                                    .map(h => ({event: h, data: h.data}))
                            }));
                    })
                    .catch(err => { console.error(err); });
                this.getHearingFolderList('ZBA')
                    .then(r => {
                        this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= -19800000)[0].agenda =
                            r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                        this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= -19800000)[0].fof =
                            r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0]
                            ? r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0].link : '';
                        this.store.dispatch(HearingActions.setTabZBA({
                            agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '',
                            data: r.length > 0 ? r : [],
                            event: this.hearings.filter(h => h.board === 'ZBA' && h.timeUntil >= -19800000)[0],
                            fofId: r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0] ? r.filter(v => v.app.match(/(findings of fact|fof)/ig))[0].link : '',
                            prevHearings: this.hearings.filter(h => h.board === 'ZBA' && h.withinLegalNotice)
                                .map(h => ({event: h, data: h.data}))
                        }));
                    })
                    .catch(err => { console.error(err); });
                this.getHearingFolderList('EC')
                    .then( r => {
                            this.hearings.filter(h => h.board === 'EC' && h.timeUntil >= -19800000)[0].agenda =
                                r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                            this.store.dispatch(HearingActions.setTabEC({
                                agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0]
                                    ? r.filter(v => v.app.match(/(agenda)/ig))[0].link
                                    : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'EC' && h.timeUntil >= -19800000)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'EC' && h.withinLegalNotice)
                                    .map(h => ({event: h, data: h.data}))
                            }));
                    })
                    .catch(err => { console.error(err); });
                this.getHearingFolderList('LHPC')
                    .then( r => {
                            this.hearings.filter(h => h.board === 'LHPC' && h.timeUntil >= -19800000)[0].agenda =
                                r.filter(v => v.app.match(/(agenda)/ig))[0] ? r.filter(v => v.app.match(/(agenda)/ig))[0].link : '';
                            this.store.dispatch(HearingActions.setTabLHPC({
                                agenda:  r.filter(v => v.app.match(/(agenda)/ig))[0]
                                    ? r.filter(v => v.app.match(/(agenda)/ig))[0].link
                                    : '',
                                data: r.length > 0 ? r : [],
                                event: this.hearings.filter(h => h.board === 'LHPC' && h.timeUntil >= -19800000)[0],
                                prevHearings:  this.hearings.filter(h => h.board === 'LHPC' && h.withinLegalNotice)
                                    .map(h => ({event: h, data: h.data}))
                            }));
                    })
                    .catch(err => { console.error(err); });
                this.store.dispatch(HearingActions.setTabRC({
                    agenda: '',
                    data: [],
                    event: this.hearings.filter(h => h.board === 'RC' && h.timeUntil >= -19800000)[0],
                    prevHearings:  this.hearings.filter(h => h.board === 'RC' && h.withinLegalNotice)
                        .map(h => ({event: h, data: h.data}))
                }));
            })
            .catch(evt => this.hearings = []);

        return this.hearings;

    }
    async getBoardEvents(): Promise<Array<Hearing>> {
        const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1xSUw71nRLvbHklKGy6Ozh3Tou02R8YCFRhUyUmhHASs/values/A2:F200?&key=';

        return this.http.get<GSheetsValuesResponse>(`${baseUrl}${environment.config.GSHEETS_API_KEY}`)
            .toPromise()
            .then(res => res.values.map(v => new Hearing({
                    id: v[0],
                    board: v[1],
                    start: v[2],
                    link: v[4],
                    folderId: v[5]
                })
            ));
    }
    async getHearingFolderList(
        boardName: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA',
        hearingID?: string
    ): Promise<Array<HearingInfo>> {
        const currentHearingID = hearingID ? hearingID : (this.hearings.filter(h => h.board === boardName && h.timeUntil >= -19800000)[0]
            ? this.hearings.filter(h => h.board === boardName && h.timeUntil >= -19800000)[0].id : '');
        const linkMap = (data: HearingFolders): Array<HearingInfo> => data.folders.filter(
            f => f.folderId.includes(currentHearingID) && f.contents
        ).length > 0
            ? data.folders.filter(fldr => fldr.folderId.includes(currentHearingID))[0].contents
                .map(f => ({
                board: boardName,
                app: this.nameFix(f.name),
                address: this.address(f.name),
                link: `https://drive.google.com/${f.type === 'application/vnd.google-apps.folder' ? 'open?id=' : 'file/d/'}${f.id}`,
                type: f.type === 'application/vnd.google-apps.folder' ? 'folders' : f.type.slice(f.type.lastIndexOf('/'))
            }))
            : [{board: boardName, app: '000', address: 'Coming Soon', link: '', type: 'folders'}];

        return this.folderData.filter(d => d.board === boardName).length > 0
        ? linkMap(this.folderData.filter(d => d.board === boardName)[0].folderData)
        : this.http.get<HearingFolders>(`https://nwkehd.firebaseio.com/Hearings/hearingFolders/${boardName}.json`)
            .toPromise()
            .then(resp => {
                this.folderData.push({board: boardName, folderData: resp});

                return linkMap(resp);
            });
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
    getNextWeek(): Date {
        const today = new Date();
        const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);

        return nextweek;
    }
    resetService(): void {
        this.hearings = [];
    }
}
