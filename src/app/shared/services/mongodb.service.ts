import { Injectable } from '@angular/core';
import { App, Credentials } from 'realm-web';
import { SearchFeature } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  app: App = new App('covid19web-uwtgc');
  constructor() {
    this.app.logIn(Credentials.anonymous())
      .catch(err => { console.error('Authentiction Unsuccesful', err); });
  }

  async searchAddr(input: string, field = 'STREET_ADD'): Promise<Array<SearchFeature>> {
    const query = typeof input === 'string' ? input : '';

    return  this.app.functions.callFunction('Search', query) as Promise<Array<SearchFeature>>;
  }
}
