import { nachthex } from 'rng/attributions';
import { TableEntryBig, Big, GenerateValuesFn } from 'types/character';

// common entry with a title and a description
export const entry = (
  id: string,
  generateValues?: GenerateValuesFn
): TableEntryBig => ({
  id: `nachthex-${id}`,
  tags: ['stregaflora', 'nachthex', id],
  attribution: nachthex,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.stregaflora.nachthex.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['stregaflora', 'nachthex', id],
        title: {
          id: `content.stregaflora.nachthex.${id}.title`,
          values: {},
        },
        description: {
          id: `content.stregaflora.nachthex.${id}.description`,
          values: {},
        },
      },
    ],
  },
  generateValues,
});

export const formatEntry = ({ content }: TableEntryBig) => content as Big;
