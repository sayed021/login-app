
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_USER, LOGIN_USER_ASYNC } from '../Constants/loginConstants';
import { login, setLoginToken, loginUserSuccess } from '../../services/auth'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {

   try {

      yield put({type: LOGIN_USER, });
      const res = yield call(login, action.payload);
      
      yield call(loginUserSuccess,res);
      
      if(res.status == 200) {
         yield put({type: LOGIN_SUCCESS, });
      }
      
   } catch (e) {
      yield put({type: LOGIN_ERROR,  });
   }
}

export function* loginSaga() {
    yield takeLatest(LOGIN_USER_ASYNC, fetchUser);
}
