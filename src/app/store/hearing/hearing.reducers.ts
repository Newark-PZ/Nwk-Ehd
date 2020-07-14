import { VirtualHearingTab } from '../../shared/interfaces/other.interface';
import * as HearingActions from './hearing.actions';

export interface State {
    cpbTab: VirtualHearingTab;
    ecTab: VirtualHearingTab;
    lhpcTab: VirtualHearingTab;
    zbaTab: VirtualHearingTab;
}

const initialState: State = {
    cpbTab: {
        agenda: '',
        board: 'CPB',
        data: [],
        label: 'Central Planning Board',
        prevHearings: []
    },
    ecTab: {
        agenda: '',
        board: 'EC',
        data: [],
        label: 'Environmental Commission',
        prevHearings: []
    },
    lhpcTab: {
        agenda: '',
        board: 'LHPC',
        data: [],
        label: 'Landmarks & Historic Pres.',
        prevHearings: []
    },
    zbaTab: {
        agenda: '',
        board: 'ZBA',
        data: [],
        fofId: '',
        label: 'Zoning Board of Adjustment',
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
            event: action.payload.event,
            label: 'Central Planning Board',
            prevHearings: action.payload.prevHearings
        }
    };
    case HearingActions.SET_TAB_EC:
        return { ...state, ecTab: {
            agenda: action.payload.agenda,
            board: 'EC',
            data: action.payload.data,
            event: action.payload.event,
            label: 'Environmental Commission',
            prevHearings: action.payload.prevHearings
        }
    };
    case HearingActions.SET_TAB_LHPC:
        return { ...state, lhpcTab: {
            agenda: action.payload.agenda,
            board: 'LHPC',
            data: action.payload.data,
            event: action.payload.event,
            label: 'Landmarks & Historic Pres.',
            prevHearings: action.payload.prevHearings
        }
    };
    case HearingActions.SET_TAB_ZBA:
        return { ...state, zbaTab: {
            agenda: action.payload.agenda,
            board: 'ZBA',
            data: action.payload.data,
            event: action.payload.event,
            fofId: action.payload.fofId,
            label: 'Zoning Board of Adjustment',
            prevHearings: action.payload.prevHearings
        }
    };
    default:
      return state;
  }
};
