import { NgStyle } from '@angular/common';
import { Type } from '@angular/core';
import { Hearing } from '../classes/hearing';
import { Link } from '../classes/link.class';
import { Record } from './airtable-model';
import { DataRow } from './interfaces';

export interface LinkOptions {
    id: string;
    title: string;
    office: 'ehd' | 'planningzoning' | 'rentcontrol';
    parent?: string;
    icon?: string;
    children?: Array<Link>;
    component?: Type<any>;
    isChild?: boolean;
    queryParams?: object;
}
export interface HomeCard {
    id?: string;
    title: string;
    subtext?: string;
    subtexticon?: string;
    icon:
        'business_center'
        | 'people'
        | 'person'
        | 'house'
        | 'color_lens'
        | 'local_dining'
        | 'local_hospital'
        | 'info'
        | 'calendar'
        | 'file'
        | string;
    link?: string;
    extUrl?: string;
    parent?: string;
    category: string;
    isEvent?: boolean;
    params?: object;
    disabled?: boolean;
    new?: boolean;
}
export interface CalEvent {
    event: string;
    eventType?: string;
    board?: 'CPB' | 'EC' | 'LHPC' | 'ZBA';
    date?: string;
    icon?: string;
    link?: string;
    extUrl?: string;
    parent?: string;
    expanded?: boolean;
    data?: Array<any>;
}
export interface HomePage {
    id: string;
    contentIntro: {
        right?: {text: string; };
        header?: string;
        text?: string;
        footer?: string;
        events?: Array<CalEvent>
    };
    buttons?: Array<HomeCard>;
    buttonCategories: Array<string>;
    officer?: {
        name: string;
        position?: string;
        flair?: string;
        pic?: string;
    };
    contact?: {
      header?: string;
      contacts: Array<{
        officer?: string;
        officerTitle?: string;
        phone?: string;
        fax?: string;
        email?: string;
        room: string;
        img?: string;
        buttons?: Array<{
          link?: string;
          linkText?: string;
          fullWidth?: boolean;
        }>;
        text?: string;
      }>;
    };
    sections?: Array<{
        header?: string;
        buttons?: Array<{
          link?: string;
          linkText?: string;
          fullWidth?: boolean;
        }>;
        text: string;
        logos?: Array<string>;
        list?: Array<{ text: string; subText?: string; hierarchy?: number; }>;
      }>;
    splashTitle?: Array<Record> | string;
    splashImg?: {src: string; alt: string};
    splashBlurb?: {
        text: string;
        buttons?: Array<{ text: string; link?: string;  extUrl?: string; parent?: string;  disabled?: boolean}>;
    };
}
export interface BoardPage {
    id: string;
    title: string;
    subtitle?: string;
    infoButtons?: Array<{text: string; icon?: string; live?: boolean; link?: string;  extUrl?: string; parent?: string; style?: NgStyle; }>;
    icon?: string;
    introText?: string;
    introPic?: string;
    contentIntro: {
        right?: {text: string; };
        header?: string;
        text?: string;
        footer?: string;
        events?: Array<CalEvent>
    };
    buttons: Array<HomeCard>;
    buttonCategories: Array<string>;
    members?: Array<{nameLast: string; nameFirst: string; boardCommission: string; hierarchy: number; position: string}>;
    officer?: {
        name: string;
        position?: string;
        flair?: string;
        pic?: string;
    };
    searchDisplay?: boolean | string;
    splashImgs?: Array<{src: string; alt: string}>;
    splashBlurb?: {
        text: string;
        buttons?: Array<{ text: string; link?: string;  extUrl?: string; parent?: string;  }>;
    };
    sections?: Array<{
        header?: string;
        buttons?: Array<{
          link?: string;
          linkText?: string;
          fullWidth?: boolean;
        }>;
        text: string;
        logos?: Array<string>;
      }>;
}

export interface Page {
  id: string;
  contentIntro?: {
    left?: {
      header?: string;
      img?: string;
      text?: string;
    };
    middle?: {
      header?: string;
      img?: string;
      text?: string;
    };
    right?: {
      header?: string;
      img?: string;
      text?: string;
    };
    footer?: string;
    events?: Array<CalEvent>;
  };
  contact?: {
    header?: string;
    hideContactForm?: boolean;
    contacts: Array<{
      officer?: string;
      officerTitle?: string;
      phone?: string;
      fax?: string;
      email?: string;
      room: string;
      buttons?: Array<{
        link?: string;
        linkText?: string;
        fullWidth?: boolean;
      }>;
      text?: string;
    }>;
  };
  sections?: Array<{
      header?: string;
      buttons?: Array<{
        link?: string;
        linkText?: string;
        fullWidth?: boolean;
      }>;
      normal?: boolean;
      text: string;
      iframe?: boolean;
      faq?: string;
      map?: boolean;
      logos?: Array<string>;
      list?: Array<{ text: string; subText?: string; hierarchy?: number; }>;
      tables?: Array<{ title: string; columns: Array<string>; rows: Array<object>; }>
    }>;
  acknowledgments?: Array<{
      header?: string;
      buttons?: Array<{
        link?: string;
        linkText?: string;
        fullWidth?: boolean;
      }>;
      text: string;
      logos?: Array<string>;
    }>;
  splashIcon?: string;
  splashTitle?: Array<Record> | string;
  splashImg?: {src: string; alt: string};
  splashBlurb?: {
      text: string;
      buttons?: Array<{ text: string; link?: string;  extUrl?: string; parent?: string;  }>;
  };
  specialButtons?: Array<{
    icon: string;
    title: string;
    subtext?: string;
    specialIcon?: string;
    parent?: string;
    link?: string;
    params?: { group: string; type: string; year?: number; },
    category?: string;
    extUrl?: string;
    disabled?: boolean;
  }>;
}
export interface FaqCategory {
    name: string;
    children?: Array<Faq>;
  }
export interface Faq {
  Name: string;
  Answer: string;
  Category: string;
  Type?: string;
  Question: string;
  tableRows?: Array<Array<string>>;
  LastUpdated?: string;
}
export interface FooterList {
  text: string;
  path?: string | Array<string>;
  url?: string;
  params?: object;
  disabled?: boolean;
  children?: Array<FooterList>;
}
export interface VirtualHearingTab {
  board: 'CPB' | 'EC' | 'LHPC' | 'ZBA' | string;
  label: string;
  agenda?: string;
  fofId?: string;
  event?: Hearing;
  data?: Array<DataRow>;
  prevHearings?: Array<{event: Hearing; data: Array<DataRow>}>;
}
export interface LegendItem {
  layer: string;
  group: any;
  items: Array<[string, string, string, string?]>;
}
