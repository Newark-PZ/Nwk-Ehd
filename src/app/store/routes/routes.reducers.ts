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

export const routesReducer = (
  state = initialState,
  action: RouteActions.routesActions
) => {
  switch (action.type) {
    case RouteActions.SET_OFFICE:
      return { ...state, office: action.payload };
    case RouteActions.SET_ROUTE_ARRAY:
      return { ...state, routesArray: action.payload };
    default:
      return state;
  }
};
