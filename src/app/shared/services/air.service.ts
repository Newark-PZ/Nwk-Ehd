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
  readonly API_BASE_URL = 'https://api.airtable.com';
  // tslint:disable-next-line: restrict-plus-operands
  header = { authorization: `${this.API_STRING + environment.config.AIRTABLE_API_KEY}` };
  constructor(
    public http: HttpClient) {
    }
  getRecords(API_BASE_NAME: string, API_FILTER: string): Observable<AirtablePayload> {
    const BASE_NAME = API_BASE_NAME;
    const FILTER = API_FILTER;

    return this.http.get<AirtablePayload>(
      `${this.API_BASE_URL}/v0/${this.API_APP_ID}/${BASE_NAME}?${FILTER}`,
      {
        headers: this.header
      }
    );
  }
  getDocs(API_BASE_NAME: string, API_FILTER: string): Observable<AirtablePayload> {
    const BASE_NAME = API_BASE_NAME;
    const FILTER = API_FILTER;

    return this.http.get<AirtablePayload>(
      `${this.API_BASE_URL}/v0/${this.DOCS_APP_ID}/${BASE_NAME}?${FILTER}`,
      {
        headers: this.header
      }
    );
  }
}
