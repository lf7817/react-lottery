/*
 * @Author: lifan
 * @Date: 2019-01-28 20:27:30
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 21:01:10
 */
import produce from "immer";
import { AwardId } from "../../constants/award";
import { People } from "../../constants/people";
import { Action } from "../actions";
import types from "../types";

export interface Winner extends People {
  awardId: AwardId;
}

export default (state: Winner[] = [], action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.UPDATE_WINNER_LIST:
        draft.push(action.payload);
        break;
      default:
        break;
    }
  });
