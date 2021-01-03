import { random } from 'lodash/fp';
import { landlockedBuccaneer } from 'rng/attributions';
import {
  TableEntryBig,
  Big,
  GenerateValuesFn,
  GenerateValuesProps,
} from 'types/character';

const entry = (
  id: string,
  generateValues?: GenerateValuesFn
): TableEntryBig => ({
  id: `landlockedBuccaneer-${id}`,
  tags: ['makedatanotlore', 'landlockedBuccaneer', id],
  attribution: landlockedBuccaneer,
  content: {
    component: { id: 'halfBox' },
    header: {
      id: `content.makedatanotlore.landlockedBuccaneer.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['makedatanotlore', 'landlockedBuccaneer', id],
        title: {
          id: `content.makedatanotlore.landlockedBuccaneer.${id}.title`,
          values: {},
        },
        description: {
          id: `content.makedatanotlore.landlockedBuccaneer.${id}.description`,
          values: {},
        },
      },
    ],
  },
  generateValues,
});

export const bounties = [
  entry('pegleg'),
  entry('cursedCoin'),
  entry('saltstoneEye'),
  entry('parrot', () => ({ hp: random(1, 4) + 1 })),
  entry('cutlass'),
  entry('sandfilledBoots'),
];

export const formatBooty = (
  { content, generateValues }: TableEntryBig,
  input: GenerateValuesProps
): Big => {
  const values = generateValues ? generateValues(input) : {};
  const smalls = content?.content || [];

  return {
    ...content,
    content: smalls.map((small) => ({
      ...small,
      title: { ...small.title, values },
      description: { ...small.description, values },
    })),
  };
};
