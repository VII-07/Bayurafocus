import { TimerAction, TimerActionsTypes } from "../actions/timer.Actions";

interface TimerState {
    isRunning: boolean;
    timeWork: number;
    timeShortBreak: number,
    timeLongBreak: number,
    work: boolean,
    shortBreak: boolean,
    longBreak: boolean,
    progressTimer: number,
    isLongBreak: boolean,
    intervalLongBreak: number,
}

const initialState: TimerState = {
    isRunning: false,
    timeWork: 25 * 60,
    timeShortBreak: 5 * 60,
    timeLongBreak: 15 * 60,
    progressTimer: 0,
    intervalLongBreak: 4,
    work: true,
    shortBreak: false,
    longBreak: false,
    isLongBreak: false,

}

const timerReducer = (state = initialState, action: TimerAction): TimerState => {
    switch (action.type) {
        case TimerActionsTypes.START_TIMER:
            return {
                ...state,
                isRunning: true,
            };
        case TimerActionsTypes.STOP_TIMER:
            return {
                ...state,
                isRunning: false,
            };
        case TimerActionsTypes.RESET_TIMER:
            return {
                ...state,
            };
        case TimerActionsTypes.SET_TIME_WORK:
            return {
                ...state,
                timeWork: action.payload,
            };
        case TimerActionsTypes.SET_TIME_SHORT_BREAK:
            return {
                ...state,
                timeShortBreak: action.payload,
            };
        case TimerActionsTypes.SET_TIME_LONG_BREAK:
            return {
                ...state,
                timeLongBreak: action.payload,
            };
        case TimerActionsTypes.SET_TIMER_WORK_TYPE:
            return {
                ...state,
                work: true,
                shortBreak: false,
                longBreak: false,
            };
        case TimerActionsTypes.SET_TIMER_SHORT_BREAK_TYPE:
            return {
                ...state,
                work: false,
                shortBreak: true,
                longBreak: false,
            };
        case TimerActionsTypes.SET_TIMER_LONG_BREAK_TYPE:
            return {
                ...state,
                work: false,
                shortBreak: false,
                longBreak: true,
            };
        case TimerActionsTypes.SET_PROGRESS_TIMER:
            return {
                ...state,
                progressTimer: action.payload,
            };
        case TimerActionsTypes.SET_INTERVAL_LONG_BREAK:
            return initialState.isLongBreak ? {
                ...state,
                isLongBreak: false,
            } : {
                ...state,
                isLongBreak: true,
            };
        case TimerActionsTypes.SET_LONG_BREAK_INTERVAL_VALUE:
            return {
                ...state,
                intervalLongBreak: action.payload,
            };
        default:
            return state;
    }
};

export default timerReducer;