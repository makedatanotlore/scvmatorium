import { sampleSize, sample, random } from 'lodash/fp';
import { absolvedHeretic as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, formatTableEntry, formatTitledEntry, tableEntry, titledEntry, equipmentEntry } from 'rng/shared/entries';
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

export const absolvedHeretic = (): Character => {
  const abilities = rollAbilities(0, 0, -2, 0);
  const hp = rollHp(1, 10, abilities.toughness.score);
  const maxOmens = 4;
  const omens = rollOmens(1, maxOmens);

  const generalEquipment = rollStandardEquipment(true);
  const weapon = rollWeapon(6);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 10, max: 60};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  const hereticalSin = [
    'suicide',
    'desecration',
    'blasphemy',
    'obstruction',
    'none',
    'none' // on 5-6
  ].map((x) => tableEntry(attribution, x));
  const keepsake = [
    'keepsakeMask',
    'keepsakeChains',
    'keepsakeCollar',
  ];
  const hereticalAbility = [
    sample(keepsake)!,
    'veteran',
    'tongue',
    'mark',
    'eye',
    'cat',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('nyhur.absolvedHeretic'),
      formatHp(hp),
      formatOmens(omens, maxOmens),
    ],
    bigs: [
      {
        component: { id: 'introduction' },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          blurb(attribution),
          formatTableEntry(sample(hereticalSin)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      ...sampleSize(2, hereticalAbility).map((spec) => formatTitledEntry(spec)),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};