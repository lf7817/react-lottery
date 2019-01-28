/*
 * @Author: lifan
 * @Date: 2019-01-28 21:54:22
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:47:32
 */
// tslint:disable-next-line:no-submodule-imports
import { delay, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { IState } from '../reducers';
import types from '../types';

function* game() {
  const { pool, run, cur, award }: IState = yield select();

  if (award[cur.awardId].last === 0) {
    // put()
    return;
  }

  while (run) {
    yield put(actions.updateCurrentPerson(pool[Math.floor(Math.random() * pool.length)]));
    yield delay(50);
  }

  yield put(actions.updatePool(cur.phone));

  yield put(actions.updateWinnerList({
    name: cur.name,
    phone: cur.phone,
    awardId: cur.awardId,
  }));
}

export function* watchGame() {
  yield takeLatest(types.RUN, game);
}
