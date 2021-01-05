import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartoSQLResp } from '../models/interfaces';

/**
 * Service to query data from NZLUR Carto
 * @method getZoning() Use blocklot and an sql query to info on specific parcels
 */
@Injectable()
export class CartoService {
  readonly API_BASE_URL = 'https://nzlur.carto.com:443/api/v2/sql?q=';
  constructor(
    public http: HttpClient) { }
/**
 * Function to query data from NZLUR Carto using blocklot
 * @param API_SELECT columns from table to retrieve: default to *
 * @param API_WHERE_BLOCK block of parcel to query
 * @param API_WHERE_LOT lot of parcel to query
 */
  getZoning(API_WHERE_BLOCKLOT: string, API_SELECT?: string): Observable<any> {
    const selectDefault = [
      'blocklot',
      'historicdi',
      'inuez',
      'opportunit',
      'propclass',
      'proploc',
      'redevarea',
      'zone'
    ];
    const SQL_QUERY =
      `SELECT ${API_SELECT ? API_SELECT : selectDefault.join(',')} FROM public.parcels WHERE blocklot = '${API_WHERE_BLOCKLOT}' LIMIT 1`;

    return this.http.get<CartoSQLResp>(
      `${this.API_BASE_URL}${SQL_QUERY}`
    );
  }
  getInfoFromPoint(pointGeom: [number, number], cols = '', table = 'parcels'): Observable<CartoSQLResp> {
    const selectDefault = [
      'blocklot',
      'historicdi',
      'inuez',
      'opportunit',
      'propclass',
      'proploc',
      'redevarea',
      'zone'
    ];
    const SQL_QUERY = `select ${cols === '' ? selectDefault.join(',') : cols} from public.${table} where ST_Intersects(the_geom,'SRID=4326;POINT(${pointGeom.join(' ')})') limit 1`;

    return this.http.get<CartoSQLResp>(
      `${this.API_BASE_URL}${SQL_QUERY}`
    );
  }

}
