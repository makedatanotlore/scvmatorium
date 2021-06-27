import { anCailleach } from 'rng/attributions';
import { TableEntryBig, Big, GenerateValuesFn } from 'types/character';


const entry = (
  id: string,
  generateValues?: GenerateValuesFn
): TableEntryBig => ({
  id: `anCailleach-${id}`,
  tags: ['michaelmars', 'anCailleach', id],
  attribution: anCailleach,
  content: {
    component: { id: 'halfBox' },
    header: {
      id: `content.michaelmars.anCailleach.${id}.title`,
      values: {},
    },
    content: [
      {
        tags: ['michaelmars', 'anCailleach', id],
        title: {
          id: `content.michaelmars.anCailleach.${id}.title`,
          values: {},
        },
        description: {
          id: `content.michaelmars.anCailleach.${id}.description`,
          values: {},
        },
      },
    ],
  },
  generateValues,
});

export const boons = [
  'blackthornStaff',
  'woolenVeil',
  'cornDolly',
  'hagStone',
  'imboleFirewood',
  'shapingHammer',
].map((boon) => entry(boon));

export const formatBoon = ({ content }: TableEntryBig) =>
  content as Big;
