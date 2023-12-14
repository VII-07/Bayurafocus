import { RunningAction, RunningActionTypes } from './../actions/ranningAction';

interface runningStateType {
    isRunning: boolean;
}

const runningState: runningStateType = {
    isRunning: false,
}

const runningReducer = (state = runningState, action: RunningAction): runningStateType => {
    switch (action.type) {
        case RunningActionTypes.START_TIMER:
            return {
                isRunning: true,
            };
        case RunningActionTypes.STOP_TIMER:
            return {
                isRunning: false,
            };
        default:
            return state;
    }
};

export default runningReducer;