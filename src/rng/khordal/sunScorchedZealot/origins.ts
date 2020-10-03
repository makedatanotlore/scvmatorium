import { sunScorchedZealot } from 'rng/attributions';
import { TableEntry, Small } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `sunScorchedZealot-${id}`,
  tags: ['khordal', 'sunScorchedZealot', 'origin', id],
  attribution: sunScorchedZealot,
  content: {
    tags: ['khordal', 'sunScorchedZealot', 'origin', id],
    title: {
      id: 'character.stats.titles.origin',
      values: {},
    },
    description: {
      id: `content.khordal.sunScorchedZealot.${id}`,
      values: {},
    },
  },
});

export const origins = [
  'glimpseOfTheSun',
  'crucified',
  'burnt',
  'radiantWords',
  'scrabblingInMud',
  'wickheadProphet',
].map((origin) => entry(origin));

export const formatOrigin = ({ content }: TableEntry) => content as Small;
