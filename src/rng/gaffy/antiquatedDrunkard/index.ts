import { sampleSize, sample } from 'lodash/fp';
import { antiquatedDrunkard as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatTableEntry, formatTitledEntry, tableEntry, titledEntry } from 'rng/shared/entries';
import {
  formatEquipmentList,
  hasScroll,
  rollArmor,
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
import { Character, Small } from 'types/character';

const potable = (id: string): Small => ({
  tags: ['gaffy', 'antiquatedDrunkard', 'tableEntry', 'potable', id],
  title: {
    id: `content.gaffy.antiquatedDrunkard.${id}.title`,
    values: {},
  },
  description: {
    id: `content.gaffy.antiquatedDrunkard.${id}.description`,
    values: {},
  },
});

export const antiquatedDrunkard = (): Character => {
  const abilities = rollAbilities(0, 2, -2, 0);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const omens = rollOmens(1, 4);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(8);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 10, max: 60};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];
  const origins = [
    'general',
	'wealthy',
	'clergy',
	'musician',
	'artist',
	'forgotten',
  ].map((x) => tableEntry(attribution, x));
  const drunk = titledEntry(attribution, 'drunk');
  const hungover = titledEntry(attribution, 'hungover');
  const potables = [
    'wine',
	'tequila',
	'stout',
	'whiskey',
	'brandy',
	'moonshine',
  ].map((id) => potable(id));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('gaffy.antiquatedDrunkard'),
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
          formatTableEntry(sample(origins)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(drunk),
      formatTitledEntry(hungover),
	  {
        component: { id: 'table' },
        header: {
          id: 'content.gaffy.antiquatedDrunkard.potables',
          values: {},
        },
        content: [
          {
            tags: ['antiquatedDrunkard', 'gaffy', 'tableDescription'],
            title: {
              id: 'content.gaffy.antiquatedDrunkard.tableDescription',
              values: {},
            },
            description: {
              id: 'content.gaffy.antiquatedDrunkard.tableDescription',
              values: {},
            },
          },
          ...potables,
        ],
      },

      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange)
    ],
  };
};
