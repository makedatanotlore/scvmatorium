import { sampleSize, sample, random } from 'lodash/fp';
import { indomitableMountaineer as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, formatTitledEntry, titledEntry } from 'rng/shared/entries';
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
import { Character, GenerateValuesFn, TableEntry, TableEntryBig } from 'types/character';

const entry = (
  id: string,
): TableEntryBig => ({
  id: `indomitableMountaineer-${id}`,
  tags: ['rugosekohn', 'indomitableMountaineer', id],
  attribution: attribution,
  content: {
    component: { id: 'plainBox' },
    header: {
      id: `content.rugosekohn.indomitableMountaineer.firstClimb.title`,
      values: {},
    },
    content: [
      {
        tags: ['rugosekohn', 'indomitableMountaineer', id],
        title: {
          id: `content.rugosekohn.indomitableMountaineer.firstClimb.title`,
          values: {},
        },
        description: {
          id: `content.rugosekohn.indomitableMountaineer.firstClimb.${id}.description`,
          values: {},
        },
      },
    ],
  },
});

const animalEntry = (id: string, generateValues?: GenerateValuesFn): TableEntry => ({
  id: `indomitableMountaineer-${id}`,
  tags: ['rugosekohn', 'indomitableMountaineer', id],
  attribution: attribution,
  content: {
    tags: ['rugosekohn', 'indomitableMountaineer', id],
    title: {
      id: `content.rugosekohn.indomitableMountaineer.${id}.title`,
      values: {},
    },
    description: {
      id: `content.rugosekohn.indomitableMountaineer.${id}.description`,
      values: {},
    },
  },
  generateValues,
});

const goat = animalEntry('mountainGoat', () => ({ hp: random(1, 4) + 1 }));

export const indomitableMountaineer = (): Character => {
  const abilities = rollAbilities(2, 0, -2, 0);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const omens = rollOmens(1, 3);

  const generalEquipment = rollStandardEquipment()
    .map((item) =>
	  ['scvmatorium-scabbyCat', 'scvmatorium-tinyCobra', 'scvmatorium-warRooster', 'scvmatorium-vampreyLamprey'].includes(item.id) ? goat : item
	);

  const weapon = rollWeapon(6);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 40, max: 240};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, silver, ...generalEquipment];

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
  ].map((x) => entry(x));

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
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      ...sampleSize(2, specialty).map((spec) => formatTitledEntry(spec)),
      formatTitledEntry(sample(firstClimb)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange)
    ],
  };
};
