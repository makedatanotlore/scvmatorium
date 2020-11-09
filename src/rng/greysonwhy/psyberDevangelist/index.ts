import { formatClass } from './../../shared/class';
import { tools } from './tools';
import { formatPower, powers } from './powers';
import { formatWeapon, weapons } from './weapons';
import { currencies } from './currency';
import { formatBody } from '../../shared/bodies';
import { formatHabit } from '../../shared/habits';
import { formatTrait } from '../../shared/traits';
import { sampleSize, sample } from 'lodash/fp';
import { threeD6, formatAbility } from 'rng/shared/abilities';
import { rollHp, formatHp } from 'rng/shared/hp';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import { formatName } from 'rng/shared/names';
import { Character } from 'types/character';
import tables from 'rng/tables';
import { origins, formatOrigin } from './origins';
import { names } from './names';
import { formatEquipment } from '../../shared/equipment';

export const psyberDevangelist = (): Character => {
  const tool = sample(tools)!;
  const power = sample(powers)!;
  const weapon = sample(weapons)!;
  const currency = sample(currencies)!;

  const equipment = [tool, currency];

  const strength = {
    name: 'strength',
    score: threeD6(0),
  };
  const agility = {
    name: 'agility',
    score: threeD6(0),
  };
  const presence = {
    name: 'presence',
    score: threeD6(0),
  };
  const toughness = {
    name: 'toughness',
    score: threeD6(0),
  };

  const hp = rollHp(1, 6, toughness.score);
  const omens = rollOmens(1, 2);

  return {
    tags: ['psyberDevangelist'],
    smalls: [
      formatName(sample(names)!),
      formatClass('greysonwhy.psyberDevangelist'),
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
            tags: ['psyberDevangelist', 'greysonwhy', 'blurb'],
            title: {
              id: 'content.greysonwhy.psyberDevangelist.blurb',
              values: {},
            },
            description: {
              id: 'content.greysonwhy.psyberDevangelist.blurb',
              values: {},
            },
          },
          formatOrigin(sample(origins)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },

      {
        component: { id: 'halfBox' },
        header: {
          id: 'content.greysonwhy.psyberDevangelist.ofADifferentWorld.title',
          values: {},
        },
        content: [
          {
            tags: ['psyberDevangelist', 'greysonwhy'],
            title: {
              id: 'content.greysonwhy.psyberDevangelist.ofADifferentWorld',
              values: {},
            },
            description: {
              id:
                'content.greysonwhy.psyberDevangelist.ofADifferentWorld.description',
              values: {},
            },
          },
        ],
      },
      formatWeapon(weapon),
      formatPower(power),
      {
        component: { id: 'halfBox' },
        header: {
          id: 'content.greysonwhy.psyberDevangelist.pstress.title',
          values: {},
        },
        content: [
          {
            tags: ['psyberDevangelist', 'greysonwhy'],
            title: {
              id: 'content.greysonwhy.psyberDevangelist.pstress',
              values: {},
            },
            description: {
              id: 'content.greysonwhy.psyberDevangelist.pstress.description',
              values: {},
            },
          },
        ],
      },
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
