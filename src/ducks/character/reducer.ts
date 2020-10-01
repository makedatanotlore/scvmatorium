import { Character } from 'types/character';
import { Action } from 'types/ducks';
import { sample } from 'lodash/fp';
import { classes } from 'rng/classes/';
import { SET_CHARACTER } from './actions';

const getInitialState = () => ({
  ...sample(classes)!(),
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
