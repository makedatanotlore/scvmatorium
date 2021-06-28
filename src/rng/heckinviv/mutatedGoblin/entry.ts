import { mutatedGoblin } from 'rng/attributions';
import { TableEntryBig, Big, GenerateValuesFn } from 'types/character';

// common entry with a title and a description
export const entry = (
  id: string,
  generateValues?: GenerateValuesFn
): TableEntryBig => ({
  id: `mutatedGoblin-${id}`,
  tags: ['heckinviv', 'mutatedGoblin', id],
  attribution: mutatedGoblin,
  content: {
    component: { id: 'halfBox' },
    header: {
      id: `content.heckinviv.mutatedGoblin.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['heckinviv', 'mutatedGoblin', id],
        title: {
          id: `content.heckinviv.mutatedGoblin.${id}.title`,
          values: {},
        },
        description: {
          id: `content.heckinviv.mutatedGoblin.${id}.description`,
          values: {},
        },
      },
    ],
  },
  generateValues,
});

export const formatEntry = ({ content }: TableEntryBig) => content as Big;
