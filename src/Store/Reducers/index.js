import { combineReducers } from "redux";

import { LoginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";


export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        login: LoginReducer,
        user: userReducer,
        ...injectedReducers,
    });

    return rootReducer;
}