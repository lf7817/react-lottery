/*
 * @Author: lifan
 * @Date: 2019-01-28 16:47:07
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:42:09
 */
import { IAwardId } from '../../constants/award';
import people, { IPeople } from '../../constants/people';
import { Action } from '../actions';
import types from '../types';

export interface ICur extends IPeople {
  awardId: IAwardId;
}

const initState: ICur = {
  ...people[Math.floor(people.length * Math.random())],
  awardId: 4,
};

export default (state: ICur = initState, action: Action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_PERSON:
      return {
        name: action.payload.name,
        phone: action.payload.phone,
        ...state,
      };
    default: return state;
  }
};
