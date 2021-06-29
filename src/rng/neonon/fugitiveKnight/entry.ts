import { fugitiveKnight } from 'rng/attributions';
import { TableEntryBig, Big, GenerateValuesFn } from 'types/character';

// common entry with a title and a description
export const entry = (
  id: string,
  generateValues?: GenerateValuesFn
): TableEntryBig => ({
  id: `fugitiveKnight-${id}`,
  tags: ['neonon', 'fugitiveKnight', id],
  attribution: fugitiveKnight,
  content: {
    component: { id: 'halfBox' },
    header: {
      id: `content.neonon.fugitiveKnight.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['neonon', 'fugitiveKnight', id],
        title: {
          id: `content.neonon.fugitiveKnight.${id}.title`,
          values: {},
        },
        description: {
          id: `content.neonon.fugitiveKnight.${id}.description`,
          values: {},
        },
      },
    ],
  },
  generateValues,
});

export const formatEntry = ({ content }: TableEntryBig) => content as Big;
