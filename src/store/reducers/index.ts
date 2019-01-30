/*
 * @Author: lifan
 * @Date: 2019-01-28 13:45:58
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 16:07:55
 */
import { combineReducers } from 'redux';
import awards from '../../constants/award';
import people, { IPeople } from '../../constants/people';
import { Action } from '../actions';
import award, { IAwards } from './award';
import congratulation from './congratulation';
import cur, { ICur } from './cur';
import pool from './pool';
import run from './run';
import winnerList, { IWinner } from './winnerList';

export interface IState {
  pool: IPeople[];
  cur: ICur;
  award: IAwards[];
  run: boolean;
  congratulation: boolean;
  winnerList: IWinner[];
}

const appReducer = combineReducers<IState>({
  congratulation,
  cur,
  pool,
  award,
  run,
  winnerList,
});

const rootReducer = (state: any, action: Action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
