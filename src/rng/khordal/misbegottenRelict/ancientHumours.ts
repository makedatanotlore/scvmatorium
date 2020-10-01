import { misbegottenRelict } from 'rng/attributions';
import { TableEntry, Big } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `misbegottenRelict-${id}`,
  tags: ['khordal', 'misbegottenRelict', 'ancientHumour', id],
  attribution: misbegottenRelict,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.khordal.misbegottenRelict.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['khordal', 'misbegottenRelict', 'ancientHumour', id],
        title: {
          id: `content.khordal.misbegottenRelict.${id}.title`,
          values: {},
        },
        description: {
          id: `content.khordal.misbegottenRelict.${id}.description`,
          values: {},
        },
      },
    ],
  },
});

export const humours = [
  'childeOfThunderLizard',
  'redBirthOfMan',
  'stygianSon',
  'tickDynasty',
  'interstellarExile',
  'spawnOfUnknownColour',
].map((humour) => entry(humour));

export const formatHumour = ({ content }: TableEntry) => content as Big;
