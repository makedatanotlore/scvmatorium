import random from 'lodash/fp/random';
import { psyberDevangelist } from 'rng/attributions';
import { TableEntry, GenerateValuesFn } from 'types/character';

const entry = (id: string, generateValues?: GenerateValuesFn): TableEntry => ({
  id: `psyberDevangelist-${id}`,
  tags: ['greysonwhy', 'psyberDevangelist', 'currency', id],
  attribution: psyberDevangelist,
  content: {
    tags: ['greysonwhy', 'psyberDevangelist', 'currency', id],
    title: {
      id: `content.greysonwhy.psyberDevangelist.${id}.title`,
      values: {},
    },
    description: {
      id: `content.greysonwhy.psyberDevangelist.currency.description`,
      values: {},
    },
  },
  generateValues,
});

export const currencies = [
  'cyberCredits',
  'interstellarCredits',
  'bottleCaps',
  'ochreCoins',
  'bits',
  'nuyen',
  'simoleons',
].map((id) =>
  entry(id, ({ money }) => ({ amount: random(money.min, money.max) }))
);
