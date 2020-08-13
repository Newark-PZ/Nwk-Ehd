import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AirtablePayload } from '../models';

@Injectable()
export class AirService {
    readonly API_STRING = 'Bearer ';
    readonly API_APP_ID = 'apph7gF9NG3sKQoZz';
    readonly DOCS_APP_ID = 'appqF7opmHtCOam2n';
    readonly API_BASE_URL = 'https://api.quickbase.com/v1/records/query';
    headers = {
            Authorization: environment.config.QBUserToken,
            'QB-Realm-Hostname': 'cityofnewark.quickbase.com',
            'Content-Type': 'application/json'
        };
    tableIds = (tableName: 'pzApplications' | 'vital'): string => {
        switch (tableName) {
            case 'pzApplications': return 'bifpzt7mc';
            case 'vital':
            default: return 'bhy5xdwj8';
        }
    };
    postBody = (tableName: 'pzApplications' | 'vital') => ({
        from: this.tableIds(tableName),
        select: [
          1,
          2,
          3
        ],
        where: "{7.AF.'2020-01-01'}",
        sortBy: [
          {
            fieldId: 7,
            order: 'ASC'
          }
        ],
        options: {
          skip: 0,
          top: 0
        }
    });
    constructor(
        public http: HttpClient) {
        }
    getRecords(API_BASE_NAME: string, TABLE_NAME: 'pzApplications' | 'vital'): Observable<AirtablePayload> {
        return this.http.post<AirtablePayload>(
        `${this.API_BASE_URL}`,
        this.postBody(TABLE_NAME),
        {
            headers: this.headers
        }
        );
    }
}