import { sampleSize, sample } from 'lodash/fp';
import { cannibalCook as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { titledEntry, formatTitledEntry } from 'rng/shared/entries';
import {
  formatEquipment,
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
import { Character, TableEntry } from 'types/character';

export const equipmentEntry = (id: string): TableEntry => ({
  id: `graytide-${id}`,
  tags: ['graytide', 'cannibalCook', 'equipment', id],
  attribution: attribution,
  content: {
    tags: ['graytide', 'cannibalCook', 'equipment', id],
    title: {
      id: `content.graytide.cannibalCook.${id}.title`,
      values: {},
    },
    description: {
      id: `content.graytide.cannibalCook.${id}.description`,
      values: {},
    },
  }
});

export const cannibalCook = (): Character => {
  const abilities = rollAbilities(0, 0, 0, 0);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();
  const femur = equipmentEntry('femur');
  const weapon = rollWeapon(6);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();  
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, femur, weapon, armor, ...generalEquipment, silver];

  const youStartedOut = [
    'tastingFood',
    'fishingMen',
    'corpseCarts',
    'sangfroid',
    'foodcart',
    'prisonStew'
  ].map((x) => titledEntry(attribution, x));
  const predatoryGaze = titledEntry(attribution, 'predatoryGaze');
  const cookItems = [
    'foodFighter',
    'spiceCollection',
    'trophyCollection',
    'manEater',
    'scarredHide',
    'entrailOracle',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: ['cannibalCook'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('graytide.cannibalCook'),
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
            tags: ['cannibalCook', 'graytide', 'blurb'],
            title: {
              id: 'content.graytide.cannibalCook.blurb',
              values: {},
            },
            description: {
              id: 'content.graytide.cannibalCook.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(sample(youStartedOut)!),
      formatTitledEntry(predatoryGaze),
      formatTitledEntry(sample(cookItems)!),
      formatAbilities(abilities),
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: abilities.presence.score,
              money: { min: 30, max: 180 },
            })
          ),
      },
    ],
  };
};