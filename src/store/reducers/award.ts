/*
 * @Author: lifan
 * @Date: 2019-01-28 19:32:56
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:37:41
 */
import awards, { IAward } from '../../constants/award';
import { Action } from '../actions';

export interface IAwards extends IAward {
  last: number;
}

const initState = awards.map((item) => ({
  ...item,
  last: item.sum,
}));

export default (state: IAwards[] = initState, action: Action) => {
  switch (action.type) {
    default: return state;
  }
};
