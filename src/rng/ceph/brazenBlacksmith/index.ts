import { sampleSize, sample } from 'lodash/fp';
import { brazenBlacksmith as attribution } from 'rng/attributions';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { blurb, formatTableEntry, formatTitledEntry, tableEntry, titledEntry} from 'rng/shared/entries';
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

export const brazenBlacksmith = (): Character => {
  const abilities = rollAbilities(1, -2, 0, 1);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const maxOmens = 2;
  const omens = rollOmens(1, maxOmens);

  const generalEquipment = rollStandardEquipment();
  const weapon = rollWeapon(10);
  const armor = rollArmor(4, hasScroll(generalEquipment));
  const silver = rollSilver();
  const silverRange = {min: 30, max: 180};
  const foodAndWater = rollFoodAndWater();
  const equipment = [foodAndWater, weapon, armor, ...generalEquipment, silver];

  const origins = [
    'master',
    'servant',
    'outlaws',
    'torture',
    'apprentice',
    'fletcher'
  ].map((x) => tableEntry(attribution, x));
  const blacksmithBoons = [
    'forgedInFire',
    'hailToTheHammer',
    'quickFix',
    'tongs',
    'luckyHorseshoe',
    'unbreakable',
    'boneCollector',
    'knowThisMechanism',
  ].map((x) => titledEntry(attribution, x));

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('ceph.brazenBlacksmith'),
      formatHp(hp),
      formatOmens(omens, maxOmens),
    ],
    bigs: [
      {
        component: { id: 'introduction' },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          blurb(attribution),
          formatTableEntry(sample(origins)!),
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
      formatTitledEntry(sample(blacksmithBoons)!),
      formatAbilities(abilities),
      formatEquipmentList(equipment, abilities.presence.score, silverRange),
    ],
  };
};
