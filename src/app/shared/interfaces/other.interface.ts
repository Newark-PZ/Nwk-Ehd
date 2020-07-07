import { Route } from '@angular/router';
import { Hearing } from '../classes/hearing';
import { CalEvent } from '../models';

export interface ModalConfig {
  header?: string;
  message?: string;
  event?: CalEvent;
  link?: string;
  tabIndex?: number;
  eventButtons?: Array<{id: string; link: string; linkText: string; icon: string; styling?: string; }>;
}
export interface StoreConfigImageIndex {
  currentINnex?: number;
}
export interface StoreConfigI18n {
  currentLanguage?: 'en' | 'fr' | 'sp' | 'pr';
}
export interface StoreConfigHomePanels {
  open: boolean;
  multi: boolean;
  toggleDisabled: boolean;
}
export interface SidebarLink extends Route {
  title?: string;
  icon?: string;
  children?: Array<SidebarLink>;
  parentFragment?: string;
  isChild?: boolean;
  viewName?: string;
}
export interface ProgramPage {
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
  title: string;
  subtitle: string;
  introText: string;
  introPic?: string;
  download?: boolean;
  infoButtons?: Array<{
    link?: string;
    linkText?: string;
    fullWidth?: boolean;
  }>;
  purposeHeader?: string;
  purpose?: Array<{
    header?: string;
    body?: string;
    rows?: '1' | string;
  }>;
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
export interface FaqPage {
  type: 'tenants' | 'homeowners';
  icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
  title: string;
}
export interface FaqCategory {
  name: string;
  children?: Array<TenantFaq>;
}
export interface TenantFaq {
  name: string;
  Categories: 'Lockout'
    | 'Court Hearings'
    | 'Subsidized Tenants'
    | 'Additional Housing Assistance'
    | 'Emergency Assistance'
    | 'Electricity, Gas, Water';
  question: string;
  answer: string;
  info?: string;
}
export interface HomeownerFaq {
  name: string;
  Categories: 'Removals'
    | 'Court_Hearings';
  question: string;
  answer: string;
  info?: string;
  extraInfo?: Array<string>;
}
export interface ResourcePage {
    title: string;
    icon: 'business_center' | 'people' | 'person' | 'house' | 'color_lens' | 'local_dining' | 'local_hospital';
    introPic?: string;
    introContent?: Array<{
      header?: string;
      link?: string;
      linkText?: string;
      text: string;
    }>;
    sectionHeader?: string;
    programs?: Array<{
        header?: string;
        link?: string;
        linkText?: string;
        text: string;
        footer?: string;
      }>;
    hideBottomBar?: boolean;
}
export interface DataRow {
  board: string;
  app: string;
  address: string;
  link: string;
  type: 'folders' | string;
}
export interface VirtualHearingTab {
  board: 'CPB' | 'EC' | 'LHPC' | 'ZBA' | string;
  label: string;
  live: boolean;
  disabled?: boolean;
  agenda?: string;
  fofId?: string;
  event?: Hearing;
  data?: Array<DataRow>;
  prevHearings?: Array<{event: Hearing; data: Array<DataRow>}>;
  currentEvent?: CalEvent;
}
