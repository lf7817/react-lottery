/*
 * @Author: lifan
 * @Date: 2019-01-28 13:45:58
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:42:44
 */
import { combineReducers } from 'redux';
import { IPeople } from '../../constants/people';
import award, { IAwards } from './award';
import cur, { ICur } from './cur';
import pool from './pool';
import run from './run';
import winnerList, { IWinner } from './winnerList';

export interface IState {
  pool: IPeople[];
  cur: ICur;
  award: IAwards[];
  run: boolean;
  winnerList: IWinner[];
}

export default combineReducers<IState>({
  cur,
  pool,
  award,
  run,
  winnerList,
});
