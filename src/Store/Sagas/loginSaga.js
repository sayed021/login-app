import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN_USER } from '../Constants/loginConstants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    console.log("This is saga action", action);
   try {
       
      yield put({type: LOGIN_USER, user: {name:'sayed', pass:1234}});
   } catch (e) {
   }
}

function* loginSaga() {
  yield takeLatest(LOGIN_USER, fetchUser);
}

export default loginSaga;