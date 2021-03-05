
import { call, put, takeLatest } from 'redux-saga/effects';
import { getFriendList } from '../../services/friendListServices';
import { getFriendsLoading } from '../Actions/friendListAction';
import { FRIENDS_ERROR, FRIENDS_LIST_ASNYC, FRIENDS_LOADING, FRIENDS_SUCCESS } from '../Constants/friendListConstants';

function* fetchFriendList(action) {
   try {
        yield put( {type: FRIENDS_LOADING} )
        const res = yield call(getFriendList);
        yield put({type: FRIENDS_SUCCESS, payload: res})
   } catch (e) {
      yield put({type: FRIENDS_ERROR, payload: 'Friend error'  });
   }
}

export function* getFriends() {
    yield takeLatest(FRIENDS_LIST_ASNYC, fetchFriendList);
}
