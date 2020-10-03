import { theWretchedUsurper } from 'rng/attributions';
import { TableEntry, GenerateValuesFn, Small } from 'types/character';
import { sample, random } from 'lodash/fp';

const entry = (id: string, generateValues: GenerateValuesFn): TableEntry => ({
  id: `theWretchedUsurper-${id}`,
  tags: ['goatmansgoblet', 'theWretchedUsurper', id],
  attribution: theWretchedUsurper,
  content: {
    tags: ['goatmansgoblet', 'theWretchedUsurper', id],
    title: {
      id: `content.goatmansgoblet.theWretchedUsurper.${id}`,
      values: {},
    },
    description: {
      id: `content.goatmansgoblet.theWretchedUsurper.${id}`,
      values: {},
    },
  },
  generateValues,
});

export const thouWereSpawned = entry('thouWereSpawned', () => ({
  spawned: sample([
    'slithering',
    'emerging',
    'cauldron',
    'ambergris',
    'suicide',
    'dreams',
  ])!,
}));

export const thouWereNamed = entry('thouWereNamed', () => ({
  one: sample(['flaying', 'doom', 'lash', 'anguish', 'butcher', 'scion'])!,
  two: sample(['corpses', 'blood', 'prophets', 'venoms', 'loam', 'fools'])!,
}));

export const thouArtHunted = entry('thouArtHunted', () => ({
  by: sample(['inquisitors', 'knights', 'angryMob', 'servants'])!,
  they: sample(['daysAway', 'amassing', 'reinforcements', 'pursuing'])!,
  days: random(1, 4),
}));

export const questions = [thouWereSpawned, thouWereNamed, thouArtHunted];

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
