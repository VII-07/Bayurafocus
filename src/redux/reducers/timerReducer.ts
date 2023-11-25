import { TimerActionsTypes } from "../actions/timer.Actions";
import { createReducer, PayloadAction  } from '@reduxjs/toolkit';

interface TimerState {
    isRunning: boolean;
    timeWork: number;
    timeShortBreak: number,
    timeLongBreak: number,
    timerType: 'work' | 'shortBreak' | 'longBreak',
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
    timerType: 'work',
    isLongBreak: false,
}

const timerReducer = createReducer(initialState, {
    [TimerActionsTypes.START_TIMER]: (state) => {
        state.isRunning = true;
    },
    [TimerActionsTypes.STOP_TIMER]: (state) => {
        state.isRunning = false;
    },
    [TimerActionsTypes.RESET_TIMER]: () => {
        return initialState;
    },
    [TimerActionsTypes.SET_TIME]: (state, action: PayloadAction<{type: 'work' | 'shortBreak' | 'longBreak', time: number}>) => {
        if (action.payload.type === 'work') {
            state.timeWork = action.payload.time;
        } else if (action.payload.type === 'shortBreak') {
            state.timeShortBreak = action.payload.time;
        } else if (action.payload.type === 'longBreak') {
            state.timeLongBreak = action.payload.time;
        }
    },
    [TimerActionsTypes.SET_TIMER_TYPE]: (state, action: PayloadAction<'work' | 'shortBreak' | 'longBreak'>) => {
        state.timerType = action.payload;
    },
    [TimerActionsTypes.SET_PROGRESS_TIMER]: (state, action: PayloadAction<number>) => {
        state.progressTimer = action.payload;
    },
    [TimerActionsTypes.SET_INTERVAL_LONG_BREAK]: (state) => {
        state.isLongBreak = !state.isLongBreak;
    },
    [TimerActionsTypes.SET_LONG_BREAK_INTERVAL_VALUE]: (state, action: PayloadAction<number>) => {
        state.intervalLongBreak = action.payload;
    },
});

export default timerReducer;
