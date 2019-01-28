/*
 * @Author: lifan
 * @Date: 2019-01-28 20:27:30
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 21:01:10
 */
import produce from 'immer';
import { IAwardId } from '../../constants/award';
import { IPeople } from '../../constants/people';
import { Action } from '../actions';
import types from '../types';

export interface IWinner extends IPeople {
  awardId: IAwardId;
}

export default (state: IWinner[] = [], action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.UPDATE_WINNER_LIST:
        draft.push(action.payload); break;
      default: break;
    }
  });
