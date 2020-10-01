import { Small } from 'types/character';

export const formatClass = (id: string): Small => ({
  tags: ['class', id],
  title: {
    id: 'character.stats.titles.class',
    values: {},
  },
  description: {
    id: `content.${id}`,
    values: {},
  },
});
