import { fork } from "redux-saga/effects";
import {loginSaga} from "./loginSaga";

export function* rootSaga () {
    // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]

    yield [ fork(loginSaga), ];
    // yield [ fork(loginSaga),   // fork(saga2), ];
}