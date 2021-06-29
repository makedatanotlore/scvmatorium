import { rollOmens, formatOmens } from 'rng/shared/omens';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollSilver } from './../../shared/equipment';
import { formatClass } from './../../shared/class';
import { formatBody } from '../../shared/bodies';
import { formatHabit } from '../../shared/habits';
import { formatTrait } from '../../shared/traits';
import {
  formatEquipment,
  rollFoodAndWater,
  rollStandardEquipment,
  rollWeapon,
} from '../../shared/equipment';
import { sampleSize, sample } from 'lodash/fp';
import { formatAbility, threeD6 } from 'rng/shared/abilities';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { formatEntry, entry } from './entry';
import { armor } from './armor';
import { bardsTales } from './bardsTales';

export const fugitiveKnight = (): Character => {
  const strength = {
    name: 'strength',
    score: threeD6(0),
  };
  const agility = {
    name: 'agility',
    score: threeD6(2),
  };
  const presence = {
    name: 'presence',
    score: threeD6(0),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(-2),
  };

  const hp = rollHp(1, 4, toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(10);
  // no armor
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, ...generalEquipment, silver];

  return {
    tags: ['fugitiveKnight'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('neonon.fugitiveKnight'),
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
            tags: ['fugitiveKnight', 'neonon', 'blurb'],
            title: {
              id: 'content.neonon.fugitiveKnight.blurb',
              values: {},
            },
            description: {
              id: 'content.neonon.fugitiveKnight.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          ...sampleSize(2, tables.habits).map((habit) => formatHabit(habit)),
        ],
      },
      formatEntry(entry('bounty')),
      formatEntry(entry('despised')),
      formatEntry(sample(armor)!),
      formatEntry(sample(bardsTales)!),
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
              money: { min: 10, max: 60 },
            })
          ),
      },
    ],
  };
};
