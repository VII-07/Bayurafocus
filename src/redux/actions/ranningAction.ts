import { Action } from "redux";

export enum RunningActionTypes {
    START_TIMER = 'START_TIMER',
    STOP_TIMER = 'STOP_TIMER',
}
export interface RunningAction extends Action {
    type: RunningActionTypes;
}

export const startTimer = (): RunningAction => ({
    type: RunningActionTypes.START_TIMER,
});
export const stopTimer = (): RunningAction => ({
    type: RunningActionTypes.STOP_TIMER,
});