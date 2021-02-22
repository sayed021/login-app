import { all, fork, spawn } from "redux-saga/effects";


import {loginSaga} from "./loginSaga";

// export function* rootSaga() {

//     return loginSaga;
// }


export default function* rootSaga() {
    yield spawn(loginSaga)
//    yield all([
//         ...loginSaga,
//     ])
}