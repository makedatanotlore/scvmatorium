import { sampleSize, sample, random } from 'lodash/fp';
import { catacombSaint as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, formatTableEntry, formatTitledEntry, tableEntry, titledEntry} from 'rng/shared/entries';
import {
  formatEquipmentList,
  rollFoodAndWater,
  rollSilver,
  rollStandardEquipment,
  rollWeapon,
  sharedEntry,
} from '../../shared/equipment';
import { rollHp, formatHp } from 'rng/shared/hp';
import { formatName } from 'rng/shared/names';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import tables from 'rng/tables';
import { Character } from 'types/character';

export const catacombSaint = (): Character => {
  const abilities = rollAbilities(-2, 0, 0, -2);
  const hp = rollHp(1, 6, abilities.toughness.score);
  const maxOmens = 4;
  const omens = rollOmens(1, maxOmens);

  const generalEquipment = rollStandardEquipment(false);  // no scroll
  const weapon = rollWeapon(8);
  // d2+2 armor, aka 3-4 armor roll, aka 50% medium, 50% heavy
  let armor;
  if (random(1,2) === 1) {
    armor = sample(tables.equipment.armor.medium)!;
  } else {
    armor = sample(tables.equipment.armor.heavy)!;
  }
  const silver = rollSilver();
  const silverRange = {min: 30, max: 180};
  const foodAndWater = rollFoodAndWater();
  const sacredScroll = sharedEntry('sacredScroll');
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, sacredScroll, silver];

  const whoWereYou = [
    'reformer',
    'warrior',
    'martyr',
    'convert',
    'clergy',
    'relic'
  ].map((x) => tableEntry(attribution, x));
  const relics = [
    'sword',
    'miter',
    'water',
    'chaplet',
    'crucifix',
    'arm',
    'shield',
    'apocrypha',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('makooti.catacombSaint'),
      formatHp(hp),
      formatOmens(omens, maxOmens),
    ],
    bigs: [
      {
        component: { id: 'introduction' },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          blurb(attribution),
          formatTableEntry(sample(whoWereYou)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(titledEntry(attribution, 'undead')),
      formatTitledEntry(titledEntry(attribution, 'sacredWatcher')),
      formatTitledEntry(sample(relics)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
