import { createReducer, on } from '@ngrx/store';
import { VirtualHearingTab } from '../../shared/models/pages.model';
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
        label: 'Central Planning Board',
        upcomingHearings: [],
        prevHearings: []
    },
    ecTab: {
        agenda: '',
        board: 'EC',
        label: 'Environmental Commission',
        upcomingHearings: [],
        prevHearings: []
    },
    lhpcTab: {
        agenda: '',
        board: 'LHPC',
        label: 'Landmarks & Historic Pres.',
        upcomingHearings: [],
        prevHearings: []
    },
    rcTab: {
        agenda: '',
        board: 'RC',
        fofId: '',
        label: 'Rent Control Board',
        upcomingHearings: [],
        prevHearings: []
    },
    zbaTab: {
        agenda: '',
        board: 'ZBA',
        fofId: '',
        label: 'Zoning Board of Adjustment',
        upcomingHearings: [],
        prevHearings: []
    }
};

export const hearingReducer = createReducer(
  initialState,
    on(HearingActions.setTabCPB, (state, action) => ({ ...state, cpbTab: {
            agenda: action.agenda,
            board: 'CPB',
            event: action.event,
            label: 'Central Planning Board',
            upcomingHearings: action.upcomingHearings,
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabEC, (state, action) => ({ ...state, ecTab: {
            agenda: action.agenda,
            board: 'EC',
            event: action.event,
            label: 'Environmental Commission',
            upcomingHearings: action.upcomingHearings,
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabLHPC, (state, action) => ({ ...state, lhpcTab: {
            agenda: action.agenda,
            board: 'LHPC',
            event: action.event,
            label: 'Landmarks & Historic Pres.',
            upcomingHearings: action.upcomingHearings,
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabRC, (state, action) => ({ ...state, rcTab: {
            agenda: action.agenda,
            board: 'RC',
            event: action.event,
            label: 'Rent Control Board',
            upcomingHearings: action.upcomingHearings,
            prevHearings: action.prevHearings
        }
    })),
    on(HearingActions.setTabZBA, (state, action) => ({ ...state, zbaTab: {
            agenda: action.agenda,
            board: 'ZBA',
            event: action.event,
            fofId: action.fofId,
            label: 'Zoning Board of Adjustment',
            upcomingHearings: action.upcomingHearings,
            prevHearings: action.prevHearings
        }
    }))
);
