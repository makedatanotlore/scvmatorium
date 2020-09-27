import { Character } from 'types/character';
import { Action } from 'types/ducks';
import { classless } from 'rng/classes/classless';
import { SET_CHARACTER } from './actions';

const getInitialState = () => ({
  ...classless(),
});

export const reducer = (
  state: Character = getInitialState(),
  action: Action
) => {
  switch (action.type) {
    case SET_CHARACTER:
      return action?.payload?.character || state;
    default:
      return state;
  }
};
