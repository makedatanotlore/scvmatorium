import { rollOmens, formatOmens } from 'rng/shared/omens';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollSilver } from './../../shared/equipment';
import { formatClass } from './../../shared/class';
import { formatBody } from '../../shared/bodies';
import { formatHabit } from '../../shared/habits';
import { formatTrait } from '../../shared/traits';
import {
  formatEquipment,
  hasScroll,
  rollArmor,
  rollFoodAndWater,
  rollStandardEquipment,
  rollWeapon,
} from '../../shared/equipment';
import { sampleSize, sample } from 'lodash/fp';
import { formatAbility, threeD6 } from 'rng/shared/abilities';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { boons, formatBoon } from './boons';
import { divineDesign, formatDivineDesign } from './divineDesign';

export const anCailleach = (): Character => {
  const strength = {
    name: 'strength',
    score: threeD6(0),
  };
  const agility = {
    name: 'agility',
    score: threeD6(-2),
  };
  const presence = {
    name: 'presence',
    score: threeD6(0),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(2),
  };

  const hp = rollHp(1, 8, toughness.score);
  const omens = rollOmens(1, 1);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(6);
  const armor = rollArmor(3, hasScroll(generalEquipment));
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  return {
    tags: ['anCailleach'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('michaelmars.anCailleach'),
      formatHp(hp),
      formatOmens(omens, 1),
    ],
    bigs: [
      {
        component: {
          id: 'introduction',
        },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          {
            tags: ['anCailleach', 'michaelmars', 'blurb'],
            title: {
              id: 'content.michaelmars.anCailleach.blurb',
              values: {},
            },
            description: {
              id: 'content.michaelmars.anCailleach.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatDivineDesign(divineDesign),
      formatBoon(sample(boons)!),
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
