/*
 * @Author: lifan
 * @Date: 2019-01-28 13:35:40
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:30:53
 */
// tslint:disable-next-line:no-submodule-imports
import { fork } from 'redux-saga/effects';
import { watchGame } from './watchGame';

export default function* rootSaga() {
  yield fork(watchGame);
}
