import { formatClass } from './../../shared/class';
import { formatHumour, humours } from './ancientHumours';
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
import { sampleSize, sample } from 'lodash/fp';
import { threeD6, formatAbility } from 'rng/shared/abilities';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { origins, formatOrigin } from './origins';
import { names } from './names';

export const misbegottenRelict = (): Character => {
  const ancientHumour = sample(humours)!;

  const strength = {
    name: 'strength',
    score: threeD6(1) + (ancientHumour.tags.includes('redBirthOfMan') ? 1 : 0),
  };
  const agility = {
    name: 'agility',
    score: threeD6(0) + (ancientHumour.tags.includes('stygianSon') ? 1 : 0),
  };
  const presence = {
    name: 'presence',
    score: threeD6(-2),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(1) + (ancientHumour.tags.includes('redBirthOfMan') ? 1 : 0),
  };

  const hp = rollHp(1, 12, toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment();

  const weapon = rollWeapon(8);
  const armor = !ancientHumour.tags.includes('childeOfThunderLizard')
    ? rollArmor(3, hasScroll(generalEquipment))
    : blankEntry();
  const foodAndWater = !ancientHumour.tags.includes('interstellarExile')
    ? rollFoodAndWater()
    : blankEntry();

  const equipment = [foodAndWater, weapon, armor, ...generalEquipment];

  return !ancientHumour.tags.includes('spawnOfUnknownColour')
    ? {
        tags: ['misbegottenRelict'],
        smalls: [
          formatName(sample(names)!),
          formatClass('khordal.misbegottenRelict'),
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
                tags: ['misbegottenRelict', 'khordal', 'blurb'],
                title: {
                  id: 'content.khordal.misbegottenRelict.blurb',
                  values: {},
                },
                description: {
                  id: 'content.khordal.misbegottenRelict.blurb',
                  values: {},
                },
              },
              ...sampleSize(2, tables.traits).map((trait) =>
                formatTrait(trait)
              ),
              formatBody(sample(tables.bodies)!),
              formatHabit(sample(tables.habits)!),
            ],
          },
          formatHumour(ancientHumour),
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
      }
    : {
        tags: ['misbegottenRelict'],
        smalls: [
          formatName(sample(names)!),
          formatClass('khordal.misbegottenRelict'),
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
                tags: ['misbegottenRelict', 'khordal', 'blurb'],
                title: {
                  id: 'content.khordal.misbegottenRelict.blurb',
                  values: {},
                },
                description: {
                  id: 'content.khordal.misbegottenRelict.blurb',
                  values: {},
                },
              },
              ...sampleSize(2, tables.traits).map((trait) =>
                formatTrait(trait)
              ),
              formatBody(sample(tables.bodies)!),
              formatHabit(sample(tables.habits)!),
            ],
          },
          formatHumour(ancientHumour),
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
        ],
      };
};
