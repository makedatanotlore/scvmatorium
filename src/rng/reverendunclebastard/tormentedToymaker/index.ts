import { sampleSize, sample } from 'lodash/fp';
import { tormentedToymaker as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, tableEntry, titledEntry, formatTitledEntry } from 'rng/shared/entries';
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
import { Character, TableEntry } from 'types/character';
import { toys } from './toys';

const classTrait = (id: string): TableEntry => ({
  id: `scvmatorium-${id}`,
  tags: ['reverendunclebastard', 'tormentedToymaker', 'trait', id],
  attribution,
  content: {
    tags: ['reverendunclebastard', 'tormentedToymaker', 'trait', id],
    title: {
      id: `content.reverendunclebastard.tormentedToymaker.${id}`,
      values: {},
    },
    description: {
      id: `content.reverendunclebastard.tormentedToymaker.${id}`,
      values: {},
    },
  },
});

export const tormentedToymaker = (): Character => {
  const abilities = rollAbilities(0, -2, 2, 0);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const maxOmens = 2;
  const omens = rollOmens(1, maxOmens);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(5);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 30, max: 180};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('reverendunclebastard.tormentedToymaker'),
      formatHp(hp),
      formatOmens(omens, maxOmens),
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
      // formatTitledEntry(divineDesign),
      // formatTitledEntry(sample(boons)!),
      {
        component: { id: 'table' },
        header: {
          id: 'content.reverendunclebastard.tormentedToymaker.toymaking.title',
          values: {},
        },
        content: [
          {
            tags: ['tormentedToymaker', 'reverendunclebastard', 'tableDescription'],
            title: {
              id: 'content.reverendunclebastard.tormentedToymaker.toymaking.description',
              values: {},
            },
            description: {
              id: 'content.reverendunclebastard.tormentedToymaker.toymaking.description',
              values: {},
            },
          },
          ...toys,
        ],
      },      
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
