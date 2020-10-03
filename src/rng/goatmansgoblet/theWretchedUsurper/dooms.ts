import { theWretchedUsurper } from 'rng/attributions';
import { TableEntry, Big } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `theWretchedUsurper-${id}`,
  tags: ['goatmansgoblet', 'theWretchedUsurper', id],
  attribution: theWretchedUsurper,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.goatmansgoblet.theWretchedUsurper.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['goatmansgoblet', 'theWretchedUsurper', id],
        title: {
          id: `content.goatmansgoblet.theWretchedUsurper.${id}.title`,
          values: {},
        },
        description: {
          id: `content.goatmansgoblet.theWretchedUsurper.${id}.description`,
          values: {},
        },
      },
    ],
  },
});

export const dooms = [
  'tramellerOfFlesh',
  'bloodOfStone',
  'drinkerOfEyes',
  'miasmaOfCorpses',
  'needleOfIchors',
  'cacophonousTruths',
].map((doom) => entry(doom));

export const formatDoom = ({ content }: TableEntry) => content as Big;
