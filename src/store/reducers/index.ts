/*
 * @Author: lifan
 * @Date: 2019-01-28 13:45:58
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 16:53:53
 */
import { combineReducers } from 'redux';
import { IPeople } from '../../constants/people';
import cur from './cur';
import people from './people';

export interface IState {
  people: IPeople[];
  cur: IPeople;
}

export default combineReducers<IState>({
  cur,
  people,
});
