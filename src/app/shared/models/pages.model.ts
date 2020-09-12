import { NgStyle } from '@angular/common';
import { Type } from '@angular/core';
import { Hearing } from '../classes/hearing';
import { Link } from '../classes/link.class';
import { Record } from './airtable-model';
import { DataRow, SubComponent } from './interfaces';

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
    contact?: {
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
      };
    buttons?: Array<HomeCard>;
    buttonCategories: Array<string>;
    officer?: {
        name: string;
        position?: string;
        flair?: string;
        pic?: string;
    };
    searchDisplay?: boolean | false;
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
    splashTitle?: Array<Record> | string;
    splashImg?: {src: string; alt: string};
    splashBlurb?: {
        text: string;
        buttons?: Array<{ text: string; link?: string;  extUrl?: string; parent?: string;  }>;
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
    title: string;
    subtitle?: string;
    subtitleOpts?: Array<any>;
    icon?: string;
    introText?: string;
    introPic?: string;
    contentIntro?: {
        right?: {text: string; };
        header?: string;
        text?: string;
        footer?: string;
    };
    buttons?: Array<HomeCard>;
    buttonCategories?: Array<string>;
    officer?: {
        name: string;
        flair?: string;
        pic?: string;
    };
    listBase?: string;
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
    hideBottomBar?: boolean;
    subComponents?: Array<SubComponent>;
}
export interface FaqCategory {
    name: string;
    children?: Array<Faq>;
  }
export interface Faq {
  Name: string;
  Answer: string;
  Category: string;
  Question: string;
  tableRows?: Array<Array<string>>;
  LastUpdated: string;
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
