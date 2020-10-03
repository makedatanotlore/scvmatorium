import { sample, sampleSize, random } from 'lodash/fp';
import tables from 'rng/tables';
import { uncredited } from 'rng/attributions';

import { TableEntry, Small, GenerateValuesProps } from 'types/character';

export const formatEquipment = (
  { content, generateValues }: TableEntry,
  input: GenerateValuesProps
): Small => {
  const { title, description, tags } = content as Small;
  const values = generateValues ? generateValues(input) : {};

  return {
    tags,
    title: { ...title, values },
    description: { ...description, values },
  };
};

export const hasScroll = (equipment: TableEntry[]) =>
  equipment.some(
    (item) =>
      item.tags.includes('uncleanScroll') || item.tags.includes('sacredScroll')
  );

const sharedEntry = (id: string): TableEntry => ({
  id: `${id}`,
  tags: [id],
  attribution: uncredited,
  content: {
    tags: [`${id}`],
    title: {
      id: `content.shared.uncredited.${id}.title`,
      values: {},
    },
    description: {
      id: `content.shared.uncredited.${id}.description`,
      values: {},
    },
  },
});

export const blankEntry = (): TableEntry => ({
  id: `_blank`,
  tags: [],
  attribution: uncredited,
  content: {
    tags: [],
    title: {
      id: `content.shared.uncredited.blank`,
      values: {},
    },
    description: {
      id: `content.shared.uncredited.blank`,
      values: {},
    },
  },
});

const rollBags = (): TableEntry => {
  const roll = random(0, 5);

  return [
    blankEntry(),
    blankEntry(),
    sample(tables.equipment.bags.small)!,
    sample(tables.equipment.bags.large)!,
    sample([
      sample([...tables.equipment.bags.large, ...tables.equipment.bags.small])!,
      sample(tables.equipment.bags.vehicle)!,
    ])!,
    sample([
      sample([
        ...tables.equipment.bags.large,
        ...tables.equipment.bags.small,
        ...tables.equipment.bags.vehicle,
      ])!,
      sample(tables.equipment.bags.beast),
    ])!,
  ][roll];
};

export const rollArmor = (armor: number, scroll: boolean): TableEntry => {
  const roll = random(0, scroll ? 1 : armor - 1);

  return [
    blankEntry(),
    sample(tables.equipment.armor.light)!,
    sample(tables.equipment.armor.medium)!,
    sample(tables.equipment.armor.heavy)!,
  ][roll];
};

export const rollWeapon = (weapon: number): TableEntry => {
  const roll = random(0, weapon - 1);

  return [
    sample(tables.equipment.weapons.d4)!,
    sample(tables.equipment.weapons.d4)!,
    sample(tables.equipment.weapons.d4)!,
    sample(tables.equipment.weapons.d4)!,
    sample(tables.equipment.weapons.d6)!,
    sample(tables.equipment.weapons.d6)!,
    sample(tables.equipment.weapons.d8)!,
    sample(tables.equipment.weapons.d8)!,
    sample(tables.equipment.weapons.d10)!,
    sample(tables.equipment.weapons.d10)!,
  ][roll];
};

export const rollSilver = () => {
  return sample(tables.equipment.silver)!;
};

export const rollFoodAndWater = () => {
  return sample(tables.equipment.foodAndWater)!;
};

export const rollStandardEquipment = () => {
  const generalEquipment = sampleSize(3, [
    ...sampleSize(21, tables.equipment.general),
    sharedEntry('uncleanScroll'),
    sharedEntry('sacredScroll'),
    sharedEntry('shield'),
  ])!;

  const bags = rollBags();

  return [bags, ...generalEquipment]
    .map((item) =>
      item.id === 'shield' ? sample(tables.equipment.armor.shields)! : item
    )
    .filter((item) => item.id !== '_blank');
};
