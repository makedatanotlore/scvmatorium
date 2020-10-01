import { misbegottenRelict } from 'rng/attributions';
import { TableEntry, Small } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `misbegottenRelict-${id}`,
  tags: ['khordal', 'misbegottenRelict', 'origin', id],
  attribution: misbegottenRelict,
  content: {
    tags: ['khordal', 'misbegottenRelict', 'origin', id],
    title: {
      id: 'character.stats.titles.origin',
      values: {},
    },
    description: {
      id: `content.khordal.misbegottenRelict.${id}`,
      values: {},
    },
  },
});

export const origins = [
  'chiselledFromAmber',
  'frozenAndThawed',
  'spasmInTime',
  'chronoWizards',
  'tarpits',
  'necromancer',
].map((origin) => entry(origin));

export const formatOrigin = ({ content }: TableEntry) => content as Small;
