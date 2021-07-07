import { unheroicFeats } from 'rng/attributions';
import { TableEntry } from 'types/character';

export const entry = (id: string): TableEntry => ({
  id: `unheroicFeats-${id}`,
  tags: ['peppermintBones', 'unheroicFeats', 'feat', id],
  attribution: unheroicFeats,
  content: {
    tags: ['peppermintBones', 'unheroicFeats', 'feat', id],
    title: {
      id: `content.peppermintBones.unheroicFeats.${id}.title`,
      values: {},
    },
    description: {
      id: `content.peppermintBones.unheroicFeats.${id}.description`,
      values: {},
    },
  },
});

export const feats = [
  'assassinsDeathblow',
  'battleHardenedDeathspeaker',
  'beastlyScholar',
  'bloodiedKnuckles',
  'bloodPact',
  'bloodthirstyRage',
  'boneCrafter',
  'butcher',
  'calmKiller',
  'catsEyes',
  'dualWielder',
  'fatefulVisions',
  'ironStomach',
  'firstStrike',
  'gutsyStrike',
  'harbingerMisery',
  'herbalistHealer',
  'horrificGrowth',
  'hyperAwareness',
  'immortalMemory',
  'inspiredStoryteller',
  'leech',
  'likeable',
  'livingArmor',
  'lucky',
  'mortalDraw',
  'negotiator',
  'outbackSurvivalist',
  'partyChef',
  'piper',
  'powerWord',
  'predatorySense',
  'recklessAttacker',
  'shieldBreaker',
  'skinner',
  'vileBlood',
].map((feat) => entry(feat));
