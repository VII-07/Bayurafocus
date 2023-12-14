import { Action } from "redux";

export enum TimerActionTypes {
    SET_TIME_WORK = 'SET_TIME_WORK',
    SET_TIME_SHORT_BREAK = 'SET_TIME_SHORT_BREAK',
    SET_TIME_LONG_BREAK = 'SET_TIME_LONG_BREAK',
    SET_PROGRESS_TIMER = 'SET_PROGRESS_TIMER',
    SET_INTERVAL_LONG_BREAK = 'SET_INTERVAL_LONG_BREAK',
    SET_LONG_BREAK_INTERVAL_VALUE = 'SET_LONG_BREAK_INTERVAL_VALUE',
}

export interface TimerAction extends Action {
    type: TimerActionTypes;
    payload: number;
}
export const setTimeWork = (minutes: number): TimerAction => ({
    type: TimerActionTypes.SET_TIME_WORK,
    payload: minutes,
});

export const setTimeShortBreak = (minutes: number): TimerAction => ({
    type: TimerActionTypes.SET_TIME_SHORT_BREAK,
    payload: minutes,
});

export const setTimeLongBreak = (minutes: number): TimerAction => ({
    type: TimerActionTypes.SET_TIME_LONG_BREAK,
    payload: minutes,
});

export const setProgressTimer = (progress: number): TimerAction => ({
    type: TimerActionTypes.SET_PROGRESS_TIMER,
    payload: progress,
});

export const setLongBreakIntervalValue = (iteration: number): TimerAction => ({
    type: TimerActionTypes.SET_LONG_BREAK_INTERVAL_VALUE,
    payload: iteration,
});
