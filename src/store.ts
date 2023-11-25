import { combineReducers, createStore } from "redux";
import timerReducer from "./redux/reducers/timerReducer";

const rootReducer = combineReducers({
    timer: timerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;