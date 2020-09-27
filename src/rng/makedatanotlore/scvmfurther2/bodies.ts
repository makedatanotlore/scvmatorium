import { scvmatorium } from 'rng/attributions';
import { TableEntry } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `scvmatorium-${id}`,
  tags: ['makedatanotlore', 'scvmfurther2', 'body', id],
  attribution: scvmatorium,
  content: {
    tags: ['makedatanotlore', 'scvmfurther2', 'body', id],
    title: {
      id: 'character.stats.standard.body',
      values: {},
    },
    description: {
      id: `content.makedatanotlore.scvmfurther2.${id}`,
      values: {},
    },
  },
});

export const bodies = [
  'moles',
  'pegleg',
  'spindlyFrame',
  'jitteryLimbs',
  'longHair',
  'missingNose',
  'noTeeth',
  'webbedHands',
  'crustyEyes',
  'longNails',
  'stocky',
  'necroticHole',
  'swollen',
  'burnt',
  'veiny',
  'hairy',
  'cauliflowerEars',
  'surprisinglyClean',
  'scaly',
  'badEyed',
].map((body) => entry(body));
