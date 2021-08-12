import get from 'lodash/fp/get';


export const selectClassIds = (state: any) => get('filter', state);
