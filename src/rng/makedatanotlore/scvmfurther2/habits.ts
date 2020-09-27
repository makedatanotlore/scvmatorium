import { scvmatorium } from 'rng/attributions';
import { TableEntry } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `scvmatorium-${id}`,
  tags: ['makedatanotlore', 'scvmfurther2', 'habit', id],
  attribution: scvmatorium,
  content: {
    tags: ['makedatanotlore', 'scvmfurther2', 'habit', id],
    title: {
      id: 'character.stats.standard.habit',
      values: {},
    },
    description: {
      id: `content.makedatanotlore.scvmfurther2.${id}`,
      values: {},
    },
  },
});

export const habits = [
  'pickingGums',
  'anotherQuestion',
  'noIrony',
  'conspiracist',
  'clotheswearer',
  'bedtimestory',
  'afraidOfTheDark',
  'eatAlone',
  'otherPustules',
  'antiHypocrite',
  'fourRunner',
  'notACoward',
  'thrivesAwkward',
  'unableToSympathize',
  'shoedrinker',
  'bargainer',
  'cannotRead',
  'honorFolly',
  'wannabe',
  'tokenMaker',
].map((habit) => entry(habit));
