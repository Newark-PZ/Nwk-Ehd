import { Injectable } from '@angular/core';
import {
  AnonymousCredential,
  RemoteMongoClient,
  RemoteMongoDatabase,
  Stitch,
  StitchAppClient
} from 'mongodb-stitch-browser-sdk';
import { SearchFeature } from '../models';

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
    const query = field === 'STREET_ADD'
    ? {'attributes.STREET_ADD': { $regex: `(?i)(${input})`}}
    : {'attributes.BLOCK_LOT': { $regex: `(${input})`}};

    return  this.client.auth.loginWithCredential(new AnonymousCredential())
    .then(pt =>
      this.db.collection('addresspts')
      .find(query, {
        projection: {'attributes.STREET_ADD': 1, 'attributes.BLOCK_LOT': 1, 'geometry.x': 1, 'geometry.y': 1},
        limit: 5
      })
      .toArray()) as Promise<Array<SearchFeature>>;
  }
}
