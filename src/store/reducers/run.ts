/*
 * @Author: lifan
 * @Date: 2019-01-28 20:14:49
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 20:19:15
 */
import { Action } from '../actions';
import types from '../types';

export default (state: boolean = false, action: Action) => {
  switch (action.type) {
    case types.RUN:
      return action.payload.value;
    default: return state;
  }
};
