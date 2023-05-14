import { sampleSize, sample, random } from 'lodash/fp';
import { desperateFarmhand as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, formatTableEntry, formatTitledEntry, tableEntry, titledEntry, equipmentEntry } from 'rng/shared/entries';
import {
  formatEquipmentList,
  rollFoodAndWater,
  rollSilver,
  rollStandardEquipment,
} from '../../shared/equipment';
import { rollHp, formatHp } from 'rng/shared/hp';
import { formatName } from 'rng/shared/names';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import tables from 'rng/tables';
import { Character } from 'types/character';

export const desperateFarmhand = (): Character => {
  const abilities = rollAbilities(1, 0, -2, 1);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const maxOmens = 3;
  const omens = rollOmens(1, maxOmens);

  const generalEquipment = rollStandardEquipment(true);
  const weapon = equipmentEntry(attribution,'pitchfork')
  const armor = equipmentEntry(attribution,'wellies')
  const silver = rollSilver();
  const silverRange = {min: 2, max: 12};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  const yourBed = [
    'stable',
    'kennel',
    'field',
    'barn',
    'village',
    'village' // on 5-6
  ].map((x) => tableEntry(attribution, x));
  const youLeftTheFarmWith = [
    'horsefeed',
    'hatred',
    'books',
    'brandy',
    'letters',
    'sheep',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('raptorshadow.desperateFarmhand'),
      formatHp(hp),
      formatOmens(omens, maxOmens),
    ],
    bigs: [
      {
        component: { id: 'introduction' },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          blurb(attribution),
          formatTableEntry(sample(yourBed)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(sample(youLeftTheFarmWith)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
