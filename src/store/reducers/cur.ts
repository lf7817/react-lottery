/*
 * @Author: lifan
 * @Date: 2019-01-28 16:47:07
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 16:53:31
 */
import people, { IPeople } from '../../constants/people';
import { Action } from '../actions';
import types from '../types';

const initPerson = people[Math.floor(people.length * Math.random())];

export default (state: IPeople = initPerson, action: Action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_PERSON:
      return {
        name: action.payload.name,
        phone: action.payload.phone,
      };
    default: return state;
  }
};
