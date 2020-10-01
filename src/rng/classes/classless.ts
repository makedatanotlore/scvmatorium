import { formatBody } from './../shared/bodies';
import { formatHabit } from './../shared/habits';
import { formatTrait } from './../shared/traits';
import {
  rollArmor,
  rollWeapon,
  hasScroll,
  rollSilver,
  rollStandardEquipment,
  formatEquipment,
  rollFoodAndWater,
} from './../shared/equipment';
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

export const classless = (): Character => {
  const abilities = ['strength', 'agility', 'presence', 'toughness'];
  const strongAbilities = sampleSize(2, abilities);

  const [strength, agility, presence, toughness] = abilities.map((ability) => ({
    name: ability,
    score: strongAbilities.includes(ability) ? fourD6DropLowest() : threeD6(0),
  }));

  const hp = rollHp(1, 8, toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment({
    presence: presence.score,
    money: { min: 20, max: 120 },
  });

  const weapon = rollWeapon(10);
  const armor = rollArmor(4, hasScroll(generalEquipment));
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();

  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  return {
    tags: ['classless'],
    smalls: [
      formatName(sample(tables.names)!),
      formatHp(hp),
      formatOmens(omens, 2),
    ],
    bigs: [
      {
        component: {
          id: 'introduction',
        },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      {
        component: { id: 'abilityList' },
        header: { id: 'character.stats.titles.abilities', values: {} },
        content: [
          formatAbility(strength),
          formatAbility(agility),
          formatAbility(presence),
          formatAbility(toughness),
        ],
      },
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: presence.score,
              money: { min: 20, max: 120 },
            })
          ),
      },
    ],
  };
};
