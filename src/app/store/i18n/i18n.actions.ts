import { createAction, props } from '@ngrx/store';

export const setLanguage = createAction(
  '[il8n] Set Current Language',
  props<{ payload: string }>()
);
