/*
 * @Author: lifan
 * @Date: 2019-01-28 19:32:56
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:37:41
 */
import produce from 'immer';
import awards, { IAward } from '../../constants/award';
import { Action } from '../actions';
import types from '../types';

export interface IAwards extends IAward {
  last: number;
}

const initState = awards.map((item) => ({
  ...item,
  last: item.sum,
}));

export default (state: IAwards[] = initState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.UPDATE_LAST:
        const { awardId } = action.payload;
        // tslint:disable-next-line:no-unused-expression
        draft[awardId].last !== 0 && draft[awardId].last --;
        break;
      default: break;
    }
  });
