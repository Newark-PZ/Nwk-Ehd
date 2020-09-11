import { createReducer, on } from '@ngrx/store';
import { Link } from '../../shared/classes/link.class';
import * as RouteActions from './routes.actions';

export interface State {
  office: string;
  routesArray?: Array<Link>;
}

const initialState: State = {
  office: 'ehd',
  routesArray: undefined
};

export const routesReducer = createReducer(
  initialState,
  on(RouteActions.setCurrentOffice, (state, action) => ({ ...state, office: action.payload })),
  on(RouteActions.setRouteArray, (state, action) => ({ ...state, routesArray: action.payload }))
);
