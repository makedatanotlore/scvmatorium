import random from 'lodash/fp/random';
import { psyberDevangelist } from 'rng/attributions';
import { TableEntry, GenerateValuesFn } from 'types/character';

const entry = (id: string, generateValues?: GenerateValuesFn): TableEntry => ({
  id: `psyberDevangelist-${id}`,
  tags: ['greysonwhy', 'psyberDevangelist', 'tool', id],
  attribution: psyberDevangelist,
  content: {
    tags: ['greysonwhy', 'psyberDevangelist', 'tool', id],
    title: {
      id: `content.greysonwhy.psyberDevangelist.${id}.title`,
      values: {},
    },
    description: {
      id: `content.greysonwhy.psyberDevangelist.${id}.description`,
      values: {},
    },
  },
  generateValues,
});

export const tools = [
  entry('weatherproof', ({ presence }) => ({ days: 7 + presence })),
  entry('bioBoosters', () => ({ amount: random(3, 6) })),
  entry('grapplingHook'),
  entry('nightVision'),
  entry('roboticArm'),
  entry('magneticLamp', ({ presence }) => ({ hours: 6 + presence })),
  entry('aiAssistant'),
  entry('bioscanner'),
];
