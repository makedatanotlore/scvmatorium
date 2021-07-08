import { Small } from 'types/character';

const toy = (id: string): Small => ({
  tags: ['reverendunclebastard', 'tormentedToymaker', 'tableEntry', 'toy', id],
  title: {
    id: `content.reverendunclebastard.tormentedToymaker.${id}.title`,
    values: {},
  },
  description: {
    id: `content.reverendunclebastard.tormentedToymaker.${id}.description`,
    values: {},
  },
});

export const toys = [
  'bird',
  'horse',
  'soldier',
  'spinner'
].map((id) => toy(id));