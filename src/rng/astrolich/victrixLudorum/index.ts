import { sampleSize, sample } from 'lodash/fp';
import { victrixLudorum as attribution } from 'rng/attributions';
import { scrolls } from 'rng/makedatanotlore/scvmatorium/equipment';
import { formatAbilities, rollAbilities } from 'rng/shared/abilities';
import { formatBody } from 'rng/shared/bodies';
import { formatClass } from 'rng/shared/class';
import { formatHabit } from 'rng/shared/habits';
import { formatTrait } from 'rng/shared/traits';
import { titledEntry, formatTitledEntry, equipmentEntry } from 'rng/shared/entries';
import {
  formatEquipment,
  hasScroll,
  rollArmor,
  rollFoodAndWater,
  rollSilver,
  rollStandardEquipment,
} from '../../shared/equipment';
import { rollHp, formatHp } from 'rng/shared/hp';
import { formatName } from 'rng/shared/names';
import { rollOmens, formatOmens } from 'rng/shared/omens';
import tables from 'rng/tables';
import { Character } from 'types/character';


export const victrixLudorum = (): Character => {
  const abilities = rollAbilities(1, -1, 1, 1);
  const hp = rollHp(1, 8, abilities.toughness.score);
  const omens = rollOmens(1, 2);

  const generalEquipment = rollStandardEquipment(false);
  const armor = rollArmor(3, hasScroll(generalEquipment));
  const silver = rollSilver();
  const foodAndWater = rollFoodAndWater();
  // const scroll = scrolls({min: 1, max: 2});
  const equipment = [foodAndWater, equipmentEntry(attribution, 'spear'), armor, ...generalEquipment, scrolls, silver];

  const hide = titledEntry(attribution, 'hide');
  const maim = titledEntry(attribution, 'maim');
  const stabbed = titledEntry(attribution, 'stabbed');
  const dirtySpear = titledEntry(attribution, 'dirtySpear');

  return {
    tags: [attribution.id],
    smalls: [
      formatName(sample(tables.names)!),
      formatClass('astrolich.victrixLudorum'),
      formatHp(hp),
      formatOmens(omens, 2),
    ],
    bigs: [
      {
        component: { id: 'introduction' },
        header: { id: 'character.stats.titles.introduction', values: {} },
        content: [
          ...sampleSize(2, tables.traits).map((trait) => formatTrait(trait)),
          formatBody(sample(tables.bodies)!),
          formatHabit(sample(tables.habits)!),
        ],
      },
	  formatTitledEntry(hide),
	  formatTitledEntry(maim),
	  formatTitledEntry(stabbed),
	  formatTitledEntry(dirtySpear),
      formatAbilities(abilities),
      {
        component: { id: 'equipmentList' },
        header: { id: 'character.stats.titles.equipment', values: {} },
        content: equipment
          .filter((item) => item.id !== '_blank')
          .map((item) =>
            formatEquipment(item, {
              presence: abilities.presence.score,
              money: { min: 20, max: 120 },
			  scrollCount: { min: 1, max: 2 },
            })
          ),
      },
    ],
 };
};
