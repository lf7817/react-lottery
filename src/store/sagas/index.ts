/*
 * @Author: lifan
 * @Date: 2019-01-28 13:35:40
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 13:36:50
 */
// tslint:disable-next-line:no-submodule-imports
import { call, delay, fork, put, select, take, takeEvery } from 'redux-saga/effects';
// single entry point to start all Sagas at once
export default function* rootSaga() {
  // yield fork(fetchData);
  // yield fork(watchIncrementAsync);
  // yield fork(demo);

  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  }
}
