import { rottingRecalcitrant as attribution } from './../../attributions';
import { formatClass } from './../../shared/class';
import { formatBody } from '../../shared/bodies';
import { formatHabit } from '../../shared/habits';
import { formatTrait } from '../../shared/traits';
import {
  formatEquipment,
  rollStandardEquipment,
  rollArmor,
  hasScroll,
  rollWeapon,
  rollFoodAndWater,
  blankEntry,
} from '../../shared/equipment';
import { sampleSize, sample, random, sum } from 'lodash/fp';
import { formatAbility, scores } from 'rng/shared/abilities';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { origins, formatOrigin } from './origins';
import { curses, formatCurse } from './curses';

const oneD6 = () => {
  const result = random(1, 6);

  return scores.find(({ numbers }) => numbers.includes(result))?.value || 0;
};

const twoD6 = () => {
  const result = sum([random(1, 6), random(1, 6)]);

  return scores.find(({ numbers }) => numbers.includes(result))?.value || 0;
};

export const rottingRecalcitrant = (): Character => {
  const curse = sample(curses)!;

  const abilities = ['strength', 'agility', 'presence', 'toughness'];
  const strongAbilities = sampleSize(2, abilities);

  const [strength, agility, presence, toughness] = abilities.map((ability) => ({
    name: ability,
    score: strongAbilities.includes(ability) ? twoD6() : oneD6(),
  }));

  const hp = {
    tags: ['rottingRecalcitrant', 'donnyc', 'blurb'],
    title: {
      id: 'character.stats.titles.hp',
      values: {},
    },
    description: {
      id: 'content.donnyc.rottingRecalcitrant.hp',
      values: {},
    },
  };

  const generalEquipment = rollStandardEquipment();

  const weapon = rollWeapon(10);
  const armor = !curse.tags.includes('spoilskin')
    ? rollArmor(4, hasScroll(generalEquipment))
    : blankEntry();
  const silver = {
    id: `rottingRecalcitrant-silver`,
    tags: ['donnyc', 'rottingRecalcitrant', 'silver'],
    attribution,
    content: {
      tags: ['donnyc', 'rottingRecalcitrant', 'silver'],
      title: {
        id: `content.donnyc.rottingRecalcitrant.silver.title`,
        values: {},
      },
      description: {
        id: `content.donnyc.rottingRecalcitrant.silver.description`,
        values: {},
      },
    },
  };
  const foodAndWater = rollFoodAndWater();

  const equipment = !curse.tags.includes('spoilskin')
    ? [foodAndWater, weapon, armor, ...generalEquipment, silver]
    : sampleSize(
        2,
        [foodAndWater, weapon, armor, ...generalEquipment, silver].filter(
          (item) => item.id !== '_blank'
        )
      );

  return {
    tags: ['rottingRecalcitrant'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('donnyc.rottingRecalcitrant'),
      hp,
    ],
    bigs: [
      {
        component: {
          id: 'introduction',
        },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          formatOrigin(sample(origins)!),
          {
            tags: ['rottingRecalcitrant', 'donnyc', 'blurb'],
            title: {
              id: 'content.donnyc.rottingRecalcitrant.blurb',
              values: {},
            },
            description: {
              id: 'content.donnyc.rottingRecalcitrant.blurb',
              values: { d2: sample(['spite', 'hatred'])! },
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatCurse(curse),
      {
        component: { id: 'abilityList' },
        header: { id: 'character.stats.titles.abilities', values: {} },
        content: [
          formatAbility(strength),
          formatAbility(agility),
          formatAbility(presence),
          formatAbility(toughness),
        ],
      },
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: presence.score,
              money: { min: 0, max: 0 },
            })
          ),
      },
    ],
  };
};
