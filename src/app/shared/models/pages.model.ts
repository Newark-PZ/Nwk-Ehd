import { Record } from './airtable-model';
import { SubComponent } from './interfaces';
import { NgStyle } from '@angular/common';

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
}
export interface HomePage {
    backgroundStyling?: {
        background?: string;
        height?: string;
        padding?: string;
        'background-attachment'?: string;
        'background-blend-mode'?: string;
        'background-color'?: string;
        'background-image'?: string;
        'background-repeat'?: string;
        'background-size'?: string;
    };
    contentIntro: {
        right?: {text: string; };
        header?: string;
        text?: string;
        footer?: string;
        events?: Array<{
            event: string;
            date?: string;
            icon?: string;
            link?: string;
            extUrl?: string;
            parent?: string;
        }>
    };
    buttons?: Array<HomeCard>;
    buttonCategories: Array<string>;
    officer?: {
        name: string;
        position?: string;
        flair?: string;
        pic?: string;
    };
    searchDisplay?: boolean | string;
    splashTitle?: Array<Record> | string;
    splashImgs?: Array<{src: string; alt: string}>;
    splashBlurb?: {
        text: string;
        buttons?: Array<{ text: string; link?: string;  extUrl?: string; parent?: string;  }>;
    };
}
export interface BoardPage {
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
        events?: Array<{
            event: string;
            date?: string;
            icon?: string;
            link?: string;
            extUrl?: string;
            parent?: string;
        }>
    };
    buttons: Array<HomeCard>;
    buttonCategories: Array<string>;
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
export interface StaffPage {
    title: string;
    subtitle?: string;
    infoButtons?: Array<{text: string; link?: string;  extUrl?: string; parent?: string; }>;
    icon?: string;
    introText?: string;
    introPic?: string;
    contentIntro: {
        right?: {text: string; };
        header?: string;
        text?: string;
        footer?: string;
        events?: Array<{
            event: string;
            date?: string;
            icon?: string;
            link?: string;
            extUrl?: string;
            parent?: string;
        }>
    };
    buttons: Array<HomeCard>;
    staffClasses?: Array<string>;
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
    title: string;
    subtitle: string;
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
    searchDisplay?: boolean | string;
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
    subComponents?: Array<SubComponent>;
}

export interface AppPage {
    title: string;
    subtitle?: string;
    startingButtons?: Array<HomeCard>;
    icon?: string;
    introText?: string;
    introPic?: string;
    contentIntro: {
        right?: {text: string; };
        header?: string;
        text?: string;
        footer?: string;
        events?: Array<{
            event: string;
            date?: string;
            icon?: string;
            link?: string;
            extUrl?: string;
            parent?: string;
        }>
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
    hideBottomBar?: boolean | false;
}
