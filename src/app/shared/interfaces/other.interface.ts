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
  agenda?: string;
  fofId?: string;
  event?: Hearing;
  data?: Array<DataRow>;
  prevHearings?: Array<{event: Hearing; data: Array<DataRow>}>;
  currentEvent?: CalEvent;
}
