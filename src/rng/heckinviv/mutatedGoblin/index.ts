import { sampleSize, sample } from 'lodash/fp';
import { mutatedGoblin as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { titledEntry, formatTitledEntry } from 'rng/shared/entries';
import {
  formatEquipment,
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
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, ...generalEquipment, silver];

  const infectionOrigins = [
    'strangePotion',
    'demonicGoblin',
    'goblinRose',
    'undeadGoblin',
    'serpentGod',
    'bornLikeThis',
  ].map((x) => titledEntry(attribution, x));
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
  const oddMutation = titledEntry(attribution, 'oddMutation');

  return {
    tags: ['mutatedGoblin'],
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
          {
            tags: ['mutatedGoblin', 'heckinviv', 'blurb'],
            title: {
              id: 'content.heckinviv.mutatedGoblin.blurb',
              values: {},
            },
            description: {
              id: 'content.heckinviv.mutatedGoblin.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(sample(infectionOrigins)!),
      formatTitledEntry(wretchedMind),
      formatTitledEntry(impotent),
      formatTitledEntry(warpedBody),
      formatTitledEntry(sample(mutations)!),
      formatTitledEntry(oddMutation),
      formatAbilities(abilities),
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: abilities.presence.score,
              money: { min: 1, max: 6 },
            })
          ),
      },
    ],
  };
};
