import { sampleSize, sample, random } from 'lodash/fp';
import { indomitableMountaineer as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, equipmentEntry, formatTableEntry, formatTitledEntry, titledEntry, tableEntry } from 'rng/shared/entries';
import {
  formatEquipmentList,
  hasScroll,
  rollArmor,
  rollFoodAndWater,
  rollSilver,
  rollStandardEquipment,
  rollWeapon,
} from '../../shared/equipment';
import { rollHp, formatHp } from 'rng/shared/hp';
import { formatName } from 'rng/shared/names';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import tables from 'rng/tables';
import { Character } from 'types/character';


export const indomitableMountaineer = (): Character => {
  const abilities = rollAbilities(2, 0, -2, 0);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const omens = rollOmens(1, 3);

  const goat = equipmentEntry(attribution, 'mountainGoat', () => ({ hp: random(1, 4) + 1 }));
  const rope = equipmentEntry(attribution, 'rope');
  const grapplingHook = equipmentEntry(attribution, 'grapplingHook');
  const generalEquipment = rollStandardEquipment()
    .map((item) =>
	  ['scvmatorium-scabbyCat', 'scvmatorium-tinyCobra', 'scvmatorium-warRooster', 'scvmatorium-vampreyLamprey'].includes(item.id) ? goat : item
	);

  const weapon = rollWeapon(6);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 40, max: 240};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, silver, ...generalEquipment, rope, grapplingHook];

  const specialty = [
    'alpinist',
    'circles',
    'looksBad',
    'luckyBastard',
    'bushConnoisseur',
    'macgyver'
  ].map((x) => titledEntry(attribution, x));
  const firstClimb = [
    'terion',
    'orphaned',
    'falseProphet',
    'sarkash',
    'fathmu',
    'galgenbeck',
  ].map((x) => tableEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('rugosekohn.indomitableMountaineer'),
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
          blurb(attribution),
	      formatTableEntry(sample(firstClimb)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      ...sampleSize(2, specialty).map((spec) => formatTitledEntry(spec)),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange)
    ],
  };
};
