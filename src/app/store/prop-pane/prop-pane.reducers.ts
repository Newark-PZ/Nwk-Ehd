import { createReducer, on } from '@ngrx/store';
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

export const propPaneReducer = createReducer(
  initialState,
    on(PropPaneActions.toggle, state => ({ ...state, opened: !state.opened })),
    on(PropPaneActions.setOpened, (state, action) => ({ ...state, opened: action.payload })),
    on(PropPaneActions.setTitle, (state, action) => ({ ...state, title: action.payload })),
    on(PropPaneActions.setSelectedProp, (state, action) => ({ ...state, selectedProp: action.payload })),
    on(PropPaneActions.setSelectedGeo, (state, action) => ({ ...state, selectedGeo: action.payload })),
    on(PropPaneActions.setPropInfo, (state, action) => ({ ...state, propInfo: action.payload }))
);
