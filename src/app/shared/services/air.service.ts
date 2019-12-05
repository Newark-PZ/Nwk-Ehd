import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Record } from '../models';

@Injectable()
export class AirService {
  readonly API_STRING = 'Bearer ';
  readonly API_APP_ID = 'apph7gF9NG3sKQoZz';
  readonly API_BASE_URL = 'https://api.airtable.com';
  // tslint:disable-next-line: restrict-plus-operands
  header = { authorization: `${this.API_STRING + environment.config.AIRTABLE_API_KEY}` };
  params: { 'view': 'Grid view' };
  records: Observable<Record>;

  getRecords(API_BASE_NAME: string, API_FILTER: string): Observable<any> {
    const BASE_NAME = encodeURI(API_BASE_NAME);
    const FILTER = encodeURI(API_FILTER);

    return this.http.get<Record>(
      `${this.API_BASE_URL}/v0/${this.API_APP_ID}/${BASE_NAME}?${FILTER}?`,
      {
        headers: this.header,
        params: this.params
      }
    )
  }
  constructor(
    public http: HttpClient) {
    // tslint:disable-next-line: no-console
    console.log(this.records);

  }

}
