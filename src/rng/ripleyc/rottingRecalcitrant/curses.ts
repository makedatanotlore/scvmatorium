import { misbegottenRelict } from 'rng/attributions';
import { TableEntry, Big } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `rottingRecalcitrant-${id}`,
  tags: ['ripleyc', 'rottingRecalcitrant', 'curse', id],
  attribution: misbegottenRelict,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.ripleyc.rottingRecalcitrant.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['ripleyc', 'rottingRecalcitrant', 'curse', id],
        title: {
          id: `content.ripleyc.rottingRecalcitrant.${id}.title`,
          values: {},
        },
        description: {
          id: `content.ripleyc.rottingRecalcitrant.${id}.description`,
          values: {},
        },
      },
    ],
  },
});

export const curses = [
  'fullbodyRot',
  'vileAttitude',
  'spoilskin',
  'infestation',
  'cursedTouch',
  'noxiousBreath',
].map((curse) => entry(curse));

export const formatCurse = ({ content }: TableEntry) => content as Big;
