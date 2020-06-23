import { VirtualHearingTab } from '../../shared/interfaces/other.interface';
import * as HearingActions from './hearing.actions';

export interface State {
    cpbTab: VirtualHearingTab;
    ecTab: VirtualHearingTab;
    lhcpTab: VirtualHearingTab;
    zbaTab: VirtualHearingTab;
}

const initialState: State = {
    cpbTab: {
        agenda: '',
        board: 'CPB',
        data: [],
        disabled: false,
        label: 'Central Planning Board',
        live: false,
        prevHearings: []
    },
    ecTab: {
        agenda: '',
        board: 'EC',
        data: [],
        disabled: true,
        label: 'Environmental Commission',
        live: false,
        prevHearings: []
    },
    lhcpTab: {
        agenda: '',
        board: 'LHPC',
        data: [],
        disabled: true,
        label: 'Landmark & Historic Preservation Committee',
        live: false,
        prevHearings: []
    },
    zbaTab: {
        agenda: '',
        board: 'ZBA',
        data: [],
        disabled: false,
        fofId: '',
        label: 'Zoning Board of Adjustment',
        live: false,
        prevHearings: []
    }
};

export const hearingReducer = (
  state = initialState,
  action: HearingActions.HearingActions
) => {
  switch (action.type) {
    case HearingActions.SET_TAB_CPB:
      return { ...state, cpbTab: {
            agenda: action.payload.agenda,
            board: 'CPB',
            data: action.payload.data,
            disabled: false,
            event: action.payload.event,
            label: 'Central Planning Board',
            live: false,
            prevHearings: action.payload.prevHearings
        }
    };
    case HearingActions.SET_TAB_EC:
        return { ...state, ecTab: {
            agenda: action.payload.agenda,
            board: 'EC',
            data: action.payload.data,
            disabled: true,
            event: action.payload.event,
            label: 'Environmental Commission',
            live: false,
            prevHearings: action.payload.prevHearings
        }
    };
    case HearingActions.SET_TAB_LHPC:
        return { ...state, lhcpTab: {
            agenda: action.payload.agenda,
            board: 'LHCP',
            data: action.payload.data,
            disabled: true,
            event: action.payload.event,
            label: 'Landmark & Historic Preservation Commission',
            live: false,
            prevHearings: action.payload.prevHearings
        }
    };
    case HearingActions.SET_TAB_ZBA:
        return { ...state, zbaTab: {
            agenda: action.payload.agenda,
            board: 'ZBA',
            data: action.payload.data,
            disabled: false,
            event: action.payload.event,
            fofId: action.payload.fofId,
            label: 'Zoning Board of Adjustment',
            live: false,
            prevHearings: action.payload.prevHearings
        }
    };
    default:
      return state;
  }
};
