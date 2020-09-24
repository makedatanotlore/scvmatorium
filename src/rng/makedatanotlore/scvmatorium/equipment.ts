import { sample, random } from 'lodash/fp';
import { Values } from 'types/locales';
import { scvmatorium } from 'rng/attributions';
import { TableEntry } from 'types/character';

const entry = (id: string, generateValues: () => Values): TableEntry => ({
  id: `scvmatorium-${id}`,
  tags: ['makedatanotlore', 'scvmatorium', 'equipment'],
  attribution: scvmatorium,
  content: {
    title: {
      id: `content.makedatanotlore.scvmatorium.${id}.title`,
      values: {},
    },
    description: {
      id: `content.makedatanotlore.scvmatorium.${id}.description`,
      values: {},
    },
  },
  generateValues,
});

const smallContainer = entry('smallContainer', () => ({
  container: sample([
    'knapsack',
    'saddlebags',
    'satchel',
    'basket',
    'rucksack',
    'leatherBag',
    sample(['woodenBucket', 'metalBucket']),
  ])!,
}));

const largeContainer = entry('largeContainer', () => ({
  container: sample(['fishNet', 'largeBrownSack', 'gunnySack'])!,
}));

const vehicle = entry('vehicle', () => ({
  ...sample([
    { vehicle: 'wheelbarrow' },
    { vehicle: 'corpseCart', corpses: random(0, 4) },
  ]),
}));

const beast = entry('beast', () => ({
  beast: sample(['mule', 'goat', 'ox'])!,
}));

const listI = [
  smallContainer,
  largeContainer,
  smallContainer,
  largeContainer,
  vehicle,
  smallContainer,
  largeContainer,
  vehicle,
  beast,
];

export const equipment = {
  listI,
};
