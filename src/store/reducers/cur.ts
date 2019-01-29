/*
 * @Author: lifan
 * @Date: 2019-01-28 16:47:07
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-29 10:08:05
 */
import produce from 'immer';
import { IAwardId } from '../../constants/award';
import people, { IPeople } from '../../constants/people';
import { Action } from '../actions';
import types from '../types';

export interface ICur extends IPeople {
  awardId?: IAwardId;
}

const initState: ICur = {
  ...people[Math.floor(people.length * Math.random())],
  awardId: 0,
};

export default (state: ICur = initState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.UPDATE_CURRENT_PERSON:
        const { name, phone } = action.payload;
        draft.name = name;
        draft.phone = phone;
        break;
      default: break;
    }
  });
