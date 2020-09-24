import { rollStandardEquipment } from './../shared/equipment';
import { random, drop, sum, sampleSize, sample } from 'lodash/fp';
import { threeD6, scores, formatAbility } from 'rng/shared/abilities';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';

const fourD6DropLowest = () => {
  const rolls = [random(1, 6), random(1, 6), random(1, 6), random(1, 6)];
  const result = sum(drop(1, rolls.sort()));

  return scores.find(({ numbers }) => numbers.includes(result))?.value || 0;
};

export const roll = (): Character => {
  const abilities = ['strength', 'agility', 'presence', 'toughness'];
  const strongAbilities = sampleSize(2, abilities);

  const [strength, agility, presence, toughness] = abilities.map((ability) => ({
    name: ability,
    score: strongAbilities.includes(ability) ? fourD6DropLowest() : threeD6(0),
  }));

  const hp = rollHp(1, 8, toughness.score);
  const omens = rollOmens(1, 2);

  const equipment = rollStandardEquipment();

  return {
    tags: ['classless'],
    smalls: [
      formatName(sample(tables.names)!),
      formatHp(hp),
      formatOmens(omens, 2),
    ],
    bigs: [
      {
        component: 'ability-list',
        header: { id: 'character.stats.titles.abilities', values: {} },
        content: [
          formatAbility(strength),
          formatAbility(agility),
          formatAbility(presence),
          formatAbility(toughness),
        ],
      },
      {
        component: 'equipment-list',
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment,
      },
      {
        component: 'equipment-list',
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: rollStandardEquipment(),
      },
    ],
  };
};
