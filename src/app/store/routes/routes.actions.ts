import { createAction, props } from '@ngrx/store';
import { Link } from '../../shared/classes/link.class';

export const setCurrentOffice = createAction(
  '[Routes] Set Office',
  props<{ payload: string }>()
);
export const setRouteArray = createAction(
  '[Routes] Set Route Array',
  props<{ payload: Array<Link> }>()
);
