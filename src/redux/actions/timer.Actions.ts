import { createAction} from '@reduxjs/toolkit';

export enum TimerActionsTypes {
    START_TIMER = 'START_TIMER',
    STOP_TIMER = 'STOP_TIMER',
    RESET_TIMER = 'RESET_TIMER',
    SET_TIME = 'SET_TIME',
    SET_TIMER_TYPE = 'SET_TIMER_TYPE',
    SET_PROGRESS_TIMER = 'SET_PROGRESS_TIMER',
    SET_INTERVAL_LONG_BREAK = 'SET_INTERVAL_LONG_BREAK',
    SET_LONG_BREAK_INTERVAL_VALUE = 'SET_LONG_BREAK_INTERVAL_VALUE',
}

export const startTimer = createAction(TimerActionsTypes.START_TIMER);
export const stopTimer = createAction(TimerActionsTypes.STOP_TIMER);
export const resetTimer = createAction(TimerActionsTypes.RESET_TIMER);
export const setTime = createAction<{type: 'work' | 'shortBreak' | 'longBreak', time: number}>(TimerActionsTypes.SET_TIME);
export const setTimerType = createAction<string>(TimerActionsTypes.SET_TIMER_TYPE);
export const setProgressTimer = createAction<number>(TimerActionsTypes.SET_PROGRESS_TIMER);
export const setIntervalLongBreak = createAction(TimerActionsTypes.SET_INTERVAL_LONG_BREAK);
export const setLongBreakIntervalValue = createAction<number>(TimerActionsTypes.SET_LONG_BREAK_INTERVAL_VALUE);