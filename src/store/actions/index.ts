/*
 * @Author: lifan
 * @Date: 2019-01-28 15:45:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 16:49:41
 */
// tslint:disable object-literal-sort-keys
// tslint:disable no-angle-bracket-type-assertion
// tslint:disable whitespace
import { IPeople } from '../../constants/people';
import Types from '../types';

type UpdatePeopleList = ReturnType<typeof updatePeopleList>;
export const updatePeopleList = (phone: number) => ({
  type: <Types.UPDATE_PEOPLE_LIST>Types.UPDATE_PEOPLE_LIST,
  payload: {
    phone,
  },
});

type UpdateCurrentPerson = ReturnType<typeof updateCurrentPerson>;
export const updateCurrentPerson = (person: IPeople) => ({
  type: <Types.UPDATE_CURRENT_PERSON>Types.UPDATE_CURRENT_PERSON,
  payload: {
    phone: person.phone,
    name: person.name,
  },
});

export type Action =
  | UpdatePeopleList
  | UpdateCurrentPerson;
