import { all, fork, spawn } from "redux-saga/effects";
import { getFriends } from "./friendListSaga";
import {loginSaga} from "./loginSaga";
import {userSaga} from "./userSaga";


export default function* rootSaga() {
    yield all ([
        fork(userSaga),
        fork(loginSaga),
        fork(getFriends),
    ] )
}


