import { sampleSize, sample } from 'lodash/fp';
import { mutatedGoblin as attribution } from 'rng/attributions';
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

export const mutatedGoblin = (): Character => {
  const abilities = rollAbilities(0, 2, -2, 0);
  const hp = rollHp(1, 6, abilities.toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(4);
  // no armor
  const silver = rollSilver();
  const silverRange = {min: 1, max: 6};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, ...generalEquipment, silver];

  const infectionOrigins = [
    'strangePotion',
    'demonicGoblin',
    'goblinRose',
    'undeadGoblin',
    'serpentGod',
    'bornLikeThis',
  ].map((x) => tableEntry(attribution, x));
  const wretchedMind = titledEntry(attribution, 'wretchedMind');
  const impotent = titledEntry(attribution, 'impotent');
  const warpedBody = titledEntry(attribution, 'warpedBody');
  const mutations = [
    'awfulAugury',
    'crustyCurse',
    'extraneousEyeball',
    'fidgetyFetch',
    'rockyRotter',
    'degenerateRegenerate',
    'sharksShankTeeth',
    'viciousVisage',
  ].map((x) => titledEntry(attribution, x));
  const oddMutation = titledEntry(attribution, 'oddMutation', 'plainBox');

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('heckinviv.mutatedGoblin'),
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
          formatTableEntry(sample(infectionOrigins)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(wretchedMind),
      formatTitledEntry(impotent),
      formatTitledEntry(warpedBody),
      formatTitledEntry(sample(mutations)!),
      formatTitledEntry(oddMutation),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange)
    ],
  };
};
