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
  'Quaz4R',
  'R1xt4r',
  '0x0n',
  'C0sm0s15',
  'Zer0x-10',
  'W3y-L4nd',
  'Yu7an1',
  'W1x',
  'H0th',
  'Lux0r',
  'Scr4p',
  'Luc1F3RUM',
  'ST-AT',
  'MiXaM',
  'R2-D̵̬̃͜͝E̵̜̅A̷͚͝Ț̸̬̍H̵̩͐̕2',
  '5',
  'WT-666',
  'TI-84+',
  'T-800',
  'C4lcul0n',
  'Xx_L33T_xX',
  'J4ck',
  '3gb3rt',
  'O-B-1',
  'β',
  'T04.NuVA',
  'Ru5t',
  'Vitreous Spark',
  'Nerv',
].map((name) => entry(name));
