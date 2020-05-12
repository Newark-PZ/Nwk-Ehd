import { SidebarLink } from '../../shared/interfaces/other.interface';
import * as RouteActions from './routes.actions';

export interface State {
  routesArray?: Array<SidebarLink>;
}

const initialState: State = {
 routesArray: undefined
};

export const routesReducer = (
  state = initialState,
  action: RouteActions.routesActions
) => {
  switch (action.type) {
    case RouteActions.SET_ROUTE_ARRAY:
      return { ...state, routesArray: action.payload };
    default:
      return state;
  }
};
