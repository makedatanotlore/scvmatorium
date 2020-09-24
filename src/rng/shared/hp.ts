import { random } from 'lodash/fp';
import { Small } from 'types/character';

export const formatHp = (hp: number): Small => ({
  title: { id: 'character.stats.titles.hp', values: {} },
  description: { id: 'character.stats.standard.hp', values: { hp } },
});

export const rollHp = (min: number, max: number, modifier: number = 0) => {
  const total = random(min, max) + modifier;
  return total > 0 ? total : 1;
};
