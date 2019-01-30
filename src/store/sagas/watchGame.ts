/*
 * @Author: lifan
 * @Date: 2019-01-28 21:54:22
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 16:11:29
 */
// tslint:disable-next-line:no-submodule-imports
import { delay, put, select, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import { IState } from '../reducers';
import types from '../types';

function* game() {
  const { pool, run, cur, award }: IState = yield select();
  /**
   * TODO: 派发“请选择奖项”消息
   */
  if (typeof cur.awardId === 'undefined') {
    if (run) {
      yield put(actions.run(false));
    }
    alert('请选择奖项');
    return;
  }

  /**
   * TODO: 派发“该奖项已抽完”消息
   */
  if (typeof cur.awardId === 'number' && award[cur.awardId].last === 0) {
    if (run) {
      yield put(actions.run(false));
    }
    alert('该奖项已抽完');
    return;
  }

  if (pool.length === 0) {
    if (run) {
      yield put(actions.run(false));
    }
    alert('奖池已抽完');
    return;
  }

  while (run) {
    yield put(actions.updateCurrentPerson(pool[Math.floor(Math.random() * pool.length)]));
    yield delay(100);
  }

  yield put(actions.updatePool(cur.phone));

  yield put(actions.updateWinnerList({
    name: cur.name,
    phone: cur.phone,
    awardId: cur.awardId,
  }));

  yield put(actions.updateLast(cur.awardId));
  yield put(actions.congratulation(true));
}

export function* watchGame() {
  yield takeLatest(types.RUN, game);
}
