import { UPDATE_FILTER, RESET_FILTER } from './actions';
import { Action } from 'types/ducks';
import { classes } from 'rng/classes/';

const getInitialState = () => Object.keys(classes);

export const reducer = (
  state: string[] = getInitialState(),
  action: Action
) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action?.payload?.updated || state;
    case RESET_FILTER:
      return getInitialState();
    default:
      return state;
  }
};
