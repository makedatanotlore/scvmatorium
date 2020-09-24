import get from 'lodash/fp/get';

export const selectTheme = (state: any) => get('theme', state);
