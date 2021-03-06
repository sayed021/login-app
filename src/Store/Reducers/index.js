import { combineReducers } from "redux";
import { FriendsListReducer } from "./friendsListReducer";

import { LoginReducer } from "./loginReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";


export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        login: LoginReducer,
        user: userReducer,
        theme: themeReducer,
        friends: FriendsListReducer,
        ...injectedReducers,
    });

    return rootReducer;
}