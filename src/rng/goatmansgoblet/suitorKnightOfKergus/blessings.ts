import { suitorKnightOfKergus } from 'rng/attributions';
import { TableEntry, Big } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `suitorKnightOfKergus-${id}`,
  tags: ['goatmansgoblet', 'suitorKnightOfKergus', 'curse', id],
  attribution: suitorKnightOfKergus,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.goatmansgoblet.suitorKnightOfKergus.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['goatmansgoblet', 'suitorKnightOfKergus', 'curse', id],
        title: {
          id: `content.goatmansgoblet.suitorKnightOfKergus.${id}.title`,
          values: {},
        },
        description: {
          id: `content.goatmansgoblet.suitorKnightOfKergus.${id}.description`,
          values: {},
        },
      },
    ],
  },
});

export const blessings = [
  'gullGuilt',
  'despondentToken',
  'rakesCuckhold',
  'conduitOfDreams',
  'mournersBlade',
  'onlyHer',
].map((curse) => entry(curse));

export const formatBlessing = ({ content }: TableEntry) => content as Big;
