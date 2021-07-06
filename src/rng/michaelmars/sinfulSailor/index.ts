import { sampleSize, sample, max } from 'lodash/fp';
import { sinfulSailor as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { titledEntry, formatTitledEntry, formatTableEntry } from 'rng/shared/entries';
import {
  formatEquipment,
  hasScroll,
  rollArmor,
  rollFoodAndWater,
  rollSilver,
  rollStandardEquipment,
} from '../../shared/equipment';
import { rollHp, formatHp } from 'rng/shared/hp';
import { formatName } from 'rng/shared/names';
import { equipmentEntry, tableEntry } from 'rng/shared/entries';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import tables from 'rng/tables';
import { Character, GenerateValuesFn, TableEntry } from 'types/character';

export const entry = (id: string, generateValues?: GenerateValuesFn): TableEntry => equipmentEntry(attribution, id, generateValues)


export const sinfulSailor = (): Character => {
  const abilities = rollAbilities(1, 1, 0, -2);
  const hp = rollHp(1, 6, abilities.toughness.score);
  const omens = rollOmens(1, 3);

  const weapon = [
    entry('pegLeg'),
    entry('belayingPin'),
    entry('bayonet'),
    entry('knife'),
    entry('boardingAxe'),
    entry('cutlass'),
    entry('shoddyPistolet', ({ presence }) => ({
      amount: max([2 + presence, 1])!,
    })),
    entry('boardingPike'),
    entry('shoddyCulverin', ({ presence }) => ({
      amount: max([2 + presence, 1])!,
    })),
    entry('shoddyArquebus', ({ presence }) => ({
      amount: max([2 + presence, 1])!,
    })),
  ];

  const generalEquipment = rollStandardEquipment();
  const armor = rollArmor(3, hasScroll(generalEquipment));
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, sample(weapon)!, armor, ...generalEquipment, silver];

  const joinedBecause = [
    'pressGanged',
    'apprenticeship',
    'owedMoney',
    'drunkenRage',
    'fun',
    'born',
  ].map((x) => tableEntry(attribution, x));

  const sinfulMark = [
    'envy',
    'gluttony',
    'avarice',
    'lust',
    'pride',
    'sloth',
    'anger',
    'sincarnate',
  ].map((x) => titledEntry(attribution, x, 'plainBox'));

  return {
    tags: ['sinfulSailor'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('michaelmars.sinfulSailor'),
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
          formatTableEntry(sample(joinedBecause)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(sample(sinfulMark)!),
      formatAbilities(abilities),
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: abilities.presence.score,
              money: { min: 20, max: 120 },
            })
          ),
      },
    ],
 };
};
