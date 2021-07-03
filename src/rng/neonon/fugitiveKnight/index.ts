import { sampleSize, sample } from 'lodash/fp';
import { fugitiveKnight as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { blurb, formatTableEntry, formatTitledEntry, tableEntry, titledEntry } from 'rng/shared/entries';
import {
  formatEquipmentList,
  rollFoodAndWater,
  rollSilver,
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

export const fugitiveKnight = (): Character => {
  const abilities = rollAbilities(0, 2, 0, -2);
  const hp = rollHp(1, 4, abilities.toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(10);
  // no armor
  const silver = rollSilver();
  const silverRange = {min: 10, max: 60};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, ...generalEquipment, silver];

  const bounty = titledEntry(attribution, 'bounty');
  const despised = titledEntry(attribution,'despised')
  const armor = [
    'brigandine',
    'thornArmor',
    'mirrorPlate',
    'scaleArmor',
    'moonsilverMail',
    'plateCoat',
  ].map((x) => titledEntry(attribution, x));
  const bardsTales = [
    'slitThroat',
    'spiderEggs',
    'goblinTracks',
    'closedDoors',
    'ondaEels',
    'cancerPit',
  ].map((x) => tableEntry(attribution, x));

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
          blurb(attribution),
          formatTableEntry(sample(bardsTales)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          ...sampleSize(2, tables.habits).map((habit) => formatHabit(habit)),
        ],
      },
      formatTitledEntry(bounty),
      formatTitledEntry(despised),
      formatTitledEntry(sample(armor)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange)
    ],
  };
};
