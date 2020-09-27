import { random } from 'lodash/fp';
import { Small } from 'types/character';

export const formatOmens = (omens: number, die: number): Small => ({
  tags: ['omens'],
  title: { id: 'character.stats.titles.omens', values: {} },
  description: {
    id: 'character.stats.standard.omens',
    values: { omens, die },
  },
});

export const rollOmens = (min: number, max: number) => random(min, max);
