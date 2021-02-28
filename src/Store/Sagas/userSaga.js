
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_USER_ASNYC, USER_ERROR, USER_LOADING, USER_SUCCESS } from '../Constants/userConstant';
import { getUser } from '../../services/userServices';

function* fetchUser(action) {
   try {
        yield put({type: USER_LOADING })
        const res = yield call(getUser);
        yield put({type: USER_SUCCESS, payload: res })
   } catch (e) {
      yield put({type: USER_ERROR,  });
   }
}

export function* userSaga() {
    yield takeLatest(GET_USER_ASNYC, fetchUser);
}
