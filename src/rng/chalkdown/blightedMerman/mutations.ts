import { blightedMerman } from 'rng/attributions';
import { TableEntryBig, Big, GenerateValuesFn } from 'types/character';

const entry = (
  id: string,
  generateValues?: GenerateValuesFn
): TableEntryBig => ({
  id: `blightedMerman-${id}`,
  tags: ['chalkdown', 'blightedMerman', id],
  attribution: blightedMerman,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.chalkdown.blightedMerman.mutation.title`,
      values: {},
    },
    content: [
      {
        tags: ['chalkdown', 'blightedMerman', id],
        title: {
          id: `content.chalkdown.blightedMerman.mutation.title`,
          values: {},
        },
        description: {
          id: `content.chalkdown.blightedMerman.${id}.description`,
          values: {},
        },
      },
    ],
  },
  generateValues,
});

export const mutations = [
  'maw',
  'stomachs',
  'eyes',
  'mucus',
  'fin',
  'gills',
].map((mutation) => entry(mutation));

export const formatMutation = ({ content }: TableEntryBig) => content as Big;
