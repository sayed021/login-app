import { all, fork, spawn } from "redux-saga/effects";

import {loginSaga} from "./loginSaga";
import {userSaga} from "./userSaga";



// export default function* rootSaga() {
//     // yield spawn(loginSaga)
//     // yield spawn(loginSaga)
//     yield all([
//         ...loginSaga,
//         ...userSaga
//     ])
// }

export default function* rootSaga() {
    yield [
        fork(loginSaga),
        fork(userSaga)
    ]
    
}


