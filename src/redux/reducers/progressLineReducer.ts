import { ProgressActionTypes, ProgressAction } from "../actions/progressLineAction";

interface ProgressState {
    progressTimer: number,
}

const progressState: ProgressState = {
    progressTimer: 0,
}

const progressReducer = (state = progressState, action: ProgressAction): ProgressState => {
    switch (action.type) {
        case ProgressActionTypes.SET_PROGRESS_TIMER:
            return {
                ...state,
                progressTimer: action.payload,
            };
        default:
            return state;
    }
};

export default progressReducer;