import { Action } from 'types/ducks';

export const RESET_FILTER = 'filter/RESET_FILTER';
export const UPDATE_FILTER = 'filter/UPDATE_FILTER';

export const updateFilter = (updated: string[]): Action => ({
  type: UPDATE_FILTER,
  payload: { updated },
});

export const resetFilter = (): Action => ({
  type: RESET_FILTER,
  payload: {},
});
