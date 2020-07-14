import { ArcFeature, SearchItem } from '../../shared/models';
import * as PropPaneActions from './prop-pane.actions';

export interface State {
  opened: boolean;
  title: string;
  selectedProp: SearchItem;
  selectedGeo: any;
  propInfo: ArcFeature;
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
    attributes: {
      AREA: 0,
      ADDLOTS: '',
      BLOCK_LOT: '00-00',
      PROPLOC: '',
      BUILDDESC: '',
      PROPCLASS: '',
      LANDVALUE: '',
      IMPRVALUE: '',
      REDEV_AREA: 'No',
      ZONING: '',
      HISTORIC: 'No'
    },
    centroid: { x: 0, y: 0 }
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
