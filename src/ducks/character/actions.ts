import { Character } from 'types/character';
import { Action } from 'types/ducks';

export const SET_CHARACTER = 'character/SET_CHARACTER';
export const setCharacter = (character: Character): Action => ({
  type: SET_CHARACTER,
  payload: { character },
});
