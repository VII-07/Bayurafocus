import { combineReducers, createStore } from "redux";
import timerReducer from "./redux/reducers/timerReducer";
import radioReducer from "./redux/reducers/radioButtonReducer";
import runningReducer from "./redux/reducers/runnningReducer";
import progressReducer from "./redux/reducers/progressLineReducer";

const rootReducer = combineReducers({
    timer: timerReducer,
    radio: radioReducer,
    running: runningReducer,
    progress: progressReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;