import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseQuestion } from '../components/formTypes/question-base.class';
import { BoardHearing, BoardsFields, DocData, SearchFeature, SearchResult, Staff } from '../models';

@Injectable()
export class JsonDataService {

    constructor(readonly http: HttpClient) { }

    async getBoardCommissionEvents(): Promise<Array<BoardHearing>> {
        return this.http.get('/assets/data/boardsCommissionsEvents.json')
            .toPromise()
            .then(res => res as Array<BoardHearing>)
            .then(data => data);
    }
    getFiles(docs): Observable<DocData> {
        return this.http.get<DocData>(`/assets/docs/${docs}.json`)
            .pipe(resp => resp);
    }
    getFormQuestions(docs): Observable<Array<BaseQuestion<any>>> {
        return this.http.get<Array<BaseQuestion<any>>>(`/assets/forms/${docs}.json`)
            .pipe(resp => resp);
    }
    getSiteMap(): any {
        return this.http.get('/assets/sitemap.json')
            .toPromise()
            .then(res => res as Array<any>);
    }
    async getStaff(): Promise<Array<Staff>> {
        return this.http.get('/assets/data/staff.json')
            .toPromise()
            .then(res => res as Array<Staff>);
    }
    async getBoardMembers(
        board: 'Central Planning Board'
        | 'Zoning Board of Adjustment'
        | 'Landmark & Historic Preservation Commission'
        | 'Environmental Commission'): Promise<Array<BoardsFields>> {
        return this.http.get('/assets/data/boards.json')
            .toPromise()
            .then(res => (res as Array<BoardsFields>).filter(v => v.boardCommission === board));
    }
    async getAddressPt(input: string, field = 'STREET_ADD'): Promise<Array<SearchFeature>> {
        const baseUrl = 'https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/addrsspointwblklotzoning/FeatureServer/0';

        return this.http.get<SearchResult>(
            `${baseUrl}/query?f=geojson&where=${field} LIKE '%${input}%'&returnGeometry=true&outFields=STREET_ADD,BLOCK_LOT&resultRecordCount=5`
            )
            .toPromise()
            .then(res => res.features);
    }
}
