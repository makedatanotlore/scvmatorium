import { sampleSize, sample } from 'lodash/fp';
import { anCailleach as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, titledEntry, formatTitledEntry } from 'rng/shared/entries';
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

export const anCailleach = (): Character => {
  const abilities = rollAbilities(0, -2, 0, 2);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const omens = rollOmens(1, 1);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(6);
  const armor = rollArmor(3, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 20, max: 120};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  const divineDesign = titledEntry(attribution, 'regainOmen');
  const boons = [
    'blackthornStaff',
    'woolenVeil',
    'cornDolly',
    'hagStone',
    'imboleFirewood',
    'shapingHammer',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('michaelmars.anCailleach'),
      formatHp(hp),
      formatOmens(omens, 1),
    ],
    bigs: [
      {
        component: { id: 'introduction' },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          blurb(attribution),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(divineDesign),
      formatTitledEntry(sample(boons)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
