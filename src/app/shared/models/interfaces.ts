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
    pubDate?: string | Date;
    type?: string;
}
export interface TreeDataItem extends DataItem {
    name?: string;
    level: number;
    expandable: boolean;
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
    type: 'Feature';
    geometry: {
      type: 'Point';
      coordinates: [number, number];
    };
    properties: {
        STREET_ADD: string;
        BLOCK_LOT: string;
    };
}
export interface SearchResult {
    type: 'FeatureCollection';
    properties: {
      exceededTransferLimit: boolean;
    };
    features: Array<SearchFeature>;
}
