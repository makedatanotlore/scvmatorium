import { misbegottenRelict } from 'rng/attributions';
import { TableEntry } from 'types/character';

const entry = (id: string): TableEntry => ({
  id: `misbegottenRelict-${id}`,
  tags: ['khordal', 'misbegottenRelict', 'name', id],
  attribution: misbegottenRelict,
  content: {
    tags: ['khordal', 'misbegottenRelict', 'name', id],
    title: {
      id: 'character.stats.titles.name',
      values: {},
    },
    description: {
      id: 'character.stats.standard.name',
      values: { name: id },
    },
  },
});

export const names = [
  'Agg',
  'Anthrax',
  'Chrako',
  'Froth',
  'Gorn',
  'Grubbl',
  'Hugg',
  'Krogg',
  'Kruml',
  'Lox',
  'Ogl',
  'Panko',
  'Rosh',
  'Rugram',
  'Soggo',
  'Thrug',
  'Uggh',
  'Urax',
  'Furm',
  'Wartog',
].map((name) => entry(name));
