export interface AirtablePayload {
  records: Array<Record>;
}
export interface Record {
  id: string;
  fields: FieldSet
    | undefined
    | StaffFields
    | PageCompsFields
    | DocsFields
    | ArticleFields
    | AirBulk
    | AirZones
    | BoardsFields
  ;
  createdTime: string;
}
export interface FieldSet {
  [key: string]:
  | undefined
  | string
  | number
  | boolean
  | Collaborator
  | ReadonlyArray<Collaborator>
  | ReadonlyArray<string>
  | ReadonlyArray<Attachment>;
}

export interface Attachment {
  id?: string;
  url?: string;
  filename?: string;
  size?: number;
  type?: string;
  thumbnails?: {
    small: Thumbnail;
    large: Thumbnail;
    full: Thumbnail;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Collaborator {
  id: string;
  email: string;
  name: string;
}

export interface StaffFields {
  NameFirst: string;
  NameLast: string;
  NameExtra?: string;
  Position?: string;
  Hierarchy?: string | number;
  Headshot?: string | Array<Attachment>;
  Bio?: string;
  Phone?: number;
  Email?: string;
  Room?: number;
}
export interface PageCompsFields {
  name: string;
  page: string;
  tag?: string;
  notes?: string;
  content?: any;
  attachments?: string | Array<Attachment>;
  author?: string | [Array<Record['id']>];
}
export interface DocsFields {
  name: string;
  notes?: string;
  attachments?: string | Array<Attachment>;
}
export interface ArticleFields {
  name: string;
  subtitle: string;
  date?: string;
  tag?: Array<string>;
  coverPhoto?: string | Array<Attachment>;
  description?: string;
  bodyText?: string;
  otherPix?: string | Array<Attachment>;
}
export interface BoardsFields {
  nameLast: string;
  nameFirst: string;
  nameExtra: string;
  boardCommission: 'Environmental Commission' | 'Landmark & Historic Preservation Commission' | 'Central Planning Board' | 'Zoning Board of Adjustment';
  hierarchy: number | string;
  position: string;
  appointedBy: string;
  appointedDistrict: string;
  termEnds: string;
}
export interface AirZones {
  zone: string;
  primaryUses: Array<string>;
  accessoryUses: Array<string>;
  buildingTypes: Array<string>;
  specialNotes?: Array<string>;
  zoneType: string;
}

export interface AirBulk {
  name: string;
  zones: string | Array<string>;
  note: string | Array<string>;
  minLotSize: Array<string>;
  minLotWidth: Array<string>;
  maxBuildingHeight: Array<string>;
  frontYard: Array<string>;
  sideYard: Array<string>;
  minRearYard: Array<string>;
  minLotAreaPerDwelling: Array<string>;
  maxLotCoverage: Array<string>;
  maxImperviousArea: Array<string>;
  minBuildTransparency: Array<string>;
  orientationPrimaryEntrance: Array<string>;
  activeGroundFloorReqs: Array<string>;
}
export interface FirebaseStaff {
    Articles: string;
    Bio: string;
    Class: 'leadership' | 'planners' | 'Support';
    Email: string;
    Headshot: string;
    Hierarchy: number;
    NameExtra: string;
    NameFirst: string;
    NameLastt: string;
    Phone: string;
    Position: string;
    Room: number;
    _id: string;
}
