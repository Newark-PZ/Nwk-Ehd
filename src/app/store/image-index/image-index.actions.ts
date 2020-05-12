import { Action } from '@ngrx/store';

export const SET_IMAGE_INDEX = '[image-index] Set Current Image Index';
export const RESET_IMAGE_INDEX = '[image-index] Reset Current Image Index to 0';

// tslint:disable: max-classes-per-file
export class SetImageIndex implements Action {
  readonly type = SET_IMAGE_INDEX;
  constructor(public payload: number) {}
}
export class ResetImageIndex implements Action {
  readonly type = RESET_IMAGE_INDEX;
  constructor(public payload: number) {}
}

export type ImageIndexActions =
  | SetImageIndex
  | ResetImageIndex;
