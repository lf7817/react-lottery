/*
 * @Author: lifan
 * @Date: 2019-01-30 16:02:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-30 16:03:01
 */
import { Action } from "../actions";
import types from "../types";

export default (state = false, action: Action) => {
  switch (action.type) {
    case types.CONGRATULATION:
      return action.payload.value;
    default:
      return state;
  }
};
