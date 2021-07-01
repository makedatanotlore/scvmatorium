import { rollOmens, formatOmens } from 'rng/shared/omens';
import { rollHp, formatHp } from 'rng/shared/hp';
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
import { formatEntry, entry } from './entry';
import { gifts } from './gifts';

export const deathmarks = [
    'burning',
    'drowning',
    'hanging',
    'slitThroat',
    'crushed',
    'stoned',
].map((x) => entry(x));

export const nachthex = (): Character => {
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
    score: threeD6(2),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(-2),
  };

  const hp = rollHp(1, 6, toughness.score);
  const omens = rollOmens(1, 4);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(10);
  const armor = rollArmor(4, hasScroll(generalEquipment));
  // no silver
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment];

  return {
    tags: ['nachthex'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('stregaflora.nachthex'),
      formatHp(hp),
      formatOmens(omens, 4),
    ],
    bigs: [
      {
        component: {
          id: 'introduction',
        },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          {
            tags: ['nachthex', 'stregaflora', 'blurb'],
            title: {
              id: 'content.stregaflora.nachthex.blurb',
              values: {},
            },
            description: {
              id: 'content.stregaflora.nachthex.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          ...sampleSize(2, tables.habits).map((habit) => formatHabit(habit)),
        ],
      },
      formatEntry(sample(deathmarks)!),
      {
        component: { id: 'table' },
        header: {
          id: 'content.stregaflora.nachthex.gifts',
          values: {},
        },
        content: [
          {
            tags: ['nachthex', 'stregaflora', 'tableDescription'],
            title: {
              id: 'content.stregaflora.nachthex.tableDescription',
              values: {},
            },
            description: {
              id: 'content.stregaflora.nachthex.tableDescription',
              values: {},
            },
          },
          ...gifts,
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
              money: { min: 0, max: 0 },
            })
          ),
      },
    ],
  };
};
