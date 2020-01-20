/*
 * @Author: lifan
 * @Date: 2019-01-28 16:47:07
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:29:57
 */
import produce from "immer";
import { AwardId } from "../../constants/award";
import people, { People } from "../../constants/people";
import { Action } from "../actions";
import types from "../types";

export interface Cur extends People {
  awardId?: AwardId;
}

const initState: Cur = {
  ...people[Math.floor(people.length * Math.random())],
  awardId: undefined,
};

export default (state: Cur = initState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.UPDATE_CURRENT_PERSON:
        const { name, phone } = action.payload;
        draft.name = name;
        draft.phone = phone;
        break;
      case types.UPDATE_AWARD_ID:
        draft.awardId = action.payload.num;
        break;
      default:
        break;
    }
  });
