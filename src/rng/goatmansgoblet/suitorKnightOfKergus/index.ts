import { formatQuestion, questions } from './questions';
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
import { formatBlessing, blessings } from './blessings';
import tables from 'rng/tables';

export const suitorKnightOfKergus = (): Character => {
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
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();

  const weapon = rollWeapon(6);
  const armor = rollArmor(4, hasScroll(generalEquipment));
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();

  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  return {
    tags: ['suitorKnightOfKergus'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('goatmansgoblet.suitorKnightOfKergus'),
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
          formatQuestion(sample(questions)!),
          {
            tags: ['suitorKnightOfKergus', 'goatmansgoblet', 'blurb'],
            title: {
              id: 'content.goatmansgoblet.suitorKnightOfKergus.blurb',
              values: {},
            },
            description: {
              id: 'content.goatmansgoblet.suitorKnightOfKergus.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatBlessing(sample(blessings)!),
      {
        component: { id: 'plainBox' },
        header: {
          id: 'content.goatmansgoblet.suitorKnightOfKergus.knightly.title',
          values: {},
        },
        content: [
          {
            tags: ['suitorKnightOfKergus', 'goatmansgoblet'],
            title: {
              id: 'content.goatmansgoblet.suitorKnightOfKergus.knightly',
              values: {},
            },
            description: {
              id:
                'content.goatmansgoblet.suitorKnightOfKergus.knightly.description',
              values: {},
            },
          },
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
              money: { min: 30, max: 180 },
            })
          ),
      },
    ],
  };
};
