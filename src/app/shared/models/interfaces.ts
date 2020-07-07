export interface DataItem {
    collapsedIcon?: string;
    color?: string;
    command?(event: any): void;
    children?: Array<DataItem | TreeDataItem>;
    data?: any | {
        link: string;
        year: number | string;
    };
    description?: string;
    docId?: string;
    embedLink?: string;
    expandedIcon?: string;
    icon?: string;
    id?: number | string;
    label?: string;
    link?: string;
    published?: string | Date;
    uploaded?: string | Date;
    type?: string;
    expanded?: boolean;
}
export interface TreeDataItem extends DataItem {
    name?: string;
    level: number;
    expandable: boolean;
}
export interface DocGroup {
    group: string;
    type: string;
    link: string;
    year?: number;
}
export interface DocData {
    data: Array<DataItem>;
}
export interface SubComponent {
    icon?: string;
    index?: number;
    label: string;
    path: string;
    viewName?: string;
}

export interface MapInput {
    hood: string;
    block?: string;
    lot?: string;
    zoneColor?: string;
    labelStyle?: string;
}
export interface CartoFields {
    [key: string]:
    | undefined
    | string
    | number
    | boolean;
}

export interface MapInput {
    hood: string;
    block?: string;
    lot?: string;
    proploc?: string;
    zoneColor?: string;
    labelStyle?: string;
}
/**
 * Interface model of response returned from query of NZLUR Zoning Data
 */
export interface CartoSQLResp {
    rows: [
        | ZoningFields
    ];
    time?: number;
    fields?: {
        cartodb_id?: {
            type?: string;
            pgtype?: string;
        };
        the_geom?: {
            type?: string;
            wkbtype?: string;
            dims?: number;
            srid?: number;
        };
        the_geom_webmercator?: {
            type?: string;
            wkbtype?: string;
            dims?: number;
            srid?: number;
        };
        redevelopment_plan?: {
            type?: string;
            pgtype?: string;
        };
        historic_district?: {
            type?: string;
            pgtype?: string;
        };
        blocklot?: {
            type?: string;
            pgtype?: string;
        };
        lot?: {
            type?: string;
            pgtype?: string;
         };
        block?: {
            type?: string;
            pgtype?: string;
        };
        permbt?: {
            type?: string;
            pgtype?: string;
        };
        permuse?: {
            type?: string;
            pgtype?: string;
        };
        property_description?: {
            type?: string;
            pgtype?: string;
        };
        pdf?: {
            type?: string;
            pgtype?: string;
        };
        code?: {
            type?: string;
            pgtype?: string;
        };
        landmark?: {
            type?: string;
            pgtype?: string
        };
        proploc?: {
            type?: string;
            pgtype?: string;
        };
        y?: {
            type?: number;
            pgtype?: string;
        };
        x?: {
            type?: number;
            pgtype?: string;
        };
        updated_at?: {
            type?: string;
            pgtype?: string;
        };
        created_at?: {
            type?: string;
            pgtype?: string;
        };
    };
    total_rows?: number;
}
/**
 * Interface model of response returned from query of NZLUR Zoning Data
 */
export interface ZoningFields {
    cartodb_id?: string;
    the_geom?: string;
    the_geom_webmercator?: string;
    redevelopm?: string;
    historic_d?: string;
    blocklot?: string;
    lot?: string;
    block?: string;
    property_d?: string | HTMLOrSVGScriptElement;
    code?: string | undefined;
    landmark?: null | string;
    primary_us?: Array<string>;
    accessory?: Array<string>;
    building_t?: Array<string>;
    proploc?: string;
    y?: number;
    x?: number;
    updated_at?: string;
    created_at?: string;
}
export interface SearchFeature {
    _id: {
        $oid: string;
    };
    attributes: {
        OBJECTID_12?: number;
        STREET_ADD: string;
        ZIP_CODE?: number;
        BLOCK_LOT: string;
        ADDLOTS?: string;
        PROPCLASS?: string;
        LANDVALUE?: number;
        IMPRVALUE?: number;
        ZONINGCODE?: string;
    };
    geometry: {
        x: number;
        y: number;
    };
}
export interface SearchItem {
    STREET_ADD: string;
    BLOCK_LOT: string;
    geometry: [ number, number ];
}
export interface SearchResult {
    type: 'FeatureCollection';
    properties: {
      exceededTransferLimit: boolean;
    };
    features: Array<SearchFeature>;
}

export interface BoardHearing {
id: string;
groupId: string;
allDay: boolean;
title: 'CPB' | 'EC' | 'ZBA' | 'LHCP';
start: string;
end: string;
backgroundColor: string;
}
export interface DriveSearch {
    kind: 'drive#fileList';
    incompleteSearch: boolean;
    files: [
        {
            kind: 'drive#file';
            id: string;
            name: string;
            mimeType: 'application/pdf' | 'application/vnd.google-apps.folder';
        }
    ];
}
export interface GCalEvent {
    kind: 'calendar#event' | string;
    etag: string;
    id: '_8d9lcgrfdpr6asjk60pj0o9pcgs3eob169hjedpo60o32p1gccp6ceb274omae1ocgr0' | string;
    status: 'confirmed' | string;
    htmlLink: string;
    created: '1900-01-01T12:00:00.000Z' | string;
    updated: '2020-06-05T19:33:47.991Z' | string;
    summary: string;
    description: string;
    creator: { email: 'nterwin714@gmail.com' | string};
    organizer: {
      email: '6a0j49o3e6h43ut32hmbmihnb4@group.calendar.google.com' | string;
      displayName: 'Newark Board Hearings' | string;
      self: boolean
    };
    start: {dateTime: string; };
    end: {dateTime: string; };
    iCalUID: string;
    sequence: number;
  }
export interface GCalResponse {
    kind: 'calendar#events' | string;
    etag: string;
    summary: 'Newark Board Hearings' | string;
    updated: string;
    timeZone: 'America/New_York' | string;
    accessRole: 'reader' | string;
    defaultReminders: [];
    nextSyncToken: string;
    items: Array<GCalEvent>;
}
export interface GSheetsValuesResponse {
    range: string;
    majorDimension: 'ROWS' | 'COLUMNS';
    values: Array<any>;
}
