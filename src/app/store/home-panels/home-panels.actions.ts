import { createAction, props } from '@ngrx/store';

export const setOpen = createAction(
  '[Home Panels] Set Expansion Open',
  props<{ payload: boolean }>()
);
export const setMulti = createAction(
  '[Home Panels] Set Expansion Multi',
  props<{ payload: boolean }>()
);
export const setToggle = createAction(
  '[Home Panels] Set Expansion Toggle',
  props<{ payload: boolean }>()
);
