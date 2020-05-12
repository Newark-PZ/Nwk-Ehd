import { ZoningFields } from '../../shared/models';
import * as PropPaneActions from './prop-pane.actions';

export interface State {
  opened: boolean;
  title: string;
  selectedProp: { blocklot: string; address: string; coords: [number, number]; };
  propInfo: ZoningFields;
}

const initialState: State = {
  opened: false,
  title: '',
  selectedProp: { blocklot: '', address: '', coords: [0, 0] },
  propInfo: {
    cartodb_id: '',
    the_geom: '',
    the_geom_webmercator: '',
    redevelopm: '',
    historic_d: '',
    blocklot: '',
    lot: '',
    block: '',
    property_d: '',
    code: '',
    landmark: '',
    primary_us: [''],
    accessory: [''],
    building_t: [''],
    proploc: ''
  }
};

export const propPaneReducer = (
  state = initialState,
  action: PropPaneActions.PropPaneActions
) => {
  switch (action.type) {
    case PropPaneActions.TOGGLE:
      return { ...state, opened: !state.opened };
    case PropPaneActions.SET_OPENED:
      return { ...state, opened: action.payload };
    case PropPaneActions.SET_TITLE:
      return { ...state, title: action.payload };
    case PropPaneActions.SET_SELECTED_PROP:
      return { ...state, selectedProp: action.payload };
    case PropPaneActions.SET_PROP_INFO:
      return { ...state, propInfo: action.payload };
    default:
      return state;
  }
};