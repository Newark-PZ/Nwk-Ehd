import { createReducer, on } from '@ngrx/store';
import * as I18nActions from './i18n.actions';

export interface State {
  currentLanguage: string;
}

const initialState: State = {
  currentLanguage: 'en'
};

export const i18nReducer = createReducer(
  initialState,
  on(I18nActions.setLanguage, (state, action) => ({ ...state, currentLanguage: action.payload }))
);
