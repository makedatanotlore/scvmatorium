import { psyberDevangelist } from 'rng/attributions';
import { TableEntry, Big } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `psyberDevangelist-${id}`,
  tags: ['greysonwhy', 'psyberDevangelist', 'weapon', id],
  attribution: psyberDevangelist,
  content: {
    component: { id: 'halfBox' },
    header: {
      id: `content.greysonwhy.psyberDevangelist.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['greysonwhy', 'psyberDevangelist', 'weapon', id],
        title: {
          id: `content.greysonwhy.psyberDevangelist.${id}.title`,
          values: {},
        },
        description: {
          id: `content.greysonwhy.psyberDevangelist.${id}.description`,
          values: {},
        },
      },
      ...(id === 'forceBlade'
        ? []
        : [
            {
              tags: ['greysonwhy', 'psyberDevangelist', 'Δ'],
              title: {
                id: `content.greysonwhy.psyberDevangelist.Δ.title`,
                values: {},
              },
              description: {
                id: `content.greysonwhy.psyberDevangelist.Δ.description`,
                values: {},
              },
            },
          ]),
    ],
  },
});

export const weapons = [
  'stunGlove',
  'stunBaton',
  'electrolaserPistol',
  'vibroKnife',
  'vibroSword',
  'stunFlail',
  'laserPistol',
  'blasterPistol',
  'laserRifle',
  'blasterRifle',
  'forceBlade',
].map((weapon) => entry(weapon));

export const formatWeapon = ({ content }: TableEntry) => content as Big;
