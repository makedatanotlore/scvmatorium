import { formatBody } from 'rng/shared/bodies';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { formatClass } from 'rng/shared/class';
import {
  rollArmor,
  rollWeapon,
  hasScroll,
  rollSilver,
  rollStandardEquipment,
  formatEquipment,
  rollFoodAndWater,
} from 'rng/shared/equipment';
import { sampleSize, sample } from 'lodash/fp';
import { threeD6, formatAbility } from 'rng/shared/abilities';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import { blessings } from './blessings';
import tables from 'rng/tables';
import { origins, formatOrigin } from './origins';

export const sunScorchedZealot = (): Character => {
  const strength = {
    name: 'strength',
    score: threeD6(0),
  };
  const agility = {
    name: 'agility',
    score: threeD6(0),
  };
  const presence = {
    name: 'presence',
    score: threeD6(-2),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(2),
  };

  const hp = rollHp(1, 6, toughness.score);
  const omens = rollOmens(1, 3);

  const generalEquipment = rollStandardEquipment();

  const weapon = rollWeapon(6);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();

  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  return {
    tags: ['sunScorchedZealot'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('khordal.sunScorchedZealot'),
      formatHp(hp),
      formatOmens(omens, 3),
    ],
    bigs: [
      {
        component: {
          id: 'introduction',
        },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          formatOrigin(sample(origins)!),
          {
            tags: ['sunScorchedZealot', 'khordal', 'blurb'],
            title: {
              id: 'content.khordal.sunScorchedZealot.blurb',
              values: {},
            },
            description: {
              id: 'content.khordal.sunScorchedZealot.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      {
        component: { id: 'table' },
        header: {
          id: 'content.khordal.sunScorchedZealot.blessings',
          values: {},
        },
        content: [
          {
            tags: ['sunScorchedZealot', 'khordal', 'tableDescription'],
            title: {
              id: 'content.khordal.sunScorchedZealot.tableDescription',
              values: {},
            },
            description: {
              id: 'content.khordal.sunScorchedZealot.tableDescription',
              values: {},
            },
          },
          ...blessings,
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
              money: { min: 10, max: 40 },
            })
          ),
      },
    ],
  };
};
