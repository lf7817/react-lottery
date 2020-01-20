/*
 * @Author: lifan
 * @Date: 2019-01-28 13:45:58
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:27:26
 */
import { combineReducers } from "redux";
import { People } from "../../constants/people";
import { Action } from "../actions";
import award, { Awards } from "./award";
import congratulation from "./congratulation";
import cur, { Cur } from "./cur";
import pool from "./pool";
import run from "./run";
import winnerList, { Winner } from "./winnerList";

export interface AppState {
  pool: People[];
  cur: Cur;
  award: Awards[];
  run: boolean;
  congratulation: boolean;
  winnerList: Winner[];
}

const appReducer = combineReducers<AppState>({
  congratulation,
  cur,
  pool,
  award,
  run,
  winnerList,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === "RESET") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
