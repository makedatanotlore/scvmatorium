import get from 'lodash/fp/get';
import { classes } from 'rng/classes';
import { classless } from 'rng/classes/classless';

export const selectClasses = (state: any) => {
  const selected: string[] = get('filter', state);

  if (!selected.length) {
    return [classless];
  }

  return Object.entries(classes)
    .filter(([id]) => selected.includes(id))
    .map(([id, value]) => value);
};

export const selectClassIds = (state: any) => get('filter', state);
