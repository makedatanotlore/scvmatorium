import { sampleSize, sample } from 'lodash/fp';
import { corpsePlunderer as attribution } from 'rng/attributions';
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

export const corpsePlunderer = (): Character => {
  const abilities = rollAbilities(0, -2, 2, 0);
  const hp = rollHp(1, 6, abilities.toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(10);
  const armor = rollArmor(4, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 10, max: 100};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  const graveSight = titledEntry(attribution, 'graveSight');
  const pricePaid = titledEntry(attribution, 'pricePaid', 'plainBox');
  const graveItems = [
    'graveHonedShovel',
    'agathasSkull',
    'graveDust',
    'graveCrow',
    'witchesElixir',
    'bonePickersBlade',
    'wifesHand',
    'cryptWornCrowbar',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('harkenstone.corpsePlunderer'),
      formatHp(hp),
      formatOmens(omens, 2),
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
      formatTitledEntry(pricePaid),
      formatTitledEntry(sample(graveItems)!),
      formatTitledEntry(graveSight),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
