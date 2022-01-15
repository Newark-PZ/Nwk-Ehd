import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArcGeoJSONPropResponse, ArcGeoJSONResponse, BoardHearing, BoardsFields, DocData, SearchFeature, SearchResult } from '../models';

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
    getInfoFromPoint(pointGeom: [number, number], type: 'Basic' | 'Expanded' = 'Basic'): Observable<ArcGeoJSONPropResponse> {
        const returnFields = (queryType: 'Basic' | 'Expanded'): string => {
            switch (queryType) {
                case 'Basic': return [
                    'PROPLOC',
                    'MOD4_BLOCK_LOT',
                    'ZONING',
                    'PROPCLASS',
                    'RDV_PLAN',
                    'HIST_DIST',
                    'HIST_PROP',
                    'IN_UEZ',
                    'OPPO_ZONE'
                ].join(',');
                default: return [
                    'PROPLOC',
                    'MOD4_BLOCK_LOT',
                    'ADDLOTS',
                    'CITYWARD',
                    'PROPCLASS',
                    'ZONING',
                    'BUILDDESC',
                    'ACREAGE',
                    'LANDVALUE',
                    'IMPRVALUE',
                    'LSTYRTAX',
                    'HIST_DIST',
                    'HIST_PROP',
                    'OPPO_ZONE',
                    'IN_UEZ',
                    'RDV_PLAN',
                    'RDV_CODE'
                ].join(',');
            }
        };
        const arcBaseUrl = 'https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/Newark_Parcels_with_Ownership/FeatureServer/0/query?';
        const arcParams = `&outFields=${returnFields(type)}&geometry={"x":${pointGeom[0]},"y":${pointGeom[1]},"spatialReference":{"wkid" : 4326}}&geometryType=esriGeometryPoint&returnGeometry=false&resultRecordCount=1&f=geojson`;

        return this.http.get<ArcGeoJSONPropResponse>(
          `${arcBaseUrl}${arcParams}`
        );
    }
    getInfoFromBL(blocklot: string, type: 'Basic' | 'Expanded' = 'Basic'): Observable<ArcGeoJSONPropResponse> {
        const returnFields = (queryType: 'Basic' | 'Expanded'): string => {
            switch (queryType) {
                case 'Basic': return [
                    'PROPLOC',
                    'MOD4_BLOCK_LOT',
                    'ZONING',
                    'PROPCLASS',
                    'RDV_PLAN',
                    'HIST_DIST',
                    'HIST_PROP',
                    'IN_UEZ',
                    'OPPO_ZONE'
                ].join(',');
                default: return [
                    'PROPLOC',
                    'MOD4_BLOCK_LOT',
                    'ADDLOTS',
                    'CITYWARD',
                    'PROPCLASS',
                    'ZONING',
                    'BUILDDESC',
                    'ACREAGE',
                    'LANDVALUE',
                    'IMPRVALUE',
                    'LSTYRTAX',
                    'HIST_DIST',
                    'HIST_PROP',
                    'OPPO_ZONE',
                    'IN_UEZ',
                    'RDV_PLAN',
                    'RDV_CODE'
                ].join(',');
            }
        };
        const arcBaseUrl = 'https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/Newark_Parcels_with_Ownership/FeatureServer/0/query?';
        const arcParams = `&outFields=${returnFields(type)}&where="LOT_BLOCK_LOT"='${blocklot}'&returnGeometry=false&resultRecordCount=1&f=geojson`;

        return this.http.get<ArcGeoJSONPropResponse>(
          `${arcBaseUrl}${arcParams}`
        );
    }
    getSearchOptions(input = '', type: 'BLOCK_LOT' | 'ADDR_STREET' | 'ADDR_LEGAL'= 'ADDR_STREET'): Observable<ArcGeoJSONResponse> {
        const fields = 'ADDR_STREET,ADDR_LEGAL,BLOCK_LOT,POINT_X,POINT_Y';
        const arcBaseUrl = 'https://services1.arcgis.com/WAUuvHqqP3le2PMh/ArcGIS/rest/services/Newark_Addresses_with_Parcel_Info/FeatureServer/0/query?';
        const arcParams = `&outFields=${fields}&where="${type}" like '${input}%'&resultRecordCount=5&f=geojson`;

        return this.http.get<ArcGeoJSONResponse>(
          `${arcBaseUrl}${arcParams}`
        );
    }
}
