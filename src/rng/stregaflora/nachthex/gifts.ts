import { Small } from 'types/character';

const gift = (id: string): Small => ({
  tags: ['stregaflora', 'nachthex', 'tableEntry', 'gift', id],
  title: {
    id: `content.stregaflora.nachthex.${id}.title`,
    values: {},
  },
  description: {
    id: `content.stregaflora.nachthex.${id}.description`,
    values: {},
  },
});

export const gifts = [
  'puppeteering',
  'danceMagick',
  'bloodMagick',
  'necromancy',
  'shapeshifting',
  'futureTelling',
].map((id) => gift(id));
