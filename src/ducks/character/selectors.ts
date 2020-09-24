import get from 'lodash/fp/get';

export const selectCharacter = (state: any) => get('character', state);
