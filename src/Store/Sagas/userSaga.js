
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, LOGIN_USER_ASYNC } from '../Constants/loginConstants';
import { login, setLoginToken, loginUserSuccess } from '../../services/auth'
import { GET_USER, GET_USER_ASNYC, USER_ERROR, USER_LOADING, USER_SUCCESS } from '../Constants/userConstant';
import { getUser } from '../../services/userServices';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchUser(action) {

    console.log("action ", action.type);
    
   try {
        yield put({type: USER_LOADING })

        const res = yield call(getUser);

        console.log("response data from saga, ", res);

        yield put({type: USER_SUCCESS, res })

        // yield call(loginUserSuccess, res);
      
        //   if(res.status == 200) {
        //      yield put({type: LOGIN_SUCCESS, });
        //   }
      
   } catch (e) {
      yield put({type: USER_ERROR,  });
   }
}


export function* userSaga() {
    debugger;
    yield takeLatest(GET_USER_ASNYC, fetchUser);
}
