import { rollOmens, formatOmens } from 'rng/shared/omens';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollSilver } from './../../shared/equipment';
import { formatClass } from './../../shared/class';
import { formatBody } from '../../shared/bodies';
import { formatHabit } from '../../shared/habits';
import { formatTrait } from '../../shared/traits';
import {
  formatEquipment,
  rollStandardEquipment,
  rollWeapon,
  rollFoodAndWater,
} from '../../shared/equipment';
import { sampleSize, sample } from 'lodash/fp';
import { formatAbility, threeD6 } from 'rng/shared/abilities';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { mutations, formatMutation } from './mutations';
import { transformations, formatTransformation } from './transformations';

export const blightedMerman = (): Character => {
  const strength = {
    name: 'strength',
    score: threeD6(0),
  };
  const agility = {
    name: 'agility',
    score: threeD6(1),
  };
  const presence = {
    name: 'presence',
    score: threeD6(-2),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(1),
  };

  const hp = rollHp(1, 8, toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();

  const weapon = rollWeapon(4);
  const silver = rollSilver();

  const foodAndWater = rollFoodAndWater();

  const equipment = [foodAndWater, weapon, ...generalEquipment, silver];

  return {
    tags: ['blightedMerman'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('chalkdown.blightedMerman'),
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
          {
            tags: ['blightedMerman', 'chalkdown', 'blurb'],
            title: {
              id: 'content.chalkdown.blightedMerman.blurb',
              values: {},
            },
            description: {
              id: 'content.chalkdown.blightedMerman.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatMutation(sample(mutations)!),
      ...sampleSize(2, transformations).map((transformation) =>
        formatTransformation(transformation)
      ),
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
