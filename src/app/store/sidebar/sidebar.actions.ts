import { createAction, props } from '@ngrx/store';

export const toggle = createAction(
  '[Sidebar] Toggle Sidebar'
);
export const setHasSidebar = createAction(
  '[Sidebar] Set Has Sidebar',
  props<{ payload: boolean }>()
);
export const setMode = createAction(
  '[Sidebar] Set Sidebar Mode',
  props<{ payload: string }>()
);
export const setCollapsible = createAction(
  '[Sidebar] Set Collapsible',
  props<{ payload: boolean }>()
);
export const setOpened = createAction(
  '[Sidebar] Set Opened',
  props<{ payload: boolean }>()
);
export const setTitle = createAction(
  '[Sidebar] Set Title',
  props<{ payload: string }>()
);
export const setSelectedModule = createAction(
  '[Sidebar] Set Selected Module',
  props<{ payload: string }>()
);
