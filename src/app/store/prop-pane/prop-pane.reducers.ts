import { ParcelFields, SearchItem } from '../../shared/models';
import * as PropPaneActions from './prop-pane.actions';

export interface State {
  opened: boolean;
  title: string;
  selectedProp: SearchItem;
  selectedGeo: any;
  propInfo: ParcelFields;
}

const initialState: State = {
  opened: false,
  title: '',
  selectedProp: {
     BLOCK_LOT: '',
     STREET_ADD: '',
     geometry: [ 0, 0 ]
  },
  propInfo: {
    cartodb_id: '',
    the_geom: '',
    the_geom_webmercator: '',
    objectid: 0,
    ward: 'CENTRAL',
    zipcode: '',
    blocklot: '000-00',
    addlots: '000-00',
    proploc: '',
    propclass: '',
    acreage: 0,
    landvalue: 0,
    imprvalue: 0,
    lstyrtax: 0,
    zone: 'R-6',
    property_t: '',
    historicdi: '',
    opportunit: '',
    inuez: false,
    redevcode: '',
    redevarea: '',
    cop_use: '',
    cop_rda: '',
    shape_length: 0,
    shape_area: 0
  },
  selectedGeo: undefined
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
    case PropPaneActions.SET_SELECTED_GEO:
      return { ...state, selectedGeo: action.payload };
    case PropPaneActions.SET_PROP_INFO:
      return { ...state, propInfo: action.payload };
    default:
      return state;
  }
};
