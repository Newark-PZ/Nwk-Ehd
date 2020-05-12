import * as MapPaneActions from './map-pane.actions';

export interface State {
  opened: boolean;
  title: string;
  selectedModule: number;
}

const initialState: State = {
  opened: false,
  title: '',
  selectedModule: 0
};

export const mapPaneReducer = (
  state = initialState,
  action: MapPaneActions.MapPaneActions
) => {
  switch (action.type) {
    case MapPaneActions.TOGGLE:
      return { ...state, opened: !state.opened };
    case MapPaneActions.SET_OPENED:
      return { ...state, opened: action.payload };
    case MapPaneActions.SET_TITLE:
      return { ...state, title: action.payload };
    case MapPaneActions.SET_SELECTED_MODULE:
      return { ...state, selectedModule: action.payload };
    default:
      return state;
  }
};
