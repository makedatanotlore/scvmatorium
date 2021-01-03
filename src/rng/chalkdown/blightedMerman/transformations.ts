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
    component: { id: 'halfBox' },
    header: {
      id: `content.chalkdown.blightedMerman.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['chalkdown', 'blightedMerman', id],
        title: {
          id: `content.chalkdown.blightedMerman.${id}.title`,
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

export const transformations = [
  'barbedVertebrae',
  'chromatophoricVeil',
  'expeditiousWebbing',
  'avariciousAppendage',
  'naturalCarapace',
  'razorSharpLaugh',
  'unwieldyPincer',
  'electricFeel',
].map((transformation) => entry(transformation));

export const formatTransformation = ({ content }: TableEntryBig) =>
  content as Big;
