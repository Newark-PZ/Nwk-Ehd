import { createAction, props } from '@ngrx/store';

export const toggle = createAction(
  '[Sidebar Right] Toggle Sidebar'
);
export const setHasSidebar = createAction(
  '[Sidebar Right] Set Has Sidebar',
  props<{ payload: boolean }>()
);
export const setMode = createAction(
  '[Sidebar Right] Set Sidebar Mode',
  props<{ payload: string }>()
);
export const setCollapsible = createAction(
  '[Sidebar Right] Set Collapsible',
  props<{ payload: boolean }>()
);
export const setOpened = createAction(
  '[Sidebar Right] Set Opened',
  props<{ payload: boolean }>()
);
export const setTitle = createAction(
  '[Sidebar Right] Set Title',
  props<{ payload: string }>()
);
export const setSelectedModule = createAction(
  '[Sidebar Right] Set Selected Module',
  props<{ payload: string }>()
);
