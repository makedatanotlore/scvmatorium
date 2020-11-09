import { psyberDevangelist } from 'rng/attributions';
import { TableEntry, Small } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `psyberDevangelist-${id}`,
  tags: ['greysonwhy', 'psyberDevangelist', 'origin', id],
  attribution: psyberDevangelist,
  content: {
    tags: ['greysonwhy', 'psyberDevangelist', 'origin', id],
    title: {
      id: 'character.stats.titles.origin',
      values: {},
    },
    description: {
      id: `content.greysonwhy.psyberDevangelist.${id}`,
      values: {},
    },
  },
});

export const origins = [
  'vision',
  'giant',
  'dystopia',
  'galaxy',
  'megastructure',
  'sixthFuture',
  'rainbowLand',
  'grimdark',
].map((origin) => entry(origin));

export const formatOrigin = ({ content }: TableEntry) => content as Small;
