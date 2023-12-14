import { RadioActionTypes, RadioAction } from "../actions/radioButtonActions"

interface RadioStateInterface {
    workTypes: string[],
    selectWorkType: string,
}

const RadioState: RadioStateInterface = {
    workTypes: ['bayurato', 'shortBreak', 'longBreak'],
    selectWorkType: 'bayurato',
}

const radioReducer = (state = RadioState, action: RadioAction): RadioStateInterface => {
    switch (action.type) {
        case RadioActionTypes.SET_SELECT_TYPE:
            return {
                ...state,
                selectWorkType: action.payload
            };

        default:
            return state;
    }
};

export default radioReducer;