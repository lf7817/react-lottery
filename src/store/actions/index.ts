/*
 * @Author: lifan
 * @Date: 2019-01-28 15:45:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-28 22:26:24
 */
// tslint:disable object-literal-sort-keys
// tslint:disable no-angle-bracket-type-assertion
// tslint:disable whitespace
import { IAwardId } from '../../constants/award';
import { IPeople } from '../../constants/people';
import { IWinner } from '../reducers/winnerList';
import Types from '../types';

type UpdatePool = ReturnType<typeof updatePool>;
export const updatePool = (phone: number) => ({
  type: <Types.UPDATE_POOL>Types.UPDATE_POOL,
  payload: {
    phone,
  },
});

export type UpdateCurrentPerson = ReturnType<typeof updateCurrentPerson>;
export const updateCurrentPerson = ({ phone, name }: IPeople) => ({
  type: <Types.UPDATE_CURRENT_PERSON>Types.UPDATE_CURRENT_PERSON,
  payload: {
    phone,
    name,
  },
});

export type Run = ReturnType<typeof run>;
export const run = (value: boolean) => ({
  type: <Types.RUN>Types.RUN,
  payload: {
    value,
  },
});

type UpdateWinnerList = ReturnType<typeof updateWinnerList>;
export const updateWinnerList = ({ name, phone, awardId }: IWinner) => ({
  type: <Types.UPDATE_WINNER_LIST>Types.UPDATE_WINNER_LIST,
  payload: {
    phone,
    name,
    awardId,
  },
});

type UpdateAwardId = ReturnType<typeof updateAwardId>;
export const updateAwardId = (num: IAwardId) => ({
  type: <Types.UPDATE_AWARD_ID>Types.UPDATE_AWARD_ID,
  payload: {
    num,
  },
});

type UpdateLast = ReturnType<typeof updateLast>;
export const updateLast = (awardId: IAwardId) => ({
  type: <Types.UPDATE_LAST>Types.UPDATE_LAST,
  payload: {
    awardId,
  },
});

type Reset = ReturnType<typeof reset>;
export const reset = () => ({
  type: <Types.RESET>Types.RESET,
});

export type Action =
  | Run
  | Reset
  | UpdatePool
  | UpdateWinnerList
  | UpdateAwardId
  | UpdateLast
  | UpdateCurrentPerson;
