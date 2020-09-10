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
    name: string;
    disabled?: boolean;
    type?: string;
    year?: number;
    docs?: Array<DocGroup>;
}
export interface DocSubGroup {
    group: string;
    type: string;
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
        | ParcelFields
    ];
    time?: number;
    fields?: any;
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
export interface ParcelFields {
    cartodb_id?: string;
    the_geom?: string;
    the_geom_webmercator?: string;
    objectid: number;
    proploc: string;
    blocklot: string;
    addlots: string;
    ward: string;
    zipcode: string;
    propclass: string;
    zone: string;
    property_t: string;
    acreage: number;
    landvalue: number;
    imprvalue: number;
    lstyrtax: number;
    historicdi: string;
    opportunit: string;
    inuez: boolean | string;
    redevcode: string;
    redevarea: string;
    cop_use: string;
    cop_rda: string;
    shape_length: number;
    shape_area: number;
}
export interface SearchFeature {
    _id: {
        $oid: string;
    };
    Address: string;
    X: number;
    Y: number;
    BlockLot: string;
    PropLoc: string;
}
export interface SearchItem {
    STREET_ADD: string;
    BLOCK_LOT: string;
    geometry: [number, number];
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
    title: 'CPB' | 'EC' | 'LHPC' | 'RC' | 'ZBA';
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
    creator: { email: 'nterwin714@gmail.com' | string };
    organizer: {
        email: '6a0j49o3e6h43ut32hmbmihnb4@group.calendar.google.com' | string;
        displayName: 'Newark Board Hearings' | string;
        self: boolean
    };
    start: { dateTime: string; };
    end: { dateTime: string; };
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
export interface ArcFeature {
    attributes: {
        AREA: number;
        ADDLOTS: string;
        BLOCK_LOT: string;
        PROPLOC: string;
        BUILDDESC: string;
        PROPCLASS: string;
        LANDVALUE: string;
        IMPRVALUE: string;
        REDEV_AREA: 'Yes' | 'No';
        ZONING: string;
        HISTORIC: 'Yes' | 'No';
    };
    centroid: { x: number; y: number; };
}
export interface ArcPropResponse {
    objectIdFieldName: 'FID' | string;
    uniqueIdField: { name: 'FID' | string; isSystemMaintained: boolean; };
    globalIdFieldName: any;
    geometryType: 'esriGeometryPolygon';
    spatialReference: { wkid: 102100 | number; latestWkid: 3857 | number; };
    fields: Array<{
        name: string;
        type: 'esriFieldTypeDouble',
        alias: string;
        sqlType: string;
        domain: any;
        defaultValue: any;
    }>;
    features: Array<ArcFeature>;
}
export interface RedevCodeRecord {
    _id: number;
    RedevCode: string;
    RedevPlan: string;
    RedevZone: string;
    'rank RedevCode': number;
}
export interface AppData {
    AddBlockLot: string;
    'Affordable Housing Trust Contibution': string;
    'Amount of Contribution': string;
    AppNo: string;
    'BOARD APPROVAL DATE': string;
    'C of O STATUS': string;
    'Commercial Bldg Area': string;
    'Commercial Units': string;
    EJCIO: string;
    Escrow: string;
    'Existing Res Bldg. Area': string | number;
    'Existing Res Units': string | number;
    HistoricDistrict: string;
    'IZO Minimum': string | number;
    'Industrial Bldg Area': string;
    LegalAddress: string;
    NOTES_COMMENTS: string;
    'Other Bldg Area': string | number;
    'PROJECT STATUS': string;
    PrimaryBlockLot: string;
    'Proposed Res Bldg. Area': string | number;
    'Proposed Res Units': string | number;
    'Total Amount Received': string;
    Ward: string;
    Zone: string;
}
export interface RentControlData {
    _id: number;
    BlockLot: string;
    Qualifier: string;
    ResidentialUnits: number;
    ExemptFromRentControl: string;
    OwnerOccupied: string;
    NewConstruction: string;
    SubstantialRehab: string;
    MotelHotel: string;
    CommercialRental: string;
    SubsidizedRehabilitation: string;
    PubliclyFundedHousingProjects: string;
    'BLQ - PropLoc2': string;
    'BLQ - PropZIP': number;
    PropertyAlsoKnownAs: string;
    'BLQ - PropClass': string;
    'BLQ - Ward': string;
    'BLQ - BuildNumberOfUnits': string;
    PropertyComments: string;
    DateRecieved: Date;
    OwnerEmail: string;
    'BLQ - OwnersName': string;
    'BLQ - OwnerAddr1': string;
    'BLQ - OwnerAddr2': string;
    'BLQ - ZipCode': number;
    OwnersName: string;
    OwnersPhone: string;
    OwnerAddress: string;
    RentRegistration2014: string;
    RentRegistration2015: string;
    RentRegistration2016: string;
    RentRegistration2017: string;
    RentRegistration2018: string;
    RentRegistration2019: string;
    RentRegistration2020: string;
    'Current Registration': number;
    'Date Created': Date;
    'Date Modified': Date;
}
export interface CKANResponse {
    help: string;
    success: boolean;
    result: {
        include_total: boolean;
        resource_id: string;
        fields: Array<{ type: 'int' | 'text' | string; id: string }>;
        records_format: string;
        q: string | object;
        records: Array<RedevCodeRecord | RentControlData | any>;
        _links: {
            start: string;
            next: string;
        };
        total: number;
    };
}
