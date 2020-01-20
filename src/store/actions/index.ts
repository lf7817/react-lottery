/*
 * @Author: lifan
 * @Date: 2019-01-28 15:45:44
 * @Last Modified by: lifan
 * @Last Modified time: 2020-01-20 10:52:07
 */
import { AwardId } from "../../constants/award";
import { People } from "../../constants/people";
import { Winner } from "../reducers/winnerList";
import Types from "../types";

type UpdatePool = ReturnType<typeof updatePool>;
export const updatePool = (phone: number) => ({
  type: <Types.UPDATE_POOL>Types.UPDATE_POOL,
  payload: {
    phone,
  },
});

export type UpdateCurrentPerson = ReturnType<typeof updateCurrentPerson>;
export const updateCurrentPerson = ({ phone, name }: People) => ({
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
export const updateWinnerList = ({ name, phone, awardId }: Winner) => ({
  type: <Types.UPDATE_WINNER_LIST>Types.UPDATE_WINNER_LIST,
  payload: {
    phone,
    name,
    awardId,
  },
});

type UpdateAwardId = ReturnType<typeof updateAwardId>;
export const updateAwardId = (num: AwardId) => ({
  type: <Types.UPDATE_AWARD_ID>Types.UPDATE_AWARD_ID,
  payload: {
    num,
  },
});

type UpdateLast = ReturnType<typeof updateLast>;
export const updateLast = (awardId: AwardId) => ({
  type: <Types.UPDATE_LAST>Types.UPDATE_LAST,
  payload: {
    awardId,
  },
});

type Reset = ReturnType<typeof reset>;
export const reset = () => ({
  type: <Types.RESET>Types.RESET,
});

type Uongratulation = ReturnType<typeof congratulation>;
export const congratulation = (value: boolean) => ({
  type: <Types.CONGRATULATION>Types.CONGRATULATION,
  payload: {
    value,
  },
});

export type Action =
  | Run
  | Reset
  | UpdatePool
  | UpdateWinnerList
  | UpdateAwardId
  | UpdateLast
  | Uongratulation
  | UpdateCurrentPerson;
