/*
 * @Author: lifan
 * @Date: 2019-01-28 19:32:56
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:52:26
 */
import produce from "immer";
import awards, { Award } from "../../constants/award";
import { Action } from "../actions";
import types from "../types";

export interface Awards extends Award {
  last: number;
}

const initState = awards.map(item => ({
  ...item,
  last: item.sum,
}));

export default (state: Awards[] = initState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.UPDATE_LAST:
        const { awardId } = action.payload;
        draft[awardId].last !== 0 && draft[awardId].last--;
        break;
      default:
        break;
    }
  });
