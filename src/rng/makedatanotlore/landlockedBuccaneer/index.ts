import { rollOmens, formatOmens } from 'rng/shared/omens';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollSilver } from './../../shared/equipment';
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
} from '../../shared/equipment';
import { sampleSize, sample } from 'lodash/fp';
import { formatAbility, threeD6 } from 'rng/shared/abilities';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { origins, formatOrigin } from './origins';
import { bounties, formatBooty } from './bounties';

export const landlockedBuccaneer = (): Character => {
  const strength = {
    name: 'strength',
    score: threeD6(-1),
  };
  const agility = {
    name: 'agility',
    score: threeD6(-1),
  };
  const presence = {
    name: 'presence',
    score: threeD6(1),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(1),
  };

  const hp = rollHp(1, 8, toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();

  const weapon = rollWeapon(10);
  const armor = rollArmor(2, hasScroll(generalEquipment));
  const silver = rollSilver();

  const foodAndWater = rollFoodAndWater();

  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  return {
    tags: ['landlockedBuccaneer'],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('makedatanotlore.landlockedBuccaneer'),
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
          formatOrigin(sample(origins)!),
          {
            tags: ['landlockedBuccaneer', 'makedatanotlore', 'blurb'],
            title: {
              id: 'content.makedatanotlore.landlockedBuccaneer.blurb',
              values: {},
            },
            description: {
              id: 'content.makedatanotlore.landlockedBuccaneer.blurb',
              values: {},
            },
          },
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      {
        component: { id: 'plainBox' },
        header: {
          id: 'content.makedatanotlore.landlockedBuccaneer.fightinDirty.title',
          values: {},
        },
        content: [
          {
            tags: ['landlockedBuccaneer', 'makedatanotlore'],
            title: {
              id: 'content.makedatanotlore.landlockedBuccaneer.fightinDirty',
              values: {},
            },
            description: {
              id:
                'content.makedatanotlore.landlockedBuccaneer.fightinDirty.description',
              values: {},
            },
          },
        ],
      },
      formatBooty(sample(bounties)!, {
        presence: presence.score,
        money: { min: 0, max: 0 },
      }),
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
              money: { min: 20, max: 120 },
            })
          ),
      },
    ],
  };
};
