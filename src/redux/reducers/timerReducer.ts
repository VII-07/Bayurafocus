import { TimerActionTypes, TimerAction } from "../actions/timerActions";

interface TimerState {
    timeWork: number;
    timeShortBreak: number,
    timeLongBreak: number,
    intervalLongBreak: number,
}

const initialState: TimerState = {
    timeWork: 25 * 60,
    timeShortBreak: 5 * 60,
    timeLongBreak: 15 * 60,
    intervalLongBreak: 4,
}

const timerReducer = (state = initialState, action: TimerAction): TimerState => {
    switch (action.type) {
        case TimerActionTypes.SET_TIME_WORK:
            return {
                ...state,
                timeWork: action.payload,
            };
        case TimerActionTypes.SET_TIME_SHORT_BREAK:
            return {
                ...state,
                timeShortBreak: action.payload,
            };
        case TimerActionTypes.SET_TIME_LONG_BREAK:
            return {
                ...state,
                timeLongBreak: action.payload,
            };
        case TimerActionTypes.SET_LONG_BREAK_INTERVAL_VALUE:
            return {
                ...state,
                intervalLongBreak: action.payload,
            };
        default:
            return state;
    }
};

export default timerReducer;