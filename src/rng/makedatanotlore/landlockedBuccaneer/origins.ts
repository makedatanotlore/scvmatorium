import { misbegottenRelict } from 'rng/attributions';
import { TableEntry, Small } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `landlockedBuccaneer-${id}`,
  tags: ['makedatanotlore', 'landlockedBuccaneer', 'origin', id],
  attribution: misbegottenRelict,
  content: {
    tags: ['makedatanotlore', 'landlockedBuccaneer', 'origin', id],
    title: {
      id: 'character.stats.titles.origin',
      values: {},
    },
    description: {
      id: `content.makedatanotlore.landlockedBuccaneer.${id}`,
      values: {},
    },
  },
});

export const origins = [
  'quarantined',
  'plank',
  'siren',
  'storm',
  'pardoned',
  'froze',
].map((origin) => entry(origin));

export const formatOrigin = ({ content }: TableEntry) => content as Small;
