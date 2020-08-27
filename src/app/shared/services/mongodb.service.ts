import { Injectable } from '@angular/core';
import {
  RemoteMongoClient,
  RemoteMongoDatabase,
  Stitch,
  StitchAppClient
} from 'mongodb-stitch-browser-sdk';
import { isString } from 'util';
import { SearchFeature } from '../models';
// tslint:disable: object-literal-key-quotes
@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  client: StitchAppClient = Stitch.initializeDefaultAppClient('covid19web-uwtgc');
  db: RemoteMongoDatabase;
  constructor() {
    this.db = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')
    .db('geos');
  }

  async searchAddr(input: string, field = 'STREET_ADD'): Promise<Array<SearchFeature>> {
    const query = isString(input) ? input : '';

    return  this.client.callFunction('Search', [query]) as Promise<Array<SearchFeature>>;
  }
}
