import { Action } from "redux";

export enum TimerActionsTypes {
    START_TIMER = 'START_TIMER',
    STOP_TIMER = 'STOP_TIMER',
    RESET_TIMER = 'RESET_TIMER',
    SET_TIME_WORK = 'SET_TIME_WORK',
    SET_TIME_SHORT_BREAK = 'SET_TIME_SHORT_BREAK',
    SET_TIME_LONG_BREAK = 'SET_TIME_LONG_BREAK',
    SET_TIMER_WORK_TYPE = 'SET_TIMER_WORK_TYPE',
    SET_TIMER_LONG_BREAK_TYPE = 'SET_TIMER_LONG_BREAK_TYPE',
    SET_TIMER_SHORT_BREAK_TYPE = 'SET_TIMER_SHORT_BREAK_TYPE',
    SET_PROGRESS_TIMER = 'SET_PROGRESS_TIMER',
    SET_INTERVAL_LONG_BREAK = 'SET_INTERVAL_LONG_BREAK',
    SET_LONG_BREAK_INTERVAL_VALUE = 'SET_LONG_BREAK_INTERVAL_VALUE',

}

interface StartTimerActions extends Action {
    type: TimerActionsTypes.START_TIMER;
}

interface SetProgressTimerActions extends Action {
    type: TimerActionsTypes.SET_PROGRESS_TIMER;
    payload: number;
}

interface StopTimerActions extends Action {
    type: TimerActionsTypes.STOP_TIMER;
}

interface ResetTimerActions extends Action {
    type: TimerActionsTypes.RESET_TIMER;
}

interface SetTimerWorkActions extends Action {
    type: TimerActionsTypes.SET_TIME_WORK;
    payload: number;
}

interface SetTimerShortBreackActions extends Action {
    type: TimerActionsTypes.SET_TIME_SHORT_BREAK;
    payload: number;
}

interface SetTimerLongBreakActions extends Action {
    type: TimerActionsTypes.SET_TIME_LONG_BREAK;
    payload: number;
}

interface SetTimerTypeActionsWork extends Action {
    type: TimerActionsTypes.SET_TIMER_WORK_TYPE;
}
interface SetTimerTypeActionsShortBreak extends Action {
    type: TimerActionsTypes.SET_TIMER_SHORT_BREAK_TYPE;
}
interface SetTimerTypeActionsLongBreak extends Action {
    type: TimerActionsTypes.SET_TIMER_LONG_BREAK_TYPE;

}
interface SetIntervalLongBreak extends Action {
    type: TimerActionsTypes.SET_INTERVAL_LONG_BREAK;

}
interface SetIntervalLongBreakValue extends Action {
    type: TimerActionsTypes.SET_LONG_BREAK_INTERVAL_VALUE;
    payload: number;
}

export type TimerAction = StartTimerActions |
    StopTimerActions |
    ResetTimerActions |
    SetTimerWorkActions |
    SetTimerTypeActionsWork |
    SetTimerTypeActionsShortBreak |
    SetTimerTypeActionsLongBreak |
    SetTimerShortBreackActions |
    SetTimerLongBreakActions |
    SetProgressTimerActions |
    SetIntervalLongBreak |
    SetIntervalLongBreakValue;

export const startTime = (): StartTimerActions => ({
    type: TimerActionsTypes.START_TIMER,
});
export const stopTime = (): StopTimerActions => ({
    type: TimerActionsTypes.STOP_TIMER,
});
export const resetTime = (): ResetTimerActions => ({
    type: TimerActionsTypes.RESET_TIMER,
});
export const setTimeWork = (minutes: number): SetTimerWorkActions => ({
    type: TimerActionsTypes.SET_TIME_WORK,
    payload: minutes,
});
export const setTimeShortBreak = (minutes: number): SetTimerShortBreackActions => ({
    type: TimerActionsTypes.SET_TIME_SHORT_BREAK,
    payload: minutes,
});
export const setTimeLongBreak = (minutes: number): SetTimerLongBreakActions => ({
    type: TimerActionsTypes.SET_TIME_LONG_BREAK,
    payload: minutes,
});
export const setTimerWorkType = (): SetTimerTypeActionsWork => ({
    type: TimerActionsTypes.SET_TIMER_WORK_TYPE,
})
export const setTimerShortBreakType = (): SetTimerTypeActionsShortBreak => ({
    type: TimerActionsTypes.SET_TIMER_SHORT_BREAK_TYPE,
})
export const setTimerLongBreakType = (): SetTimerTypeActionsLongBreak => ({
    type: TimerActionsTypes.SET_TIMER_LONG_BREAK_TYPE,
})
export const setIntervalLonkBreak= (): SetIntervalLongBreak => ({
    type: TimerActionsTypes.SET_INTERVAL_LONG_BREAK,
})
export const setProgressTimer = (progress: number): SetProgressTimerActions => ({
    type: TimerActionsTypes.SET_PROGRESS_TIMER,
    payload: progress,
})
export const setLongBreakValue = (iteration : number) : SetIntervalLongBreakValue => ({
    type: TimerActionsTypes.SET_LONG_BREAK_INTERVAL_VALUE,
    payload: iteration,
})
