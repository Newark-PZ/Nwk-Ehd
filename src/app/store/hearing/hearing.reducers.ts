import { createReducer, on } from '@ngrx/store';
import { VirtualHearingTab } from '../../shared/interfaces/other.interface';
import * as HearingActions from './hearing.actions';

export interface State {
    cpbTab: VirtualHearingTab;
    ecTab: VirtualHearingTab;
    lhpcTab: VirtualHearingTab;
    rcTab: VirtualHearingTab;
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
    rcTab: {
        agenda: '',
        board: 'RC',
        data: [],
        fofId: '',
        label: 'Rent Control Board',
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

export const hearingReducer = createReducer(
  initialState,
    on(HearingActions.setTabCPB, (state, action) => ({ ...state, cpbTab: {
            agenda: action.agenda,
            board: 'CPB',
            data: action.data,
            event: action.event,
            label: 'Central Planning Board',
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabEC, (state, action) => ({ ...state, ecTab: {
            agenda: action.agenda,
            board: 'EC',
            data: action.data,
            event: action.event,
            label: 'Environmental Commission',
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabLHPC, (state, action) => ({ ...state, lhpcTab: {
            agenda: action.agenda,
            board: 'LHPC',
            data: action.data,
            event: action.event,
            label: 'Landmarks & Historic Pres.',
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabRC, (state, action) => ({ ...state, rcTab: {
            agenda: action.agenda,
            board: 'RC',
            data: action.data,
            event: action.event,
            label: 'Rent Control Board',
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabZBA, (state, action) => ({ ...state, zbaTab: {
            agenda: action.agenda,
            board: 'ZBA',
            data: action.data,
            event: action.event,
            fofId: action.fofId,
            label: 'Zoning Board of Adjustment',
            prevHearings: action.prevHearings
        }
    }))
);
