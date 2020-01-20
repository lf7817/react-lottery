/*
 * @Author: lifan
 * @Date: 2019-01-28 13:35:40
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:52:33
 */
import { fork } from "redux-saga/effects";
import { watchGame } from "./watchGame";

export default function* rootSaga() {
  yield fork(watchGame);
}
