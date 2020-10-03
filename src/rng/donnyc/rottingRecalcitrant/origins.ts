import { misbegottenRelict } from 'rng/attributions';
import { TableEntry, Small } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `rottingRecalcitrant-${id}`,
  tags: ['donnyc', 'rottingRecalcitrant', 'origin', id],
  attribution: misbegottenRelict,
  content: {
    tags: ['donnyc', 'rottingRecalcitrant', 'origin', id],
    title: {
      id: 'character.stats.titles.origin',
      values: {},
    },
    description: {
      id: `content.donnyc.rottingRecalcitrant.${id}`,
      values: {},
    },
  },
});

export const origins = [
  'crushed',
  'drowned',
  'poisoned',
  'electrocuted',
  'huntingTrip',
  'murdered',
].map((origin) => entry(origin));

export const formatOrigin = ({ content }: TableEntry) => content as Small;
