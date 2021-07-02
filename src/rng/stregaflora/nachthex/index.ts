import { sampleSize, sample } from 'lodash/fp';
import { nachthex as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { titledEntry, formatTitledEntry } from 'rng/shared/entries';
import {
  formatEquipment,
  hasScroll,
  rollArmor,
  rollFoodAndWater,
  rollStandardEquipment,
  rollWeapon,
} from 'rng/shared/equipment';
import { formatHabit } from 'rng/shared/habits';
import { rollHp, formatHp } from 'rng/shared/hp';
import { formatName } from 'rng/shared/names';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import { formatTrait } from 'rng/shared/traits';
import tables from 'rng/tables';
import { Character } from 'types/character';
import { gifts } from './gifts';

export const nachthex = (): Character => {
  const abilities = rollAbilities(0, 0, 2, -2);
  const hp = rollHp(1, 6, abilities.toughness.score);
  const omens = rollOmens(1, 4);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(10);
  const armor = rollArmor(4, hasScroll(generalEquipment));
  // no silver
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment];

  const deathmarks = [
    'burning',
    'drowning',
    'hanging',
    'slitThroat',
    'crushed',
    'stoned',
  ].map((x) => titledEntry(attribution, x));

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
      formatTitledEntry(sample(deathmarks)!),
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
      formatAbilities(abilities),
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: abilities.presence.score,
              money: { min: 0, max: 0 },
            })
          ),
      },
    ],
  };
};
