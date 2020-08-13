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
        fields: Array<{type: 'int' | 'text' | string; id: string}>;
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
export interface QBResponse {
    {
        "data": [
          {
            "6": {
              "value": null
            },
            "7": {
              "value": "CPB16-56"
            },
            "8": {
              "value": "Change of Use Kislak Building and 12 Central Ave  "
            },
            "9": {
              "value": "579-581 Broad Street & 12 Central Avenue, Newark, NJ "
            },
            "10": {
              "value": "18"
            },
            "11": {
              "value": ""
            },
            "12": {
              "value": ""
            },
            "13": {
              "value": ""
            },
            "14": {
              "value": ""
            },
            "15": {
              "value": ""
            },
            "16": {
              "value": ""
            },
            "17": {
              "value": ""
            },
            "18": {
              "value": 41
            },
            "19": {
              "value": ""
            },
            "20": {
              "value": "Marsha M. Moore, Esq"
            },
            "21": {
              "value": "(97) 322-8990 x220"
            },
            "22": {
              "value": ""
            },
            "23": {
              "value": ""
            },
            "24": {
              "value": ""
            },
            "25": {
              "value": ""
            },
            "26": {
              "value": ""
            },
            "27": {
              "value": ""
            },
            "28": {
              "value": ""
            },
            "29": {
              "value": ""
            },
            "30": {
              "value": ""
            },
            "31": {
              "value": null
            },
            "32": {
              "value": ""
            },
            "33": {
              "value": ""
            },
            "34": {
              "value": "10"
            },
            "35": {
              "value": ""
            },
            "36": {
              "value": ""
            },
            "37": {
              "value": ""
            },
            "38": {
              "value": "mmoore@postpolak.com "
            },
            "39": {
              "value": ""
            },
            "40": {
              "value": "CPB"
            },
            "41": {
              "value": ""
            },
            "42": {
              "value": ""
            },
            "49": {
              "value": ""
            },
            "50": {
              "value": ""
            },
            "51": {
              "value": ""
            },
            "52": {
              "value": true
            },
            "53": {
              "value": false
            },
            "54": {
              "value": false
            },
            "55": {
              "value": false
            },
            "56": {
              "value": true
            },
            "57": {
              "value": false
            },
            "58": {
              "value": false
            },
            "59": {
              "value": false
            },
            "60": {
              "value": false
            },
            "61": {
              "value": ""
            },
            "62": {
              "value": false
            },
            "63": {
              "value": false
            },
            "64": {
              "value": false
            },
            "67": {
              "value": false
            },
            "68": {
              "value": ""
            },
            "69": {
              "value": ""
            },
            "70": {
              "value": ""
            },
            "74": {
              "value": true
            },
            "75": {
              "value": false
            },
            "76": {
              "value": ""
            },
            "77": {
              "value": ""
            },
            "78": {
              "value": ""
            },
            "79": {
              "value": ""
            },
            "80": {
              "value": "Broad Street Station Redevelopment Plan"
            },
            "81": {
              "value": false
            },
            "82": {
              "value": ""
            },
            "83": {
              "value": false
            },
            "84": {
              "value": false
            },
            "85": {
              "value": 4424
            },
            "86": {
              "value": null
            },
            "87": {
              "value": null
            },
            "90": {
              "value": ""
            },
            "91": {
              "value": ""
            },
            "93": {
              "value": false
            },
            "94": {
              "value": null
            },
            "95": {
              "value": null
            },
            "96": {
              "value": false
            },
            "97": {
              "value": false
            },
            "98": {
              "value": ""
            },
            "99": {
              "value": ""
            },
            "102": {
              "value": null
            },
            "103": {
              "value": null
            },
            "106": {
              "value": ""
            },
            "108": {
              "value": ""
            },
            "109": {
              "value": null
            },
            "110": {
              "value": null
            },
            "111": {
              "value": null
            },
            "112": {
              "value": null
            },
            "113": {
              "value": null
            },
            "114": {
              "value": null
            },
            "115": {
              "value": "Change of use from a multi-family residential with ground floor retail to mixed-use multi-family residential with hotel use (co-lodging) for a total of forty-one (41) units in both buildings. 579-581 Broad will contain a ground floor retail area of approximately 4,424 sf. and 36 units. 12 Central Building will contain five (5) units. "
            },
            "116": {
              "value": ""
            },
            "117": {
              "value": ""
            },
            "118": {
              "value": ""
            },
            "119": {
              "value": ""
            },
            "120": {
              "value": ""
            },
            "121": {
              "value": "https://cityofnewark.quickbase.com/db/bmwy5q4fm?a=API_GenAddRecordForm&_fid_8=4056&z=cb9s"
            },
            "122": {
              "value": ""
            },
            "123": {
              "value": "https://cityofnewark.quickbase.com/db/bnbii22jm?a=API_GenAddRecordForm&_fid_8=4056&z=cb9s"
            },
            "124": {
              "value": ""
            },
            "125": {
              "value": null
            },
            "126": {
              "value": ""
            }
          }
        ],
        "fields": [
          {
            "id": 6,
            "label": "IndexNumber",
            "type": "numeric"
          },
          {
            "id": 7,
            "label": "Docket#",
            "type": "text-multiple-choice"
          },
          {
            "id": 8,
            "label": "ProjName",
            "type": "text"
          },
          {
            "id": 9,
            "label": "ProjectAddress",
            "type": "text"
          },
          {
            "id": 10,
            "label": "Blocks",
            "type": "text-multiple-choice"
          },
          {
            "id": 11,
            "label": "Lots",
            "type": "text"
          },
          {
            "id": 12,
            "label": "RecvdDate",
            "type": "date"
          },
          {
            "id": 13,
            "label": "1fam",
            "type": "text"
          },
          {
            "id": 14,
            "label": "2fam",
            "type": "text"
          },
          {
            "id": 15,
            "label": "3fam",
            "type": "text"
          },
          {
            "id": 16,
            "label": "4fam",
            "type": "text"
          },
          {
            "id": 17,
            "label": "multifam",
            "type": "timeofday"
          },
          {
            "id": 18,
            "label": "#ResidentialUnits",
            "type": "numeric"
          },
          {
            "id": 19,
            "label": "CommercialType",
            "type": "text-multiple-choice"
          },
          {
            "id": 20,
            "label": "ContactName",
            "type": "text-multiple-choice"
          },
          {
            "id": 21,
            "label": "ContactPhone",
            "type": "phone"
          },
          {
            "id": 22,
            "label": "TentativeDate",
            "type": "date"
          },
          {
            "id": 23,
            "label": "DateComplete",
            "type": "date"
          },
          {
            "id": 24,
            "label": "Block2",
            "type": "text"
          },
          {
            "id": 25,
            "label": "Action Taken",
            "type": "text-multiple-choice"
          },
          {
            "id": 26,
            "label": "Date Action Taken",
            "type": "date"
          },
          {
            "id": 27,
            "label": "Date Bond Amount Received",
            "type": "date"
          },
          {
            "id": 28,
            "label": "Date Bond Sent to City Clerk",
            "type": "date"
          },
          {
            "id": 29,
            "label": "Date Bond Release Letter Received",
            "type": "date"
          },
          {
            "id": 30,
            "label": "Date Bond Released",
            "type": "date"
          },
          {
            "id": 31,
            "label": "Bond Amount",
            "type": "currency"
          },
          {
            "id": 32,
            "label": "PgnHole",
            "type": "text-multiple-choice"
          },
          {
            "id": 33,
            "label": "SoilErosion",
            "type": "text-multiple-choice"
          },
          {
            "id": 34,
            "label": "Lot2",
            "type": "text"
          },
          {
            "id": 35,
            "label": "Date Scheduled for Hearing",
            "type": "date"
          },
          {
            "id": 36,
            "label": "RevisedPlans",
            "type": "date"
          },
          {
            "id": 37,
            "label": "DatePreReviewd",
            "type": "date"
          },
          {
            "id": 38,
            "label": "e-mail",
            "type": "email"
          },
          {
            "id": 39,
            "label": "fax",
            "type": "text"
          },
          {
            "id": 40,
            "label": "Board",
            "type": "text-multiple-choice"
          },
          {
            "id": 41,
            "label": "Notes",
            "type": "text"
          },
          {
            "id": 42,
            "label": "DateLetterSent",
            "type": "date"
          },
          {
            "id": 49,
            "label": "Related Record",
            "type": "text"
          },
          {
            "id": 50,
            "label": "Record - BlockNo",
            "type": "text"
          },
          {
            "id": 51,
            "label": "Record - LotNo",
            "type": "text"
          },
          {
            "id": 52,
            "label": "SitePlan",
            "type": "checkbox"
          },
          {
            "id": 53,
            "label": "SubDivision",
            "type": "checkbox"
          },
          {
            "id": 54,
            "label": "Merger",
            "type": "checkbox"
          },
          {
            "id": 55,
            "label": "UseVariance",
            "type": "checkbox"
          },
          {
            "id": 56,
            "label": "Residential",
            "type": "checkbox"
          },
          {
            "id": 57,
            "label": "Industrial",
            "type": "checkbox"
          },
          {
            "id": 58,
            "label": "Warehousing",
            "type": "checkbox"
          },
          {
            "id": 59,
            "label": "Automotive",
            "type": "checkbox"
          },
          {
            "id": 60,
            "label": "Institutional",
            "type": "checkbox"
          },
          {
            "id": 61,
            "label": "FinalRevisedPlans",
            "type": "date"
          },
          {
            "id": 62,
            "label": "Planning",
            "type": "checkbox"
          },
          {
            "id": 63,
            "label": "Engineering",
            "type": "checkbox"
          },
          {
            "id": 64,
            "label": "WaterSewer",
            "type": "checkbox"
          },
          {
            "id": 67,
            "label": "Commercial",
            "type": "checkbox"
          },
          {
            "id": 68,
            "label": "IndustrialType",
            "type": "text-multiple-choice"
          },
          {
            "id": 69,
            "label": "AutomotiveType",
            "type": "text-multiple-choice"
          },
          {
            "id": 70,
            "label": "InstitutionalType",
            "type": "text-multiple-choice"
          },
          {
            "id": 74,
            "label": "CVariance",
            "type": "checkbox"
          },
          {
            "id": 75,
            "label": "Historic",
            "type": "checkbox"
          },
          {
            "id": 76,
            "label": "Related Record2",
            "type": "text"
          },
          {
            "id": 77,
            "label": "Related Record2 - LotNo",
            "type": "text"
          },
          {
            "id": 78,
            "label": "DateDeemedComplete",
            "type": "date"
          },
          {
            "id": 79,
            "label": "Determination",
            "type": "date"
          },
          {
            "id": 80,
            "label": "ZoningDistrict",
            "type": "text-multiple-choice"
          },
          {
            "id": 81,
            "label": "ConditionalUse",
            "type": "checkbox"
          },
          {
            "id": 82,
            "label": "DeterminationDate",
            "type": "date"
          },
          {
            "id": 83,
            "label": "ApplicationNew",
            "type": "checkbox"
          },
          {
            "id": 84,
            "label": "ApplicationRenovation",
            "type": "checkbox"
          },
          {
            "id": 85,
            "label": "ResidentialSqft",
            "type": "numeric"
          },
          {
            "id": 86,
            "label": "CommercialSqft",
            "type": "numeric"
          },
          {
            "id": 87,
            "label": "IndustrialSqft",
            "type": "numeric"
          },
          {
            "id": 90,
            "label": "Ward",
            "type": "text-multiple-choice"
          },
          {
            "id": 91,
            "label": "ZoningDistrict2",
            "type": "text-multiple-choice"
          },
          {
            "id": 93,
            "label": "Industrialsqft2",
            "type": "checkbox"
          },
          {
            "id": 94,
            "label": "Automotivesqft",
            "type": "numeric"
          },
          {
            "id": 95,
            "label": "Institutionalsqft",
            "type": "numeric"
          },
          {
            "id": 96,
            "label": "AdminReview",
            "type": "checkbox"
          },
          {
            "id": 97,
            "label": "CourtesyReview",
            "type": "checkbox"
          },
          {
            "id": 98,
            "label": "ApprovedPermits",
            "type": "text-multiple-choice"
          },
          {
            "id": 124,
            "label": "Additional Comments",
            "type": "text-multi-line"
          },
          {
            "id": 99,
            "label": "EngCertRecived",
            "type": "date"
          },
          {
            "id": 126,
            "label": "Related Permit",
            "type": "dblink"
          },
          {
            "id": 102,
            "label": "InstitutionalSqft2",
            "type": "numeric"
          },
          {
            "id": 103,
            "label": "AutomotiveSqft2",
            "type": "numeric"
          },
          {
            "id": 106,
            "label": "Action Taken Comments",
            "type": "text"
          },
          {
            "id": 108,
            "label": "WareHouseType",
            "type": "text"
          },
          {
            "id": 109,
            "label": "#CommercialUnits",
            "type": "numeric"
          },
          {
            "id": 110,
            "label": "#IndustrialUnits",
            "type": "numeric"
          },
          {
            "id": 111,
            "label": "#AutomotiveUnits",
            "type": "numeric"
          },
          {
            "id": 112,
            "label": "#InstitutionalUnits",
            "type": "numeric"
          },
          {
            "id": 113,
            "label": "#WarehouseUnits",
            "type": "numeric"
          },
          {
            "id": 114,
            "label": "WarehouseSqft",
            "type": "numeric"
          },
          {
            "id": 115,
            "label": "ProjectDescription",
            "type": "text-multi-line"
          },
          {
            "id": 116,
            "label": "ComplianceNotesPlanning",
            "type": "text-multi-line"
          },
          {
            "id": 117,
            "label": "ComplianceNotesEngineering",
            "type": "text-multi-line"
          },
          {
            "id": 118,
            "label": "ComplianceNotesWaterAndSewer",
            "type": "text-multi-line"
          },
          {
            "id": 119,
            "label": "ComplianceNotesHistoric",
            "type": "text-multi-line"
          },
          {
            "id": 120,
            "label": "Attachments",
            "type": "dblink"
          },
          {
            "id": 121,
            "label": "Add Attachment",
            "type": "url"
          },
          {
            "id": 122,
            "label": "Payments",
            "type": "dblink"
          },
          {
            "id": 123,
            "label": "Add Payment",
            "type": "url"
          },
          {
            "id": 125,
            "label": "Total Amount",
            "type": "currency"
          }
        ],
        "metadata": {
          "numFields": 102,
          "numRecords": 5,
          "skip": 0,
          "top": 5,
          "totalRecords": 796
        }
      }
}