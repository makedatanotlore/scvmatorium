import { suitorKnightOfKergus } from 'rng/attributions';
import { TableEntry, GenerateValuesFn, Small } from 'types/character';
import { sample } from 'lodash/fp';

const entry = (id: string, generateValues: GenerateValuesFn): TableEntry => ({
  id: `suitorKnightOfKergus-${id}`,
  tags: ['goatmansgoblet', 'suitorKnightOfKergus', id],
  attribution: suitorKnightOfKergus,
  content: {
    tags: ['goatmansgoblet', 'suitorKnightOfKergus', id],
    title: {
      id: `content.goatmansgoblet.suitorKnightOfKergus.${id}`,
      values: {},
    },
    description: {
      id: `content.goatmansgoblet.suitorKnightOfKergus.${id}`,
      values: {},
    },
  },
  generateValues,
});

export const howDidSheRecognizeYou = entry('howDidSheRecognizeYou', () => ({
  you: sample([
    'purged',
    'quested',
    'sought',
    'wandered',
    'bested',
    'maintained',
  ])!,
}));

export const howDoTheGullsLie = entry('howDoTheGullsLie', () => ({
  theyCry: sample(['neverWill', 'stolenFathers', 'noWarmTouch', 'foolChild'])!,
  theyLie: sample(['test', 'rivals', 'neverCould', 'foolGull'])!,
}));

export const whatWarmthWasLost = entry('whatWarmthWasLost', () => ({
  gaveHer: sample([
    'summerPassion',
    'campfire',
    'flushed',
    'meal',
    'hearth',
    'touch',
  ])!,
  yetStill: sample([
    'notMiss',
    'trifle',
    'sacrifice',
    'noneOther',
    'more',
    'token',
  ])!,
}));

export const questions = [
  howDidSheRecognizeYou,
  howDoTheGullsLie,
  whatWarmthWasLost,
];

export const formatQuestion = ({
  content,
  generateValues,
}: TableEntry): Small => {
  const { title, description, tags } = content as Small;
  const values = generateValues
    ? generateValues({ presence: 0, money: { min: 0, max: 0 } })
    : {};

  return {
    tags,
    title: { ...title, values },
    description: { ...description, values },
  };
};
