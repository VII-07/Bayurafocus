import { Action } from "redux";

export enum ProgressActionTypes {
    SET_PROGRESS_TIMER = 'SET_PROGRESS_TIMER',
}

export interface ProgressAction extends Action {
    type: ProgressActionTypes.SET_PROGRESS_TIMER;
    payload: number;
}

export const setProgressTimer = (progress: number): ProgressAction => ({
    type: ProgressActionTypes.SET_PROGRESS_TIMER,
    payload: progress,
});
