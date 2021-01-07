import { Injectable } from '@angular/core';
import { App, Credentials } from 'realm-web';
import { SearchFeature } from '../models';

/**
 * Service with methods to connect to MongoDB Instance
 * @method searchAddr() Query Mongo Instance to get Coordinates from Address or Block-Lot
 */
@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  app: App = new App('covid19web-uwtgc');
  constructor() {
    this.app.logIn(Credentials.anonymous())
      .catch(err => { console.error('Authentiction Unsuccesful', err); });
  }
/**
 * Search Address/Block-Lot
 * @desc  Query Mongo Instance to get Coordinates from Address or Block-Lot. Initiates Mongo server-side 'Search' function.
 * @param input Input string to use to query, expects address or block-lot
 * @return Results of query; list of properties.
 */
  async searchAddr(input: string): Promise<Array<SearchFeature>> {
    const query = typeof input === 'string' ? input : '';

    return  this.app.currentUser!.callFunction('Search', query) as Promise<Array<SearchFeature>>;
  }
}
