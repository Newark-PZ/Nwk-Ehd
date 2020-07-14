import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArcPropResponse, BoardHearing, BoardsFields, DocData, SearchFeature, SearchResult, Staff } from '../models';

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
    getPropByBlockLot(API_WHERE_BLOCK: string, API_WHERE_LOT: string): Observable<ArcPropResponse> {
        const arcBaseUrl = 'https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/2017_zoning_layer/FeatureServer/0/query?';
        const arcQuery = `where="BLOCK_LOT"='${API_WHERE_BLOCK}-${API_WHERE_LOT}'`;
        const returnFields = ['AREA', 'ADDLOTS', 'BLOCK_LOT', 'PROPLOC', 'BUILDDESC', 'PROPCLASS', 'LANDVALUE', 'IMPRVALUE', 'REDEV_AREA', 'HISTORIC', 'ZONING'];
        const arcParams = `&outFields=${returnFields.join(',')}&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Foot&returnGeodetic=false&returnGeometry=false&returnCentroid=true&featureEncoding=esriDefault&multipatchOption=none&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson`;

        return this.http.get<ArcPropResponse>(
          `${arcBaseUrl}${arcQuery}${arcParams}`
        )
        .pipe(resp => resp);
      }
}
