import { sampleSize, sample } from 'lodash/fp';
import { deathWitch as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { rollD } from 'rng/shared/roll';
import { formatTrait } from 'rng/shared/traits';
import { blurb, equipmentEntry, formatTitledEntry, titledEntry } from 'rng/shared/entries';
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


export const deathWitch = (): Character => {
  const maxHp = 2;
  const maxOmens = 2;
  const abilities = rollAbilities(0, 0, 2, 0);
  const hp = rollHp(1, maxHp, abilities.toughness.score);
  const omens = rollOmens(1, maxOmens);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(2);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 20, max: 120};
  const foodAndWater = rollFoodAndWater();
  const equipmentNoUnclean = generalEquipment.filter((item) => !item.tags.includes('uncleanScroll'));
  const uncleanCount = generalEquipment.length - equipmentNoUnclean.length;

  // Death Witch starts with +d4 unclean scrolls
  const totalUnclean = uncleanCount + rollD(4);
  let uncleanScrolls;
  if (totalUnclean === 1) {
    uncleanScrolls = equipmentEntry(attribution, 'oneUncleanScroll');
  } else {
    uncleanScrolls = equipmentEntry(attribution, 'multipleUncleanScrolls',
        () => ({num: totalUnclean}));
  }

  const equipment = [foodAndWater, weapon, armor, ...equipmentNoUnclean, uncleanScrolls, silver];

  const powers = titledEntry(attribution, 'powers', 'plainBox');
  const animalNames = [
    'Astrid',
    'Agnes',
    'Behemoth',
    'Beherit',
    'Bitsy',
    'Malus',
    'Enid',
    'Izzy',
    'Nihil',
    'Noctem',
    'Polly',
    'Vassago',
  ];
  const animalTypes = ['Cat', 'Bat', 'Raven', 'Goat'];
  const beginWith = [
    'familiar',
    'flyingUnguent',
    'nechBag',
    'doom'
  ].map((x) => titledEntry(attribution, x, 'halfBox',
        () => ({animalName: sample(animalNames)!, animalType: sample(animalTypes)!})));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('anadversary.deathWitch'),
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
      formatTitledEntry(powers),
      formatTitledEntry(sample(beginWith)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
