import { psyberDevangelist } from 'rng/attributions';
import { TableEntry, Big } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `psyberDevangelist-${id}`,
  tags: ['greysonwhy', 'psyberDevangelist', 'power', id],
  attribution: psyberDevangelist,
  content: {
    component: { id: 'halfBox' },
    header: {
      id: `content.greysonwhy.psyberDevangelist.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['greysonwhy', 'psyberDevangelist', 'power', id],
        title: {
          id: `content.greysonwhy.psyberDevangelist.${id}.title`,
          values: {},
        },
        description: {
          id: `content.greysonwhy.psyberDevangelist.${id}.description`,
          values: {},
        },
      },
      {
        tags: ['greysonwhy', 'psyberDevangelist', 'power'],
        title: {
          id: `content.greysonwhy.psyberDevangelist.${id}.title`,
          values: {},
        },
        description: {
          id: `content.greysonwhy.psyberDevangelist.power.description`,
          values: {},
        },
      },
    ],
  },
});

export const powers = [
  'neonGenesis',
  'mask',
  'exoteleportation',
  'unlimitedPower',
  'mindfuckwipe',
  'hyperskip',
  'psychokinesis',
  'skeptischism',
].map((power) => entry(power));

export const formatPower = ({ content }: TableEntry) => content as Big;
