import { misbegottenRelict } from 'rng/attributions';
import { TableEntry, Small } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `rottingRecalcitrant-${id}`,
  tags: ['ripleyc', 'rottingRecalcitrant', 'origin', id],
  attribution: misbegottenRelict,
  content: {
    tags: ['ripleyc', 'rottingRecalcitrant', 'origin', id],
    title: {
      id: 'character.stats.titles.origin',
      values: {},
    },
    description: {
      id: `content.ripleyc.rottingRecalcitrant.${id}`,
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
